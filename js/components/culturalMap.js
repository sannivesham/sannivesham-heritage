// 🗺️ SANNIVESHAM — Cultural GIS: Interactive Cultural Map of India
import { STATES_DATA } from "../data/heritageData.js";

export function renderCulturalMap(container, onSelectState, activeStateId = "telangana") {
  container.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      <!-- Top Header & Layer Filter Bar -->
      <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 shadow-xl">
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Geospatial Heritage</span>
              <span class="text-xs text-neutral-400">Interactive Spatial Engine</span>
            </div>
            <h1 class="font-cinzel text-2xl sm:text-4xl font-bold text-white mt-1">Cultural GIS Map of India</h1>
            <p class="text-xs sm:text-sm text-neutral-300 mt-1">Explore India's tangible and living heritage geographically. Select layers to map traditions across states.</p>
          </div>

          <!-- Cultural GIS Layer Toggles (Standardized h-9) -->
          <div class="flex flex-wrap items-center gap-2 bg-neutral-950/80 p-1.5 rounded-2xl border border-amber-500/20" id="map-layer-toggles">
            <button data-layer="all" class="layer-btn active h-9 px-3.5 rounded-xl text-xs font-semibold bg-amber-500 text-neutral-950 transition-all flex items-center space-x-1.5 shadow-sm">
              <span>🌐 All Dimensions</span>
            </button>
            <button data-layer="monuments" class="layer-btn h-9 px-3.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all flex items-center space-x-1.5">
              <span>🏛️ Monuments</span>
            </button>
            <button data-layer="dance" class="layer-btn h-9 px-3.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all flex items-center space-x-1.5">
              <span>🎭 Performing Arts</span>
            </button>
            <button data-layer="crafts" class="layer-btn h-9 px-3.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all flex items-center space-x-1.5">
              <span>🧵 GI Crafts</span>
            </button>
            <button data-layer="festivals" class="layer-btn h-9 px-3.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all flex items-center space-x-1.5">
              <span>🪔 Festivals</span>
            </button>
            <button data-layer="languages" class="layer-btn h-9 px-3.5 rounded-xl text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all flex items-center space-x-1.5">
              <span>🗣️ Languages</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Map & State Preview Split Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <!-- Left: Interactive Map Stage (8 Columns) -->
        <div class="lg:col-span-8 glass-panel p-6 rounded-3xl border border-amber-500/30 relative min-h-[580px] flex flex-col justify-between overflow-hidden">
          
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center space-x-2">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
              <span class="text-xs text-amber-300 font-semibold uppercase tracking-wider">Click any region to inspect</span>
            </div>
            <div class="text-xs text-neutral-400">
              Active Layer: <span id="current-layer-label" class="text-amber-300 font-medium">All Cultural Dimensions</span>
            </div>
          </div>

          <!-- SVG Interactive India Map Canvas -->
          <div class="relative w-full flex items-center justify-center py-4 select-none">
            <svg id="india-interactive-svg" viewBox="0 0 700 800" class="w-full max-w-[580px] h-auto drop-shadow-2xl">
              <defs>
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#d4af37" flood-opacity="0.6"/>
                </filter>
                <linearGradient id="state-gradient-default" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#241e26" />
                  <stop offset="100%" stop-color="#141117" />
                </linearGradient>
                <linearGradient id="state-gradient-active" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#93243c" />
                  <stop offset="100%" stop-color="#561321" />
                </linearGradient>
              </defs>

              <!-- State Polygons / Paths (Custom Stylized Geometric Bharat Map) -->
              
              <!-- Jammu & Kashmir / Ladakh -->
              <g class="state-group" data-state="jk" transform="translate(0, 0)">
                <path d="M280,40 L340,30 L400,60 L420,110 L380,150 L310,140 L280,110 Z" class="state-path" id="map-path-jk"/>
                <text x="335" y="90" fill="#999" font-size="10" font-weight="600" text-anchor="middle" pointer-events="none">Ladakh / J&K</text>
              </g>

              <!-- Himachal & Punjab -->
              <g class="state-group" data-state="punjab">
                <path d="M280,110 L310,140 L340,155 L325,185 L270,175 L265,135 Z" class="state-path" id="map-path-punjab"/>
                <text x="300" y="155" fill="#aaa" font-size="9" text-anchor="middle" pointer-events="none">Punjab</text>
              </g>

              <!-- Rajasthan -->
              <g class="state-group" data-state="rajasthan">
                <path d="M190,195 L270,175 L325,185 L320,270 L260,310 L195,290 L170,240 Z" class="state-path ${activeStateId === 'rajasthan' ? 'active' : ''}" id="map-path-rajasthan"/>
                <text x="245" y="245" fill="#f3dc8a" font-size="13" font-weight="bold" text-anchor="middle" pointer-events="none">Rajasthan</text>
                <circle cx="250" cy="225" r="4" fill="#d4af37" class="marker-dot" data-type="monument"/>
              </g>

              <!-- Uttar Pradesh -->
              <g class="state-group" data-state="up">
                <path d="M325,185 L420,200 L470,240 L450,295 L370,305 L320,270 Z" class="state-path ${activeStateId === 'up' ? 'active' : ''}" id="map-path-up"/>
                <text x="390" y="250" fill="#e5c358" font-size="12" font-weight="bold" text-anchor="middle" pointer-events="none">Uttar Pradesh</text>
              </g>

              <!-- Gujarat -->
              <g class="state-group" data-state="gujarat">
                <path d="M140,280 L195,290 L230,330 L220,380 L170,385 L130,340 Z" class="state-path" id="map-path-gujarat"/>
                <text x="180" y="340" fill="#bbb" font-size="11" text-anchor="middle" pointer-events="none">Gujarat</text>
              </g>

              <!-- Madhya Pradesh -->
              <g class="state-group" data-state="mp">
                <path d="M260,310 L370,305 L420,340 L390,410 L280,400 L230,330 Z" class="state-path" id="map-path-mp"/>
                <text x="315" y="360" fill="#bbb" font-size="12" font-weight="bold" text-anchor="middle" pointer-events="none">Madhya Pradesh</text>
              </g>

              <!-- Bihar & Jharkhand -->
              <g class="state-group" data-state="bihar">
                <path d="M470,240 L540,250 L550,330 L480,345 L450,295 Z" class="state-path" id="map-path-bihar"/>
                <text x="500" y="295" fill="#aaa" font-size="10" text-anchor="middle" pointer-events="none">Bihar / JH</text>
              </g>

              <!-- West Bengal & Northeast -->
              <g class="state-group" data-state="westbengal">
                <path d="M550,270 L600,260 L650,275 L670,330 L610,360 L560,370 L540,310 Z" class="state-path ${activeStateId === 'westbengal' ? 'active' : ''}" id="map-path-westbengal"/>
                <text x="600" y="315" fill="#f3dc8a" font-size="12" font-weight="bold" text-anchor="middle" pointer-events="none">Bengal & NE</text>
              </g>

              <!-- Maharashtra -->
              <g class="state-group" data-state="maharashtra">
                <path d="M210,390 L280,400 L380,410 L370,490 L260,500 L200,440 Z" class="state-path ${activeStateId === 'maharashtra' ? 'active' : ''}" id="map-path-maharashtra"/>
                <text x="290" y="450" fill="#f3dc8a" font-size="13" font-weight="bold" text-anchor="middle" pointer-events="none">Maharashtra</text>
              </g>

              <!-- Odisha -->
              <g class="state-group" data-state="odisha">
                <path d="M420,370 L495,360 L520,440 L450,470 L400,430 Z" class="state-path" id="map-path-odisha"/>
                <text x="455" y="415" fill="#ccc" font-size="11" text-anchor="middle" pointer-events="none">Odisha</text>
              </g>

              <!-- TELANGANA (Spotlight & Signature State) -->
              <g class="state-group" data-state="telangana">
                <path d="M330,460 L410,450 L425,520 L350,550 L315,505 Z" class="state-path active" id="map-path-telangana" style="fill: #851c32; stroke: #f3dc8a; stroke-width: 2.5; filter: drop-shadow(0 0 16px rgba(212, 175, 55, 0.7));"/>
                <!-- Pulsing Core Marker for Hyderabad/Ramappa -->
                <circle cx="365" cy="495" r="7" fill="#d4af37" class="animate-ping" opacity="0.75"/>
                <circle cx="365" cy="495" r="4" fill="#fff5d6"/>
                <text x="370" y="525" fill="#fff" font-size="13" font-weight="900" text-anchor="middle" pointer-events="none" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.9))">TELANGANA</text>
              </g>

              <!-- Karnataka -->
              <g class="state-group" data-state="karnataka">
                <path d="M250,510 L315,505 L350,550 L320,640 L265,630 L240,550 Z" class="state-path ${activeStateId === 'karnataka' ? 'active' : ''}" id="map-path-karnataka"/>
                <text x="295" y="580" fill="#f3dc8a" font-size="12" font-weight="bold" text-anchor="middle" pointer-events="none">Karnataka</text>
              </g>

              <!-- Andhra Pradesh -->
              <g class="state-group" data-state="ap">
                <path d="M350,550 L425,520 L450,570 L390,650 L345,630 Z" class="state-path" id="map-path-ap"/>
                <text x="395" y="600" fill="#bbb" font-size="11" text-anchor="middle" pointer-events="none">Andhra Pradesh</text>
              </g>

              <!-- Kerala -->
              <g class="state-group" data-state="kerala">
                <path d="M265,635 L295,640 L285,730 L260,710 Z" class="state-path" id="map-path-kerala"/>
                <text x="275" y="680" fill="#aaa" font-size="9" text-anchor="middle" pointer-events="none">Kerala</text>
              </g>

              <!-- Tamil Nadu -->
              <g class="state-group" data-state="tamilnadu">
                <path d="M295,640 L365,635 L355,730 L295,745 L285,730 Z" class="state-path ${activeStateId === 'tamilnadu' ? 'active' : ''}" id="map-path-tamilnadu"/>
                <text x="330" y="690" fill="#f3dc8a" font-size="12" font-weight="bold" text-anchor="middle" pointer-events="none">Tamil Nadu</text>
              </g>

            </svg>
          </div>

          <!-- Bottom Map Legend -->
          <div class="pt-2 border-t border-amber-500/20 flex flex-wrap items-center justify-between text-xs text-neutral-400">
            <div class="flex items-center space-x-4">
              <span class="flex items-center space-x-1.5"><span class="w-3 h-3 rounded-full bg-rose-700 border border-amber-400 inline-block"></span> <span>Selected Region</span></span>
              <span class="flex items-center space-x-1.5"><span class="w-3 h-3 rounded-full bg-[#241e26] border border-amber-500/40 inline-block"></span> <span>Interactive States</span></span>
              <span class="flex items-center space-x-1.5"><span>⚡</span> <span>Culture Hotspots</span></span>
            </div>
            <p class="hidden sm:block text-amber-400/80 font-medium">Click on Telangana, Rajasthan, Tamil Nadu, etc.</p>
          </div>

        </div>

        <!-- Right: State Cultural Profile Quick Preview (4 Columns) -->
        <div class="lg:col-span-4 space-y-4" id="state-quick-preview-panel">
          <!-- Dynamic Content rendered by updateStatePreview() -->
        </div>

      </div>

    </section>
  `;

  const statePreviewContainer = container.querySelector("#state-quick-preview-panel");

  function updateStatePreview(stateId) {
    const data = STATES_DATA[stateId] || STATES_DATA["telangana"];
    
    // Highlight SVG Path
    container.querySelectorAll(".state-path").forEach(el => {
      el.classList.remove("active");
      el.style.fill = "";
    });

    const activeEl = container.querySelector(`#map-path-${stateId}`);
    if (activeEl) {
      activeEl.classList.add("active");
      activeEl.style.fill = "#93243c";
    }

    statePreviewContainer.innerHTML = `
      <div class="glass-panel-maroon heritage-card-glow p-6 rounded-3xl border border-amber-500/40 shadow-2xl space-y-6">
        
        <!-- Header & Image -->
        <div class="relative rounded-2xl overflow-hidden border border-amber-500/30 aspect-video shadow-lg">
          <img src="${data.bannerImage}" alt="${data.name}" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
          <div class="absolute bottom-3 left-3 right-3">
            <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/90 text-neutral-950 tracking-wider">Capital: ${data.capital}</span>
            <h2 class="font-cinzel text-2xl font-bold text-white mt-1">${data.name}</h2>
            <p class="text-[11px] text-amber-200/90 line-clamp-1">${data.tagline}</p>
          </div>
        </div>

        <!-- Overview -->
        <p class="text-xs text-neutral-300 leading-relaxed font-light">${data.overview}</p>

        <!-- Cultural Dimensions Grid -->
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded-xl bg-neutral-900/70 border border-amber-500/20 shadow-inner">
            <p class="text-neutral-400 text-[10px]">🏛 Heritage Sites</p>
            <p class="font-bold text-amber-300 mt-0.5 leading-tight">${data.heritageSites ? data.heritageSites[0].name : "Multiple Monuments"}</p>
          </div>
          <div class="p-2.5 rounded-xl bg-neutral-900/70 border border-amber-500/20 shadow-inner">
            <p class="text-neutral-400 text-[10px]">🎭 Living Folk Arts</p>
            <p class="font-bold text-amber-300 mt-0.5 leading-tight">${data.folkArts ? data.folkArts[0].name : "Classical Dances"}</p>
          </div>
          <div class="p-2.5 rounded-xl bg-neutral-900/70 border border-amber-500/20 shadow-inner">
            <p class="text-neutral-400 text-[10px]">🧵 GI Handicrafts</p>
            <p class="font-bold text-amber-300 mt-0.5 leading-tight">${data.handicrafts ? data.handicrafts[0].name : "Textile Traditions"}</p>
          </div>
          <div class="p-2.5 rounded-xl bg-neutral-900/70 border border-amber-500/20 shadow-inner">
            <p class="text-neutral-400 text-[10px]">🪔 Iconic Festival</p>
            <p class="font-bold text-amber-300 mt-0.5 leading-tight">${data.festivals ? data.festivals[0].name : "State Celebrations"}</p>
          </div>
        </div>

        <!-- Call to Action -->
        <button id="open-full-state-profile-btn" class="btn-shimmer w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-98 transition-all flex items-center justify-center space-x-2">
          <span>Explore Complete ${data.name} Profile</span>
          <span>→</span>
        </button>

      </div>
    `;

    statePreviewContainer.querySelector("#open-full-state-profile-btn")?.addEventListener("click", () => {
      onSelectState(stateId);
    });
  }

  // Initial State Preview
  updateStatePreview(activeStateId);

  // Attach State Click Handlers on SVG
  container.querySelectorAll(".state-group").forEach(group => {
    group.addEventListener("click", () => {
      const stateId = group.getAttribute("data-state");
      updateStatePreview(stateId);
    });
  });

  // Layer Toggles
  const layerLabel = container.querySelector("#current-layer-label");
  container.querySelectorAll(".layer-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".layer-btn").forEach(b => {
        b.classList.remove("active", "bg-amber-500", "text-neutral-950");
        b.classList.add("text-neutral-300");
      });
      btn.classList.add("active", "bg-amber-500", "text-neutral-950");
      btn.classList.remove("text-neutral-300");

      const layer = btn.getAttribute("data-layer");
      const layerNames = {
        all: "All Cultural Dimensions",
        monuments: "Monuments & Architectural Wonders",
        dance: "Performing Arts & Classical Dance",
        crafts: "GI Crafts & Textiles",
        festivals: "Living Festivals & Harvest Rhythms",
        languages: "Languages & Epigraphical Scripts"
      };
      if (layerLabel) layerLabel.textContent = layerNames[layer] || "Custom Layer";
    });
  });
}
