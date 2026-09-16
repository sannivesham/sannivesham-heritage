// 🎮 BHARATVERSE — Culture Quest Gamified Learning System
export const QUEST_LEVELS = [
  {
    level: 1,
    title: "Know India",
    subtitle: "Foundations of Indian Civilisation",
    requiredXp: 0,
    icon: "🇮🇳",
    badgeReward: "India Explorer"
  },
  {
    level: 2,
    title: "Explore Your State",
    subtitle: "Regional Heritage & Architecture",
    requiredXp: 150,
    icon: "🗺️",
    badgeReward: "State Custodian"
  },
  {
    level: 3,
    title: "Discover Traditions",
    subtitle: "Performing Arts, Crafts & Textiles",
    requiredXp: 350,
    icon: "🎭",
    badgeReward: "Culture Explorer"
  },
  {
    level: 4,
    title: "Become a Heritage Scholar",
    subtitle: "Ancient Sciences, Epics & Architecture",
    requiredXp: 600,
    icon: "📚",
    badgeReward: "Heritage Scholar"
  },
  {
    level: 5,
    title: "Bharat Heritage Champion",
    subtitle: "Living Heritage, Living Wisdom",
    requiredXp: 950,
    icon: "🏆",
    badgeReward: "Bharat Heritage Champion"
  }
];

