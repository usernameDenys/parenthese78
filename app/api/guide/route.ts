import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface GuidePayload {
  prenom: string;
  contact: string;
  besoin: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

function emailHtml(data: GuidePayload): string {
  const now = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#F4ECDF;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4ECDF;padding:32px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E5DAD0;">

        <tr>
          <td style="background:#9CAB8E;padding:24px 36px;">
            <div style="font-size:13px;color:rgba(255,255,255,0.85);letter-spacing:2px;text-transform:uppercase;font-style:italic;margin-bottom:4px;">Demande de conseil</div>
            <div style="font-family:'Georgia',serif;font-size:22px;color:#FFFFFF;">Quel accompagnement choisir ?</div>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 36px;background:#FBF7F2;border-bottom:1px solid #E5DAD0;">
            <p style="font-size:13px;color:#998C84;font-style:italic;margin:0;">Reçue le ${now}</p>
          </td>
        </tr>

        <tr>
          <td style="padding:28px 36px 0;">
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 12px;">Coordonnées</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:10px;border:1px solid #E8CFCF;">
              <tr>
                <td style="padding:18px 22px;">
                  <p style="font-size:16px;font-weight:bold;color:#3D3530;margin:0 0 6px;">${data.prenom}</p>
                  <p style="font-size:14px;color:#6B5F58;margin:0;">${data.contact}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 36px 28px;">
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 12px;">Besoin exprimé</p>
            <div style="border-left:3px solid #C8D4C0;padding-left:16px;">
              <p style="font-size:15px;color:#3D3530;line-height:1.7;margin:0;white-space:pre-wrap;">${data.besoin}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 36px 24px;background:#FBF7F2;border-top:1px solid #E5DAD0;">
            <p style="font-size:12px;color:#998C84;font-style:italic;margin:0;">
              Parenthèse — contact@parenthese78.fr
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const data: GuidePayload = await req.json();

    if (!data.prenom || !data.contact || !data.besoin) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({ error: "Configuration email manquante." }, { status: 500 });
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Parenthèse Site" <${process.env.GMAIL_USER}>`,
      to: "contact@parenthese78.fr",
      subject: `[Guide] Demande de conseil — ${data.prenom}`,
      html: emailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Guide API error:", error);
    return NextResponse.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}
