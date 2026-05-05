import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { createElement, type ReactElement } from "react";
import { GiftCardDocument, type GiftCardData } from "@/app/offrir/_components/gift-card-pdf";

export interface GiftCardPayload {
  soinLabel: string;
  amount: number;
  fromFirstName: string;
  fromLastName: string;
  fromEmail: string;
  fromPhone: string;
  toFirstName: string;
  toLastName: string;
  toEmail: string;
  message: string;
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

function recipientEmailHtml(data: GiftCardPayload): string {
  const senderName = [data.fromFirstName, data.fromLastName].filter(Boolean).join(" ");
  const recipientName = [data.toFirstName, data.toLastName].filter(Boolean).join(" ");
  const displaySoin = data.soinLabel || "un soin bien-être";

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#F5E6E2;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5E6E2;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:18px;overflow:hidden;box-shadow:0 8px 32px rgba(184,138,138,0.12);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#F5E6E2 0%,#FBF7F2 100%);padding:40px 48px 32px;border-bottom:1px solid #E8CFCF;">
            <div style="font-family:'Georgia',serif;font-size:32px;color:#B88A8A;margin-bottom:6px;">Parenthèse</div>
            <div style="font-size:13px;color:#7A8B6E;letter-spacing:2px;text-transform:uppercase;font-style:italic;">Carte Cadeau</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 48px;">
            <p style="font-size:18px;color:#3D3530;margin:0 0 16px;line-height:1.6;">
              Chère ${recipientName || "vous"},
            </p>
            <p style="font-size:16px;color:#6B5F58;margin:0 0 28px;line-height:1.7;font-style:italic;">
              ${senderName} vous offre un moment rien que pour vous —
              une <strong style="color:#3D3530;font-style:normal;">${displaySoin}</strong>
              à domicile, à Versailles et ses environs.
            </p>

            <!-- Gift box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5E6E2;border-radius:12px;border:1px solid #E8CFCF;margin-bottom:28px;">
              <tr>
                <td style="padding:28px 32px;">
                  <div style="font-family:'Georgia',serif;font-size:48px;color:#B88A8A;line-height:1;margin-bottom:8px;">${data.amount} €</div>
                  <div style="font-size:14px;color:#6B5F58;font-style:italic;">${displaySoin}</div>
                  ${data.message ? `
                  <div style="margin-top:20px;padding-top:16px;border-top:1px solid #E8CFCF;">
                    <p style="font-size:14px;color:#6B5F58;font-style:italic;line-height:1.6;margin:0;">
                      « ${data.message} »
                    </p>
                  </div>` : ""}
                </td>
              </tr>
            </table>

            <p style="font-size:15px;color:#6B5F58;margin:0 0 8px;line-height:1.7;">
              Faustine vous contactera prochainement pour organiser votre séance selon vos disponibilités.
            </p>
            <p style="font-size:15px;color:#6B5F58;margin:0 0 28px;line-height:1.7;">
              La carte cadeau est jointe à cet email en PDF.
              Elle est valable <strong style="color:#3D3530;">12 mois</strong> à compter de ce jour.
            </p>

            <!-- Contact -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FFFFFF;border-radius:10px;border:1px solid #E5DAD0;margin-bottom:8px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#998C84;margin:0 0 10px;">Contact</p>
                  <p style="font-size:14px;color:#3D3530;margin:0 0 4px;">📞 06.22.00.90.39</p>
                  <p style="font-size:14px;color:#3D3530;margin:0;">✉️ parenthese78.faustine@gmail.com</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 48px 32px;border-top:1px solid #E5DAD0;">
            <p style="font-size:12px;color:#998C84;font-style:italic;margin:0;line-height:1.6;text-align:center;">
              Parenthèse — Soins bien-être périnataux à domicile · Versailles (78)<br/>
              Faustine, infirmière puéricultrice diplômée d'État
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function faustineEmailHtml(data: GiftCardPayload): string {
  const senderName = [data.fromFirstName, data.fromLastName].filter(Boolean).join(" ");
  const recipientName = [data.toFirstName, data.toLastName].filter(Boolean).join(" ");
  const displaySoin = data.soinLabel || "Carte cadeau (montant libre)";
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

        <!-- Header -->
        <tr>
          <td style="background:#B88A8A;padding:24px 36px;">
            <div style="font-size:13px;color:rgba(255,255,255,0.85);letter-spacing:2px;text-transform:uppercase;font-style:italic;margin-bottom:4px;">Nouvelle commande</div>
            <div style="font-family:'Georgia',serif;font-size:22px;color:#FFFFFF;">Carte cadeau — ${data.amount} €</div>
          </td>
        </tr>

        <!-- Date -->
        <tr>
          <td style="padding:16px 36px;background:#FBF7F2;border-bottom:1px solid #E5DAD0;">
            <p style="font-size:13px;color:#998C84;font-style:italic;margin:0;">Reçue le ${now}</p>
          </td>
        </tr>

        <!-- Soin -->
        <tr>
          <td style="padding:28px 36px 0;">
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 6px;">Soin commandé</p>
            <p style="font-size:18px;color:#3D3530;margin:0 0 4px;">${displaySoin}</p>
            <p style="font-size:24px;font-family:'Georgia',serif;color:#B88A8A;margin:0;">${data.amount} €</p>
          </td>
        </tr>

        <tr><td style="padding:0 36px;"><div style="height:1px;background:#E5DAD0;margin:24px 0;"></div></td></tr>

        <!-- Offreur -->
        <tr>
          <td style="padding:0 36px 20px;">
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#7A8B6E;margin:0 0 12px;">L'offreur (à contacter pour le paiement)</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:10px;border:1px solid #E8CFCF;">
              <tr>
                <td style="padding:18px 22px;">
                  <p style="font-size:16px;font-weight:bold;color:#3D3530;margin:0 0 8px;">${senderName || data.fromFirstName}</p>
                  <p style="font-size:14px;color:#6B5F58;margin:0 0 4px;">✉️ <a href="mailto:${data.fromEmail}" style="color:#B88A8A;">${data.fromEmail}</a></p>
                  <p style="font-size:14px;color:#6B5F58;margin:0;">📞 <a href="tel:${data.fromPhone}" style="color:#B88A8A;">${data.fromPhone}</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Destinataire -->
        <tr>
          <td style="padding:0 36px 20px;">
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#7A8B6E;margin:0 0 12px;">Le destinataire du cadeau</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#FBF7F2;border-radius:10px;border:1px solid #E8CFCF;">
              <tr>
                <td style="padding:18px 22px;">
                  <p style="font-size:16px;font-weight:bold;color:#3D3530;margin:0 0 8px;">${recipientName || data.toFirstName}</p>
                  ${data.toEmail ? `<p style="font-size:14px;color:#6B5F58;margin:0;">✉️ <a href="mailto:${data.toEmail}" style="color:#B88A8A;">${data.toEmail}</a></p>` : `<p style="font-size:13px;color:#998C84;font-style:italic;margin:0;">Aucun email renseigné — la carte vous a été envoyée à vous.</p>`}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        ${data.message ? `
        <!-- Message -->
        <tr>
          <td style="padding:0 36px 20px;">
            <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#998C84;margin:0 0 10px;">Message personnalisé</p>
            <div style="border-left:3px solid #E8CFCF;padding-left:16px;">
              <p style="font-size:14px;color:#6B5F58;font-style:italic;line-height:1.7;margin:0;">« ${data.message} »</p>
            </div>
          </td>
        </tr>` : ""}

        <!-- Footer -->
        <tr>
          <td style="padding:20px 36px 28px;background:#FBF7F2;border-top:1px solid #E5DAD0;margin-top:12px;">
            <p style="font-size:12px;color:#998C84;font-style:italic;margin:0;line-height:1.6;">
              La carte cadeau en PDF est jointe à cet email.<br/>
              Elle a également été envoyée au destinataire${data.toEmail ? ` (${data.toEmail})` : " — aucun email destinataire renseigné"}.
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
    const data: GiftCardPayload = await req.json();

    if (!data.fromFirstName || !data.fromEmail || !data.fromPhone || !data.amount) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("GMAIL_USER or GMAIL_APP_PASSWORD not set");
      return NextResponse.json({ error: "Configuration email manquante." }, { status: 500 });
    }

    const pdfData: GiftCardData = {
      soinLabel: data.soinLabel,
      amount: data.amount,
      fromFirstName: data.fromFirstName,
      fromLastName: data.fromLastName,
      toFirstName: data.toFirstName,
      toLastName: data.toLastName,
      message: data.message,
      date: new Date().toLocaleDateString("fr-FR"),
    };

    const pdfBuffer = await renderToBuffer(
      createElement(GiftCardDocument, pdfData) as ReactElement<DocumentProps>
    );

    const transporter = createTransporter();
    const recipientName = [data.toFirstName, data.toLastName].filter(Boolean).join(" ") || "vous";
    const senderFirstName = data.fromFirstName;

    const pdfAttachment = {
      filename: `carte-cadeau-parenthese.pdf`,
      content: pdfBuffer,
      contentType: "application/pdf",
    };

    const emailPromises: Promise<unknown>[] = [];

    // Email to recipient (if email provided)
    if (data.toEmail) {
      emailPromises.push(
        transporter.sendMail({
          from: `"Parenthèse" <${process.env.GMAIL_USER}>`,
          to: data.toEmail,
          subject: `${senderFirstName} vous offre une Parenthèse 🌿`,
          html: recipientEmailHtml(data),
          attachments: [pdfAttachment],
        })
      );
    }

    // Notification email to Faustine
    emailPromises.push(
      transporter.sendMail({
        from: `"Parenthèse Site" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: data.fromEmail,
        subject: `Nouvelle carte cadeau — ${data.amount} € pour ${recipientName}`,
        html: faustineEmailHtml(data),
        attachments: [pdfAttachment],
      })
    );

    // Email to sender (confirmation + PDF so they can print it)
    emailPromises.push(
      transporter.sendMail({
        from: `"Parenthèse" <${process.env.GMAIL_USER}>`,
        to: data.fromEmail,
        subject: `Votre carte cadeau Parenthèse — ${data.amount} €`,
        html: `
          <div style="font-family:'Georgia',serif;max-width:560px;margin:0 auto;padding:32px 20px;color:#3D3530;">
            <div style="font-size:28px;color:#B88A8A;margin-bottom:4px;">Parenthèse</div>
            <p style="font-size:16px;color:#6B5F58;line-height:1.7;margin:20px 0;">
              Merci ${senderFirstName}, votre carte cadeau est bien enregistrée.<br/>
              Faustine vous contactera prochainement pour confirmer la commande et organiser le règlement.
            </p>
            <p style="font-size:14px;color:#998C84;font-style:italic;">
              La carte cadeau en PDF est jointe à cet email.
            </p>
          </div>`,
        attachments: [pdfAttachment],
      })
    );

    await Promise.all(emailPromises);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Gift card API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
