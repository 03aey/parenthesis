import {
	Calendar,
	Camera,
	Check,
	Clock,
	CreditCard,
	Eye,
	Heart,
	Mail,
	MapPin,
	Mountain,
	Music,
	Phone,
	Target,
	TreePine,
	Users,
	Waves,
} from "lucide-react";
import {
	AddOn,
	ContactInfo,
	Country,
	Destination,
	ExperienceCategory,
	Faqs,
	OnboardingField,
	Package,
	Step,
	Value,
} from "./type";

export const destinations: Destination[] = [
	{
		id: "trop-para",
		title: "Tropical Paradise",
		country: "Maldives",
		continent: "Asia",
		type: "Beach",
		rating: 4.9,
		image: "/images/beach.jpg",
		description:
			"Crystal clear waters and overwater bungalows await in this tropical paradise.",
		price: 2999,
		highlights: [
			"Overwater Villas",
			"Coral Reefs",
			"Private Beaches",
			"Spa Treatments",
		],
	},
	{
		id: "mount-adv",
		title: "Mountain Adventure",
		country: "Nepal",
		continent: "Asia",
		type: "Mountain",
		rating: 4.8,
		image: "/images/mountains.jpg",
		description:
			"Trek through the mighty Himalayas and experience breathtaking mountain vistas.",
		price: 1899,
		highlights: [
			"Himalayan Peaks",
			"Base Camp Trek",
			"Sherpa Culture",
			"Mountain Views",
		],
	},
	{
		id: "anc-wond",
		title: "Ancient Wonders",
		country: "Cambodia",
		continent: "Asia",
		type: "Cultural",
		rating: 4.7,
		image: "/images/cultural.jpg",
		description:
			"Explore ancient temples and immerse yourself in rich cultural heritage.",
		price: 1299,
		highlights: [
			"Angkor Wat",
			"Temple Complex",
			"Khmer Architecture",
			"Cultural Tours",
		],
	},
	{
		id: "safari-exp",
		title: "Safari Experience",
		country: "Kenya",
		continent: "Africa",
		type: "Wildlife",
		rating: 4.9,
		image: "/images/wildlife.jpg",
		description:
			"Witness the Great Migration and encounter Africa's magnificent wildlife.",
		price: 3499,
		highlights: ["Big Five", "Migration", "Game Drives", "Luxury Lodges"],
	},
	{
		id: "nor-lights",
		title: "Northern Lights",
		country: "Iceland",
		continent: "Europe",
		type: "Nature",
		rating: 4.8,
		image: "/images/nature.jpg",
		description:
			"Chase the Aurora Borealis across Iceland's dramatic landscapes.",
		price: 2199,
		highlights: [
			"Aurora Viewing",
			"Ice Caves",
			"Hot Springs",
			"Volcanic Landscapes",
		],
	},
	{
		id: "rom-vene",
		title: "Romantic Venice",
		country: "Italy",
		continent: "Europe",
		type: "Romance",
		rating: 4.6,
		image: "/images/romance.jpg",
		description:
			"Glide through historic canals in this enchanting floating city.",
		price: 1799,
		highlights: [
			"Gondola Rides",
			"St. Mark's Square",
			"Italian Cuisine",
			"Art & Culture",
		],
	},
];

export const wishlists: Destination[] = [
	{
		id: "mount-adv",
		title: "Mountain Adventure",
		country: "Nepal",
		continent: "Asia",
		type: "Mountain",
		rating: 4.8,
		image: "/images/mountains.jpg",
		description:
			"Trek through the mighty Himalayas and experience breathtaking mountain vistas.",
		price: 1899,
		highlights: [
			"Himalayan Peaks",
			"Base Camp Trek",
			"Sherpa Culture",
			"Mountain Views",
		],
	},
	{
		id: "safari-exp",
		title: "Safari Experience",
		country: "Kenya",
		continent: "Africa",
		type: "Wildlife",
		rating: 4.9,
		image: "/images/wildlife.jpg",
		description:
			"Witness the Great Migration and encounter Africa's magnificent wildlife.",
		price: 3499,
		highlights: ["Big Five", "Migration", "Game Drives", "Luxury Lodges"],
	},
	{
		id: "rom-vene",
		title: "Romantic Venice",
		country: "Italy",
		continent: "Europe",
		type: "Romance",
		rating: 4.6,
		image: "/images/romance.jpg",
		description:
			"Glide through historic canals in this enchanting floating city.",
		price: 1799,
		highlights: [
			"Gondola Rides",
			"St. Mark's Square",
			"Italian Cuisine",
			"Art & Culture",
		],
	},
];

