// 🏛️ SANNIVESHAM — Heritage Explorer: Multi-Faceted Catalog
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

  // Initial Shell Render
  container.innerHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      <!-- Header -->
      <div class="text-center space-y-3 max-w-3xl mx-auto">
        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 uppercase tracking-wider">Comprehensive National Archive</span>
        <h1 class="font-cinzel text-3xl sm:text-5xl font-black text-white">Explore India's Living Heritage</h1>
        <p class="text-neutral-400 text-xs sm:text-sm">Filter across sacred monuments, classical dances, tribal crafts, harvest festivals, and ancient sciences.</p>
      </div>

      <!-- Filter Controls Bar -->
      <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 space-y-4 shadow-xl">
        
        <!-- Search Input -->
        <div class="relative">
          <svg class="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input 
            type="text" 
            id="explorer-search-input" 
            placeholder="Search by monument, dance, craft, state (e.g. Charminar, Ramappa, Ikat, Warli)..." 
            class="w-full h-12 bg-neutral-900/90 border border-amber-500/30 rounded-2xl pl-12 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-inner"
          />
        </div>

        <!-- Dropdowns Grid (Equal h-11 heights) -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          
          <!-- State Filter -->
          <div>
            <label class="block text-neutral-400 mb-1 font-medium">Select State / Region</label>
            <select id="explorer-filter-state" class="w-full h-11 bg-neutral-900/90 border border-amber-500/30 rounded-xl px-3.5 text-amber-200 text-xs focus:outline-none focus:border-amber-400 cursor-pointer">
              <option value="all">All States & Territories</option>
              <option value="telangana">Telangana (Spotlight)</option>
              <option value="tamil nadu">Tamil Nadu</option>
              <option value="karnataka">Karnataka</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="national">Pan-India (National)</option>
            </select>
          </div>

          <!-- Category Filter -->
          <div>
            <label class="block text-neutral-400 mb-1 font-medium">Cultural Category</label>
            <select id="explorer-filter-category" class="w-full h-11 bg-neutral-900/90 border border-amber-500/30 rounded-xl px-3.5 text-amber-200 text-xs focus:outline-none focus:border-amber-400 cursor-pointer">
              <option value="all">All Categories</option>
              <option value="monuments">🏛️ Monuments & Temples</option>
              <option value="performing arts">🎭 Performing Arts & Dance</option>
              <option value="traditional arts">🎨 Traditional Arts & Crafts</option>
              <option value="festivals">🪔 Festivals & Living Rites</option>
              <option value="knowledge">📚 Ancient Sciences & Knowledge</option>
            </select>
          </div>

          <!-- Era Filter -->
          <div>
            <label class="block text-neutral-400 mb-1 font-medium">Historical Era</label>
            <select id="explorer-filter-era" class="w-full h-11 bg-neutral-900/90 border border-amber-500/30 rounded-xl px-3.5 text-amber-200 text-xs focus:outline-none focus:border-amber-400 cursor-pointer">
              <option value="all">All Historical Eras</option>
              <option value="ancient">Ancient (Pre-1000 CE)</option>
              <option value="medieval">Medieval (1000 - 1700 CE)</option>
              <option value="vedic">Vedic / Classical Origins</option>
            </select>
          </div>

        </div>

        <!-- Active Results Count & Reset Bar -->
        <div class="flex items-center justify-between pt-2 border-t border-amber-500/20 text-xs">
          <span class="text-neutral-400">Showing <span class="font-bold text-amber-400" id="explorer-count-badge">0</span> curated heritage assets</span>
          <button id="explorer-reset-btn" class="hidden text-amber-400 hover:text-amber-300 font-semibold cursor-pointer transition-colors">Reset Filters ✕</button>
        </div>

      </div>

      <!-- Catalog Grid Mount -->
      <div id="explorer-catalog-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"></div>

    </section>
  `;

  const gridMount = container.querySelector("#explorer-catalog-grid");
  const countBadge = container.querySelector("#explorer-count-badge");
  const resetBtn = container.querySelector("#explorer-reset-btn");
  const searchInput = container.querySelector("#explorer-search-input");
  const stateSelect = container.querySelector("#explorer-filter-state");
  const catSelect = container.querySelector("#explorer-filter-category");
  const eraSelect = container.querySelector("#explorer-filter-era");

  function updateGrid() {
    const items = filterItems();
    if (countBadge) countBadge.textContent = items.length;

    const hasFilters = activeSearch || activeState !== "all" || activeCategory !== "all" || activeEra !== "all";
    if (resetBtn) {
      if (hasFilters) resetBtn.classList.remove("hidden");
      else resetBtn.classList.add("hidden");
    }

    if (items.length === 0) {
      gridMount.innerHTML = `
        <div class="col-span-full glass-panel p-12 rounded-3xl border border-amber-500/20 text-center space-y-4">
          <span class="text-4xl">🔍</span>
          <h3 class="font-cinzel text-xl font-bold text-white">No Heritage Matches Found</h3>
          <p class="text-neutral-400 text-xs max-w-md mx-auto">Try broadening your search term or selecting "All States & Territories" to see all curated assets.</p>
          <button id="empty-reset-btn" class="px-5 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all">
            Reset All Filters
          </button>
        </div>
      `;
      gridMount.querySelector("#empty-reset-btn")?.addEventListener("click", resetAll);
      return;
    }

    gridMount.innerHTML = items.map(item => `
      <div class="glass-panel heritage-card-glow rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between h-full group">
        
        <!-- Image & Tags -->
        <div class="relative aspect-video overflow-hidden shrink-0">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
          <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-md bg-neutral-950/80 text-amber-300 border border-amber-500/30 backdrop-blur-md uppercase tracking-wider">${item.category}</span>
          <span class="absolute top-3 right-3 text-[10px] font-semibold px-2.5 py-1 rounded-md bg-rose-950/80 text-rose-300 border border-rose-500/30 backdrop-blur-md">📍 ${item.state}</span>
        </div>

        <!-- Card Body -->
        <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[11px] text-neutral-400 mb-1 font-mono">
              <span>${item.type}</span>
              <span>${item.era}</span>
            </div>
            <h3 class="font-cinzel text-xl font-bold text-white group-hover:text-amber-300 transition-colors">${item.title}</h3>
            <p class="text-xs text-neutral-300 mt-2 leading-relaxed line-clamp-3 font-light">${item.desc}</p>
          </div>

          <!-- Highlights & Action CTA -->
          <div class="space-y-3 pt-2">
            <div class="flex flex-wrap gap-1.5">
              ${item.highlights.map(h => `
                <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300/90 border border-amber-500/20">${h}</span>
              `).join('')}
            </div>

            ${item.id === 'charminar' ? `
              <button data-story="charminar" class="open-story-btn w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-sm">
                <span>📖 Read "Story of Charminar"</span>
                <span>→</span>
              </button>
            ` : ''}
          </div>

        </div>

      </div>
    `).join('');

    gridMount.querySelectorAll(".open-story-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const storyId = btn.getAttribute("data-story");
        onOpenStory(storyId);
      });
    });
  }

  function resetAll() {
    activeSearch = "";
    activeState = "all";
    activeCategory = "all";
    activeEra = "all";
    if (searchInput) searchInput.value = "";
    if (stateSelect) stateSelect.value = "all";
    if (catSelect) catSelect.value = "all";
    if (eraSelect) eraSelect.value = "all";
    updateGrid();
  }

  // Attach Event Listeners
  searchInput?.addEventListener("input", (e) => {
    activeSearch = e.target.value.trim();
    updateGrid();
  });

  stateSelect?.addEventListener("change", (e) => {
    activeState = e.target.value;
    updateGrid();
  });

  catSelect?.addEventListener("change", (e) => {
    activeCategory = e.target.value;
    updateGrid();
  });

  eraSelect?.addEventListener("change", (e) => {
    activeEra = e.target.value;
    updateGrid();
  });

  resetBtn?.addEventListener("click", resetAll);

  // Initial Grid Update
  updateGrid();
}
