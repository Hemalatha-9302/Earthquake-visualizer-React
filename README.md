# 🌍 Earthquake Visualizer

An interactive **React-based web application** that visualizes **real-time earthquake data** from the [USGS (United States Geological Survey) API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php).  
The application fetches live data and displays each earthquake’s **magnitude, location, and coordinates** on an interactive **Leaflet map** — allowing users to explore seismic activity around the world in real-time.

---

## 🚀 Project Overview

This project was built as part of an **internship assignment** to demonstrate:

- Understanding and implementation of user requirements.
- Frontend development using **React** and **TypeScript**.
- Integration of a **public API** without authentication.
- Deployment on a free hosting platform (**CodeSandbox**).
- Proper code organization and documentation.

---

## 🧠 Key Features

✅ **Live Earthquake Data** — Fetches and displays real-time earthquake details from the USGS API.  
✅ **Interactive Map** — Uses **React Leaflet** to plot earthquake locations visually.  
✅ **Magnitude & Coordinates** — Shows popup information for each earthquake marker.  
✅ **User-Friendly UI** — Clean, minimal design with responsive layout using Tailwind CSS.  
✅ **Instant Deployment** — Hosted on CodeSandbox for quick access and testing.
🌐 Interactive world map using Leaflet

⚡ Live earthquake data from USGS (updated every 5 minutes)

🔎 Filter by magnitude or location

🧭 Clickable markers showing location, depth, and magnitude

💅 Simple, clean, and responsive UI design

---

## ⚙️ Tech Stack

| Category                 | Technologies Used            |
| ------------------------ | ---------------------------- |
| **Frontend Framework**   | React (with TypeScript)      |
| **Styling**              | Tailwind CSS                 |
| **Map Library**          | React Leaflet                |
| **API Source**           | USGS Earthquake GeoJSON Feed |
| **Data Fetching**        | Axios                        |
| **Hosting / Deployment** | CodeSandbox                  |
| **Version Control**      | Git & GitHub                 |

---

## 🌐 Live Demo

🔗 **Live Application:** [View on CodeSandbox](https://codesandbox.io/)  
🔗 **GitHub Repository:** [View Source Code](https://github.com/Hemalatha-9302/Earthquake-visualizer-React)

---

## 🧩 Project Structure

earthquake-visualizer/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── MapView.jsx
│ │ └── EarthquakeList.jsx
│ ├── App.jsx
│ ├── index.css
│ ├── index.js
│ └── tsconfig.json
├── package.json
└── README.md

🗺️ Components Overview
📍 MapView.jsx

Renders an interactive map using react-leaflet.
Each marker represents an earthquake with:

- Location name
- Magnitude
- Depth (in km)
- Link to detailed info on USGS

📋 EarthquakeList.jsx

Displays all earthquakes in a scrollable list.
Includes:

- Location
- Magnitude & Depth
- Time (formatted)
- “More Info” link for each event

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/Hemalatha-9302/earthquake-visualizer.git
cd Earthquake-visualizer-React

2️⃣ Install Dependencies
npm install

3️⃣ Run the Application
npm start

Then open http://localhost:3000
in your browser.

**🌐 API Used**

**USGS Earthquake API**

https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson

This API provides global earthquake data updated every few minutes.

🧠 Learning Highlights

- Integrating real-time public APIs
- Using React state management with hooks
- Creating interactive map visualizations
- Handling and filtering dynamic data