export const destinationContinents = [
	"all",
	...Array.from(new Set(destinations.map((d) => d.continent))),
];

export const destinationTypes = [
	"all",
	...Array.from(new Set(destinations.map((d) => d.type))),
];

export const packages: Package[] = [
	{
		id: "greek-island",
		title: "Greek Island Paradise",
		destination: "Santorini & Mykonos",
		duration: "7D/6N",
		price: 2299,
		originalPrice: 2799,
		rating: 4.9,
		image: "/images/greek-island.jpg",
		highlights: [
			"Sunset cruise in Santorini",
			"Traditional Greek cooking class",
			"Private beach access",
			"Historic Delos island tour",
		],
		itinerary: [
			{
				day: 1,
				title: "Arrival in Santorini",
				description:
					"Welcome to Santorini! Relax and unwind at the hotel.",
				activities: [
					"Airport pickup",
					"Hotel check-in",
					"Welcome dinner with sea view",
				],
			},
			{
				day: 2,
				title: "Santorini Exploration",
				description: "Discover the magical island of Santorini.",
				activities: [
					"Oia village tour",
					"Wine tasting",
					"Sunset cruise",
				],
			},
			{
				day: 3,
				title: "Santorini to Mykonos",
				description: "Travel from Santorini to Mykonos.",
				activities: [
					"Ferry to Mykonos",
					"Beach time",
					"Traditional taverna dinner",
				],
			},
			{
				day: 4,
				title: "Mykonos Adventure",
				description: "Embark on a thrilling adventure on Mykonos.",
				activities: [
					"Delos island excursion",
					"Archaeological site tour",
					"Beach club experience",
				],
			},
			{
				day: 5,
				title: "Cultural Immersion",
				description: "Immerse yourself in the culture of Santorini.",
				activities: [
					"Cooking class",
					"Local market visit",
					"Windmill tour",
				],
			},
			{
				day: 6,
				title: "Relaxation Day",
				description: "Enjoy a day of relaxation and rejuvenation.",
				activities: [
					"Private beach access",
					"Spa treatment",
					"Farewell dinner",
				],
			},
			{
				day: 7,
				title: "Departure",
				description: "Say goodbye to Santorini and Mykonos.",
				activities: [
					"Hotel checkout",
					"Airport transfer",
					"Flight home",
				],
			},
		],
		included: [
			"Flights",
			"Hotels",
			"Transfers",
			"Breakfast",
			"2 Dinners",
			"Tours",
		],
	},
	{
		id: "japan-cultural",
		title: "Japan Cultural Journey",
		destination: "Tokyo & Kyoto",
		duration: "10D/9N",
		price: 3599,
		originalPrice: 4199,
		rating: 4.8,
		image: "/images/japan-cultural.jpg",
		highlights: [
			"Traditional tea ceremony",
			"Mount Fuji day trip",
			"Sushi making class",
			"Geisha district tour",
		],
		itinerary: [
			{
				day: 1,
				title: "Tokyo Arrival",
				description: "Welcome to Tokyo! Relax and unwind at the hotel.",
				activities: [
					"Airport pickup",
					"Hotel check-in",
					"Shibuya crossing experience",
				],
			},
			{
				day: 2,
				title: "Modern Tokyo",
				description: "Discover the modern city of Tokyo.",
				activities: [
					"Tsukiji fish market",
					"Tokyo Skytree",
					"Harajuku district",
				],
			},
			{
				day: 3,
				title: "Traditional Tokyo",
				description:
					"Immerse yourself in the traditional culture of Tokyo.",
				activities: [
					"Senso-ji Temple",
					"Imperial Palace",
					"Traditional dinner",
				],
			},
			{
				day: 4,
				title: "Mount Fuji Excursion",
				description: "Embark on a thrilling day trip to Mount Fuji.",
				activities: [
					"Day trip to Mount Fuji",
					"Lake Kawaguchi",
					"Hot springs",
				],
			},
			{
				day: 5,
				title: "Tokyo to Kyoto",
				description: "Travel from Tokyo to Kyoto.",
				activities: [
					"Bullet train to Kyoto",
					"Hotel check-in",
					"Gion district walk",
				],
			},
			{
				day: 6,
				title: "Kyoto Temples",
				description: "Explore the temples of Kyoto.",
				activities: [
					"Kinkaku-ji Temple",
					"Bamboo grove",
					"Tea ceremony",
				],
			},
			{
				day: 7,
				title: "Cultural Kyoto",
				description: "Immerse yourself in the culture of Kyoto.",
				activities: [
					"Fushimi Inari shrine",
					"Sake tasting",
					"Geisha spotting",
				],
			},
			{
				day: 8,
				title: "Nara Day Trip",
				description: "Embark on a day trip to Nara.",
				activities: [
					"Nara deer park",
					"Todai-ji Temple",
					"Traditional crafts",
				],
			},
			{
				day: 9,
				title: "Final Exploration",
				description: "Explore the city of Kyoto.",
				activities: ["Free time", "Shopping", "Farewell dinner"],
			},
			{
				day: 10,
				title: "Departure",
				description: "Say goodbye to Kyoto and Tokyo.",
				activities: [
					"Hotel checkout",
					"Airport transfer",
					"Flight home",
				],
			},
		],
		included: [
			"Flights",
			"Hotels",
			"JR Pass",
			"Breakfast",
			"3 Dinners",
			"All Tours",
		],
	},
	{
		id: "machu-picchu",
		title: "Machu Picchu Adventure",
		destination: "Peru Highlands",
		duration: "8D/7N",
		price: 2899,
		originalPrice: 3399,
		rating: 4.9,
		image: "/images/machu-picchu.jpg",
		highlights: [
			"Inca Trail hiking",
			"Machu Picchu sunrise",
			"Sacred Valley exploration",
			"Local community visit",
		],
		itinerary: [
			{
				day: 1,
				title: "Lima Arrival",
				description: "Welcome to Lima! Relax and unwind at the hotel.",
				activities: ["Airport pickup", "City tour", "Welcome dinner"],
			},
			{
				day: 2,
				title: "Cusco Acclimatization",
				description: "Prepare for the Inca Trail.",
				activities: [
					"Flight to Cusco",
					"City exploration",
					"Altitude adjustment",
				],
			},
			{
				day: 3,
				title: "Sacred Valley",
				description: "Explore the Sacred Valley.",
				activities: [
					"Pisac market",
					"Ollantaytambo fortress",
					"Traditional lunch",
				],
			},
			{
				day: 4,
				title: "Inca Trail Day 1",
				description: "Embark on the Inca Trail.",
				activities: [
					"Trail start",
					"Wayllabamba camp",
					"Andean landscapes",
				],
			},
			{
				day: 5,
				title: "Inca Trail Day 2",
				description: "Continue on the Inca Trail.",
				activities: [
					"Dead Woman's Pass",
					"Cloud forest",
					"Pacaymayo camp",
				],
			},
			{
				day: 6,
				title: "Inca Trail Day 3",
				description: "Continue on the Inca Trail.",
				activities: [
					"Wiñay Wayna ruins",
					"Sun Gate arrival",
					"Machu Picchu",
				],
			},
			{
				day: 7,
				title: "Machu Picchu Exploration",
				description: "Discover Machu Picchu.",
				activities: [
					"Sunrise viewing",
					"Guided tour",
					"Return to Cusco",
				],
			},
			{
				day: 8,
				title: "Departure",
				description: "Say goodbye to Peru and Lima.",
				activities: [
					"Flight to Lima",
					"International connection",
					"Journey home",
				],
			},
		],
		included: [
			"Domestic Flights",
			"Hotels",
			"Camping",
			"All Meals",
			"Guides",
			"Permits",
		],
	},
	{
		id: "maldives-luxury",
		title: "Maldives Luxury Escape",
		destination: "Private Island Resort",
		duration: "6D/5N",
		price: 4999,
		originalPrice: 5999,
		rating: 4.7,
		image: "/images/maldives-luxury.jpg",
		highlights: [
			"Overwater villa",
			"Private butler service",
			"Dolphin watching",
			"Underwater restaurant",
		],
		itinerary: [
			{
				day: 1,
				title: "Paradise Arrival",
				description: "Welcome to the Maldives!",
				activities: [
					"Seaplane transfer",
					"Villa check-in",
					"Sunset cocktails",
				],
			},
			{
				day: 2,
				title: "Ocean Adventures",
				description: "Explore the underwater world.",
				activities: [
					"Snorkeling excursion",
					"Dolphin watching",
					"Beach picnic",
				],
			},
			{
				day: 3,
				title: "Underwater World",
				description: "Explore the underwater world.",
				activities: [
					"Scuba diving",
					"Underwater restaurant",
					"Spa treatment",
				],
			},
			{
				day: 4,
				title: "Island Exploration",
				description: "Discover the island's natural wonders.",
				activities: [
					"Local island visit",
					"Cultural experience",
					"Fishing trip",
				],
			},
			{
				day: 5,
				title: "Relaxation Day",
				description: "Relax and rejuvenate.",
				activities: [
					"Private beach",
					"Couples massage",
					"Farewell dinner",
				],
			},
			{
				day: 6,
				title: "Departure",
				description: "Say goodbye to the Maldives.",
				activities: [
					"Villa checkout",
					"Seaplane to airport",
					"International flight",
				],
			},
		],
		included: [
			"Seaplane Transfers",
			"Overwater Villa",
			"All Meals",
			"Activities",
			"Spa Credits",
		],
	},
];

