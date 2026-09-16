// 🇮🇳 BHARATVERSE — Heritage Database
export const STATES_DATA = {
  telangana: {
    id: "telangana",
    name: "Telangana",
    capital: "Hyderabad",
    tagline: "Land of Kakatiya Glory, Deccan Grandeur & Living Traditions",
    overview: "Telangana presents a mesmerizing fusion of ancient Dravidian architecture, the architectural prowess of the Kakatiya dynasty, and the regal Indo-Islamic deccan heritage of the Qutb Shahi and Asaf Jahi eras.",
    bannerImage: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
    stats: { sites: 14, arts: 18, crafts: 12, festivals: 8 },
    heritageSites: [
      {
        name: "Ramappa Temple (Rudreswara)",
        location: "Palampet, Mulugu District",
        era: "1213 CE (Kakatiya Dynasty)",
        type: "UNESCO World Heritage Site",
        desc: "Renowned for its floating bricks that boast a density lighter than water, intricately carved bracket figures (Madanikas) carved in black basalt, and sandbox foundation technology that withstood earthquakes.",
        badge: "UNESCO 2021"
      },
      {
        name: "Charminar",
        location: "Old City, Hyderabad",
        era: "1591 CE (Qutb Shahi Dynasty)",
        type: "Indo-Islamic Monument",
        desc: "Commissioned by Muhammad Quli Qutb Shah to mark the cessation of a deadly epidemic and commemorate Hyderabad's founding. Features four grand 48.7m minarets and 45 prayer spaces.",
        badge: "National Icon"
      },
      {
        name: "Golconda Fort",
        location: "Hyderabad",
        era: "13th - 16th Century",
        type: "Acoustic Fortress Citadel",
        desc: "World-famous medieval stronghold and diamond trading nexus that produced the Koh-i-Noor and Hope diamonds. Features mind-blowing acoustic architecture where a clap at Fateh Darwaza echoes at Bala Hissar 1km away.",
        badge: "Acoustic Wonder"
      },
      {
        name: "Warangal Thousand Pillar Temple",
        location: "Hanamkonda",
        era: "1163 CE (Rudradeva)",
        type: "Trikuta Kakatiya Temple",
        desc: "Dedicated to Shiva, Vishnu, and Surya. Carved out of star-shaped platforms with monolithic polished basalt pillars and a 6-foot majestic Nandi carved from a single dolerite rock.",
        badge: "Kakatiya Masterpiece"
      }
    ],
    folkArts: [
      {
        name: "Oggu Katha",
        type: "Folk Narrative Ballad",
        desc: "Vibrant storytelling tradition of the Kuruma and Golla communities worshipping Lord Mallanna, performed with the damarukam (drum) and brass cymbals.",
        icon: "🥁"
      },
      {
        name: "Perini Sivatandavam",
        type: "Warrior Dance Form",
        desc: "The Kakatiya dance of warriors performed before marching into battle. Revived in modern times through temple sculpture inscriptions at Ramappa.",
        icon: "⚔️"
      },
      {
        name: "Chindu Bhagavatam",
        type: "Folk Theatre",
        desc: "High-energy traditional street opera incorporating mythological enactments, acrobatics, and colorful facial makeup.",
        icon: "🎭"
      }
    ],
    handicrafts: [
      {
        name: "Pochampally Ikat",
        location: "Yadadri Bhuvanagiri",
        type: "Tie-and-Dye Silk & Cotton (GI Tag)",
        desc: "Ancient double-ikat weaving tradition where warp and weft threads are dyed before weaving to form intricate geometric patterns. UNESCO recognized Pochampally as Best Tourism Village.",
        tag: "GI Tagged"
      },
      {
        name: "Cheriyal Scroll Painting",
        location: "Cheriyal, Siddipet",
        type: "Narrative Canvas Art",
        desc: "Centuries-old folk art painted on khadi cloth prepared with tamarind seed paste and white clay, using pure natural pigments to illustrate local epics.",
        tag: "Endangered Craft"
      },
      {
        name: "Bidriware & Pembarthi Metal Craft",
        location: "Hyderabad & Pembarthi",
        type: "Metal Inlay Art",
        desc: "Exquisite inlaying of pure silver into a blackened alloy of zinc and copper, perfected under the Deccan Sultanates.",
        tag: "GI Tagged"
      }
    ],
    festivals: [
      {
        name: "Bathukamma",
        season: "Autumn (Bhadrapada - Ashwayuja)",
        desc: "Unique floral festival honoring Goddess Gauri, celebrating nature and sisterhood with concentric conical arrangements of seasonal wildflowers like Gunugu and Tangedu.",
        symbol: "🌸"
      },
      {
        name: "Bonalu",
        season: "Monsoon (Ashada Masam)",
        desc: "Thanksgiving folk festival to Goddess Mahakali where women carry decorated brass/earthen pots filled with cooked rice, milk, and jaggery on their heads accompanied by Pothuraju drums.",
        symbol: "🪔"
      },
      {
        name: "Sammakka Saralamma Jatara",
        season: "Biennial (Magha)",
        desc: "Asia's largest tribal congregation held in Medaram forest, honoring the 12th-century mother-daughter tribal warriors who revolted against unjust Kakatiya taxation.",
        symbol: "🏹"
      }
    ],
    cuisine: [
      { name: "Hyderabadi Dum Biryani", desc: "Kacche gosht ki biryani slow-cooked with basmati rice, saffron, and aromatic spices in sealed clay pots." },
      { name: "Sarva Pindi", desc: "Spiced crispy circular pancake made from rice flour, chana dal, peanuts, sesame seeds, and curry leaves cooked in earthen pans." },
      { name: "Qubani Ka Meetha", desc: "Royal Nizami dessert prepared from sun-dried Turkish apricots simmered to rich jam consistency with blanched apricot kernels." }
    ],
    literature: {
      classicalAuthors: ["Bammera Pothana (Sri Maha Bhagavatam)", "Nannaya", "Palkuriki Somanatha"],
      modernPoets: ["Dasharathi Krishnamacharya", "Kaloji Narayana Rao", "C. Narayana Reddy"],
      scriptNote: "Telugu has the second highest number of native speakers in India, renowned as the 'Italian of the East' for all words ending in musical vowels."
    }
  },

  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan",
    capital: "Jaipur",
    tagline: "The Royal Crucible of Forts, Chivalry & Desert Ballads",
    overview: "Land of majestic hilltop forts, vibrant desert folklore, hand block printing, and centuries of Rajput artistry set against the golden dunes of the Thar.",
    bannerImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    stats: { sites: 22, arts: 15, crafts: 20, festivals: 11 },
    heritageSites: [
      { name: "Amber Fort & Palace", location: "Amer, Jaipur", era: "1592 CE", type: "UNESCO Hill Fort", desc: "Famed for its Sheesh Mahal (Mirror Palace) where a single candle illuminates the entire chamber through convex mirrors.", badge: "UNESCO" },
      { name: "Hawa Mahal", location: "Jaipur", era: "1799 CE", type: "Palace of Winds", desc: "Constructed with 953 jharokhas (latticed windows) allowing royal women to observe street festivals unnoticed while enjoying natural Venturi cooling.", badge: "Architectural Icon" },
      { name: "Mehrangarh Fort", location: "Jodhpur", era: "1459 CE", type: "Cliff Fort", desc: "Towering 400 feet above the Blue City, exhibiting cannonball battle scars and peerless museum collections.", badge: "Imposing Citadel" }
    ],
    folkArts: [
      { name: "Kalbelia Dance", type: "UNESCO Intangible Cultural Heritage", desc: "Sensuous, swirling serpent dance performed by the nomadic Kalbelia tribe in black swirling skirts.", icon: "🐍" },
      { name: "Ghoomar", type: "Royal Folk Dance", desc: "Gracious twirling dance performed by Bhil women and historically adopted by Rajput royalty.", icon: "💃" }
    ],
    handicrafts: [
      { name: "Blue Pottery", location: "Jaipur", type: "Glazed Ceramics (GI)", desc: "Unique ceramic art using quartz powder, Fuller's earth, and copper oxide glaze rather than clay.", tag: "GI Tag" },
      { name: "Bagru & Sanganeri Block Print", location: "Jaipur", type: "Vegetable Dye Textile", desc: "Hand-carved teak wood block stamps dipped in natural indigo, turmeric, and madder dyes.", tag: "Ancient Craft" }
    ],
    festivals: [
      { name: "Pushkar Camel Fair", season: "Kartik Purnima", desc: "World's largest desert livestock gathering paired with sacred lake dips and music festivals.", symbol: "🐪" },
      { name: "Desert Festival", season: "February", desc: "Three-day extravaganza among Sam Sand Dunes featuring turban tying and Gair dancers.", symbol: "🏜️" }
    ],
    cuisine: [
      { name: "Dal Baati Churma", desc: "Baked wheat dumplings drowned in pure ghee, served with panchmel dal and sweetened jaggery crumble." },
      { name: "Laal Maas", desc: "Fierce slow-cooked game meat curry infused with Mathania red chilies and garlic." }
    ],
    literature: {
      classicalAuthors: ["Chand Bardai (Prithviraj Raso)", "Mira Bai (Bhakti Padavali)"],
      modernPoets: ["Vijaydan Detha", "Kanhaiyalal Sethia"],
      scriptNote: "Written in Devanagari and Marwari dialect with rich oral Charan balladry."
    }
  },

  tamilnadu: {
    id: "tamilnadu",
    name: "Tamil Nadu",
    capital: "Chennai",
    tagline: "Cradle of Classical Dravidian Temples, Carnatic Music & Sangam Literature",
    overview: "Home to one of the world's oldest surviving classical languages, the soaring granite gopurams of the Great Living Chola Temples, and timeless temple dance traditions.",
    bannerImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    stats: { sites: 28, arts: 16, crafts: 18, festivals: 10 },
    heritageSites: [
      { name: "Brihadisvara Temple", location: "Thanjavur", era: "1010 CE (Raja Raja Chola I)", type: "UNESCO World Heritage", desc: "All-granite masterpiece with an 80-tonne monolithic cupola atop the vimana, built without mortar using interlock joints.", badge: "UNESCO" },
      { name: "Meenakshi Amman Temple", location: "Madurai", era: "Ancient - 16th Century", type: "Dravidian Temple Complex", desc: "14 monumental gopurams encrusted with thousands of stucco sculptures and the Hall of Thousand Pillars.", badge: "Living Heritage" },
      { name: "Shore Temple & Pancha Rathas", location: "Mamallapuram", era: "7th-8th Century (Pallavas)", type: "UNESCO Rock-cut Monoliths", desc: "Oceanfront structural temples carved directly from shore boulders facing the Bay of Bengal.", badge: "UNESCO" }
    ],
    folkArts: [
      { name: "Bharatanatyam", type: "Classical Dance", desc: "Ancient temple dance system codifying Bhava (emotion), Raga (melody), and Tala (rhythm) from the Natyashastra.", icon: "🩰" },
      { name: "Karagattam & Karakattam", type: "Folk Balancing Dance", desc: "Balancing decorated brass pots topped with floral cones on heads while stepping to fast drumbeats.", icon: "🏺" }
    ],
    handicrafts: [
      { name: "Kanchipuram Silk Sarees", location: "Kanchipuram", type: "Pure Mulberry & Zari (GI)", desc: "Woven with heavy silver wire dipped in 24k gold, using the Korvai interlocking technique where the pallu is woven separately.", tag: "GI Tag" },
      { name: "Thanjavur Paintings", location: "Thanjavur", type: "Gold Foil & Gem Inlay Art", desc: "Sacred icon paintings rendered on teak boards adorned with 22k gold foil and semi-precious Jaipur stones.", tag: "GI Tag" }
    ],
    festivals: [
      { name: "Pongal (Tai Pongal)", season: "Mid-January (Harvest)", desc: "Four-day solar harvest thanksgiving where boiling rice boils over clay pots to chants of 'Pongalo Pongal!'.", symbol: "🌾" },
      { name: "Thyagaraja Aradhana", season: "Pushya Bahula Panchami", desc: "Grand Carnatic congregation in Thiruvaiyaru where thousands of musicians sing Pancharatna Kritis in unison.", symbol: "🎶" }
    ],
    cuisine: [
      { name: "Chettinad Kozhi", desc: "Aromatic spicy chicken curry roasted with kalpasi (black stone flower), star anise, and freshly ground peppercorns." },
      { name: "Idli, Vada & Filter Coffee", desc: "Fermented steamed lentil-rice cakes accompanied by chicory-infused decoction coffee in brass dabarah-tumblers." }
    ],
    literature: {
      classicalAuthors: ["Thiruvalluvar (Thirukkural)", "Ilango Adigal (Silappathikaram)", "Avvaiyar"],
      modernPoets: ["Subramania Bharati", "Bharathidasan"],
      scriptNote: "Tamil has recorded epigraphy dating back over 2,500 years with Tamil-Brahmi inscriptions."
    }
  },

  maharashtra: {
    id: "maharashtra",
    name: "Maharashtra",
    capital: "Mumbai",
    tagline: "Land of Maratha Fortresses, Ancient Cave Sanctuaries & Bhakti Saints",
    overview: "From the world-renowned rock-cut rock architectures of Ajanta and Ellora to the rugged Sahyadri hill forts of Chhatrapati Shivaji Maharaj, Maharashtra embodies spiritual devotion and martial valour.",
    bannerImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    stats: { sites: 20, arts: 14, crafts: 15, festivals: 9 },
    heritageSites: [
      { name: "Ajanta & Ellora Caves", location: "Chhatrapati Sambhajinagar", era: "2nd BCE - 10th CE", type: "UNESCO World Heritage", desc: "Ellora's Kailasa Temple (Cave 16) is the planet's largest monolithic rock-cut monument, sculpted top-down out of 200,000 tonnes of solid basalt rock.", badge: "UNESCO" },
      { name: "Raigad Fort", location: "Raigad", era: "1674 CE", type: "Maratha Capital Citadel", desc: "Impregnable hilltop capital of Chhatrapati Shivaji Maharaj perched 2,700 ft in the Sahyadris.", badge: "Maratha Heritage" }
    ],
    folkArts: [
      { name: "Lavani", type: "Folk Musical Theatre", desc: "Sensual, dynamic rhythm played to the powerful beats of the Dholki, sung in traditional Marathi poetry.", icon: "🪘" },
      { name: "Warli Painting", type: "Tribal Graphic Art", desc: "Minimalist tribal mural art using white rice flour paste on ochre clay walls, depicting harmony with nature using circles, triangles, and squares.", icon: "🎨" }
    ],
    handicrafts: [
      { name: "Paithani Saree", location: "Paithan", type: "Silk with Peacock Zari (GI)", desc: "Royal silk saree featuring hand-woven gold borders and the signature kaleidoscopic peacock pallu (Mor-bangadi).", tag: "GI Tag" }
    ],
    festivals: [
      { name: "Ganesh Chaturthi", season: "Bhadrapada (Sept)", desc: "Grand 10-day community spectacle with elaborate clay murtis, Dhol-Tasha pathaks, and immersion processions.", symbol: "🐘" }
    ],
    cuisine: [
      { name: "Puran Poli", desc: "Delicate flatbread stuffed with sweet jaggery-infused chana dal and nutmeg, brushed with clarified butter." },
      { name: "Misal Pav", desc: "Spicy sprout curry topped with farsan, onions, lemon, and served with warm bakery pav." }
    ],
    literature: {
      classicalAuthors: ["Sant Dnyaneshwar (Dnyaneshwari)", "Sant Tukaram (Abhangas)"],
      modernPoets: ["Kusumagraj", "Pu La Deshpande"],
      scriptNote: "Written in Devanagari script, historically also in the fast-writing cursive Modi script."
    }
  },

  westbengal: {
    id: "westbengal",
    name: "West Bengal",
    capital: "Kolkata",
    tagline: "Epicentre of the Bengal Renaissance, Terracotta Temples & Baul Mysticism",
    overview: "Land of Nobel Laureate Rabindranath Tagore, Durga Puja UNESCO celebration, intricate terracotta facades of Bishnupur, and the wandering Baul philosophy.",
    bannerImage: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1200&q=80",
    stats: { sites: 18, arts: 22, crafts: 19, festivals: 12 },
    heritageSites: [
      { name: "Bishnupur Terracotta Temples", location: "Bankura", era: "17th-18th Century", type: "Malla Dynasty Architecture", desc: "Curved Bangla-roofed temples covered in millions of carved terracotta burnt-clay tiles illustrating the Ramayana and Bhagavata.", badge: "Terracotta Wonder" },
      { name: "Victoria Memorial & Howrah Bridge", location: "Kolkata", era: "1921 CE", type: "Colonial Architectural Landmark", desc: "Built with white Makrana marble housing an immense museum of India's colonial transition.", badge: "Heritage Monument" }
    ],
    folkArts: [
      { name: "Chhau Dance", type: "Martial Mask Dance (UNESCO)", desc: "Acrobatic martial dance performed with vibrant hand-crafted clay and paper-maché masks depicting epic warfare.", icon: "👺" },
      { name: "Baul Sangeet", type: "Mystic Song Tradition (UNESCO)", desc: "Nomadic philosopher-singers playing the Ektara and Dubki, singing of human oneness and universal truth.", icon: "🪕" }
    ],
    handicrafts: [
      { name: "Dokra Metal Casting", location: "Bikna, Bankura", type: "Lost-wax Bronze Casting", desc: "4,000-year-old non-ferrous metal casting lineage tracing unbroken roots to Mohenjo-daro's Dancing Girl.", tag: "Prehistoric Lineage" },
      { name: "Jamdani & Baluchari Sarees", location: "Murshidabad / Nadia", type: "Mythological Silk Weaving", desc: "Silk weaves with intricate pallus illustrating horse-drawn carriages and courtly epics.", tag: "GI Tag" }
    ],
    festivals: [
      { name: "Durga Puja", season: "Ashwin (Autumn)", desc: "Inscribed in UNESCO's Representative List of Intangible Cultural Heritage of Humanity, transforming cities into open-air public art galleries.", symbol: "🔱" }
    ],
    cuisine: [
      { name: "Shorshe Ilish", desc: "Hilsa fish gently steamed with pungent yellow and black mustard paste, green chilies, and cold-pressed mustard oil." },
      { name: "Rasgulla & Sandesh", desc: "Spongy cottage-cheese spheres simmered in light sugar syrup, invented in Bengal in the 19th century." }
    ],
    literature: {
      classicalAuthors: ["Rabindranath Tagore (Gitanjali)", "Kazi Nazrul Islam", "Bankim Chandra Chattopadhyay (Vande Mataram)"],
      modernPoets: ["Jibanananda Das", "Sarat Chandra Chattopadhyay"],
      scriptNote: "Bengali script is an eastern neo-Brahmic script renowned for its fluid curvature."
    }
  },

  karnataka: {
    id: "karnataka",
    name: "Karnataka",
    capital: "Bengaluru",
    tagline: "Realm of Hoysala Filigree, Vijayanagara Imperial Ruins & Yakshagana",
    overview: "From the majestic boulder-strewn imperial capital of Hampi to the soapstone lace-carved temples of Belur and Halebidu, Karnataka bridges empires and artistic pinnacles.",
    bannerImage: "https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=1200&q=80",
    stats: { sites: 25, arts: 17, crafts: 16, festivals: 9 },
    heritageSites: [
      { name: "Group of Monuments at Hampi", location: "Vijayanagara", era: "14th-16th Century", type: "UNESCO World Heritage Site", desc: "Ruins of the sprawling Vijayanagara Empire with the iconic Stone Chariot, musical pillars of Vittala Temple, and riverside bazaars.", badge: "UNESCO" },
      { name: "Sacred Ensembles of the Hoysalas", location: "Belur & Halebidu", era: "12th Century", type: "UNESCO 2023", desc: "Carved from chloritic schist soapstone with astronomical filigree detail depicting every feather, jewel, and fingernail of celestial dancers.", badge: "UNESCO 2023" }
    ],
    folkArts: [
      { name: "Yakshagana", type: "Traditional Theatre & Dance", desc: "All-night coastal musical theatre featuring colossal headdresses (Mudi), vibrant facial paint, and thunderous Chande percussion.", icon: "👑" },
      { name: "Dollu Kunitha", type: "Drum Dance", desc: "Acrobatic drumming dance performed with heavy lacquered drums strapped to dancers' chests.", icon: "🥁" }
    ],
    handicrafts: [
      { name: "Channapatna Wooden Toys", location: "Ramanagara", type: "Lacquered Ivory Wood (GI)", desc: "Ecological wooden toys colored using natural vegetable lacquers (turmeric, kumkum, indigo), promoted since Tipu Sultan's reign.", tag: "GI Tag" },
      { name: "Mysore Sandalwood & Silk", location: "Mysuru", type: "Pure Mulberry & Essential Oil", desc: "Centuries-old royal industry famous for pure gold zari Mysore silk sarees and aromatic carvings.", tag: "GI Tag" }
    ],
    festivals: [
      { name: "Mysuru Dasara", season: "Navaratri (Ashwayuja)", desc: "400-year-old royal state festival where Mysore Palace is illuminated by 100,000 bulbs and Goddess Chamundeshwari processes on a golden howdah atop a decorated elephant.", symbol: "🏰" }
    ],
    cuisine: [
      { name: "Bisi Bele Bath", desc: "Wholesome spiced rice and lentil dish cooked with seasonal vegetables, tamarind, and nutmeg-spiced masala." },
      { name: "Mysore Pak", desc: "Melt-in-mouth confection created in the royal kitchens of the Wadiyars from gram flour, desi ghee, and caramelized sugar." }
    ],
    literature: {
      classicalAuthors: ["Pampa", "Ranna", "Ponna", "Basaveshwara (Vachana Sahitya)"],
      modernPoets: ["Kuvempu", "D.R. Bendre"],
      scriptNote: "Kannada script evolved from the 5th-century Kadamba script and shares deep phonetic kinship with Telugu."
    }
  }
};

