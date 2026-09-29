import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import wedding from "./data/wedding";
import OpeningScreen from "./components/OpeningScreen";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import WeddingDetails from "./components/WeddingDetails";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  const [isInvitationVisible, setIsInvitationVisible] = useState(false);

  const handleOpenComplete = () => {
    setIsInvitationVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReplayVideo = () => {
    setIsInvitationVisible(false);
  };

  return (
    <>
      {/* 1. Cinematic Opening Screen */}
      {!isInvitationVisible && (
        <OpeningScreen
          videoSrc={wedding.openingVideo}
          onOpenComplete={handleOpenComplete}
        />
      )}

      {/* 2. Main Wedding Invitation — built around wedding-bg.png */}
      {isInvitationVisible && (
        <div className="wedding-bg-wrapper animate-fade-in">
          <main>
            {/* Hero / Names / Couple */}
            <Hero wedding={wedding} />

            {/* Live Countdown */}
            <Countdown targetDateTime={wedding.dateTime} />

            {/* Date, Time, Venue */}
            <WeddingDetails wedding={wedding} />

            {/* Venue & Directions */}
            <Location wedding={wedding} />
          </main>

          {/* Elegant Footer */}
          <Footer wedding={wedding} onReplayVideo={handleReplayVideo} />

        </div>
      )}
      <Analytics />
    </>
  );
}
