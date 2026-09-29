import React, { useState } from "react";
import { MessageCircle, HeartHandshake, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function RSVP({ wedding }) {
  const [attendingStatus, setAttendingStatus] = useState("yes"); // "yes" or "wishes"
  const [guestCount, setGuestCount] = useState("1");
  const [guestName, setGuestName] = useState("");

  const handleConfirmAttendance = (e) => {
    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#C5A059", "#DFC27D", "#FAF7F2", "#EFE8DE"],
      });
    } catch {
      // ignore
    }

    if (!wedding.rsvpWhatsapp || wedding.rsvpWhatsapp.trim() === "") {
      return;
    }

    let messageText = "";
    const namePrefix = guestName.trim() ? `This is ${guestName.trim()}. ` : "";

    if (attendingStatus === "yes") {
      messageText = `Assalamu Alaikum Ramees & Nafreena! ${namePrefix}I am delighted to confirm my attendance for your wedding on 18 October 2026 at Grand Auditorium, Chittur (Total attending: ${guestCount}). Wishing you both a blessed marriage!`;
    } else {
      messageText = `Assalamu Alaikum Ramees & Nafreena! ${namePrefix}Sending my heartiest congratulations and best wishes for your wedding on 18 October 2026. May Allah bless your union with endless happiness!`;
    }

    const whatsappUrl = `https://wa.me/${wedding.rsvpWhatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const hasWhatsapp = Boolean(
    wedding.rsvpWhatsapp && wedding.rsvpWhatsapp.trim() !== ""
  );

  return (
    <section id="rsvp" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#f5efeb]/70 border-t border-[#c5a059]/25 text-center relative overflow-hidden">
      {/* Decorative aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#f4e8d3]/50 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-[#fdfbf7] border border-[#c5a059]/40 flex items-center justify-center mx-auto mb-4 text-[#c5a059]">
          <HeartHandshake className="w-6 h-6 text-[#c5a059]" />
        </div>

        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#99732b] font-medium">
          Response Requested
        </span>

        {/* Section 10 Title */}
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-[#231f1c] font-normal tracking-wide">
          We would love to celebrate with you
        </h2>

        <p className="font-sans text-xs sm:text-sm text-[#5e5750] mt-3 leading-relaxed">
          Please confirm your presence by 5th October 2026 to help us make the celebrations memorable.
        </p>

        {/* RSVP Card */}
        <div className="mt-8 bg-[#fdfbf7] rounded-3xl border border-[#c5a059]/35 p-6 sm:p-8 shadow-md">
          {/* Quick Name Input */}
          <div className="mb-5 text-left">
            <label
              htmlFor="rsvp-name"
              className="block text-xs font-sans uppercase tracking-widest text-[#8a8278] mb-1.5"
            >
              Your Name (Optional)
            </label>
            <input
              id="rsvp-name"
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="e.g. Dr. Salman & Family"
              className="w-full px-4 py-2.5 rounded-xl border border-[#c5a059]/30 bg-[#faf7f2] text-sm text-[#231f1c] placeholder-[#8a8278]/60 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50 transition-all font-sans"
            />
          </div>

          {/* Attending toggle */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              onClick={() => setAttendingStatus("yes")}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-sans tracking-wider border transition-all flex items-center justify-center gap-2 ${
                attendingStatus === "yes"
                  ? "bg-[#231f1c] text-white border-[#231f1c] shadow-sm"
                  : "bg-[#faf7f2] text-[#5e5750] border-[#c5a059]/25 hover:border-[#c5a059]/60"
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
              <span>Attending</span>
            </button>
            <button
              type="button"
              onClick={() => setAttendingStatus("wishes")}
              className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-sans tracking-wider border transition-all flex items-center justify-center gap-2 ${
                attendingStatus === "wishes"
                  ? "bg-[#231f1c] text-white border-[#231f1c] shadow-sm"
                  : "bg-[#faf7f2] text-[#5e5750] border-[#c5a059]/25 hover:border-[#c5a059]/60"
              }`}
            >
              <span>Sending Blessings</span>
            </button>
          </div>

          {/* Number of guests (if attending) */}
          {attendingStatus === "yes" && (
            <div className="mb-6 text-left">
              <label
                htmlFor="guest-count"
                className="block text-xs font-sans uppercase tracking-widest text-[#8a8278] mb-1.5"
              >
                Number of Guests Attending
              </label>
              <select
                id="guest-count"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#c5a059]/30 bg-[#faf7f2] text-sm text-[#231f1c] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50 transition-all font-sans"
              >
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People (Family)</option>
              </select>
            </div>
          )}

          {/* Primary Confirm Attendance Button */}
          {hasWhatsapp ? (
            <button
              type="button"
              onClick={handleConfirmAttendance}
              className="w-full py-4 px-6 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25d366]" />
              <span>Confirm Attendance</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConfirmAttendance}
              className="w-full py-4 px-6 rounded-full bg-[#231f1c] hover:bg-[#3d3631] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium shadow-lg transition-all"
            >
              <span>Confirm Attendance</span>
            </button>
          )}

          {wedding.rsvpPhoneFormatted && (
            <p className="mt-4 text-[11px] font-sans text-[#8a8278]">
              Or RSVP directly via WhatsApp / Call:{" "}
              <span className="font-semibold text-[#231f1c]">{wedding.rsvpPhoneFormatted}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
