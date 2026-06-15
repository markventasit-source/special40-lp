import nodemailer from 'nodemailer';

type Lead = {
  name: string;
  qualification: string;
  phone: string;
  email: string;
  location: string;
  reason: string;
  other: string;
  createdAt: Date;
};

const LEAD_NOTIFICATION_TO = 'capitairework@gmail.com';
const LEAD_NOTIFICATION_CC = [
  'adhil@capitaire.com',
  'kevinthomas0420@gmail.com',
  'akshay.renjith01@gmail.com',
];

function getTransporter() {
  const host = process.env.ZOHO_SMTP_HOST;
  const port = Number(process.env.ZOHO_SMTP_PORT ?? 465);
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('Zoho SMTP credentials are not configured');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

function formatLeadEmail(lead: Lead) {
  const rows = [
    ['Name', lead.name],
    ['Qualification', lead.qualification],
    ['Phone', lead.phone],
    ['Email', lead.email],
    ['Location', lead.location],
    ['Reason', lead.reason],
    ['Other', lead.other || '—'],
    ['Submitted at', lead.createdAt.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join('\n');

  const html = `
    <h2>New lead submission</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      ${rows
        .map(
          ([label, value]) =>
            `<tr>
              <td style="font-weight:600;border-bottom:1px solid #eee;">${label}</td>
              <td style="border-bottom:1px solid #eee;">${value}</td>
            </tr>`
        )
        .join('')}
    </table>
  `;

  return { text, html };
}

export async function sendLeadNotificationEmail(lead: Lead) {
  const from = process.env.ZOHO_FROM_EMAIL ?? process.env.ZOHO_SMTP_USER;
  if (!from) {
    throw new Error('ZOHO_FROM_EMAIL is not configured');
  }

  const { text, html } = formatLeadEmail(lead);
  const transporter = getTransporter();

  await transporter.sendMail({
    from,
    to: LEAD_NOTIFICATION_TO,
    cc: LEAD_NOTIFICATION_CC,
    subject: `New lead: ${lead.name || 'Unknown'}`,
    text,
    html,
  });
}