export const experienceCategories: ExperienceCategory[] = [
	{
		id: "adv",
		title: "Adventure",
		icon: Mountain,
		description: "Thrilling expeditions and adrenaline-pumping activities",
		color: "bg-orange-500",
		experiences: [
			{
				id: "adv-exp-1",
				name: "Himalayan Trekking",
				location: "Nepal",
				image: "/images/himalayan.jpg",
				description: "Embark on a thrilling trek through the Himalayas",
				duration: "14 days",
				destinations: [
					"Everest Base Camp",
					"Annapurna Circuit",
					"Langtang Valley",
				],
			},
			{
				id: "adv-exp-2",
				name: "Patagonia Hiking",
				location: "Chile & Argentina",
				image: "/images/patagonia.jpg",
				description: "Discover the stunning landscapes of Patagonia",
				duration: "10 days",
				destinations: [
					"Torres del Paine",
					"El Chaltén",
					"Perito Moreno Glacier",
				],
			},
			{
				id: "adv-exp-3",
				name: "Amazon Expedition",
				location: "Brazil",
				image: "/images/amazon.jpg",
				description:
					"Embark on a thrilling expedition through the Amazon",
				duration: "7 days",
				destinations: [
					"Manaus",
					"Anavilhanas National Park",
					"Meeting of Waters",
				],
			},
		],
	},
	{
		id: "cul",
		title: "Culture",
		icon: Camera,
		description: "Immerse yourself in local traditions and heritage",
		color: "bg-purple-500",
		experiences: [
			{
				id: "cul-exp-1",
				name: "Rajasthan Heritage",
				location: "India",
				image: "/images/rajasthan.jpg",
				description: "Experience the rich heritage of Rajasthan",
				duration: "12 days",
				destinations: ["Jaipur", "Udaipur", "Jodhpur"],
			},
			{
				id: "cul-exp-2",
				name: "Moroccan Souks",
				location: "Morocco",
				image: "/images/moroccan.jpg",
				description: "Discover the vibrant souks of Morocco",
				duration: "8 days",
				destinations: ["Marrakech", "Fes", "Chefchaouen"],
			},
			{
				id: "cul-exp-3",
				name: "Angkor Temples",
				location: "Cambodia",
				image: "/images/angkor.jpg",
				description: "Visit the ancient temples of Angkor Wat",
				duration: "6 days",
				destinations: ["Angkor Wat", "Bayon Temple", "Ta Prohm"],
			},
		],
	},
	{
		id: "wild",
		title: "Wildlife",
		icon: TreePine,
		description: "Close encounters with nature's magnificent creatures",
		color: "bg-green-500",
		experiences: [
			{
				id: "wild-exp-1",
				name: "African Safari",
				location: "Kenya & Tanzania",
				image: "/images/african.jpg",
				description: "Embark on a thrilling safari adventure",
				duration: "9 days",
				destinations: ["Serengeti", "Maasai Mara", "Ngorongoro Crater"],
			},
			{
				id: "wild-exp-2",
				name: "Galapagos Islands",
				location: "Ecuador",
				image: "/images/galapagos.jpg",
				description: "Discover the Galapagos Islands",
				duration: "8 days",
				destinations: [
					"Santa Cruz Island",
					"Isabela Island",
					"Bartolomé Island",
				],
			},
			{
				id: "wild-exp-3",
				name: "Borneo Orangutans",
				location: "Malaysia",
				image: "/images/borneo.jpg",
				description: "Meet the Orangutans of Borneo",
				duration: "7 days",
				destinations: ["Sepilok", "Kinabatangan River", "Danum Valley"],
			},
		],
	},
	{
		id: "beach",
		title: "Beach & Islands",
		icon: Waves,
		description: "Pristine coastlines and tropical paradises",
		color: "bg-blue-500",
		experiences: [
			{
				id: "beach-exp-1",
				name: "Seychelles Paradise",
				location: "Seychelles",
				image: "/images/seychelles.jpg",
				description: "Relax on the pristine beaches of Seychelles",
				duration: "7 days",
				destinations: ["Mahé", "Praslin", "La Digue"],
			},
			{
				id: "beach-exp-2",
				name: "Fiji Island Hopping",
				location: "Fiji",
				image: "/images/fiji.jpg",
				description: "Hop from island to island in Fiji",
				duration: "10 days",
				destinations: ["Nadi", "Yasawa Islands", "Mamanuca Islands"],
			},
			{
				id: "beach-exp-3",
				name: "Bora Bora Luxury",
				location: "French Polynesia",
				image: "/images/bora-bora.jpg",
				description: "Experience the luxury of Bora Bora",
				duration: "6 days",
				destinations: [
					"Bora Bora Lagoon",
					"Mount Otemanu",
					"Matira Beach",
				],
			},
		],
	},
	{
		id: "family",
		title: "Family",
		icon: Users,
		description: "Perfect adventures for the whole family",
		color: "bg-pink-500",
		experiences: [
			{
				id: "family-exp-1",
				name: "Costa Rica Family",
				location: "Costa Rica",
				image: "/images/costa-rica.jpg",
				description:
					"Fun-filled family adventures in nature-rich Costa Rica",
				duration: "8 days",
				destinations: [
					"Arenal Volcano",
					"Monteverde",
					"Manuel Antonio",
				],
			},
			{
				id: "family-exp-2",
				name: "Iceland Family Fun",
				location: "Iceland",
				image: "/images/iceland.jpg",
				description:
					"Explore Iceland's natural wonders with the whole family",
				duration: "7 days",
				destinations: ["Reykjavik", "Golden Circle", "Blue Lagoon"],
			},
			{
				id: "family-exp-3",
				name: "Thailand Family",
				location: "Thailand",
				image: "/images/thailand.jpg",
				description:
					"Cultural and beach adventures in Thailand for all ages",
				duration: "10 days",
				destinations: ["Bangkok", "Chiang Mai", "Phuket"],
			},
		],
	},
	{
		id: "nightlife",
		title: "Nightlife",
		icon: Music,
		description: "Vibrant cities and unforgettable nights",
		color: "bg-indigo-500",
		experiences: [
			{
				id: "nightlife-exp-1",
				name: "Ibiza Party Scene",
				location: "Spain",
				image: "/images/ibiza.jpg",
				description:
					"Dance all night in Europe's top party destination",
				duration: "5 days",
				destinations: ["Ibiza Town", "Playa d'en Bossa", "San Antonio"],
			},
			{
				id: "nightlife-exp-2",
				name: "Bangkok Nights",
				location: "Thailand",
				image: "/images/bangkok.jpg",
				description: "Experience Bangkok's electric nightlife",
				duration: "6 days",
				destinations: ["Khao San Road", "Sukhumvit", "RCA"],
			},
			{
				id: "nightlife-exp-3",
				name: "Rio Carnival",
				location: "Brazil",
				image: "/images/rio.jpg",
				description: "Join the world’s biggest carnival celebration",
				duration: "7 days",
				destinations: ["Sambadrome", "Copacabana", "Lapa District"],
			},
		],
	},
];

