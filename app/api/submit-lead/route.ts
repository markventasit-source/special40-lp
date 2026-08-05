import { NextResponse } from 'next/server';
import { createHash } from 'node:crypto';
import getMongoClient from '@/lib/mongodb';
import { sendLeadNotificationEmail } from '@/lib/sendLeadEmail';

const PABBLY_WEBHOOK_URL =
  'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNjA0M2Q1MjY0NTUzMSI_3D_pc/IjU3NjcwNTZlMDYzZTA0M2Q1MjZlNTUzYzUxMzEi_pc';

function normalizeForHash(value: string) {
  return String(value ?? '').trim().toLowerCase();
}

function hashValue(value: string) {
  const normalized = normalizeForHash(value);
  return normalized ? createHash('sha256').update(normalized).digest('hex') : '';
}

function getNormalizedPhone(value: string) {
  return String(value ?? '').replace(/\D/g, '');
}

async function sendMetaConversionsApi(lead: {
  name: string;
  email: string;
  phone: string;
  location: string;
  qualification: string;
  reason: string;
  source: string;
}) {
  const accessToken = process.env.META_CONVERSION_API_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;

  if (!accessToken || !pixelId) {
    console.warn('Meta Conversions API not configured: missing META_CONVERSION_API_TOKEN or META_PIXEL_ID');
    return;
  }

  const eventId = `${lead.email || lead.phone || lead.name || 'special40'}-${Date.now()}`;
  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: 'https://join.special40.com/',
        action_source: 'website',
        custom_data: {
          currency: 'INR',
          value: 1,
          content_name: lead.qualification || 'Special40 lead',
          content_category: lead.reason || 'lead',
          lead_source: lead.source || 'unknown',
        },
        user_data: {
          em: hashValue(lead.email),
          ph: hashValue(getNormalizedPhone(lead.phone)),
          fn: hashValue(lead.name),
          ct: hashValue(lead.location),
          client_ip_address: undefined,
          client_user_agent: undefined,
        },
      },
    ],
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const text = await response.text();
    if (!response.ok) {
      console.error('Meta Conversions API error:', response.status, text);
      return;
    }

    console.log('Meta Conversions API accepted:', text);
  } catch (error: any) {
    console.error('Meta Conversions API request error:', error?.message);
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lead = {
      name: body.name ?? '',
      qualification: body.qualification ?? '',
      phone: body.phone ?? '',
      email: body.email ?? '',
      location: body.location ?? '',
      reason: body.reason ?? '',
      other: body.other ?? '',
      source: body.source ?? 'unknown',
      createdAt: new Date(),
    };

    try {
      const client = await getMongoClient();
      const db = client.db('special40');
      await db.collection('leads').insertOne(lead);
    } catch (mongoErr: any) {
      console.error('MongoDB save error:', mongoErr?.message);
    }

    try {
      await sendLeadNotificationEmail(lead);
    } catch (emailErr: any) {
      console.error('Lead notification email error:', emailErr?.message);
    }

    try {
      await sendMetaConversionsApi({
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        location: lead.location,
        qualification: lead.qualification,
        reason: lead.reason,
        source: lead.source,
      });
    } catch (metaErr: any) {
      console.error('Meta API integration error:', metaErr?.message);
    }

    // Use a 5-second timeout so we never block the user longer than that.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
      const { createdAt, ...webhookPayload } = lead;
      await fetch(PABBLY_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
        signal: controller.signal,
      });
    } catch (pabblyErr: any) {
      // Timeout or network error — log but don't block the redirect
      console.error('Pabbly webhook error:', pabblyErr?.message);
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API submission error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
