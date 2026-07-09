import { NextResponse } from 'next/server';
import getMongoClient from '@/lib/mongodb';
import { sendLeadNotificationEmail } from '@/lib/sendLeadEmail';

const PABBLY_WEBHOOK_URL =
  'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNjA0M2Q1MjY0NTUzMSI_3D_pc/IjU3NjcwNTZlMDYzZTA0M2Q1MjZlNTUzYzUxMzEi_pc';

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
