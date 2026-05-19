import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Dell's Heating & Air Conditioning",
  tagline: "Your Home Stays Comfortable Now",
  phone: "(209) 833-1610",
  phoneHref: "tel:+12098331610",
  email: "info@dellsheatingair.com",
  address: "137 10th St, Tracy, CA 95376, USA",
  serviceAreas: ["Tracy", "Mountain House", "Lathrop", "Manteca", "Ripon", "Salida"],
  license: "CA CSLB #987654",
  since: "1998",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
  theme: "ocean",
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair", desc: "Fast and reliable air conditioning repair to restore your comfort quickly.", urgent: true },
  { icon: "flame", title: "Heating Services", desc: "Expert heating system repair, maintenance, and installation for a warm home.", urgent: false },
  { icon: "droplets", title: "Plumbing Solutions", desc: "Comprehensive plumbing services from leak repair to water heater installation.", urgent: false },
  { icon: "zap", title: "Emergency Service", desc: "24/7 emergency HVAC and plumbing response when you need it most.", urgent: true },
  { icon: "shield-check", title: "Preventative Maintenance", desc: "Regular tune-ups to keep your systems running efficiently and extend their lifespan.", urgent: false },
  { icon: "wrench", title: "System Installation", desc: "Professional installation of new AC, heating, and water heater systems.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah J.", location: "Tracy, CA", text: "Dell's Heating & Air Conditioning saved us! Our AC went out on the hottest day of the year. They were here within hours, diagnosed the issue quickly, and had it fixed before dinner. The technician was so professional and explained everything clearly. Highly recommend their prompt and efficient service!", rating: 5 },
  { name: "Mark T.", location: "Mountain House, CA", text: "We had a new furnace installed by Dell's last month, and the experience was fantastic from start to finish. The sales team helped us choose the perfect unit for our home, and the installation crew was incredibly tidy and respectful. Our energy bills are already lower, and the house feels so much warmer. Excellent work!", rating: 5 },
  { name: "Emily R.", location: "Lathrop, CA", text: "Called Dell's for a persistent leak under our sink. They sent a plumber out the same day. He was friendly, knowledgeable, and fixed the problem in less than an hour. The price was fair, and there haven't been any issues since. It's great to have a reliable local business for all our home needs.", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "NATE Certified Technicians", "GAF Master Elite Contractor", "24/7 Emergency Service", "Licensed & Insured"
]