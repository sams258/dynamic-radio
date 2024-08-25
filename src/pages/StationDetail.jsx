// src/pages/StationDetail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { radioStations } from "../data/radioStations";
import StationPlaying from "../components/StationPlaying";
import MoreRadios from "../components/MoreRadios";
import "../assets/styles/station.css";

const StationDetail = () => {
  const { id } = useParams();

  const station = radioStations.find(
    (station) => station.id === parseInt(id, 10)
  );

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
