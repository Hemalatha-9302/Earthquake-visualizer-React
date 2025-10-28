import React, { useEffect, useState } from "react";
import axios from "axios";
import MapView from "./components/MapView";
import EarthquakeList from "./components/EarthquakeList";
import "./index.css";

const USGS_URL =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";

export default function App() {
  const [quakes, setQuakes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [minMag, setMinMag] = useState("0");
  const [search, setSearch] = useState("");

  async function fetchQuakes() {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(USGS_URL);
      console.log("USGS response:", res); // <<--open DevTools Console to inspect
      const features = res.data && res.data.features ? res.data.features : [];
      // Map to consistent shape: id, mag, place, time, depth, lat, lon
      const mapped = features.map((f) => {
        const coords =
          f.geometry && f.geometry.coordinates
            ? f.geometry.coordinates
            : [null, null, null];
        // USGS geometry.coordinates = [lon, lat, depth]
        const lon = coords[0];
        const lat = coords[1];
        const depth = coords[2];
        return {
          id: f.id,
          mag: f.properties && f.properties.mag != null ? f.properties.mag : 0,
          place:
            f.properties && f.properties.place
              ? f.properties.place
              : "Unknown place",
          time:
            f.properties && f.properties.time ? f.properties.time : Date.now(),
          url: f.properties && f.properties.url ? f.properties.url : "",
          depth,
          lat,
          lon,
        };
      });
      console.log("Mapped quakes (first 10):", mapped.slice(0, 10));
      setQuakes(mapped);
    } catch (e) {
      console.error("Fetch error:", e);
      setError("Failed to fetch earthquake data.");
      setQuakes([]); //ensure empty
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchQuakes();
    const id = setInterval(fetchQuakes, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // Filters: min magnitude and place text (case-insensitive)
  const filtered = quakes
    .filter((q) => q.mag >= Number(minMag))
    .filter((q) => q.place.toLowerCase().includes(search.trim().toLowerCase()));

  return (
    <div className="app">
      <div className="header">
        <h1>Earthquake Visualizer</h1>
        <div className="small">Data source: USGS (past 24 hours)</div>
      </div>

      <div className="container">
        <div className="left">
          <div className="controls">
            <select
              className="select"
              value={minMag}
              onChange={(e) => setMinMag(e.target.value)}
            >
              <option value="0">Min mag: 0+</option>
              <option value="1">Min mag: 1+</option>
              <option value="2">Min mag: 2+</option>
              <option value="3">Min mag: 3+</option>
              <option value="4">Min mag: 4+</option>
            </select>

            <input
              className="input"
              placeholder="Filter by place (e.g., California)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="button" onClick={fetchQuakes} disabled={loading}>
              {loading ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          <MapView quakes={filtered} />
        </div>

        <div className="right">
          <div className="list-header">
            <strong>Earthquakes ({filtered.length})</strong>
            <div className="small">Updated: {new Date().toLocaleString()}</div>
          </div>

          {error && <div style={{ padding: 8, color: "crimson" }}>{error}</div>}
          {!error && <EarthquakeList quakes={filtered} />}

          <div className="footer">
            Tip: Click a marker on the map to viewdetails. Use the filter to
            narrow down results.
          </div>
        </div>
      </div>
    </div>
  );
}
