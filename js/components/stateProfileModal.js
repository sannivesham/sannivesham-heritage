// 🏛️ SANNIVESHAM — State Cultural Profile (Dossier)
import { STATES_DATA } from "../data/heritageData.js";

export function renderStateProfile(container, stateId = "telangana", onBack, onOpenStory) {
  const data = STATES_DATA[stateId] || STATES_DATA["telangana"];

  container.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- Back Navigation Bar (Standardized h-10) -->
      <div class="flex items-center justify-between">
        <button id="state-back-btn" class="h-10 px-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-amber-200 border border-amber-500/30 text-xs font-semibold flex items-center space-x-2 transition-all shadow-sm">
          <span>←</span>
          <span>Back to Cultural Map</span>
        </button>

        <!-- Quick Switcher -->
        <div class="flex items-center space-x-2 text-xs">
          <span class="text-neutral-400 font-medium">Switch Region:</span>
          <select id="state-select-dropdown" class="h-10 bg-neutral-900/90 border border-amber-500/30 rounded-xl px-3 text-amber-300 text-xs focus:outline-none focus:border-amber-400 cursor-pointer shadow-sm">
            <option value="telangana" ${stateId === 'telangana' ? 'selected' : ''}>Telangana (Spotlight)</option>
            <option value="rajasthan" ${stateId === 'rajasthan' ? 'selected' : ''}>Rajasthan</option>
            <option value="tamilnadu" ${stateId === 'tamilnadu' ? 'selected' : ''}>Tamil Nadu</option>
            <option value="maharashtra" ${stateId === 'maharashtra' ? 'selected' : ''}>Maharashtra</option>
            <option value="westbengal" ${stateId === 'westbengal' ? 'selected' : ''}>West Bengal</option>
            <option value="karnataka" ${stateId === 'karnataka' ? 'selected' : ''}>Karnataka</option>
          </select>
        </div>
      </div>

      <!-- State Hero Banner -->
      <div class="relative rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl min-h-[340px] flex items-end p-6 sm:p-10">
        <img src="${data.bannerImage}" alt="${data.name}" class="absolute inset-0 w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0f0b0d] via-[#1a0f14]/80 to-transparent"></div>
        
        <div class="relative z-10 space-y-3 max-w-3xl">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider">Capital: ${data.capital}</span>
            <span class="px-3 py-1 rounded-full bg-rose-900/80 text-rose-200 border border-rose-500/40 text-xs">Cultural Heritage Dossier</span>
          </div>
          <h1 class="font-cinzel text-4xl sm:text-6xl font-black text-white tracking-tight">${data.name}</h1>
          <p class="font-playfair text-amber-300 text-lg sm:text-xl italic">${data.tagline}</p>
          <p class="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-2xl font-light">${data.overview}</p>
        </div>
      </div>

      <!-- Tabs or 10 Cultural Dimensions -->
      <div class="space-y-10">
        
        <!-- 1. 🏛 HERITAGE SITES & ARCHITECTURAL WONDERS -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <span class="text-2xl">🏛️</span>
            <div>
              <h2 class="font-cinzel text-2xl font-bold text-white">Heritage Sites & Architectural Wonders</h2>
              <p class="text-xs text-neutral-400">Timeless stone, acoustic fortresses, and UNESCO monuments</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            ${data.heritageSites.map(site => `
              <div class="glass-panel heritage-card-glow p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col justify-between h-full group">
                <div class="space-y-3">
                  <div class="flex items-start justify-between">
                    <div>
                      <span class="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">${site.badge || site.era}</span>
                      <h3 class="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors mt-1.5">${site.name}</h3>
                      <p class="text-xs text-neutral-400 flex items-center space-x-1 mt-0.5 font-mono">
                        <span>📍 ${site.location}</span>
                        <span>•</span>
                        <span>${site.era}</span>
                      </p>
                    </div>
                  </div>
                  <p class="text-xs text-neutral-300 leading-relaxed font-light">${site.desc}</p>
                </div>
                ${site.name.includes("Charminar") ? `
                  <button id="open-charminar-story" class="mt-4 pt-3 border-t border-amber-500/20 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-1 transition-colors">
                    <span>Read Full Scroll-Based Story</span>
                    <span>→</span>
                  </button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 2. 🎭 FOLK ARTS, DANCE & MUSIC -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <span class="text-2xl">🎭</span>
            <div>
              <h2 class="font-cinzel text-2xl font-bold text-white">Folk Arts, Dance & Music</h2>
              <p class="text-xs text-neutral-400">Oral ballads, martial warrior dances, and theatrical traditions</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            ${data.folkArts.map(art => `
              <div class="glass-panel-maroon heritage-card-glow p-6 rounded-3xl border border-rose-500/30 flex flex-col justify-between h-full space-y-3">
                <div class="space-y-3">
                  <div class="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-xl">
                    ${art.icon || "🎭"}
                  </div>
                  <h3 class="font-cinzel text-lg font-bold text-white">${art.name}</h3>
                  <span class="inline-block text-[10px] font-semibold text-amber-300 bg-black/40 px-2 py-0.5 rounded border border-amber-500/20">${art.type}</span>
                  <p class="text-xs text-neutral-300 leading-relaxed font-light">${art.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 3. 🧵 TRADITIONAL CRAFTS & TEXTILES -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <span class="text-2xl">🧵</span>
            <div>
              <h2 class="font-cinzel text-2xl font-bold text-white">Handicrafts & GI Crafts</h2>
              <p class="text-xs text-neutral-400">Masterweaves, natural mineral paintings, and ancient metallurgy</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            ${data.handicrafts.map(craft => `
              <div class="glass-panel heritage-card-glow p-6 rounded-3xl border border-amber-500/20 flex flex-col justify-between h-full space-y-3">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">${craft.tag}</span>
                    <span class="text-xs text-neutral-400">📍 ${craft.location}</span>
                  </div>
                  <h3 class="font-cinzel text-lg font-bold text-white">${craft.name}</h3>
                  <p class="text-[11px] text-amber-300 font-medium">${craft.type}</p>
                  <p class="text-xs text-neutral-300 leading-relaxed font-light">${craft.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 4. 🪔 FESTIVALS & LIVING CELEBRATIONS -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <span class="text-2xl">🪔</span>
            <div>
              <h2 class="font-cinzel text-2xl font-bold text-white">Festivals & Sacred Celebrations</h2>
              <p class="text-xs text-neutral-400">Living rhythms celebrating nature, harvest, and community</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            ${data.festivals.map(fest => `
              <div class="glass-panel heritage-card-glow p-6 rounded-3xl border border-amber-500/20 flex flex-col justify-between h-full space-y-3">
                <div class="space-y-2">
                  <div class="text-2xl">${fest.symbol || "🪔"}</div>
                  <h3 class="font-cinzel text-lg font-bold text-white">${fest.name}</h3>
                  <span class="inline-block text-[10px] text-amber-300/80 bg-neutral-900 px-2 py-0.5 rounded border border-amber-500/20">${fest.season}</span>
                  <p class="text-xs text-neutral-300 leading-relaxed font-light">${fest.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- 5. 🍛 CULINARY HERITAGE & 📖 LITERATURE SPLIT -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <!-- Food Heritage -->
          <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 space-y-4">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">🍛</span>
              <h3 class="font-cinzel text-xl font-bold text-white">Taste of ${data.name}</h3>
            </div>
            <p class="text-xs text-neutral-400">Culinary wisdom blending royal court flavors with rustic millet staples.</p>
            
            <div class="space-y-3">
              ${data.cuisine.map(item => `
                <div class="p-3.5 rounded-xl bg-neutral-900/60 border border-amber-500/15">
                  <h4 class="font-bold text-sm text-amber-300">${item.name}</h4>
                  <p class="text-xs text-neutral-300 mt-1">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Literature & Language -->
          <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 space-y-4">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">📖</span>
              <h3 class="font-cinzel text-xl font-bold text-white">Literature & Script Heritage</h3>
            </div>
            <p class="text-xs text-neutral-300">${data.literature.scriptNote}</p>
            
            <div class="space-y-3">
              <div class="p-3.5 rounded-xl bg-neutral-900/60 border border-amber-500/15">
                <p class="text-[11px] text-amber-400 font-semibold uppercase">Classical Masters:</p>
                <ul class="mt-1 space-y-1 text-xs text-neutral-200">
                  ${data.literature.classicalAuthors.map(author => `<li>• ${author}</li>`).join('')}
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-neutral-900/60 border border-amber-500/15">
                <p class="text-[11px] text-amber-400 font-semibold uppercase">Modern Poets & Voices:</p>
                <ul class="mt-1 space-y-1 text-xs text-neutral-200">
                  ${data.literature.modernPoets.map(poet => `<li>• ${poet}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  `;

  // Attach handlers
  container.querySelector("#state-back-btn")?.addEventListener("click", onBack);
  
  const stateDropdown = container.querySelector("#state-select-dropdown");
  if (stateDropdown) {
    stateDropdown.addEventListener("change", (e) => {
      renderStateProfile(container, e.target.value, onBack, onOpenStory);
    });
  }

  const charminarStoryBtn = container.querySelector("#open-charminar-story");
  if (charminarStoryBtn) {
    charminarStoryBtn.addEventListener("click", () => onOpenStory("charminar"));
  }
}
