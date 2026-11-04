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
  skateWheels: "/images/skate_wheels.jpg",
  curveRace: "/images/curve_race.jpg",
  teamTrack: "/images/team_track.jpg",
  achievements1: "/images/skating_achievments1.jpeg",
  achievements2: "/images/skating_achievements2.jpg",
  trainingBg: "/images/hero_skater_3.jpg",
  kidsTraining: "/images/kids_skating_class.jpg",
} as const;

// Real speed skating video IDs with autoplay support (replace anytime with your own academy videos)
export const VIDEOS = [
  {
    id: "laaLm2iWXoo", // Inline Speed Skating Championship Highlights
    title: "High Velocity Track Racing & Sprints",
  },
  {
    id: "1E7wXwN5f0w", // Speed Skating Technique & Drills
    title: "Junior Stride & Balance Drills",
  },
] as const;
