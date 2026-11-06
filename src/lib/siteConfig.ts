/**
 * Brilliant Speed Skating Academy - Site Configuration
 * Single source of truth for business contact details, schedule, and stats.
 * Items marked with TODO need final confirmation from academy coordinators.
 */

export const siteConfig = {
  name: "Brilliant Speed Skating Academy",
  shortName: "Brilliant",
  city: "Hyderabad, Telangana",

  // Confirmed academy contact details
  phoneDisplay: "+91 95533 93769",
  phoneLink: "tel:+919553393769",
  whatsappUrl: `https://wa.me/919553393769?text=${encodeURIComponent(
    "Hello Brilliant Speed Skating Academy, I would like to book a trial class."
  )}`,

  // Confirmed age group
  ageRange: "Ages 4 to 18",

  // Verified academy metrics for hero stats strip
  stats: [
    { value: "8+ Years", label: "Coaching excellence" },
    { value: "500+", label: "Athletes trained" },
    { value: "2 Daily", label: "Morning & evening batches" },
    { value: "100%", label: "Safety gear & form focus" },
  ],

  // Confirmed training batch sessions
  // TODO: Add specific venue rink addresses once confirmed
  batches: [
    {
      name: "Morning batch",
      time: "6:00 AM – 8:30 AM",
      description: "Stride mechanics, balance, and endurance training.",
    },
    {
      name: "Evening batch",
      time: "4:30 PM – 7:00 PM",
      description: "Speed technique, banked cornering, and paceline drills.",
    },
  ],

  // Structured trial session breakdown for the two-column deep navy panel
  trialGuide: {
    whatToBring: [
      "Comfortable sportswear (t-shirt and athletic track pants)",
      "Hydration water bottle",
      "Skates and helmet if you already own them",
    ],
    whatWeProvide: [
      "Personal skate sizing evaluation by certified coaches",
      "Balance and posture baseline assessment on the track",
      "Recommendations on beginner vs. speed racing skates",
    ],
  },

  // TODO: Replace with confirmed physical rink address once provided
  address: "Hyderabad, Telangana, India",
} as const;
