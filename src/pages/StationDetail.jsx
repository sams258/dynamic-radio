// src/pages/StationDetail.jsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { radioStations } from "@/data/radioStations";
import StationPlaying from "@/components/StationPlaying";
import MoreRadios from "@/components/MoreRadios";
import "@/assets/styles/station.css";

const StationDetail = () => {
  const { id } = useParams();

  const station = radioStations.find(
    (station) => station.id === parseInt(id, 10)
  );

  useEffect(() => {
    if (station) {
      const existingScript = document.getElementById("centova-cast-script");
      if (existingScript) existingScript.remove();

      const script = document.createElement("script");
      script.id = "centova-cast-script";
      script.src = `https://${
        station.server
      }.shoutca.st/system/streaminfo.js?${Date.now()}`;
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);

      script.onload = () => {
        console.log(`Centova Cast script loaded for ${station.name}`);
        if (window.cc_streaminfo) {
          window.cc_streaminfo();
        }
      };

      script.onerror = () => {
        console.error(`Failed to load Centova Cast script for ${station.name}`);
      };

      return () => {
        const scriptToRemove = document.getElementById("centova-cast-script");
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [station]);

  if (!station) return <div>Station not found</div>;

  return (
    <div className="station-details">
      <h1 className="station-name">{station.name}</h1>
      <img
        src={station.logo}
        alt={`${station.name} logo`}
        className="station-logo"
      />
      <p className="station-description">{station.description}</p>
      <StationPlaying station={station} />
      <audio controls className="station-audio">
        <source src={station.liveStreamUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <MoreRadios mainStationId={station.id} radioStations={radioStations} />
    </div>
  );
};

export default StationDetail;
