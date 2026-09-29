import React, { useRef, useState, useEffect } from "react";
import StationeryIcon from "./StationeryIcon";

export default function Location({ wedding }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hasMapsUrl = Boolean(wedding.mapsUrl && wedding.mapsUrl.trim() !== "");

  return (
    <section ref={sectionRef} id="location" className="py-16 sm:py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div
          className={`mb-12 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span
            className="text-2xl sm:text-3xl text-[#c5a059] block mb-2 select-none"
            style={{ fontFamily: "'Alex Brush', cursive" }}
          >
            Venue & Directions
          </span>
          <h2
            className="text-2xl sm:text-3xl text-[#231f1c] font-normal tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Getting There
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Location Card */}
        <div
          className={`glass-panel-strong rounded-3xl p-10 sm:p-14 shadow-lg opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col items-center">
            <StationeryIcon type="arch" className="w-8 h-8 mb-4 text-[#99732b]" />

            <h3
              className="text-2xl sm:text-3xl text-[#231f1c] font-normal tracking-wide"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {wedding.venue}
            </h3>

            <p
              className="text-lg sm:text-xl text-[#99732b] mt-1 font-normal tracking-wide italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {wedding.location}
            </p>

            {wedding.address && (
              <p className="text-sm text-[#5e5750] mt-3 max-w-md leading-relaxed">
                {wedding.address}
              </p>
            )}

            {/* View Location Button */}
            <div className="mt-8">
              {hasMapsUrl ? (
                <a
                  href={wedding.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#231f1c] hover:bg-[#3d3631] text-[#fdfbf7] text-xs uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 font-normal group"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <StationeryIcon type="arch" className="w-4 h-4 text-[#e0c57d] transition-transform" />
                  <span>View Location</span>
                  <span className="text-[10px] opacity-60">↗</span>
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#eee6db] text-[#8a8278] cursor-not-allowed text-xs uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <StationeryIcon type="arch" className="w-4 h-4 text-[#8a8278]" />
                  <span>Location Link Soon</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
