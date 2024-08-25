import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom's Link component
import { radioStations } from "../data/radioStations"; // Adjust the import path based on your project structure
import NowPlaying from "../components/NowPlaying";
import Introduction from "../components/Introduction";
import "../assets/styles/home.css"; // Adjust the import path based on your project structure

const Home = () => {
  return (
    <div>
      <Introduction />

      <div className="station-cards">
        {radioStations.map((station) => (
          <div key={station.id} className="station-card">
            <h2>{station.name}</h2>
            <img src={station.logo} alt={`${station.name} logo`} />

            <NowPlaying station={station} />
            <div className="listen-now">
              <Link to={`/station/${station.id}`}>Listen Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
