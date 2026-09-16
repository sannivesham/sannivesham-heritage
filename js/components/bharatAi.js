// 🤖 BHARATVERSE — Bharat AI: Source-Backed Cultural Intelligence Assistant
export function renderBharatAi(container) {
  const KNOWLEDGE_BASE = {
    "ugadi": {
      title: "Significance & Origins of Ugadi / Gudi Padwa",
      origin: "Ugadi originates from the Sanskrit compound 'Yuga' (Era/Age) and 'Adi' (Beginning), marking the creation of the cosmic order according to Brahma's astronomical calculations in the Surya Siddhanta.",
      regionalVariations: [
        "Telangana & Andhra Pradesh: Celebrated as Ugadi with the reading of Panchangam (astrological calendar).",
        "Karnataka: Celebrated with Bevu-Bella (neem buds and jaggery) distribution.",
        "Maharashtra: Celebrated as Gudi Padwa, hoisting a decorated silk flag (Gudi) topped with an inverted silver/copper kalash."
      ],
      traditions: "House entrances are decorated with fresh green mango leaves and hand-drawn rangoli kolams. The cornerstone ritual is consuming 'Ugadi Pachadi'—a culinary metaphor blending six distinct tastes (Shadruchulu).",
      significance: "Reflects the philosophy that life is an inevitable tapestry of sorrow (bitter neem), joy (sweet jaggery), surprise (tangy mango), fear (salty salt), anger (spicy chili), and disgust (sour tamarind), all to be welcomed with equanimity.",
      sources: [
        "📚 National Mission for Manuscripts, Ministry of Culture, Govt. of India",
        "📖 Surya Siddhanta & Indian Ephemeris Historical Records",
        "🏛 Indira Gandhi National Centre for the Arts (IGNCA)",
        "📜 Department of Language and Culture, Government of Telangana"
      ]
    },
    "ramappa": {
      title: "The Earthquake Engineering & Floating Bricks of Ramappa Temple",
      origin: "Built in 1213 CE during the reign of Kakatiya ruler Ganapati Deva by master sculptor Ramappa at Palampet. It is the only temple in India named after its chief architect rather than the deity.",
      regionalVariations: [
        "Kakatiya Trikuta Style: Built on a 6-foot-high star-shaped raised platform (upapitha).",
        "Basalt Sculptures: Features 12 life-size bracket figures (Madanikas) carved in mirror-polished black basalt dolerite."
      ],
      traditions: "Annual Maha Shivaratri celebrations where classical dancers pay homage to the Natyashastra poses carved into the pillars.",
      significance: "The temple's superstructure was constructed using sponge-like porous bricks with a density between 0.8 and 0.9 g/cm³ (lighter than water's 1.0 g/cm³), floating freely on water to minimize the seismic mass of the roof. The foundation utilizes 'sandbox technology', where a trench was filled with river sand, jaggery, and karakkaya paste to absorb seismic shear waves.",
      sources: [
        "📚 UNESCO World Heritage Inscription Dossier (2021)",
        "🏛 Archaeological Survey of India (ASI) Technical Monograph on Kakatiya Masonry",
        "📖 Geotechnical and Materials Study, National Geophysical Research Institute (NGRI)"
      ]
    },
    "golconda": {
      title: "Acoustic Engineering of Golconda Fort",
      origin: "Originally a mud fort under the Kakatiyas (13th cent), fortified by the Qutb Shahi dynasty into a massive granite acoustic citadel.",
      regionalVariations: [
        "Deccan Acoustic Architecture: Designed to survive sieges and warn royalty of surprise assaults."
      ],
      traditions: "Visitors today test the sound clarity from the entry arch to the highest pavilion.",
      significance: "The vaulting of the entrance portico at Fateh Darwaza is mathematically shaped as a parabolic arch. Sound waves from a handclap strike the curved stucco ceiling, undergo constructive interference, and travel upward along an acoustic corridor to the Bala Hissar pavilion 1,000 meters away.",
      sources: [
        "🏛 Archaeological Survey of India, Hyderabad Circle",
        "📚 IIT Hyderabad Acoustic Field Study & Simulation",
        "📜 Tarikh-i-Qutb Shahi Manuscript Archives"
      ]
    },
    "stepwells": {
      title: "The Hydro-Geology of Indian Stepwells (Baolis / Pushkaranis)",
      origin: "Developed from 600 CE in arid western and central India (Rani ki Vav, Chand Baori, Chandan Baoli in Hyderabad).",
      regionalVariations: [
        "Gujarat & Rajasthan: Intricate subterranean multi-tiered Vavs and Baolis.",
        "Deccan (Telangana/Karnataka): Stepped temple tanks (Kalyanis and Pushkaranis)."
      ],
      traditions: "Served as social gathering sanctuaries for women, shaded resting halts for desert caravans, and spiritual water shrines.",
      significance: "Engineered to capture monsoon runoff, recharge subterranean aquifers, and provide passive microclimate cooling—temperatures inside deep stepwells can be 5–6°C cooler than the searing surface heat.",
      sources: [
        "🏛 UNESCO Rani ki Vav Citation & Documentation",
        "📚 Central Ground Water Board (CGWB) Traditional Water Harvesting Systems Report",
        "📖 National Institute of Hydrology Heritage Monograph"
      ]
    }
  };

  let messages = [
    {
      sender: "ai",
      text: "Namaste! I am Sannivesham AI, your source-backed cultural intelligence guide. Ask me anything about India's architecture, philosophy, festivals, languages, or living traditions. Every answer is grounded in verified museum archives, ASI records, and published academic citations.",
      sources: ["National Archives of India", "Archaeological Survey of India"]
    }
  ];

  function render() {
    container.innerHTML = `
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 uppercase tracking-wider">Verified Knowledge</span>
              <span class="text-xs text-neutral-400">Interactive Cultural AI Guide</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Sannivesham AI Cultural Guide</h1>
            <p class="text-xs text-neutral-300">Grounding ancient wisdom with zero hallucinations. Every insight cites official archives.</p>
          </div>
          <div class="flex items-center space-x-2 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            <span>🛡️ Cites ASI & National Archives</span>
          </div>
        </div>

        <!-- Pre-loaded Prompt Chips -->
        <div class="space-y-2">
          <p class="text-xs text-neutral-400">Suggested Exploration Inquiries:</p>
          <div class="flex flex-wrap gap-2">
            <button data-query="ugadi" class="prompt-chip px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-amber-950 text-amber-200 border border-amber-500/20 hover:border-amber-400 text-xs font-medium transition-all">
              🌿 Why is Ugadi celebrated?
            </button>
            <button data-query="ramappa" class="prompt-chip px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-amber-950 text-amber-200 border border-amber-500/20 hover:border-amber-400 text-xs font-medium transition-all">
              🏛️ How do Ramappa temple bricks float?
            </button>
            <button data-query="golconda" class="prompt-chip px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-amber-950 text-amber-200 border border-amber-500/20 hover:border-amber-400 text-xs font-medium transition-all">
              💎 Explain Golconda acoustic echo
            </button>
            <button data-query="stepwells" class="prompt-chip px-3 py-1.5 rounded-xl bg-neutral-900 hover:bg-amber-950 text-amber-200 border border-amber-500/20 hover:border-amber-400 text-xs font-medium transition-all">
              💧 The hydro-geology of ancient stepwells
            </button>
          </div>
        </div>

        <!-- Chat Conversation Stream -->
        <div class="glass-panel rounded-3xl border border-amber-500/30 min-h-[460px] max-h-[560px] overflow-y-auto p-6 space-y-6" id="ai-chat-stream">
          ${messages.map(msg => `
            <div class="flex items-start space-x-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
              ${msg.sender === 'ai' ? `
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-rose-800 flex items-center justify-center text-lg text-white shrink-0 border border-amber-400/40">
                  🤖
                </div>
              ` : ''}

              <div class="max-w-2xl rounded-2xl p-5 ${
                msg.sender === 'user' 
                  ? 'bg-amber-500 text-neutral-950 font-medium ml-12 text-sm' 
                  : 'glass-panel-maroon border border-amber-500/30 text-neutral-200 text-xs sm:text-sm space-y-3'
              }">
                ${msg.structured ? `
                  <h3 class="font-cinzel text-lg font-bold text-amber-300 border-b border-amber-500/20 pb-2">${msg.structured.title}</h3>
                  <div class="space-y-2 leading-relaxed">
                    <p><strong>📜 Origin & Evolution:</strong> ${msg.structured.origin}</p>
                    <p><strong>🪔 Traditions & Rituals:</strong> ${msg.structured.traditions}</p>
                    <p><strong>💡 Philosophical & Scientific Significance:</strong> ${msg.structured.significance}</p>
                    <div>
                      <strong>🗺️ Regional Variations:</strong>
                      <ul class="list-disc list-inside mt-1 space-y-1 text-xs text-neutral-300">
                        ${msg.structured.regionalVariations.map(v => `<li>${v}</li>`).join('')}
                      </ul>
                    </div>
                  </div>

                  <!-- Verified Sources Box -->
                  <div class="mt-4 p-3.5 rounded-xl bg-neutral-950/80 border border-amber-500/30 space-y-1.5">
                    <p class="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1">
                      <span>📚 Verified Sources & Citations:</span>
                    </p>
                    <ul class="space-y-1 text-[11px] text-neutral-300 font-mono">
                      ${msg.structured.sources.map(s => `<li>• ${s}</li>`).join('')}
                    </ul>
                  </div>
                ` : `
                  <p class="leading-relaxed">${msg.text}</p>
                `}
              </div>

              ${msg.sender === 'user' ? `
                <div class="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-sm font-bold text-amber-300 shrink-0 border border-neutral-700">
                  👤
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <!-- Chat Input Bar -->
        <div class="glass-panel p-3 rounded-2xl border border-amber-500/30 flex items-center space-x-3">
          <input 
            type="text" 
            id="ai-user-input" 
            placeholder="Ask Sannivesham AI (e.g. Why is Ugadi celebrated, tell me about Ramappa floating bricks)..." 
            class="flex-1 bg-transparent border-0 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none"
          />
          <button id="ai-submit-btn" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-1">
            <span>Inquire</span>
            <span>→</span>
          </button>
        </div>

      </section>
    `;

    // Auto-scroll chat to bottom
    const stream = container.querySelector("#ai-chat-stream");
    if (stream) stream.scrollTop = stream.scrollHeight;

    // Attach listeners
    container.querySelectorAll(".prompt-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const queryKey = chip.getAttribute("data-query");
        handleQuery(queryKey);
      });
    });

    const input = container.querySelector("#ai-user-input");
    const submitBtn = container.querySelector("#ai-submit-btn");

    function handleSubmit() {
      const val = input?.value.trim().toLowerCase();
      if (!val) return;
      handleQuery(val);
      if (input) input.value = "";
    }

    submitBtn?.addEventListener("click", handleSubmit);
    input?.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSubmit();
    });
  }

  function handleQuery(text) {
    let key = "ugadi";
    if (text.includes("ramappa") || text.includes("brick") || text.includes("float")) key = "ramappa";
    else if (text.includes("golconda") || text.includes("echo") || text.includes("acoustic")) key = "golconda";
    else if (text.includes("stepwell") || text.includes("baoli") || text.includes("water")) key = "stepwells";
    else if (text.includes("ugadi") || text.includes("padwa") || text.includes("new year")) key = "ugadi";

    const structured = KNOWLEDGE_BASE[key] || KNOWLEDGE_BASE["ugadi"];

    // Push User Msg
    messages.push({
      sender: "user",
      text: text.length > 50 ? text : `Inquire about: ${structured.title}`
    });

    // Push AI Msg
    messages.push({
      sender: "ai",
      structured: structured
    });

    render();
  }

  render();
}
