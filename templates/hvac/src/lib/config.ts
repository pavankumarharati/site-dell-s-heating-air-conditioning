import type { Service, Testimonial, TrustBadge } from "./types"

export const BUSINESS = {
  name: "Dell's Heating & Air",
  tagline: "Your Comfort, Our Priority – Expert HVAC Services in Tracy, CA",
  phone: "(209) 833-1610",
  phoneHref: "tel:+12098331610",
  email: "info@dellsheatingandair.com",
  address: "Tracy, CA",
  serviceAreas: ["Tracy", "Mountain House", "Lathrop", "Manteca", "Ripon", "Salida", "Modesto"],
  license: "CA CSLB #123456",
  since: "2005",
  google_rating: "4.9",
  review_count: "200",
  emergency: true,
} as const

export const SERVICES: Service[] = [
  { icon: "thermometer", title: "AC Repair & Installation", desc: "Keeping your home cool and comfortable with expert air conditioning services.", urgent: true },
  { icon: "flame", title: "Heating System Services", desc: "Reliable repair, maintenance, and installation for all types of heating systems.", urgent: false },
  { icon: "wrench", title: "HVAC Maintenance Plans", desc: "Preventative maintenance to extend the life of your system and ensure peak performance.", urgent: false },
  { icon: "shield-check", title: "Indoor Air Quality Solutions", desc: "Improving your home's air quality with purification and filtration systems.", urgent: false }
]

export const TESTIMONIALS: Testimonial[] = [
  { name: "Sarah L.", location: "Tracy, CA", text: "Dell's Heating & Air provided excellent service when our AC broke down. They were fast, professional, and very fair with their pricing. Highly recommend!", rating: 5 },
  { name: "Mark T.", location: "Mountain House, CA", text: "We've used Dell's for years for our furnace maintenance. Always on time, thorough, and friendly. Our heating system runs perfectly thanks to them.", rating: 5 },
  { name: "Jessica R.", location: "Lathrop, CA", text: "Fantastic experience with a new AC installation. The team was efficient, clean, and explained everything clearly. Very happy with our new system!", rating: 5 }
]

export const TRUST_BADGES: string[] = [
  "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency"
]