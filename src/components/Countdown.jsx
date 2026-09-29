import React, { useState, useEffect, useRef } from "react";

export default function Countdown({ targetDateTime = "2026-10-18T11:00:00" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isFinished: false,
  });

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

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(targetDateTime).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        isFinished: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDateTime]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-6 relative"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Section Header */}
        <div
          className={`mb-10 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span
            className="text-2xl sm:text-3xl text-[#c5a059] block mb-2 select-none"
            style={{ fontFamily: "'Alex Brush', cursive" }}
          >
            Counting Down
          </span>
          <h3
            className="text-xl sm:text-2xl text-[#231f1c] font-normal tracking-wide"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Moments Until We Say I Do
          </h3>
          <div className="gold-divider mt-4" />
        </div>

        {timeLeft.isFinished ? (
          <div
            className={`py-6 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <h3
              className="text-2xl sm:text-3xl text-[#99732b] tracking-wide font-normal"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Wedding Day Has Arrived
            </h3>
            <p className="text-sm text-[#5e5750] mt-2 tracking-wider">
              Celebrating love, blessings, and togetherness
            </p>
          </div>
        ) : (
          <div
            className={`grid grid-cols-4 gap-3 sm:gap-5 max-w-xl mx-auto opacity-0 ${
              isVisible ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            {units.map((unit) => (
              <div
                key={unit.label}
                className="glass-panel rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center group hover:shadow-lg transition-shadow duration-300"
              >
                <span
                  className="text-3xl sm:text-5xl md:text-6xl font-normal text-[#231f1c] tracking-tight"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {unit.value}
                </span>

                <span className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] text-[#8a8278] uppercase font-normal">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
