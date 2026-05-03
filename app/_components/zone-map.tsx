"use client";

import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Tooltip,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const VERSAILLES: [number, number] = [48.8049, 2.1204];
const COLOR = "#B88A8A";

const zones = [
  { radius: 30000, label: "Zone 3 — +20 €", fillOpacity: 0.06 },
  { radius: 20000, label: "Zone 2 — +10 €", fillOpacity: 0.1 },
  { radius: 10000, label: "Zone 1 — Inclus", fillOpacity: 0.16 },
];

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    const bounds = L.latLng(VERSAILLES).toBounds(30000 * 2 * 0.8);
    map.fitBounds(bounds, { animate: false });
  }, [map]);
  return null;
}

export default function ZoneMap() {
  return (
    <MapContainer
      center={VERSAILLES}
      zoom={9}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      className="w-full h-full">
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      <FitBounds />
      {zones.map((zone) => (
        <Circle
          key={zone.radius}
          center={VERSAILLES}
          radius={zone.radius}
          pathOptions={{
            color: COLOR,
            fillColor: COLOR,
            fillOpacity: zone.fillOpacity,
            weight: 1.5,
          }}>
          <Tooltip>{zone.label}</Tooltip>
        </Circle>
      ))}
      <CircleMarker
        center={VERSAILLES}
        radius={7}
        pathOptions={{
          color: "#fff",
          fillColor: COLOR,
          fillOpacity: 1,
          weight: 2,
        }}>
        <Tooltip permanent direction="top" offset={[0, -10]}>
          Versailles
        </Tooltip>
      </CircleMarker>
    </MapContainer>
  );
}
