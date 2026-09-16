// 📍 SANNIVESHAM — Heritage Near Me: Location-Based Cultural Discovery
export function renderHeritageNearMe(container) {
  let currentRadius = 15; // km
  let currentCategory = "all";
  let userLocation = "Hyderabad, Telangana (Default)";

  const NEARBY_DATA = [
    {
      name: "Charminar & Laad Bazaar",
      category: "monument",
      distanceKm: 3.4,
      eta: "12 mins",
      address: "Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad",
      icon: "🏛️",
      type: "National Monument & Lacquer Bangles",
      desc: "Built in 1591, four arches facing four cardinal directions with centuries-old lacquer and stone artisan workshops in surrounding alleys."
    },
    {
      name: "Chowmahalla Palace",
      category: "monument",
      distanceKm: 4.1,
      eta: "16 mins",
      address: "Khilwat, Hyderabad",
      icon: "🏰",
      type: "Nizami Royal Palace & Museum",
      desc: "Seat of the Asaf Jahi dynasty featuring the Khilwat Mubarak Durbar Hall with 19 magnificent Belgian crystal chandeliers."
    },
    {
      name: "Ravindra Bharathi National Cultural Centre",
      category: "cultural",
      distanceKm: 4.8,
      eta: "18 mins",
      address: "Near Assembly, Saifabad, Hyderabad",
      icon: "🎭",
      type: "Performing Arts Auditorium",
      desc: "Hub of Telugu classical dance, Kuchipudi recitals, Carnatic music festivals, and drama."
    },
    {
      name: "Shilparamam Arts & Crafts Village",
      category: "artisan",
      distanceKm: 12.5,
      eta: "32 mins",
      address: "Hitec City, Madhapur, Hyderabad",
      icon: "🎨",
      type: "Artisan Living Village",
      desc: "Living village where rural artisans demonstrate terracotta sculpting, Cheriyal scroll painting, and handloom weaving."
    },
    {
      name: "Golconda Fort & Qutb Shahi Tombs",
      category: "monument",
      distanceKm: 11.2,
      eta: "28 mins",
      address: "Ibrahim Bagh, Hyderabad",
      icon: "🏰",
      type: "Medieval Acoustic Fortress",
      desc: "Diamond mining capital with parabolic acoustic arches and seven majestic royal domed mausoleums."
    },
    {
      name: "State Central Library & Oriental Manuscripts",
      category: "library",
      distanceKm: 5.2,
      eta: "19 mins",
      address: "Afzal Gunj, Hyderabad",
      icon: "📚",
      type: "Heritage Public Library & Archive",
      desc: "Architectural masterpiece on the Musi river housing over 500,000 historic books and rare palm-leaf manuscripts."
    }
  ];

  function filterItems() {
    return NEARBY_DATA.filter(item => {
      const matchRadius = item.distanceKm <= currentRadius;
      const matchCat = currentCategory === "all" || item.category === currentCategory;
      return matchRadius && matchCat;
    });
  }

  function render() {
    const items = filterItems();

    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header & Radius Controls -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-xl">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Hyperlocal Heritage</span>
              <span class="text-xs text-neutral-400">Hyperlocal Heritage Discovery</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Heritage Near Me</h1>
            <p class="text-xs text-neutral-300 mt-1">Discover monuments, artisan workshops, and cultural theatres within your reach in <strong class="text-amber-300">${userLocation}</strong>.</p>
          </div>

          <!-- Radius Selector (Standardized h-10) -->
          <div class="flex items-center space-x-2 bg-neutral-900/80 p-1.5 rounded-2xl border border-amber-500/20 shadow-inner">
            <span class="text-xs text-neutral-400 font-semibold pl-2">Radius:</span>
            <button data-rad="5" class="rad-btn h-8 px-3.5 rounded-xl text-xs font-bold transition-all ${currentRadius === 5 ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'text-neutral-300 hover:bg-neutral-800'}">5 km</button>
            <button data-rad="15" class="rad-btn h-8 px-3.5 rounded-xl text-xs font-bold transition-all ${currentRadius === 15 ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'text-neutral-300 hover:bg-neutral-800'}">15 km</button>
            <button data-rad="50" class="rad-btn h-8 px-3.5 rounded-xl text-xs font-bold transition-all ${currentRadius === 50 ? 'bg-amber-500 text-neutral-950 shadow-sm' : 'text-neutral-300 hover:bg-neutral-800'}">50 km</button>
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2 text-xs">
          <button data-cat="all" class="cat-btn h-9 px-3.5 rounded-xl font-semibold border transition-all flex items-center ${currentCategory === 'all' ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm' : 'glass-panel text-neutral-300 border-amber-500/20 hover:border-amber-400/60'}">
            <span>🌐 All Nearby (${NEARBY_DATA.filter(i => i.distanceKm <= currentRadius).length})</span>
          </button>
          <button data-cat="monument" class="cat-btn h-9 px-3.5 rounded-xl font-semibold border transition-all flex items-center ${currentCategory === 'monument' ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm' : 'glass-panel text-neutral-300 border-amber-500/20 hover:border-amber-400/60'}">
            <span>🏛️ Heritage Monuments</span>
          </button>
          <button data-cat="artisan" class="cat-btn h-9 px-3.5 rounded-xl font-semibold border transition-all flex items-center ${currentCategory === 'artisan' ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm' : 'glass-panel text-neutral-300 border-amber-500/20 hover:border-amber-400/60'}">
            <span>🎨 Artisan Workshops</span>
          </button>
          <button data-cat="cultural" class="cat-btn h-9 px-3.5 rounded-xl font-semibold border transition-all flex items-center ${currentCategory === 'cultural' ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm' : 'glass-panel text-neutral-300 border-amber-500/20 hover:border-amber-400/60'}">
            <span>🎭 Cultural Theatres</span>
          </button>
          <button data-cat="library" class="cat-btn h-9 px-3.5 rounded-xl font-semibold border transition-all flex items-center ${currentCategory === 'library' ? 'bg-amber-500/20 text-amber-300 border-amber-400 shadow-sm' : 'glass-panel text-neutral-300 border-amber-500/20 hover:border-amber-400/60'}">
            <span>📚 Heritage Libraries</span>
          </button>
        </div>

        <!-- Nearby Items Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          ${items.map(item => `
            <div class="glass-panel heritage-card-glow p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400 transition-all flex flex-col justify-between h-full space-y-4 group">
              <div>
                <div class="flex items-center justify-between">
                  <span class="text-2xl">${item.icon}</span>
                  <div class="flex items-center space-x-1.5 text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-mono">
                    <span>📍 ${item.distanceKm} km</span>
                    <span>•</span>
                    <span>${item.eta}</span>
                  </div>
                </div>
                <h3 class="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors mt-3">${item.name}</h3>
                <span class="text-[11px] text-amber-400 font-medium">${item.type}</span>
                <p class="text-xs text-neutral-300 mt-2 leading-relaxed">${item.desc}</p>
              </div>

              <div class="pt-3 border-t border-amber-500/15 flex items-center justify-between text-[11px]">
                <span class="text-neutral-400 truncate max-w-[200px]">${item.address}</span>
                <button class="text-amber-400 hover:text-amber-300 font-bold flex items-center space-x-1 shrink-0">
                  <span>Directions</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

      </section>
    `;

    // Radius buttons
    container.querySelectorAll(".rad-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentRadius = parseInt(btn.getAttribute("data-rad"), 10);
        render();
      });
    });

    // Category buttons
    container.querySelectorAll(".cat-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.getAttribute("data-cat");
        render();
      });
    });
  }

  render();
}
