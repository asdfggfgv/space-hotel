// Mock data for Space Hotel website

export const rooms = [
  {
    id: 1,
    name: "Lunar Suite",
    description: "Experience luxury with panoramic views of Earth and the Moon. Perfect for couples seeking an intimate cosmic experience.",
    price: "$50,000",
    duration: "per night",
    features: ["King bed", "Private observatory", "Zero-gravity bathroom", "Earth view window"]
  },
  {
    id: 2,
    name: "Stellar Penthouse",
    description: "Our premium suite featuring 360-degree space views, private airlock access, and personalized concierge service.",
    price: "$125,000",
    duration: "per night",
    features: ["Master bedroom", "Private spacewalk access", "Personal space guide", "Luxury amenities"]
  },
  {
    id: 3,
    name: "Galaxy Pod",
    description: "Compact yet comfortable accommodation ideal for solo travelers and astronomers. Features state-of-the-art telescope access.",
    price: "$30,000",
    duration: "per night",
    features: ["Queen bed", "Telescope access", "Smart climate control", "Cosmic sound system"]
  },
  {
    id: 4,
    name: "Nebula Family Suite",
    description: "Spacious quarters designed for families, with multiple rooms and child-friendly zero-gravity activities.",
    price: "$85,000",
    duration: "per night",
    features: ["3 bedrooms", "Family lounge", "Kids space activities", "Safety certified"]
  }
];

export const amenities = [
  {
    id: 1,
    title: "Zero-Gravity Dining",
    description: "Experience fine dining in zero gravity with Michelin-starred cuisine prepared by our space chefs."
  },
  {
    id: 2,
    title: "Spacewalk Tours",
    description: "Guided spacewalks with professional astronauts. Witness the beauty of space firsthand."
  },
  {
    id: 3,
    title: "Observatory Deck",
    description: "State-of-the-art telescopes and observation equipment available 24/7 for stargazing enthusiasts."
  },
  {
    id: 4,
    title: "Wellness Center",
    description: "Spa treatments adapted for zero gravity, including massage therapy and meditation sessions."
  },
  {
    id: 5,
    title: "Virtual Reality Lounge",
    description: "Explore distant galaxies and planets through cutting-edge VR experiences."
  },
  {
    id: 6,
    title: "Space Fitness Lab",
    description: "Maintain your fitness routine with equipment designed for zero-gravity exercise."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Tech Entrepreneur",
    comment: "An absolutely breathtaking experience. Watching Earth from space changed my perspective on life forever. The service was impeccable.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. James Chen",
    role: "Astrophysicist",
    comment: "As a scientist, I've studied space for decades, but experiencing it firsthand exceeded all expectations. The staff's knowledge and attention to detail were outstanding.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Travel Blogger",
    comment: "I've traveled to every continent, but nothing compares to this. The zero-gravity dining alone is worth the trip. Absolutely unforgettable.",
    rating: 5
  }
];

export const faqs = [
  {
    id: 1,
    question: "How long does a typical stay last?",
    answer: "Our standard packages range from 3 to 7 nights. We also offer custom duration stays for extended experiences. Each stay includes a comprehensive orientation and safety training."
  },
  {
    id: 2,
    question: "What physical requirements are needed?",
    answer: "Guests must pass a basic health screening. No special training is required, though we recommend moderate fitness levels. Our medical team conducts pre-flight assessments to ensure guest safety."
  },
  {
    id: 3,
    question: "How do I get to the space hotel?",
    answer: "Transportation is included via our private spacecraft launches from designated spaceports. Flight duration is approximately 6 hours. All safety equipment and training are provided."
  },
  {
    id: 4,
    question: "What should I pack for the trip?",
    answer: "We provide all essential items including specialized clothing, toiletries, and equipment. You may bring personal items up to 5kg. A detailed packing list is sent upon booking confirmation."
  },
  {
    id: 5,
    question: "Is there WiFi and communication access?",
    answer: "Yes, we provide high-speed satellite internet throughout the hotel. You can communicate with Earth via video calls, though there's a slight delay due to distance."
  },
  {
    id: 6,
    question: "What is your cancellation policy?",
    answer: "Full refund if cancelled 180 days before departure, 50% refund for 90-179 days, and 25% for 30-89 days. Cancellations within 30 days are non-refundable due to mission planning requirements."
  }
];

export const pricingPackages = [
  {
    id: 1,
    name: "Cosmic Explorer",
    price: "$150,000",
    duration: "3 nights",
    features: [
      "Galaxy Pod accommodation",
      "All meals included",
      "One guided spacewalk",
      "Observatory access",
      "Round-trip transportation"
    ]
  },
  {
    id: 2,
    name: "Stellar Experience",
    price: "$350,000",
    duration: "5 nights",
    features: [
      "Lunar Suite accommodation",
      "Premium dining experiences",
      "Two guided spacewalks",
      "Full amenities access",
      "Priority scheduling",
      "Round-trip transportation"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Ultimate Odyssey",
    price: "$850,000",
    duration: "7 nights",
    features: [
      "Stellar Penthouse suite",
      "Private chef service",
      "Unlimited spacewalks",
      "Personal space guide",
      "VIP amenities access",
      "Private observatory time",
      "Round-trip luxury transport"
    ]
  }
];