export const faqs: Faqs[] = [
	{
		id: "faq-1",
		question: "How far in advance should I book my trip?",
		answer: "We recommend booking 3-6 months in advance for international trips and 1-3 months for domestic travel. This ensures better availability and pricing for flights and accommodations.",
	},
	{
		id: "faq-2",
		question: "Do you offer travel insurance?",
		answer: "Yes, we partner with leading travel insurance providers to offer comprehensive coverage options. We highly recommend travel insurance for all international trips.",
	},
	{
		id: "faq-3",
		question: "Can you help with visa requirements?",
		answer: "Our team provides detailed visa information and can assist with the application process for most destinations. We'll ensure you have all necessary documentation.",
	},
	{
		id: "faq-4",
		question: "What if I need to cancel or change my trip?",
		answer: "Our flexible booking policies allow for changes and cancellations with varying terms depending on the package. We'll work with you to minimize any fees and find the best solution.",
	},
	{
		id: "faq-5",
		question: "Do you offer group travel discounts?",
		answer: "Yes, we offer group discounts for larger groups. Please contact us for details and availability.",
	},
	{
		id: "faq-6",
		question: "Is there a cancellation policy?",
		answer: "Yes, we have a cancellation policy in place. Please check our website for details. We'll work with you to minimize any fees and find the best solution.",
	},
	{
		id: "faq-7",
		question: "Can I book a trip with a specific destination?",
		answer: "Yes, we offer personalized packages for specific destinations. Please contact us for availability and pricing.",
	},
];