export const QUEST_QUESTIONS = [
  // LEVEL 1: Know India
  {
    id: "q1",
    level: 1,
    category: "Architecture",
    question: "Which unique engineering feature allows the 13th-century Ramappa Temple in Telangana to survive earthquakes?",
    options: [
      { key: "A", text: "Deep iron pillars driven 50 meters down" },
      { key: "B", text: "Sandbox foundation technique and floating lightweight bricks", correct: true },
      { key: "C", text: "Solid cement bonding imported from Rome" },
      { key: "D", text: "Flexible wooden interlocking joints" }
    ],
    xp: 50,
    explanation: "Ramappa Temple was engineered with a sandbox foundation (a trench filled with sand, clay, and jaggery) that acts as a natural shock absorber during seismic tremors, and its super-light bricks float on water!",
    source: "Archaeological Survey of India (ASI) & UNESCO Citation"
  },
  {
    id: "q2",
    level: 1,
    category: "Monuments",
    question: "Why was Charminar in Hyderabad built in 1591 by Sultan Muhammad Quli Qutb Shah?",
    options: [
      { key: "A", text: "As a military defense garrison against invaders" },
      { key: "B", text: "To mark the victory in a major war" },
      { key: "C", text: "To commemorate the end of a deadly plague and mark the founding of Hyderabad", correct: true },
      { key: "D", text: "As a royal summer palace away from Golconda" }
    ],
    xp: 50,
    explanation: "Muhammad Quli Qutb Shah prayed for the relief of his city from a devastating plague and built the Charminar at the spot where he offered his prayer, commemorating the founding of Hyderabad.",
    source: "State Archives and Research Institute of Telangana"
  },
  {
    id: "q3",
    level: 1,
    category: "Festivals",
    question: "Bathukamma, the colorful cultural festival of Telangana, is primarily celebrated through what unique medium?",
    options: [
      { key: "A", text: "Carving stone miniature idols" },
      { key: "B", text: "Concentric floral conical towers of seasonal medicinal flowers", correct: true },
      { key: "C", text: "Lighting a thousand clay lamps in rivers" },
      { key: "D", text: "Flying hand-painted paper kites" }
    ],
    xp: 50,
    explanation: "Bathukamma features concentric arrangements of local wildflowers like Gunugu (Celosia) and Tangedu (Cassia auriculata) which possess natural antibacterial and purifying qualities.",
    source: "Telangana Department of Language and Culture"
  },

  // LEVEL 2: Explore Your State
  {
    id: "q4",
    level: 2,
    category: "Architecture",
    question: "Identify the architectural style: characterized by high pyramidal Vimanas, pillared Mandapas, and soaring perimeter Gopurams.",
    options: [
      { key: "A", text: "Nagara Style" },
      { key: "B", text: "Dravida Style", correct: true },
      { key: "C", text: "Vesara Style" },
      { key: "D", text: "Indo-Islamic Style" }
    ],
    xp: 60,
    explanation: "The Dravida temple style, perfected by the Pallavas, Cholas, Pandyas, and Vijayanagara rulers, features stepped pyramidal vimanas and monumental gatehouse gopurams.",
    source: "Ancient Indian Architecture Reference Guide, ASI"
  },
  {
    id: "q5",
    level: 2,
    category: "Forts",
    question: "At Golconda Fort, what acoustic phenomenon allowed sentinels to communicate across the stronghold?",
    options: [
      { key: "A", text: "Underground brass speaking pipes" },
      { key: "B", text: "A handclap at Fateh Darwaza reverberates clearly at Bala Hissar, 1 km away", correct: true },
      { key: "C", text: "Echo chambers lined with pure gold foil" },
      { key: "D", text: "Trained pigeons carrying mirror reflections" }
    ],
    xp: 60,
    explanation: "The dome of the grand portico at Fateh Darwaza was precisely calculated so sound waves converge and travel upwards along parabolic vaults all the way to the royal summit pavilion.",
    source: "Acoustical Heritage Studies, IIT Hyderabad"
  },
  {
    id: "q6",
    level: 2,
    category: "Crafts",
    question: "Which GI-tagged textile from Telangana is created through the complex 'Pagdu Bandhu' double-ikat tie-dye technique?",
    options: [
      { key: "A", text: "Chanderi Silk" },
      { key: "B", text: "Pochampally Ikat", correct: true },
      { key: "C", text: "Kalamkari Fabric" },
      { key: "D", text: "Bandhani Print" }
    ],
    xp: 60,
    explanation: "Pochampally Ikat involves dyeing both the warp and weft yarns with geometric mathematical precision before weaving on handlooms, earning Pochampally the title of Silk City.",
    source: "National Handloom Development Corporation"
  },

  // LEVEL 3: Discover Traditions
  {
    id: "q7",
    level: 3,
    category: "Performing Arts",
    question: "Which revived Kakatiya warrior dance was historically performed by soldiers in honor of Nataraja before entering battle?",
    options: [
      { key: "A", text: "Kuchipudi" },
      { key: "B", text: "Perini Sivatandavam", correct: true },
      { key: "C", text: "Yakshagana" },
      { key: "D", text: "Theyyam" }
    ],
    xp: 70,
    explanation: "Perini Sivatandavam was performed to the vigorous sound of drums to inspire fearlessness; it was reconstructed in the 20th century by scholar Nataraja Ramakrishna from Ramappa sculptures.",
    source: "Sangeet Natak Akademi"
  },
  {
    id: "q8",
    level: 3,
    category: "Painting",
    question: "Cheriyal Scroll Paintings from Telangana are traditionally made using canvas prepared with:",
    options: [
      { key: "A", text: "Synthetic acrylic gesso on linen" },
      { key: "B", text: "Khadi treated with tamarind seed paste, rice starch, and white clay", correct: true },
      { key: "C", text: "Dried banana leaf pulp pressed in castor oil" },
      { key: "D", text: "Tanned goatskin parchment" }
    ],
    xp: 70,
    explanation: "Cheriyal artists hand-prepare their khadi cloth scrolls with boiled tamarind seed paste, white mud, and gum, painting exclusively with natural rock minerals and vegetable extracts.",
    source: "Crafts Council of India"
  },

  // LEVEL 4: Heritage Scholar
  {
    id: "q9",
    level: 4,
    category: "Knowledge Systems",
    question: "The Kailasa Temple (Cave 16) at Ellora is celebrated as a monumental triumph because:",
    options: [
      { key: "A", text: "It was built inside a submerged lake chamber" },
      { key: "B", text: "It was carved entirely from the top-down out of a single monolithic basalt cliff", correct: true },
      { key: "C", text: "It contains thousands of pre-melted brass bricks" },
      { key: "D", text: "It rotates with the movement of the sun" }
    ],
    xp: 80,
    explanation: "Under the Rashtrakutas in the 8th century, master sculptors started at the peak of the cliff and excavated downwards, chiseling over 200,000 tons of rock with zero room for measurement error.",
    source: "Archaeological Survey of India Monograph"
  },
  {
    id: "q10",
    level: 4,
    category: "Literature",
    question: "Bammera Pothana, who authored the celebrated 'Andhra Maha Bhagavatam' in Telugu, was famously known for:",
    options: [
      { key: "A", text: "Being the court poet of Vijayanagara King Krishnadevaraya" },
      { key: "B", text: "Refusing royal patronage to farm his own fields while dedicating his poetry only to God", correct: true },
      { key: "C", text: "Traveling across Greece and Rome translating epics" },
      { key: "D", text: "Writing in Sanskrit exclusively using gold ink" }
    ],
    xp: 80,
    explanation: "Bammera Pothana of Warangal was a humble farmer who rejected royal wealth, famously stating that he would rather plow the earth than sell his poetry to mortal kings.",
    source: "Sahitya Akademi Telugu Monograph"
  },

  // LEVEL 5: Bharat Champion
  {
    id: "q11",
    level: 5,
    category: "Intangible Heritage",
    question: "Which mega-congregation in the Medaram forest of Telangana is celebrated as Asia's largest biennial tribal gathering?",
    options: [
      { key: "A", text: "Kumbh Mela" },
      { key: "B", text: "Sammakka Saralamma Jatara", correct: true },
      { key: "C", text: "Hornbill Festival" },
      { key: "D", text: "Tarpa Mahotsav" }
    ],
    xp: 100,
    explanation: "The Sammakka Saralamma Jatara commemorates the courageous mother and daughter who fought against oppressive Kakatiya taxes during a famine; millions offer 'Bangaram' (jaggery equal to their body weight).",
    source: "Ministry of Tribal Affairs, Government of India"
  }
];

