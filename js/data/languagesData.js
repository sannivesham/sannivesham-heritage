// 🗣️ BHARATVERSE — Languages & Script Explorer Database
export const LANGUAGES_DATA = {
  telugu: {
    name: "Telugu",
    nativeName: "తెలుగు",
    family: "Dravidian (South-Central)",
    scriptName: "Telugu Script (evolved from Bhattiprolu / Kadamba Brahmi)",
    speakers: "83+ Million",
    status: "Classical Language of India (Recognized 2008)",
    scriptVowels: ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ", "అం", "అః"],
    scriptConsonants: ["క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ", "ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న", "ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ల", "వ", "శ", "ష", "స", "హ", "ళ", "క్ష", "ఱ"],
    originSummary: "Telugu has epigraphic inscriptions dating from the 3rd century BCE at Bhattiprolu. Renowned as the 'Italian of the East' by 16th-century Italian merchant Niccolò de' Conti because every word terminates in a musical vowel sound (Ajanta bhasha).",
    speechCode: "te-IN",
    evolution: [
      { era: "300 BCE", stage: "Bhattiprolu Brahmi Inscriptions" },
      { era: "500 CE", stage: "Early Telugu-Kannada Kadamba Script" },
      { era: "11th Cent", stage: "Nannaya's Mahabharata & Medieval Telugu" },
      { era: "Modern", stage: "Unified Rounded Script with Tala-kattu" }
    ],
    classics: [
      { work: "Andhra Mahabharatam", author: "Kavitrayam (Nannaya, Tikkana, Yerrapragada)", era: "11th-14th Century" },
      { work: "Sri Maha Bhagavatam", author: "Bammera Pothana", era: "15th Century" },
      { work: "Amuktamalyada", author: "Sri Krishnadevaraya", era: "16th Century" }
    ]
  },

  hindi: {
    name: "Hindi",
    nativeName: "हिन्दी",
    family: "Indo-Aryan (Central Zone)",
    scriptName: "Devanagari (Script of the Gods)",
    speakers: "550+ Million",
    status: "Official Language of the Union of India",
    scriptVowels: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    scriptConsonants: ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "क्ष", "त्र", "ज्ञ"],
    originSummary: "Descended from Vedic Sanskrit through Prakrit and Sauraseni Apabhramsha. Written in Devanagari with its characteristic horizontal continuous topline (Shirorekha).",
    speechCode: "hi-IN",
    evolution: [
      { era: "3rd Cent BCE", stage: "Ashokan Brahmi Script" },
      { era: "4th Cent CE", stage: "Gupta Script" },
      { era: "7th Cent CE", stage: "Nagari Script" },
      { era: "Modern", stage: "Standardized Modern Devanagari" }
    ],
    classics: [
      { work: "Ramcharitmanas", author: "Goswami Tulsidas", era: "16th Century" },
      { work: "Bijak", author: "Kabir Das", era: "15th Century" },
      { work: "Godan", author: "Munshi Premchand", era: "1936" }
    ]
  },

  tamil: {
    name: "Tamil",
    nativeName: "தமிழ்",
    family: "Dravidian (Southern)",
    scriptName: "Tamil Script (evolved from Tamil-Brahmi & Vatteluttu)",
    speakers: "75+ Million",
    status: "First Classical Language of India (Recognized 2004)",
    scriptVowels: ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ", "ஃ"],
    scriptConsonants: ["க", "ங", "ச", "ஞ", "ட", "ண", "த", "ந", "ப", "ம", "ய", "ர", "ல", "வ", "ழ", "ள", "ற", "ன"],
    originSummary: "One of the longest-surviving classical literary languages in human civilization. Its earliest literature, the Sangam corpora, dates back to 300 BCE with timeless poetry on love (Akam) and valor (Puram).",
    speechCode: "ta-IN",
    evolution: [
      { era: "500 BCE", stage: "Tamil-Brahmi Keezhadi Inscriptions" },
      { era: "6th Cent CE", stage: "Vatteluttu Rounded Script" },
      { era: "Pallava / Chola", stage: "Pallava Grantha Influenced Tamil" },
      { era: "Modern", stage: "Orthographically Reformed Tamil Script" }
    ],
    classics: [
      { work: "Thirukkural", author: "Thiruvalluvar", era: "c. 2nd Century BCE" },
      { work: "Silappathikaram", author: "Ilango Adigal", era: "5th-6th Century CE" },
      { work: "Tolkappiyam", author: "Tolkappiyar", era: "Ancient Grammar Treatise" }
    ]
  },

  kannada: {
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
    family: "Dravidian (Southern)",
    scriptName: "Kannada Script (Kadamba lineage)",
    speakers: "44+ Million",
    status: "Classical Language of India (Recognized 2008)",
    scriptVowels: ["ಅ", "ಆ", "ಇ", "ಈ", "ಉ", "ಊ", "ಋ", "ಎ", "ಏ", "ಐ", "ಒ", "ಓ", "ಔ", "ಅಂ", "ಅಃ"],
    scriptConsonants: ["ಕ", "ಖ", "ಗ", "ಘ", "ಙ", "ಚ", "ಛ", "ಜ", "ಝ", "ಞ", "ಟ", "ಠ", "ಡ", "ಢ", "ಣ", "ತ", "ಥ", "ದ", "ಧ", "ನ", "ಪ", "ಫ", "ಬ", "ಭ", "ಮ", "ಯ", "ರ", "ಲ", "ವ", "ಶ", "ಷ", "ಸ", "ಹ", "ಳ", "ಕ್ಷ", "ಜ್ಞ"],
    originSummary: "Possessing over 1,500 years of unbroken literary heritage beginning from the 5th-century Halmidi inscription. Famed for Vachana Sahitya—egalitarian spiritual verses by Basaveshwara and Akka Mahadevi.",
    speechCode: "kn-IN",
    evolution: [
      { era: "450 CE", stage: "Halmidi Inscription (Kadamba Script)" },
      { era: "9th Cent", stage: "Kavirajamarga (Old Kannada / Halegannada)" },
      { era: "Vijayanagara", stage: "Flourishing of Vijayanagara Inscriptions" },
      { era: "Modern", stage: "Contemporary Circular Kannada Glyphs" }
    ],
    classics: [
      { work: "Kavirajamarga", author: "King Amoghavarsha Nrupathunga", era: "850 CE" },
      { work: "Vachanas", author: "Basaveshwara & Sharanas", era: "12th Century" },
      { work: "Sri Ramayana Darshanam", author: "Kuvempu (Jnanpith)", era: "20th Century" }
    ]
  },

  malayalam: {
    name: "Malayalam",
    nativeName: "മലയാളം",
    family: "Dravidian (Southern)",
    scriptName: "Malayalam Script (evolved from Arya Ezhuthu / Grantha)",
    speakers: "38+ Million",
    status: "Classical Language of India (Recognized 2013)",
    scriptVowels: ["അ", "ആ", "ഇ", "ഈ", "ഉ", "ഊ", "ഋ", "എ", "ഏ", "ഐ", "ഒ", "ഓ", "ഔ", "അം", "അഃ"],
    scriptConsonants: ["ക", "ഖ", "ഗ", "ഘ", "ങ", "ച", "ഛ", "ജ", "ഝ", "ഞ", "ട", "ഠ", "ഡ", "ഢ", "ണ", "ത", "ഥ", "ദ", "ധ", "ന", "പ", "ഫ", "ബ", "ഭ", "മ", "യ", "ര", "ല", "വ", "ശ", "ഷ", "സ", "ഹ", "ള", "ഴ", "റ"],
    originSummary: "Derived from Middle Tamil with profound Sanskrit lexical and grammatical enrichment. Famed for Sopana Sangeetham and Kathakali attakatha theatre librettos.",
    speechCode: "ml-IN",
    evolution: [
      { era: "9th Cent CE", stage: "Vazhappally Inscription" },
      { era: "16th Cent", stage: "Thunchaththu Ezhuthachan (Father of Malayalam)" },
      { era: "Modern", stage: "Reformed Typographic Malayalam" }
    ],
    classics: [
      { work: "Adhyathma Ramayanam Kilippattu", author: "Thunchaththu Ezhuthachan", era: "16th Century" },
      { work: "Karuna", author: "Kumaran Asan", era: "Early 20th Century" }
    ]
  },

  bengali: {
    name: "Bengali",
    nativeName: "বাংলা",
    family: "Indo-Aryan (Eastern Zone)",
    scriptName: "Eastern Nagari / Bengali Script",
    speakers: "230+ Million (7th most spoken globally)",
    status: "Classical Language of India (Recognized 2024)",
    scriptVowels: ["অ", "আ", "ই", "ঈ", "উ", "ঊ", "ঋ", "এ", "ঐ", "ও", "ঔ", "অং", "অঃ"],
    scriptConsonants: ["ক", "খ", "গ", "ঘ", "ঙ", "চ", "ছ", "জ", "ঝ", "ঞ", "ট", "ঠ", "ড", "ঢ", "ণ", "ত", "থ", "দ", "ধ", "ন", "প", "ফ", "ব", "ভ", "ম", "য", "র", "ল", "শ", "ষ", "স", "হ", "ড়", "ঢ়", "য়", "ৎ"],
    originSummary: "Developed from Magadhi Prakrit through the Gaudiya script. Bengal Renaissance made it a beacon of modern Asian poetry, music, and prose.",
    speechCode: "bn-IN",
    evolution: [
      { era: "10th Cent", stage: "Charyapada Mystical Songs" },
      { era: "15th Cent", stage: "Chaitanya Mahaprabhu & Vaishnava Padavali" },
      { era: "19th Cent", stage: "Bengal Renaissance & Printing Press" },
      { era: "Modern", stage: "Tagore's Gitanjali & Standard Colloquial Chalit" }
    ],
    classics: [
      { work: "Gitanjali", author: "Rabindranath Tagore (Nobel Laureate)", era: "1910" },
      { work: "Vande Mataram (Anandamath)", author: "Bankim Chandra Chattopadhyay", era: "1882" },
      { work: "Bidrohi", author: "Kazi Nazrul Islam", era: "1922" }
    ]
  },

  sanskrit: {
    name: "Sanskrit",
    nativeName: "संस्कृतम्",
    family: "Indo-Aryan (Classical / Sacred)",
    scriptName: "Devanagari, Grantha, Sharada (Historic)",
    speakers: "Scholarly & Liturgical Pan-India",
    status: "Classical Language of India (Recognized 2005)",
    scriptVowels: ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ए", "ऐ", "ओ", "औ", "अं", "अः"],
    scriptConsonants: ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"],
    originSummary: "The sacred language of the Vedas, Upanishads, Ayurveda, and Panini's Ashtadhyayi—the world's first formal generative grammar system praised in modern computer science.",
    speechCode: "sa-IN",
    evolution: [
      { era: "1500 BCE", stage: "Vedic Sanskrit (Oral Chanting Tradition)" },
      { era: "500 BCE", stage: "Panini's Ashtadhyayi (Classical Sanskrit)" },
      { era: "Gupta Era", stage: "Golden Age of Classical Drama (Kalidasa)" },
      { era: "Continuum", stage: "Living Liturgical & Philosophical Discourse" }
    ],
    classics: [
      { work: "Abhijnanasakuntalam", author: "Mahakavi Kalidasa", era: "4th-5th Century CE" },
      { work: "Ashtadhyayi (Grammar)", author: "Panini", era: "5th-4th Century BCE" },
      { work: "Bhagavad Gita", author: "Maharshi Vedavyasa", era: "Mahabharata" }
    ]
  }
};

