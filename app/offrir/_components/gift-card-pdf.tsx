import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import path from "path";

const FONTS = path.join(
  process.cwd(),
  "node_modules/@fontsource"
);

Font.register({
  family: "DancingScript",
  src: path.join(FONTS, "dancing-script/files/dancing-script-latin-400-normal.woff"),
});

Font.register({
  family: "Cormorant",
  fonts: [
    {
      src: path.join(FONTS, "cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff"),
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      src: path.join(FONTS, "cormorant-garamond/files/cormorant-garamond-latin-400-italic.woff"),
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: path.join(FONTS, "cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff"),
      fontWeight: 500,
      fontStyle: "normal",
    },
  ],
});

const C = {
  primary: "#B88A8A",
  roseMist: "#F5E6E2",
  roseLight: "#E8CFCF",
  rose: "#D4A0A0",
  cream: "#FBF7F2",
  creamWarm: "#F4ECDF",
  border: "#E5DAD0",
  sageDeep: "#7A8B6E",
  ink: "#3D3530",
  inkSoft: "#6B5F58",
  inkMute: "#998C84",
  white: "#FFFFFF",
};

const s = StyleSheet.create({
  page: {
    backgroundColor: C.cream,
    fontFamily: "Cormorant",
    fontSize: 11,
    color: C.ink,
  },
  topPatch: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 130,
    backgroundColor: C.roseMist,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 240,
  },
  circleTopRight: {
    position: "absolute",
    top: -50,
    right: -50,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: C.roseLight,
    opacity: 0.4,
  },
  circleBottomLeft: {
    position: "absolute",
    bottom: -40,
    left: -40,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: C.roseMist,
    opacity: 0.5,
  },
  body: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 44,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  brand: {
    fontFamily: "DancingScript",
    fontSize: 28,
    color: C.primary,
    lineHeight: 1,
  },
  cardTypeBadge: {
    backgroundColor: C.roseLight,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardTypeText: {
    fontFamily: "Cormorant",
    fontStyle: "italic",
    fontSize: 9,
    color: C.primary,
    letterSpacing: 0.8,
  },
  divider: {
    height: 0.5,
    backgroundColor: C.roseLight,
    marginVertical: 16,
  },
  middle: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 8,
  },
  amount: {
    fontFamily: "DancingScript",
    fontSize: 64,
    color: C.primary,
    lineHeight: 1,
    marginBottom: 6,
  },
  soinLabel: {
    fontFamily: "Cormorant",
    fontStyle: "italic",
    fontSize: 14,
    color: C.inkSoft,
    marginBottom: 20,
  },
  toFromRow: {
    flexDirection: "row",
    gap: 32,
    marginBottom: 14,
  },
  toFromBlock: {
    flexDirection: "column",
    gap: 2,
  },
  toFromKey: {
    fontFamily: "Cormorant",
    fontSize: 8,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: C.inkMute,
  },
  toFromValue: {
    fontFamily: "Cormorant",
    fontWeight: 500,
    fontSize: 14,
    color: C.ink,
  },
  messageBorder: {
    borderLeftWidth: 2,
    borderLeftColor: C.roseLight,
    paddingLeft: 12,
    marginTop: 4,
  },
  messageText: {
    fontFamily: "Cormorant",
    fontStyle: "italic",
    fontSize: 11,
    color: C.inkSoft,
    lineHeight: 1.5,
  },
  footer: {
    paddingTop: 14,
    borderTopWidth: 0.5,
    borderTopColor: C.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerLeft: {
    flexDirection: "column",
    gap: 3,
  },
  footerText: {
    fontFamily: "Cormorant",
    fontSize: 8.5,
    color: C.inkMute,
    letterSpacing: 0.4,
  },
  footerSage: {
    fontFamily: "Cormorant",
    fontSize: 8.5,
    color: C.sageDeep,
    letterSpacing: 0.4,
  },
  validityBadge: {
    backgroundColor: C.creamWarm,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 0.5,
    borderColor: C.border,
  },
  validityText: {
    fontFamily: "Cormorant",
    fontStyle: "italic",
    fontSize: 8.5,
    color: C.primary,
  },
});

export interface GiftCardData {
  soinLabel: string;
  amount: number;
  fromFirstName: string;
  fromLastName: string;
  toFirstName: string;
  toLastName: string;
  message: string;
  date: string;
}

export function GiftCardDocument({
  soinLabel,
  amount,
  fromFirstName,
  fromLastName,
  toFirstName,
  toLastName,
  message,
}: GiftCardData) {
  const recipientName = [toFirstName, toLastName].filter(Boolean).join(" ");
  const senderName = [fromFirstName, fromLastName].filter(Boolean).join(" ");
  const displaySoin = soinLabel || "Soin bien-être à domicile";

  return (
    <Document
      title={`Carte cadeau Parenthèse — ${recipientName}`}
      author="Parenthèse"
    >
      <Page size={[595, 360]} style={s.page}>
        {/* Background shapes */}
        <View style={s.topPatch} />
        <View style={s.circleTopRight} />
        <View style={s.circleBottomLeft} />

        {/* Content */}
        <View style={s.body}>
          {/* Header */}
          <View style={s.header}>
            <Text style={s.brand}>Parenthèse</Text>
            <View style={s.cardTypeBadge}>
              <Text style={s.cardTypeText}>CARTE CADEAU</Text>
            </View>
          </View>

          <View style={s.divider} />

          {/* Middle */}
          <View style={s.middle}>
            <Text style={s.amount}>{amount} €</Text>
            <Text style={s.soinLabel}>{displaySoin}</Text>

            <View style={s.toFromRow}>
              <View style={s.toFromBlock}>
                <Text style={s.toFromKey}>Pour</Text>
                <Text style={s.toFromValue}>{recipientName || "·····"}</Text>
              </View>
              <View style={s.toFromBlock}>
                <Text style={s.toFromKey}>De la part de</Text>
                <Text style={s.toFromValue}>{senderName || "·····"}</Text>
              </View>
            </View>

            {message ? (
              <View style={s.messageBorder}>
                <Text style={s.messageText}>« {message} »</Text>
              </View>
            ) : null}
          </View>

          <View style={s.divider} />

          {/* Footer */}
          <View style={s.footer}>
            <View style={s.footerLeft}>
              <Text style={s.footerSage}>
                Soins bien-être périnataux à domicile · Versailles (78)
              </Text>
              <Text style={s.footerText}>
                contact@parenthese78.fr · 06.22.00.90.39
              </Text>
            </View>
            <View style={s.validityBadge}>
              <Text style={s.validityText}>Valable 12 mois</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
