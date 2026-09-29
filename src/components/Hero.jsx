import React, { useEffect, useRef, useState } from "react";

export default function Hero({ wedding }) {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex flex-col items-center justify-center text-center pt-16 pb-20 sm:pt-24 sm:pb-28 px-6 min-h-[85vh]"
    >
      {/* Script Accent */}
      <div
        className={`opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <span
          className="text-3xl sm:text-4xl text-[#c5a059] select-none block mb-2"
          style={{ fontFamily: "'Alex Brush', 'Great Vibes', cursive" }}
        >
          Together with their families
        </span>
      </div>

      {/* Main Couple Names */}
      <div
        className={`my-4 sm:my-6 flex flex-col items-center opacity-0 ${
          isVisible ? "animate-fade-in-up" : ""
        }`}
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        <h1 className="sr-only">
          {wedding.groom} & {wedding.bride} Wedding Invitation
        </h1>

        <div
          className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-wider text-[#231f1c]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {wedding.groom}
        </div>

        <div
          className="my-2 sm:my-3 text-4xl sm:text-5xl md:text-6xl text-[#c5a059] leading-none select-none"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          &amp;
        </div>

        <div
          className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-wider text-[#231f1c]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {wedding.bride}
        </div>
      </div>

      {/* Parents */}
      <div
        className={`mt-4 space-y-1 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
      >
        <p className="text-sm sm:text-base text-[#5e5750] tracking-wide italic">
          {wedding.groomParents}
        </p>
        <p className="text-sm sm:text-base text-[#5e5750] tracking-wide italic">
          {wedding.brideParents}
        </p>
      </div>

      {/* Gold Divider */}
      <div
        className={`mt-8 opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
        style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
      >
        <div className="gold-divider-wide" />
      </div>

      {/* Formal Invitation Wording */}
      <div
        className={`mt-8 max-w-md mx-auto space-y-2 opacity-0 ${
          isVisible ? "animate-fade-in-up" : ""
        }`}
        style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
      >
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#8a8278] font-normal">
          request the pleasure of your presence
        </p>
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#5e5750] font-normal">
          to celebrate their wedding union
        </p>
      </div>

      {/* Couple Portrait — Luxury Arch Frame */}
      <div
        className={`mt-12 sm:mt-16 relative max-w-sm sm:max-w-md w-full px-4 opacity-0 ${
          isVisible ? "animate-fade-in-up" : ""
        }`}
        style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
      >
        <div className="relative mx-auto w-full aspect-[3/4] max-w-[320px] rounded-t-[130px] rounded-b-2xl overflow-hidden p-[3px] bg-gradient-to-b from-[#e0c57d]/60 via-[#fdfbf7]/40 to-[#c5a059]/50 shadow-2xl animate-pulse-glow">
          <div className="w-full h-full rounded-t-[127px] rounded-b-xl overflow-hidden relative bg-[#eee6db]">
            <img
              src={wedding.coupleImage}
              alt={`${wedding.groom} & ${wedding.bride}`}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              loading="eager"
            />
            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Floating Date Badge */}
        <div className="absolute -bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap px-6 py-2.5 rounded-full border border-[#c5a059]/25 bg-[rgba(253,251,247,0.96)] shadow-lg">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
            <span
              className="text-sm sm:text-base tracking-[0.2em] text-[#231f1c] font-semibold uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {wedding.date}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
          </span>
        </div>
      </div>

      {/* Quranic Verse */}
      {wedding.quote && (
        <div
          className={`mt-16 max-w-lg mx-auto px-6 text-center opacity-0 ${
            isVisible ? "animate-fade-in-up" : ""
          }`}
          style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
        >
          <p className="italic text-sm sm:text-base text-[#5e5750] leading-relaxed">
            {wedding.quote}
          </p>
          <span className="block mt-3 text-xs tracking-[0.2em] uppercase text-[#99732b] font-normal">
            — {wedding.quoteSurah} —
          </span>
        </div>
      )}
    </section>
  );
}
