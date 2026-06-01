import { NextResponse } from 'next/server';

const PABBLY_WEBHOOK_URL =
  'https://connect.pabbly.com/webhook-listener/webhook/IjU3NjMwNTZkMDYzNjA0M2Q1MjY0NTUzMSI_3D_pc/IjU3NjcwNTZlMDYzZTA0M2Q1MjZlNTUzYzUxMzEi_pc';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Use a 5-second timeout so we never block the user longer than that.
    // We MUST await — fire-and-forget gets killed by Next.js serverless before completing.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    try {
      await fetch(PABBLY_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: body.name ?? '',
          qualification: body.qualification ?? '',
          phone: body.phone ?? '',
          email: body.email ?? '',
          location: body.location ?? '',
          reason: body.reason ?? '',
          other: body.other ?? '',
        }),
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
