"use client";

import dynamic from "next/dynamic";

const ZoneMap = dynamic(() => import("./zone-map"), { ssr: false });

export default function ZoneMapClient() {
  return <ZoneMap />;
}
