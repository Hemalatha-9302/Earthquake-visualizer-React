import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapView({ quakes }) {
  if (!quakes || quakes.length === 0)
    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>
        No earthquake data to display
      </div>
    );

  const center = [quakes[0].lat || 20, quakes[0].lon || 78];
  return (
    <MapContainer
      center={center}
      zoom={3}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {quakes.map(
        (q) =>
          q.lat &&
          q.lon && (
            <Marker key={q.id} position={[q.lat, q.lon]}>
              <Popup>
                <b>{q.place}</b>
                <br />
                magnitude: {q.mag}
                <br />
                Depth: {q.depth} km
              </Popup>
            </Marker>
          )
      )}
    </MapContainer>
  );
}