export const contactInfo: ContactInfo[] = [
	{
		icon: MapPin,
		title: "Visit Us",
		details: [
			"123 Travel Street",
			"Adventure City, AC 12345",
			"United States",
		],
	},
	{
		icon: Phone,
		title: "Call Us",
		details: [
			"+1 (555) 123-4567",
			"+1 (555) 987-6543",
			"24/7 Emergency Line",
		],
	},
	{
		icon: Mail,
		title: "Email Us",
		details: [
			"hello@parenthesis.com",
			"support@parenthesis.com",
			"bookings@parenthesis.com",
		],
	},
	{
		icon: Clock,
		title: "Business Hours",
		details: [
			"Mon - Fri: 9:00 AM - 7:00 PM",
			"Saturday: 10:00 AM - 6:00 PM",
			"Sunday: 11:00 AM - 5:00 PM",
		],
	},
];

export const steps: Step[] = [
	{ number: 1, title: "Select your trip", icon: Calendar },
	{ number: 2, title: "Enter personal details", icon: Users },
	{ number: 3, title: "Select preferences", icon: MapPin },
	{ number: 4, title: "Payment information", icon: CreditCard },
	{ number: 5, title: "Confirmation", icon: Check },
];

export const addOns: AddOn[] = [
	{
		id: "insurance",
		name: "Travel Insurance",
		price: 149,
		description: "Comprehensive coverage for your trip",
	},
	{
		id: "visa",
		name: "Visa Assistance",
		price: 99,
		description: "Help with visa applications and documentation",
	},
	{
		id: "transfers",
		name: "Airport Transfers",
		price: 79,
		description: "Private transfers to and from airport",
	},
	{
		id: "guide",
		name: "Private Guide",
		price: 299,
		description: "Personal guide for cultural experiences",
	},
];

