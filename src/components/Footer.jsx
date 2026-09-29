import React from "react";
import StationeryIcon from "./StationeryIcon";

export default function Footer({ wedding, onReplayVideo }) {
  return (
    <footer className="py-16 px-6 text-center relative">
      {/* Translucent overlay for footer readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf7f2]/60 pointer-events-none" />

      <div className="relative z-10 max-w-md mx-auto space-y-5">
        {/* Couple Names */}
        <div
          className="text-3xl sm:text-4xl text-[#231f1c] font-normal tracking-wider"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {wedding.groom} &amp; {wedding.bride}
        </div>

        {/* Tagline */}
        <div
          className="text-2xl text-[#c5a059] select-none"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Forever &amp; Always
        </div>

        {/* Gold Divider */}
        <div className="gold-divider" />

        {/* Hashtag & Date */}
        <p className="text-xs tracking-[0.25em] text-[#8a8278] uppercase font-normal">
          #RameesWedsNafreena &bull; 18.10.2026
        </p>

        {/* Replay Video */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onReplayVideo}
            className="inline-flex items-center gap-2 text-xs text-[#99732b] hover:text-[#231f1c] tracking-wider uppercase transition-colors underline decoration-[#c5a059]/40 underline-offset-4 cursor-pointer font-normal"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <StationeryIcon type="replay" className="w-4 h-4 text-[#99732b]" />
            <span>Replay Envelope Opening</span>
          </button>
        </div>

        {/* Blessing */}
        <p className="text-xs text-[#8a8278]/80 pt-3 italic">
          Designed with blessings for our dearest family &amp; friends
        </p>
      </div>
    </footer>
  );
}
