// 🏛️ BHARATVERSE — Heritage Explorer: Multi-Faceted Catalog
import { HERITAGE_CATALOG } from "../data/heritageData.js";

export function renderHeritageExplorer(container, onSelectState, onOpenStory) {
  let activeSearch = "";
  let activeState = "all";
  let activeCategory = "all";
  let activeEra = "all";

  function filterItems() {
    return HERITAGE_CATALOG.filter(item => {
      const matchSearch = !activeSearch || 
        item.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
        item.desc.toLowerCase().includes(activeSearch.toLowerCase()) ||
        item.state.toLowerCase().includes(activeSearch.toLowerCase());
      
      const matchState = activeState === "all" || item.state.toLowerCase() === activeState.toLowerCase();
      const matchCategory = activeCategory === "all" || item.category.toLowerCase() === activeCategory.toLowerCase();
      const matchEra = activeEra === "all" || item.era.toLowerCase().includes(activeEra.toLowerCase());

      return matchSearch && matchState && matchCategory && matchEra;
    });
  }

  function render() {
    const items = filterItems();

    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header -->
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 uppercase tracking-wider">Comprehensive National Archive</span>
          <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-white">Explore India's Living Heritage</h1>
          <p class="text-neutral-400 text-xs sm:text-sm">Filter across monuments, classical dances, tribal crafts, harvest festivals, and ancient sciences.</p>
        </div>

        <!-- Filter Controls Bar -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 space-y-4">
          
          <!-- Search Input -->
          <div class="relative">
            <svg class="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input 
              type="text" 
              id="explorer-search-input" 
              placeholder="Search by monument, dance, craft, state (e.g. Charminar, Ramappa, Ikat, Warli)..." 
              value="${activeSearch}"
              class="w-full bg-neutral-900/90 border border-amber-500/30 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <!-- Dropdowns Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            
            <!-- State Filter -->
            <div>
              <label class="block text-neutral-400 mb-1">Select State / Region</label>
              <select id="explorer-filter-state" class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3 py-2.5 text-amber-200 focus:outline-none focus:border-amber-400">
                <option value="all">All States & Territories</option>
                <option value="telangana" ${activeState === 'telangana' ? 'selected' : ''}>Telangana (Spotlight)</option>
                <option value="tamil nadu" ${activeState === 'tamil nadu' ? 'selected' : ''}>Tamil Nadu</option>
                <option value="karnataka" ${activeState === 'karnataka' ? 'selected' : ''}>Karnataka</option>
                <option value="maharashtra" ${activeState === 'maharashtra' ? 'selected' : ''}>Maharashtra</option>
                <option value="national" ${activeState === 'national' ? 'selected' : ''}>Pan-India (National)</option>
              </select>
            </div>

            <!-- Category Filter -->
            <div>
              <label class="block text-neutral-400 mb-1">Cultural Category</label>
              <select id="explorer-filter-category" class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3 py-2.5 text-amber-200 focus:outline-none focus:border-amber-400">
                <option value="all">All Categories</option>
                <option value="monuments" ${activeCategory === 'monuments' ? 'selected' : ''}>🏛️ Monuments & Temples</option>
                <option value="performing arts" ${activeCategory === 'performing arts' ? 'selected' : ''}>🎭 Performing Arts & Dance</option>
                <option value="traditional arts" ${activeCategory === 'traditional arts' ? 'selected' : ''}>🎨 Traditional Arts & Crafts</option>
                <option value="festivals" ${activeCategory === 'festivals' ? 'selected' : ''}>🪔 Festivals & Living Rites</option>
                <option value="knowledge" ${activeCategory === 'knowledge' ? 'selected' : ''}>📚 Ancient Sciences & Knowledge</option>
              </select>
            </div>

            <!-- Era Filter -->
            <div>
              <label class="block text-neutral-400 mb-1">Historical Era</label>
              <select id="explorer-filter-era" class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3 py-2.5 text-amber-200 focus:outline-none focus:border-amber-400">
                <option value="all">All Historical Eras</option>
                <option value="ancient" ${activeEra === 'ancient' ? 'selected' : ''}>Ancient (Pre-1000 CE)</option>
                <option value="medieval" ${activeEra === 'medieval' ? 'selected' : ''}>Medieval (1000 - 1700 CE)</option>
                <option value="vedic" ${activeEra === 'vedic' ? 'selected' : ''}>Vedic / Classical Origins</option>
              </select>
            </div>

          </div>

          <!-- Active Results Count & Reset -->
          <div class="flex items-center justify-between pt-2 border-t border-amber-500/20 text-xs">
            <span class="text-neutral-400">Showing <span class="font-bold text-amber-400">${items.length}</span> curated heritage assets</span>
            ${(activeSearch || activeState !== 'all' || activeCategory !== 'all' || activeEra !== 'all') ? `
              <button id="explorer-reset-btn" class="text-amber-400 hover:text-amber-300 font-semibold">Reset Filters ✕</button>
            ` : ''}
          </div>

        </div>

        <!-- Catalog Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${items.map(item => `
            <div class="glass-panel rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
              
              <!-- Image -->
              <div class="relative aspect-video overflow-hidden">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
                <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-neutral-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md uppercase">${item.category}</span>
                <span class="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-500/30 backdrop-blur-md">📍 ${item.state}</span>
              </div>

              <!-- Body -->
              <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                    <span>${item.type}</span>
                    <span>${item.era}</span>
                  </div>
                  <h3 class="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors">${item.title}</h3>
                  <p class="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-3">${item.desc}</p>
                </div>

                <!-- Highlights Tags -->
                <div class="space-y-3 pt-2">
                  <div class="flex flex-wrap gap-1.5">
                    ${item.highlights.map(h => `
                      <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300/90 border border-amber-500/20">${h}</span>
                    `).join('')}
                  </div>

                  ${item.id === 'charminar' ? `
                    <button data-story="charminar" class="open-story-btn w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5">
                      <span>📖 Read "Story of Charminar"</span>
                      <span>→</span>
                    </button>
                  ` : ''}
                </div>

              </div>

            </div>
          `).join('')}
        </div>

      </section>
    `;

    // Attach filter listeners
    const searchInput = container.querySelector("#explorer-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        activeSearch = e.target.value;
        render();
        const nextInput = container.querySelector("#explorer-search-input");
        if (nextInput) {
          nextInput.focus();
          nextInput.selectionStart = nextInput.selectionEnd = nextInput.value.length;
        }
      });
    }

    container.querySelector("#explorer-filter-state")?.addEventListener("change", (e) => {
      activeState = e.target.value;
      render();
    });

    container.querySelector("#explorer-filter-category")?.addEventListener("change", (e) => {
      activeCategory = e.target.value;
      render();
    });

    container.querySelector("#explorer-filter-era")?.addEventListener("change", (e) => {
      activeEra = e.target.value;
      render();
    });

    container.querySelector("#explorer-reset-btn")?.addEventListener("click", () => {
      activeSearch = "";
      activeState = "all";
      activeCategory = "all";
      activeEra = "all";
      render();
    });

    container.querySelectorAll(".open-story-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const storyId = btn.getAttribute("data-story");
        onOpenStory(storyId);
      });
    });
  }

  render();
}