export const BADGES_DATA = [
  {
    id: "monument-explorer",
    name: "Monument Explorer",
    icon: "🏛️",
    desc: "Explored 5+ major historical architectural monuments across Bharat.",
    xpRequired: 100,
    tier: "Bronze"
  },
  {
    id: "culture-explorer",
    name: "Culture Explorer",
    icon: "🎭",
    desc: "Mastered performing arts and living folk traditions.",
    xpRequired: 250,
    tier: "Silver"
  },
  {
    id: "craft-custodian",
    name: "Craft Custodian",
    icon: "🧵",
    desc: "Learned traditional Indian weaving, pottery, and metallurgy heritage.",
    xpRequired: 450,
    tier: "Gold"
  },
  {
    id: "festival-discoverer",
    name: "Festival Discoverer",
    icon: "🪔",
    desc: "Explored harvest, seasonal, and spiritual cultural calendars.",
    xpRequired: 650,
    tier: "Gold"
  },
  {
    id: "heritage-scholar",
    name: "Heritage Scholar",
    icon: "📚",
    desc: "Attained deep understanding of ancient sciences, architecture, and epics.",
    xpRequired: 850,
    tier: "Platinum"
  },
  {
    id: "bharat-champion",
    name: "Bharat Heritage Champion",
    icon: "🇮🇳",
    desc: "Achieved the highest honor in cultural exploration and heritage guardianship.",
    xpRequired: 1100,
    tier: "Diamond"
  }
];

export const LEADERBOARD_STUDENTS = [
  { rank: 1, name: "Aarav Sharma", college: "SNIST Hyderabad", xp: 4850, badges: 6, avatar: "👨🎓" },
  { rank: 2, name: "Ananya Deshmukh", college: "COEP Pune", xp: 4620, badges: 6, avatar: "👩🎓" },
  { rank: 3, name: "Rahul Varma", college: "IIT Madras", xp: 4410, badges: 5, avatar: "👨🎓" },
  { rank: 4, name: "Meera Krishnan", college: "NIT Trichy", xp: 4180, badges: 5, avatar: "👩🎓" },
  { rank: 5, name: "Tanvi Reddy", college: "Osmania University", xp: 3950, badges: 4, avatar: "👩🎓" },
  { rank: 6, name: "Vikram Sengupta", college: "Jadavpur University", xp: 3720, badges: 4, avatar: "👨🎓" },
  { rank: 7, name: "Divya Joshi", college: "Rajasthan University", xp: 3510, badges: 4, avatar: "👩🎓" }
];

export const LEADERBOARD_COLLEGES = [
  { rank: 1, name: "Sreenidhi Institute of Science and Technology (SNIST)", score: "88%", students: 540, totalXp: "420k XP" },
  { rank: 2, name: "IIT Madras Heritage Club", score: "82%", students: 480, totalXp: "395k XP" },
  { rank: 3, name: "College of Engineering Pune (COEP)", score: "79%", students: 410, totalXp: "360k XP" },
  { rank: 4, name: "Osmania University College of Engineering", score: "74%", students: 380, totalXp: "310k XP" },
  { rank: 5, name: "Delhi Technological University (DTU)", score: "68%", students: 320, totalXp: "285k XP" }
];
