import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import sharp from "sharp";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bgBuffer, fontBuffer] = [
    readFileSync(join(process.cwd(), "assets/bain4.webp")),
    readFileSync(
      join(
        process.cwd(),
        "node_modules/@fontsource/dancing-script/files/dancing-script-latin-600-normal.woff"
      )
    ),
  ];

  const bgPng = await sharp(bgBuffer).resize(1200, 630, { fit: "cover" }).png().toBuffer();

  const bgSrc = `data:image/png;base64,${bgPng.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${bgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(245, 230, 226, 0.50)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontFamily: "Dancing Script",
              fontSize: 88,
              color: "#3D3530",
              lineHeight: "1.3",
            }}
          >
            Parenthèse
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#3D3530",
              letterSpacing: "0.14em",
              fontStyle: "italic",
              marginTop: 12,
            }}
          >
            Accompagnement périnatal à domicile · Versailles
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Dancing Script",
          data: fontBuffer.buffer.slice(
            fontBuffer.byteOffset,
            fontBuffer.byteOffset + fontBuffer.byteLength
          ),
          weight: 600,
          style: "normal",
        },
      ],
    }
  );
}