export const COMPARATIVE_SCRIPTS = [
  {
    word: "Namaste (Greetings)",
    meaning: "I bow to the divine within you",
    translations: {
      hindi: "नमस्ते",
      telugu: "నమస్తే / నమస్కారం",
      kannada: "ನಮಸ್ತೆ / ನಮಸ್ಕಾರ",
      tamil: "வணக்கம் (Vanakkam)",
      malayalam: "നമസ്കാരം (Namaskaram)",
      bengali: "নমস্কার (Nomoshkar)",
      sanskrit: "नमस्ते / नमो नमः"
    }
  },
  {
    word: "Bharat (India)",
    meaning: "Cherished Land of Light and Wisdom",
    translations: {
      hindi: "भारत",
      telugu: "భారతదేశం",
      kannada: "ಭಾರತ",
      tamil: "பாரதம் (Bharatham)",
      malayalam: "ഭാരതം (Bharatham)",
      bengali: "ভারত (Bharat)",
      sanskrit: "भारतवर्षम्"
    }
  },
  {
    word: "Heritage (Virasat)",
    meaning: "Sacred cultural legacy received from ancestors",
    translations: {
      hindi: "विरासत / धरोहर",
      telugu: "వారసత్వం / సంస్కృతి",
      kannada: "ಪರಂಪರೆ / ದರೋಹರ",
      tamil: "பாரம்பரியம் (Parambariyam)",
      malayalam: "പൈതൃകം (Paithrukam)",
      bengali: "ঐতিহ্য (Oitijhyo)",
      sanskrit: "परम्परा / दायः"
    }
  },
  {
    word: "Knowledge (Vidya / Jnana)",
    meaning: "Enlightenment, wisdom, and science",
    translations: {
      hindi: "विद्या / ज्ञान",
      telugu: "విద్య / జ్ఞానం",
      kannada: "ವಿದ್ಯೆ / ಜ್ಞಾನ",
      tamil: "அறிவு / ஞானம் (Arivu / Gnanam)",
      malayalam: "വിദ്യ / ജ്ഞാനം",
      bengali: "বিদ্যা / জ্ঞান",
      sanskrit: "विद्या / ज्ञानम्"
    }
  },
  {
    word: "Peace (Shanti)",
    meaning: "Universal harmony and spiritual calm",
    translations: {
      hindi: "शान्ति",
      telugu: "శాంతి",
      kannada: "ಶಾಂತಿ",
      tamil: "அமைதி / சாந்தி (Amaidhi / Shanthi)",
      malayalam: "ശാന്തി / സമാധാനം",
      bengali: "শান্তি",
      sanskrit: "शान्तिः"
    }
  }
];
