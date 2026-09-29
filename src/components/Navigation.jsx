import React, { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation({ wedding }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Details", href: "#details" },
    { label: "Location", href: "#location" },
    { label: "RSVP", href: "#rsvp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md shadow-sm border-b border-[#c5a059]/25 py-2.5"
          : "bg-[#faf7f2]/80 backdrop-blur-sm border-b border-[#c5a059]/15 py-3.5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Monogram / Couple Name */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-decoration-none"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#231f1c] group-hover:text-[#c5a059] transition-colors">
            {wedding.groom[0]} & {wedding.bride[0]}
          </span>
          <Heart className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]/30 transition-transform group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] font-medium text-[#5e5750]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative hover:text-[#c5a059] transition-colors py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c5a059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#231f1c] hover:bg-[#eee6db]/60 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#c5a059]" /> : <Menu className="w-5 h-5 text-[#231f1c]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf7f2]/98 backdrop-blur-xl border-b border-[#c5a059]/20 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg tracking-widest text-[#231f1c] hover:text-[#c5a059] py-2 border-b border-[#eee6db]/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
