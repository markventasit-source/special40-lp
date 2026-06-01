import { NextResponse } from 'next/server';

const PABBLY_WEBHOOK_URL =
  'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNjA0M2Q1MjY0NTUzMSI_3D_pc/IjU3NjcwNTZlMDYzZTA0M2Q1MjZlNTUzYzUxMzEi_pc';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Send as URL-encoded form data — Pabbly parses field values correctly from this format.
    // Fire-and-forget: do NOT await. We respond to the browser immediately and
    // let the Pabbly call complete asynchronously so the user isn't kept waiting.
    fetch(PABBLY_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        name: body.name ?? '',
        qualification: body.qualification ?? '',
        phone: body.phone ?? '',
        email: body.email ?? '',
        location: body.location ?? '',
        reason: body.reason ?? '',
        other: body.other ?? '',
      }).toString(),
    }).catch((err) => {
      // Log quietly — we don't want a Pabbly hiccup to block the user
      console.error('Pabbly webhook error (background):', err);
    });

    // Return success immediately — the browser redirects right away
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API submission error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
