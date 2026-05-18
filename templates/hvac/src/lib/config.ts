import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Dell's Heating & Air Conditioning",
  tagline: "Comfort, Always. We Deliver.",
  phone: "(209) 833-1610",
  phoneHref: "tel:+12098331610",
  email: "info@dellsheatingair.com",
  address: "137 10th St, Tracy, CA 95376, USA",
  serviceAreas: ["Tracy", "Mountain House", "Manteca", "Lathrop", "Ripon", "Salida"],
  license: "CA C20/C36 #123456",
  since: "1998",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "ocean",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Expert technicians quickly diagnose and fix all air conditioning issues to restore your comfort.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "From furnace repair to heat pump installation, we keep your home warm and cozy all winter long.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services including leak detection, drain cleaning, and water heater repair.", urgent: true },
  { icon: "zap", title: "Emergency Service", desc: "24/7 rapid response for unexpected HVAC and plumbing emergencies, ensuring minimal disruption.", urgent: true },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Regular tune-ups extend system life, improve efficiency, and prevent costly breakdowns.", urgent: false },
  { icon: "wrench", title: "New System Installation", desc: "Professional installation of high-efficiency HVAC systems and water heaters tailored to your home.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah L.", location: "Tracy, CA", text: "Dell's Heating & Air Conditioning saved our summer! Our AC went out on the hottest day, and their team was here within hours. The technician, Mike, was incredibly knowledgeable and had it fixed in no time. The price was fair, and the service was outstanding. Highly recommend!", rating: 5 },
  { name: "Robert P.", location: "Mountain House, CA", text: "We've used Dell's for years for our furnace maintenance and recently for a new water heater installation. Every experience has been fantastic. Their team is always professional, punctual, and explains everything clearly. Our new water heater works perfectly, and we couldn't be happier with the seamless installation.", rating: 5 },
  { name: "Jessica M.", location: "Manteca, CA", text: "Our pipes burst late at night, and Dell's emergency plumbing service was a lifesaver. They arrived quickly, stopped the leak, and made sure everything was secure. The plumber was very reassuring during a stressful situation. Truly grateful for their prompt and efficient service.", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]