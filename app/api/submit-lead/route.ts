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

    sendLeadNotificationEmail(lead).catch((emailErr: any) => {
      console.error('Lead notification email error:', emailErr?.message);
    });

    // ── Pabbly webhook — lead sheet is the critical path ──
    // Reliable timeout so a slow Pabbly workflow can never drop the lead.
    const pabblyController = new AbortController();
    const pabblyTimeout = setTimeout(() => pabblyController.abort(), 15000);

    try {
      const { createdAt, ...webhookPayload } = lead;
      const response = await fetch(PABBLY_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
        signal: pabblyController.signal,
      });
      const text = await response.text();
      console.log('Pabbly webhook response:', response.status, text.slice(0, 300));
    } catch (pabblyErr: any) {
      // Timeout or network error — log but don't block the redirect
      console.error('Pabbly webhook error:', pabblyErr?.message);
    } finally {
      clearTimeout(pabblyTimeout);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API submission error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}