// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import StationDetail from "./pages/StationDetail";
import Navbar from "./components/Navbar"; 
import HelmetWrapper from "./components/HelmetWrapper";

function App() {
  const metadata = {
    title: "LBI GROUP HEADQUARTERS",
    description: "This is the official website of LBI GROUP online radios",
    keywords: "lbi radio, group, online, radio, zaman, oldies, hits, albal",
    openGraph: {
      title: "LBI GROUP HEADQUARTERS",
      description: "This is the official website of LBI GROUP online radios",
      url: "https://lbiradio.com/",
      images: [
        {
          url: "https://lbiradio.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "LBI GROUP Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "LBI GROUP HEADQUARTERS",
      description: "This is the official website of LBI GROUP online radios",
      image: "https://lbiradio.com/og-image.jpg",
    },
  };

  return (
    <Router>
      <HelmetWrapper metadata={metadata} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/station/:id" element={<StationDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
