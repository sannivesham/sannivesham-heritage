// 🏛️ BHARATVERSE — Virtual Heritage Tours (360° / Panorama Experience)
export function renderVirtualTour(container) {
  let activeTour = "hampi"; // "hampi" | "ramappa"
  let activeHotspot = null;
  let panOffset = 0;

  const TOURS = {
    hampi: {
      title: "Walk Through Hampi (Vijayanagara Imperial Ruins)",
      location: "Bellary / Vijayanagara, Karnataka",
      bgImage: "https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=1600&q=85",
      overview: "Experience the monumental granite boulder ruins of the 14th-century capital of the Vijayanagara Empire on the banks of the sacred Tungabhadra River.",
      hotspots: [
        {
          id: "chariot",
          title: "The Monolithic Stone Chariot",
          x: 28,
          y: 52,
          desc: "Shrine dedicated to Garuda, vehicle of Vishnu. Constructed from interlocking granite blocks with carved revolving stone wheels representing the cosmic vehicle."
        },
        {
          id: "musical_pillars",
          title: "Vittala Temple Musical Pillars",
          x: 48,
          y: 44,
          desc: "56 monolithic acoustic pillars (Saregama pillars) that emit musical notes when gently tapped, carved out of resonant granite rock."
        },
        {
          id: "bazaar",
          title: "Hampi Ancient Diamond & Gem Bazaars",
          x: 72,
          y: 60,
          desc: "Sprawling two-story arcaded colonnades where Portuguese and Persian travelers documented rubies and diamonds being sold by the cupful."
        }
      ]
    },
    ramappa: {
      title: "Rudreswara (Ramappa) Temple",
      location: "Palampet, Mulugu, Telangana",
      bgImage: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1600&q=85",
      overview: "UNESCO World Heritage site engineered in 1213 CE by master sculptor Ramappa under Kakatiya ruler Ganapati Deva.",
      hotspots: [
        {
          id: "floating_bricks",
          title: "Porous Floating Bricks",
          x: 50,
          y: 26,
          desc: "Lightweight sponge bricks with density lower than water, reducing structural weight to protect the temple during seismic tremors."
        },
        {
          id: "madanikas",
          title: "Black Basalt Bracket Figures (Madanikas)",
          x: 35,
          y: 58,
          desc: "12 life-size celestial dancers and warrior figures carved in high-gloss polished dolerite basalt."
        },
        {
          id: "sandbox",
          title: "Sandbox Earthquake Trench",
          x: 65,
          y: 78,
          desc: "A sub-foundation filled with river sand and jaggery mixture that absorbed earthquake waves, keeping the sanctum standing intact."
        }
      ]
    }
  };

  function render() {
    const tour = TOURS[activeTour];

    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Spatial Immersion</span>
              <span class="text-xs text-neutral-400">Virtual 360° Prototype</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Virtual Heritage Tours</h1>
            <p class="text-xs text-neutral-300 mt-1">${tour.title} • 📍 ${tour.location}</p>
          </div>

          <!-- Tour Switcher -->
          <div class="flex items-center space-x-2 bg-neutral-900/80 p-1.5 rounded-2xl border border-amber-500/20">
            <button data-tour="hampi" class="tour-toggle-btn px-3 py-1.5 rounded-xl text-xs font-bold ${activeTour === 'hampi' ? 'bg-amber-500 text-neutral-950' : 'text-neutral-300 hover:text-white'}">
              🏛️ Hampi Stone Chariot
            </button>
            <button data-tour="ramappa" class="tour-toggle-btn px-3 py-1.5 rounded-xl text-xs font-bold ${activeTour === 'ramappa' ? 'bg-amber-500 text-neutral-950' : 'text-neutral-300 hover:text-white'}">
              🛕 Ramappa Temple (UNESCO)
            </button>
          </div>
        </div>

        <!-- 360° Panoramic Viewer Window -->
        <div class="relative w-full h-[520px] rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl select-none group">
          
          <!-- Panoramic Background Image with CSS Pan Transform -->
          <div 
            id="panorama-stage" 
            class="absolute inset-0 w-[140%] h-full bg-cover bg-center transition-transform duration-500 ease-out"
            style="
              background-image: url('${tour.bgImage}');
              transform: translateX(${panOffset}%);
            "
          >
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-neutral-950/20"></div>

            <!-- Hotspots Superimposed -->
            ${tour.hotspots.map(spot => `
              <button 
                data-spot-id="${spot.id}" 
                class="hotspot-btn absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center group/spot cursor-pointer focus:outline-none"
                style="left: ${spot.x}%; top: ${spot.y}%;"
              >
                <div class="w-8 h-8 rounded-full bg-amber-500/40 border border-amber-300 flex items-center justify-center animate-ping absolute"></div>
                <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-neutral-950 font-bold text-xs flex items-center justify-center shadow-lg shadow-amber-500/50 group-hover/spot:scale-125 transition-transform z-10">
                  ●
                </div>
                <div class="hidden group-hover/spot:block absolute bottom-full mb-2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-neutral-950/90 text-amber-300 text-xs font-bold border border-amber-500/30 shadow-xl z-20">
                  ${spot.title}
                </div>
              </button>
            `).join('')}

          </div>

          <!-- Pan Controls Overlay Bar -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-3 glass-panel px-4 py-2 rounded-2xl border border-amber-500/30 shadow-2xl z-20">
            <button id="pan-left-btn" class="p-2 rounded-xl hover:bg-amber-500/20 text-amber-300 text-sm font-bold transition-colors" title="Pan Left">
              ◀ Rotate Left
            </button>
            <div class="h-4 w-px bg-amber-500/30"></div>
            <button id="pan-reset-btn" class="p-2 rounded-xl hover:bg-amber-500/20 text-neutral-300 text-xs transition-colors">
              Center
            </button>
            <div class="h-4 w-px bg-amber-500/30"></div>
            <button id="pan-right-btn" class="p-2 rounded-xl hover:bg-amber-500/20 text-amber-300 text-sm font-bold transition-colors" title="Pan Right">
              Rotate Right ▶
            </button>
          </div>

          <!-- Hotspot Inspector Slide-In (if one clicked) -->
          ${activeHotspot ? `
            <div class="absolute top-6 right-6 max-w-sm glass-panel-maroon p-6 rounded-3xl border border-amber-400 shadow-2xl z-30 space-y-3 animate-fadeIn">
              <div class="flex items-center justify-between">
                <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Point of Interest</span>
                <button id="close-spot-btn" class="text-neutral-400 hover:text-white text-xs">✕</button>
              </div>
              <h3 class="font-cinzel text-lg font-bold text-white">${activeHotspot.title}</h3>
              <p class="text-xs text-neutral-200 leading-relaxed">${activeHotspot.desc}</p>
              <div class="pt-2 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-amber-400 font-medium">
                <span>📍 Archaeological Landmark</span>
                <span>Verified Heritage</span>
              </div>
            </div>
          ` : ''}

        </div>

      </section>
    `;

    // Tour toggle buttons
    container.querySelectorAll(".tour-toggle-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTour = btn.getAttribute("data-tour");
        activeHotspot = null;
        panOffset = 0;
        render();
      });
    });

    // Pan controls
    container.querySelector("#pan-left-btn")?.addEventListener("click", () => {
      panOffset = Math.min(0, panOffset + 10);
      render();
    });
    container.querySelector("#pan-right-btn")?.addEventListener("click", () => {
      panOffset = Math.max(-25, panOffset - 10);
      render();
    });
    container.querySelector("#pan-reset-btn")?.addEventListener("click", () => {
      panOffset = 0;
      render();
    });

    // Hotspot button clicks
    container.querySelectorAll(".hotspot-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const spotId = btn.getAttribute("data-spot-id");
        activeHotspot = tour.hotspots.find(s => s.id === spotId);
        render();
      });
    });

    container.querySelector("#close-spot-btn")?.addEventListener("click", () => {
      activeHotspot = null;
      render();
    });
  }

  render();
}
