/**
 * Wedding Configuration Object
 * All wedding details, assets, and event metadata are centralized here
 * for effortless customization across different clients.
 */
export const wedding = {
  groom: "Ramees",
  groomTitle: "Groom",
  groomParents: "Son of Abdul Latheef & Khadeeja",
  
  bride: "Nafreena",
  brideTitle: "Bride",
  brideParents: "Daughter of Noushad & Naseera",

  date: "18 October 2026",
  dateTime: "2026-10-18T11:00:00",
  day: "Sunday",
  time: "11:00 AM",

  venue: "Grand Auditorium",
  location: "Chittur, Palakkad , Kerala",
  address: "",

  // Google Maps navigation link
  mapsUrl: "https://share.google/CuYx32a7j8EPFPEtA",

  // RSVP WhatsApp contact (international format without + or spaces for wa.me)
  rsvpWhatsapp: "919876543210",
  rsvpPhoneFormatted: "+91 98765 43210",

  coupleImage: "/images/couple.png",

  openingVideo: "/invitation-opening.mp4",

  // Ceremony highlights / schedule
  schedule: [
    {
      time: "11:00 AM",
      title: "Nikah & Welcome",
      desc: "Sacred ceremony followed by welcoming the guests"
    },
    {
      time: "12:30 PM",
      title: "Wedding Feast",
      desc: "Traditional celebratory lunch & felicitations"
    },
    {
      time: "02:30 PM",
      title: "Warm Wishes & Photo Session",
      desc: "Creating lasting memories with family and friends"
    }
  ],

  quote: "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.”",
  quoteSurah: "Surah Ar-Rum [30:21]"
};

export default wedding;