// Category directory for Heritage Explorer
export const HERITAGE_CATALOG = [
  {
    id: "charminar",
    title: "Charminar",
    state: "Telangana",
    category: "Monuments",
    era: "Medieval (1591 CE)",
    type: "Indo-Islamic Arch",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
    desc: "The monumental four-arched symbol of Hyderabad featuring four 48.7-meter-tall minarets, stucco flourishes, and an ancient mosque on the upper terrace.",
    highlights: ["4 Grand Arches", "Stucco Balconies", "Upper Floor Mosque", "Historic Charkaman Surroundings"]
  },
  {
    id: "ramappa",
    title: "Ramappa Temple",
    state: "Telangana",
    category: "Monuments",
    era: "Medieval (1213 CE)",
    type: "Kakatiya Temple",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    desc: "UNESCO World Heritage site known as the only temple in India named after its sculptor, Ramappa. Engineered with porous floating bricks and sandbox earthquake foundation.",
    highlights: ["Floating Bricks", "Madanika Bracket Carvings", "Earthquake Sandbox Base", "UNESCO World Heritage"]
  },
  {
    id: "hampi",
    title: "Stone Chariot & Vijayanagara Ruins",
    state: "Karnataka",
    category: "Monuments",
    era: "Medieval (15th Century)",
    type: "Imperial Citadel",
    image: "https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=800&q=80",
    desc: "The sprawling boulder-strewn capital of the Vijayanagara Empire with the iconic monolithic stone chariot shrine dedicated to Garuda.",
    highlights: ["Musical Pillars", "Monolithic Chariot", "Tungabhadra Ghats", "UNESCO Site"]
  },
  {
    id: "brihadisvara",
    title: "Brihadisvara Temple",
    state: "Tamil Nadu",
    category: "Monuments",
    era: "Classical Chola (1010 CE)",
    type: "Dravidian Temple",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    desc: "The masterwork of Raja Raja Chola I built entirely of granite without mortar. The vimana tower rises 66 meters crowned with an 80-tonne single granite capstone.",
    highlights: ["All Granite Architecture", "80-Tonne Monolithic Kumbam", "Chola Frescoes", "Great Living Chola Temple"]
  },
  {
    id: "ajanta_ellora",
    title: "Kailasa Temple at Ellora",
    state: "Maharashtra",
    category: "Monuments",
    era: "Ancient (8th Century CE)",
    type: "Rock-cut Monolith",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    desc: "Cave 16 at Ellora is the largest monolithic rock excavation in world history, carved vertically downward from the cliff top out of solid volcanic basalt.",
    highlights: ["Top-down excavation", "Zero error margin", "Over 200,000 tons rock removed", "Rashtrakuta dynasty"]
  },
  {
    id: "bharatanatyam",
    title: "Bharatanatyam Dance Tradition",
    state: "Tamil Nadu",
    category: "Performing Arts",
    era: "Ancient (Natyashastra)",
    type: "Classical Dance",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    desc: "One of the world's most sophisticated dance systems, originating from the temple dancers (Devadasis) with rigorous geometric adavus and emotive abhinaya.",
    highlights: ["Bha-Ra-Ta (Bhava, Raga, Tala)", "Aramandi basic posture", "Mudra hand gestures", "Nattuvangam rhythm"]
  },
  {
    id: "perini",
    title: "Perini Sivatandavam",
    state: "Telangana",
    category: "Performing Arts",
    era: "Medieval (Kakatiya Era)",
    type: "Warrior Dance",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    desc: "Kakatiya warrior dance dedicated to Lord Shiva, danced by soldiers to stimulate martial ecstasy before heading to the battlefield.",
    highlights: ["Dance of Warriors", "Revived by Nataraja Ramakrishna", "Depicted on Ramappa Pillars", "Raw percussive energy"]
  },
  {
    id: "pochampally",
    title: "Pochampally Ikat Weaving",
    state: "Telangana",
    category: "Traditional Arts",
    era: "Ancient / Medieval",
    type: "Textile Craft",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    desc: "The geometric art of Pagdu Bandhu (tie-and-dye) where master artisans dye warp and weft before weaving to produce sharp diamond motifs on silk and cotton.",
    highlights: ["Double Ikat process", "GI Tagged", "UNESCO Best Tourism Village", "Natural vegetable dyes"]
  },
  {
    id: "warli",
    title: "Warli Tribal Art",
    state: "Maharashtra",
    category: "Traditional Arts",
    era: "Ancient (3000 BCE roots)",
    type: "Folk Painting",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    desc: "Minimalist tribal mural paintings executed by the Warli community using white rice flour on mud walls to portray the circle of life and the Tarpa dance.",
    highlights: ["Circle, Triangle, Square motifs", "Tarpa spiral dance", "Harmony with nature", "Ritual wall murals"]
  },
  {
    id: "bathukamma",
    title: "Bathukamma Floral Festival",
    state: "Telangana",
    category: "Festivals",
    era: "Centuries-old",
    type: "Nature Celebration",
    image: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80",
    desc: "State festival of Telangana celebrating ecological biodiversity with 7-layered conical arrangements of medicinal wildflowers like Gunugu and Tangedu.",
    highlights: ["Floral Architecture", "Women empowerment & songs", "Medicinal water rejuvenation", "Conical flower towers"]
  },
  {
    id: "ayurveda",
    title: "Ancient Indian Sciences & Ayurveda",
    state: "National",
    category: "Knowledge",
    era: "Vedic (1500 BCE)",
    type: "Holistic Medicine",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    desc: "System of traditional medicine based on the balance of the Tridoshas (Vata, Pitta, Kapha) documented in the Charaka and Sushruta Samhitas, including early plastic surgery.",
    highlights: ["Tridosha physiology", "Sushruta surgical instruments", "Plant pharmacology", "Holistic preventative health"]
  }
];
