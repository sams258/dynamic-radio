import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/MoreRadios.css";

const MoreRadios = ({ mainStationId, radioStations }) => {
  // Filter out the main station from the radioStations array
  const [filteredStations, setFilteredStations] = useState([]);

  useEffect(() => {
    const stations = radioStations.filter(station => station.id !== mainStationId);
    const randomStations = stations.sort(() => 0.5 - Math.random()).slice(0, 3);
    setFilteredStations(randomStations);
  }, [mainStationId, radioStations]);

  return (
    <div className="more-radios">
      {filteredStations.map(station => (
        <Link key={station.id} to={`/station/${station.id}`} className="radio-link">
          <img src={station.logo} alt={station.name} className="radio-logo" />
        </Link>
      ))}
    </div>
  );
};

export default MoreRadios;
