export const SITE_CONFIG = {
  name: "Brilliant Speed Skating Academy",
  shortName: "Brilliant",
  subtitle: "Speed Skating Academy",
  city: "Hyderabad, Telangana",
  phoneDisplay: "+91 95533 93769",
  phoneLink: "tel:+919553393769",
  whatsappUrl: `https://wa.me/919553393769?text=${encodeURIComponent(
    "Hi Brilliant Speed Skating Academy, I want to know about skating classes."
  )}`,
  timing: "Morning & Evening batches",
  copyrightYear: 2026,
} as const;

export const IMAGES = {
  hero: "/images/hero_skater.jpg",
  skateWheels: "/images/skate_detail.jpg",
  curveRace: "/images/hero_skater_2.jpg",
  teamTrack: "/images/athlete_portrait.jpg",
  achievements1: "/images/skating_achievments1.jpeg",
  achievements2: "/images/skating_achievments2.jpeg",
  trainingBg: "/images/hero_skater_3.jpg",
  kidsTraining: "/images/kids_skating_class.jpg",
} as const;
