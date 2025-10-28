import React from "react";

function formatTime(ts) {
  return new Date(ts).toLocaleString();
}

export default function EarthquakeList({ quakes }) {
  if (!quakes) return null;
  if (quakes.length === 0)
    return <div style={{ padding: 8 }}>No earthquakes match the filters.</div>;

  const sorted = [...quakes].sort((a, b) => b.mag - a.mag);

  return (
    <div>
      {sorted.map((q) => (
        <div className="earthquake-item" key={q.id}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: 600 }}>{q.place}</div>
              <div className="small">
                Magnitute: {q.mag} | Depth: {q.depth} km
              </div>
              <div className="small">Time: {formatTime(q.time)}</div>
              {q.url && (
                <a href={q.url} target="_blank" rel="noreferrer">
                  More info
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
