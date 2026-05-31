import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export interface FormulePayload {
  formuleNom: string;
  formuleDesc?: string;
  seances: string[];
  mode: "moi" | "offrir";
  prenom: string;
  contact: string;
  message?: string;
  destinatairePrenom?: string;
  destinataireContact?: string;
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

function faustineEmailHtml(data: FormulePayload): string {
  const now = new Date().toLocaleDateString("fr-FR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
  const isOffrir = data.mode === "offrir";

  return `
<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#F4ECDF;font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F4ECDF;padding:32px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:16px;overflow:hidden;border:1px solid #E5DAD0;">

      <tr>
        <td style="background:#B88A8A;padding:24px 36px;">
          <div style="font-size:13px;color:rgba(255,255,255,0.85);letter-spacing:2px;text-transform:uppercase;font-style:italic;margin-bottom:4px;">
            ${isOffrir ? "Formule à offrir" : "Demande de formule"}
          </div>
          <div style="font-family:'Georgia',serif;font-size:22px;color:#FFFFFF;">${data.formuleNom}</div>
        </td>
      </tr>

      <tr>
        <td style="padding:16px 36px;background:#FBF7F2;border-bottom:1px solid #E5DAD0;">
          <p style="font-size:13px;color:#998C84;font-style:italic;margin:0;">Reçue le ${now}</p>
        </td>
      </tr>

      <tr>
        <td style="padding:28px 36px 0;">
          <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 10px;">Description de la formule</p>
          <p style="font-size:15px;color:#3D3530;line-height:1.7;margin:0;font-style:italic;">${data.formuleDesc || "—"}</p>
        </td>
      </tr>

      ${isOffrir ? `
      <tr>
        <td style="padding:24px 36px 0;">
          <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#7A8B6E;margin:0 0 12px;">Destinataire du cadeau</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:10px;border:1px solid #E8CFCF;">
            <tr><td style="padding:18px 22px;">
              <p style="font-size:16px;font-weight:bold;color:#3D3530;margin:0 0 4px;">${data.destinatairePrenom || "—"}</p>
              ${data.destinataireContact ? `<p style="font-size:14px;color:#6B5F58;margin:0;">${data.destinataireContact}</p>` : ""}
            </td></tr>
          </table>
        </td>
      </tr>` : ""}

      <tr>
        <td style="padding:24px 36px 0;">
          <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 12px;">${isOffrir ? "L'offreur" : "Coordonnées"}</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:10px;border:1px solid #E8CFCF;">
            <tr><td style="padding:18px 22px;">
              <p style="font-size:16px;font-weight:bold;color:#3D3530;margin:0 0 4px;">${data.prenom}</p>
              <p style="font-size:14px;color:#6B5F58;margin:0;">${data.contact}</p>
            </td></tr>
          </table>
        </td>
      </tr>

      ${data.message ? `
      <tr>
        <td style="padding:20px 36px 0;">
          <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 10px;">Message</p>
          <div style="border-left:3px solid #E8CFCF;padding-left:16px;">
            <p style="font-size:14px;color:#6B5F58;font-style:italic;line-height:1.7;margin:0;">« ${data.message} »</p>
          </div>
        </td>
      </tr>` : ""}

      <tr>
        <td style="padding:24px 36px;background:#FBF7F2;border-top:1px solid #E5DAD0;margin-top:12px;">
          <p style="font-size:12px;color:#998C84;font-style:italic;margin:0;">
            Parenthèse — parenthese78.faustine@gmail.com
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body></html>`;
}

function confirmationEmailHtml(data: FormulePayload): string {
  const isOffrir = data.mode === "offrir";
  return `
<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#F5E6E2;font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F5E6E2;padding:40px 20px;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:18px;overflow:hidden;">
      <tr>
        <td style="padding:36px 48px 28px;border-bottom:1px solid #E8CFCF;">
          <div style="font-family:'Georgia',serif;font-size:28px;color:#B88A8A;margin-bottom:4px;">Parenthèse</div>
          <div style="font-size:13px;color:#7A8B6E;letter-spacing:2px;text-transform:uppercase;font-style:italic;">Votre demande a été reçue</div>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 48px;">
          <p style="font-size:17px;color:#3D3530;margin:0 0 16px;line-height:1.6;">
            Merci ${data.prenom},
          </p>
          <p style="font-size:15px;color:#6B5F58;margin:0 0 20px;line-height:1.7;">
            ${isOffrir
      ? `Votre demande de formule <strong style="color:#3D3530;">${data.formuleNom}</strong> à offrir à <strong style="color:#3D3530;">${data.destinatairePrenom || "votre proche"}</strong> a bien été reçue.`
      : `Votre demande pour la formule <strong style="color:#3D3530;">${data.formuleNom}</strong> a bien été reçue.`
    }
          </p>
          <p style="font-size:15px;color:#6B5F58;margin:0 0 28px;line-height:1.7;">
            Faustine vous contactera dans les 24 à 48h pour finaliser les détails et convenir des dates.
          </p>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:10px;border:1px solid #E5DAD0;">
            <tr><td style="padding:20px 24px;">
              <p style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#998C84;margin:0 0 10px;">Contact</p>
              <p style="font-size:14px;color:#3D3530;margin:0 0 4px;">📞 06.22.00.90.39</p>
              <p style="font-size:14px;color:#3D3530;margin:0;">✉️ parenthese78.faustine@gmail.com</p>
            </td></tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 48px 28px;border-top:1px solid #E5DAD0;">
          <p style="font-size:12px;color:#998C84;font-style:italic;margin:0;text-align:center;">
            Parenthèse — Soins bien-être périnataux à domicile · Versailles (78)
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body></html>`;
}

export async function POST(req: NextRequest) {
  try {
    const data: FormulePayload = await req.json();

    if (!data.formuleNom || !data.seances?.length || !data.prenom || !data.contact) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }
    if (data.mode === "offrir" && !data.destinatairePrenom) {
      return NextResponse.json({ error: "Prénom du destinataire manquant." }, { status: 400 });
    }
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return NextResponse.json({ error: "Configuration email manquante." }, { status: 500 });
    }

    const transporter = createTransporter();
    const promises: Promise<unknown>[] = [];

    promises.push(
      transporter.sendMail({
        from: `"Parenthèse Site" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: data.contact.includes("@") ? data.contact : undefined,
        subject: `[Formule] ${data.formuleNom} — ${data.prenom}`,
        html: faustineEmailHtml(data),
      })
    );

    const senderEmail = data.contact.includes("@") ? data.contact : null;
    if (senderEmail) {
      promises.push(
        transporter.sendMail({
          from: `"Parenthèse" <${process.env.GMAIL_USER}>`,
          to: senderEmail,
          subject: `Votre demande de formule — ${data.formuleNom}`,
          html: confirmationEmailHtml(data),
        })
      );
    }

    await Promise.all(promises);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Formule API error:", error);
    return NextResponse.json({ error: "Une erreur est survenue." }, { status: 500 });
  }
}
