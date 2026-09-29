import React, { useRef, useState, useEffect } from "react";
import StationeryIcon from "./StationeryIcon";

export default function WeddingDetails({ wedding }) {
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

  // Generate Google Calendar Link
  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent(
      `${wedding.groom} & ${wedding.bride}'s Wedding`
    );
    const details = encodeURIComponent(
      `Wedding celebration of ${wedding.groom} and ${wedding.bride} at ${wedding.venue}, ${wedding.location}.`
    );
    const location = encodeURIComponent(
      `${wedding.venue}, ${wedding.location}`
    );
    const dates = "20261018T053000Z/20261018T093000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const details = [
    {
      label: "Date",
      value: `${wedding.day}, ${wedding.date}`,
      sub: "Mark your calendar",
      icon: "calendar",
    },
    {
      label: "Time",
      value: wedding.time,
      sub: "Ceremony begins promptly",
      icon: "clock",
    },
    {
      label: "Venue",
      value: wedding.venue,
      sub: wedding.location,
      icon: "arch",
    },
  ];

  return (
    <section ref={sectionRef} id="details" className="py-16 sm:py-24 px-6">
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
            Celebration Details
          </span>
          <h2
            className="text-2xl sm:text-3xl text-[#231f1c] font-normal tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Save Our Special Date
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        {/* Detail Items — elegant inline layout */}
        <div
          className={`glass-panel-strong rounded-3xl p-8 sm:p-12 shadow-lg opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {details.map((item, index) => (
              <div key={item.label} className="flex flex-col items-center">
                <StationeryIcon type={item.icon} className="w-6 h-6 mb-3 text-[#99732b]" />

                <span className="text-[11px] uppercase tracking-[0.25em] text-[#8a8278] mb-1">
                  {item.label}
                </span>

                <h3
                  className="text-lg sm:text-xl text-[#231f1c] font-normal tracking-wide"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.value}
                </h3>

                <p className="text-xs text-[#5e5750] mt-1 italic">{item.sub}</p>

                {/* Divider between items on mobile */}
                {index < details.length - 1 && (
                  <div className="gold-divider mt-6 md:hidden" />
                )}
              </div>
            ))}
          </div>

          {/* Add to Calendar */}
          <div className="mt-10 pt-6 border-t border-[#c5a059]/15">
            <a
              href={createGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#c5a059]/40 text-[#231f1c] hover:bg-[#231f1c] hover:text-[#fdfbf7] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-normal"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <StationeryIcon type="calendar" className="w-4 h-4 text-[#99732b]" />
              <span>Add To Google Calendar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
