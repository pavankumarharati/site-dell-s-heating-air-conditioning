import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Dell's Heating & Air",
  tagline: "Your Comfort, Our Priority",
  phone: "(209) 833-1610",
  phoneHref: "tel:+12098331610",
  email: "info@dellsheatingair.com",
  address: "137 10th St. Tracy, CA 95376",
  serviceAreas: ["Tracy, CA", "Livermore, CA"],
  license: "CA HIC #123456", // Placeholder for specific license number
  since: "2009",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "wrench", title: "HVAC Installations", desc: "We expertly install new heating and cooling systems tailored to your home or business needs.", urgent: false },
  { icon: "zap", title: "HVAC Repairs", desc: "Fast and reliable repairs for all major HVAC brands, restoring your comfort quickly and efficiently.", urgent: true },
  { icon: "shield-check", title: "HVAC Maintenance", desc: "Regular maintenance plans to keep your systems running efficiently, preventing costly breakdowns and extending lifespan.", urgent: false },
  { icon: "thermometer", title: "AC Services", desc: "Comprehensive air conditioning installation, repair, and tune-up services for optimal cooling performance.", urgent: true },
  { icon: "flame", title: "Heating System Services", desc: "Expert installation, repair, and maintenance for all types of heating systems, ensuring warmth through winter.", urgent: true