export const countries: Country[] = [
	{
		id: 1,
		code: "us",
		name: "United States",
	},
	{
		id: 2,
		code: "ca",
		name: "Canada",
	},
	{
		id: 3,
		code: "mx",
		name: "Mexico",
	},
	{
		id: 4,
		code: "es",
		name: "Spain",
	},
	{
		id: 5,
		code: "fr",
		name: "France",
	},
	{
		id: 6,
		code: "it",
		name: "Italy",
	},
	{
		id: 7,
		code: "de",
		name: "Germany",
	},
	{
		id: 8,
		code: "uk",
		name: "United Kingdom",
	},
	{
		id: 9,
		code: "au",
		name: "Australia",
	},
	{
		id: 10,
		code: "nz",
		name: "New Zealand",
	},
];

export const values: Value[] = [
	{
		icon: Target,
		title: "Our Mission",
		description:
			"To create extraordinary travel experiences that connect people with the world's most beautiful destinations while respecting local cultures and environments.",
	},
	{
		icon: Eye,
		title: "Our Vision",
		description:
			"To be the world's most trusted luxury travel brand, known for crafting personalized journeys that exceed expectations and create lifelong memories.",
	},
	{
		icon: Heart,
		title: "Our Values",
		description:
			"Excellence, authenticity, sustainability, and genuine care for our travelers and the communities we visit guide everything we do.",
	},
];

