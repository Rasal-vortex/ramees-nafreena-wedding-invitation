import React, { useRef, useState, useEffect } from "react";

export default function OpeningScreen({
  onOpenComplete,
  videoSrc = "/invitation-opening.mp4",
  posterSrc = "/envelope-poster.jpg",
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  // Wax seal position on the video
  const sealPos = {
    top: 73.2,
    left: 50.8,
    size: 110,
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  const handleSealClick = () => {
    if (hasStarted) return;
    setHasStarted(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Video playback requires interaction or failed:", err);
          setTimeout(handleVideoEnded, 800);
        });
    } else {
      setTimeout(handleVideoEnded, 800);
    }
  };

  const handleVideoEnded = () => {
    setShowFlash(true);
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onOpenComplete();
      }, 550);
    }, 280);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-700 select-none overflow-hidden ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ touchAction: "manipulation" }}
    >
      {/* Video container — full-screen on mobile, centered 9:16 on desktop */}
      <div className="relative w-full h-[100dvh] sm:h-auto sm:aspect-[9/16] sm:max-h-[96vh] sm:w-auto sm:max-w-[100vw] flex items-center justify-center overflow-hidden sm:rounded-3xl sm:border sm:border-[#c5a059]/20 sm:shadow-2xl bg-black">
        {/* Poster image */}
        <img
          src={posterSrc}
          alt="Wedding Invitation Envelope"
          className={`absolute inset-0 w-full h-full object-cover sm:object-fill transition-opacity duration-500 pointer-events-none ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video element */}
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          playsInline
          preload="auto"
          muted
          className="w-full h-full object-cover sm:object-fill pointer-events-none"
          onEnded={handleVideoEnded}
        />

        {/* Wax Seal Hotspot — invisible clickable area */}
        {!hasStarted && (
          <>
            <button
              id="seal-hotspot-btn"
              type="button"
              aria-label="Tap the seal to open wedding invitation"
              className="absolute rounded-full z-30 cursor-pointer focus:outline-none"
              style={{
                top: `${sealPos.top}%`,
                left: `${sealPos.left}%`,
                width: `${sealPos.size}px`,
                height: `${sealPos.size}px`,
                transform: "translate(-50%, -50%)",
                background: "transparent",
                border: "none",
                outline: "none",
              }}
              onClick={handleSealClick}
            />

            {/* Plain text instruction */}
            <p
              className="absolute pointer-events-none z-20 text-center w-full px-4 text-[#fdfbf7] text-sm sm:text-base tracking-[0.3em] uppercase font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] select-none"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                top: `${sealPos.top + 10.5}%`,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              Tap the seal to open
            </p>
          </>
        )}

        {/* White flash overlay on video end */}
        <div
          className={`absolute inset-0 bg-white z-50 pointer-events-none transition-opacity duration-500 ${
            showFlash ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
}