export const footerLinks = {
	company: [
		{ label: "About Us", href: "/about" },
		{ label: "Our Team", href: "/team" },
		{ label: "Careers", href: "/careers" },
		{ label: "Contact Us", href: "/contact" },
	],
	services: [
		{ label: "Event Planning", href: "/services/planning" },
		{ label: "Venue Booking", href: "/services/venues" },
		{ label: "Virtual Events", href: "/services/virtual" },
		{ label: "Corporate Events", href: "/services/corporate" },
	],
	resources: [
		{ label: "Blog", href: "/blog" },
		{ label: "Guidelines", href: "/guidelines" },
		{ label: "FAQs", href: "/faqs" },
		{ label: "Support", href: "/support" },
	],
};

export const ONBOARDING_FIELDS: OnboardingField[] = [
	{
		key: "phone",
		label: "Phone Number",
		type: "phone",
		required: true,
		placeholder: "+1 (555) 123-4567",
		description: "We'll use this for trip confirmations and emergencies",
		category: "personal",
	},
	{
		key: "location",
		label: "Current Location",
		type: "text",
		required: true,
		placeholder: "New York, NY, USA",
		description: "Your home base for travel planning",
		category: "personal",
	},
	{
		key: "bio",
		label: "About You",
		type: "textarea",
		required: true,
		placeholder: "Tell us about yourself and your travel interests...",
		description: "Share what makes you excited about travel",
		category: "personal",
	},

	{
		key: "travelStyle",
		label: "Travel Style",
		type: "multiselect",
		required: true,
		options: [
			"Adventure",
			"Luxury",
			"Cultural",
			"Beach & Relaxation",
			"Wildlife & Nature",
			"Photography",
			"Food & Culinary",
			"Historical",
			"Spiritual",
			"Solo Travel",
			"Family Travel",
			"Romantic",
		],
		description: "Select all that apply to your travel preferences",
		category: "travel",
	},
	{
		key: "budget",
		label: "Typical Budget Range",
		type: "select",
		required: true,
		options: [
			"Budget ($500-$1,500 per trip)",
			"Mid-range ($1,500-$3,500 per trip)",
			"Luxury ($3,500-$7,500 per trip)",
			"Ultra-luxury ($7,500+ per trip)",
		],
		description: "This helps us recommend suitable packages",
		category: "travel",
	},
	{
		key: "groupSize",
		label: "Preferred Group Size",
		type: "select",
		required: true,
		options: [
			"Solo traveler",
			"Couple (2 people)",
			"Small group (3-6 people)",
			"Large group (7+ people)",
			"Family with children",
		],
		description: "How do you usually travel?",
		category: "travel",
	},
	{
		key: "accommodation",
		label: "Accommodation Preference",
		type: "select",
		required: true,
		options: [
			"Luxury hotels & resorts",
			"Boutique hotels",
			"Mid-range hotels",
			"Vacation rentals",
			"Hostels & budget stays",
			"Unique stays (treehouses, castles, etc.)",
			"Mix of different types",
		],
		description: "What type of accommodation do you prefer?",
		category: "travel",
	},
	{
		key: "dietaryRequirements",
		label: "Dietary Requirements",
		type: "multiselect",
		required: true,
		options: [
			"No restrictions",
			"Vegetarian",
			"Vegan",
			"Gluten-free",
			"Dairy-free",
			"Halal",
			"Kosher",
			"Nut allergies",
			"Other food allergies",
		],
		description: "Help us ensure your meals are perfect",
		category: "preferences",
	},
	{
		key: "interests",
		label: "Travel Interests",
		type: "multiselect",
		required: true,
		options: [
			"Museums & Art",
			"Local Cuisine",
			"Nightlife",
			"Shopping",
			"Outdoor Activities",
			"Water Sports",
			"Mountain Activities",
			"City Exploration",
			"Rural Experiences",
			"Festivals & Events",
			"Architecture",
			"Local Markets",
			"Wellness & Spa",
			"Learning & Workshops",
		],
		description: "What excites you most when traveling?",
		category: "preferences",
	},
];
