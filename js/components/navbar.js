// 🧭 BHARATVERSE — Navigation Component
export function renderNavbar(container, state, onNavigate, onSearch, onProfile) {
  container.innerHTML = `
    <header class="sticky top-0 z-50 glass-panel border-b border-yellow-700/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand -->
          <div class="flex items-center space-x-3 cursor-pointer group" id="brand-logo">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-rose-800 to-amber-700 flex items-center justify-center p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div class="w-full h-full bg-[#140f12] rounded-[10px] flex items-center justify-center border border-amber-400/40">
                <span class="text-2xl font-cinzel font-bold text-amber-400">भ</span>
              </div>
            </div>
            <div>
              <div class="flex items-center space-x-1.5">
                <span class="font-cinzel text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">BHARAT<span class="text-amber-400">VERSE</span></span>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold tracking-wider">SIH 2026</span>
              </div>
              <p class="text-[11px] text-amber-200/70 tracking-widest uppercase">Explore • Experience • Preserve</p>
            </div>
          </div>

          <!-- Desktop Navigation Links -->
          <nav class="hidden xl:flex items-center space-x-1 font-medium text-sm">
            <button data-nav="home" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'home' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🏠</span>
              <span>Home</span>
            </button>
            <button data-nav="map" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'map' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🗺️</span>
              <span>Cultural GIS</span>
            </button>
            <button data-nav="explorer" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'explorer' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🏛️</span>
              <span>Heritage</span>
            </button>
            <button data-nav="stories" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'stories' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>📖</span>
              <span>Stories</span>
            </button>
            <button data-nav="quest" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'quest' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🎮</span>
              <span>Culture Quest</span>
            </button>
            <button data-nav="bharatai" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'bharatai' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🤖</span>
              <span>Bharat AI</span>
            </button>
            <button data-nav="languages" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'languages' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🗣️</span>
              <span>Languages</span>
            </button>
            <button data-nav="festivals" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'festivals' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🪔</span>
              <span>Calendar</span>
            </button>
            <button data-nav="voices" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'voices' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🎙️</span>
              <span>Voices</span>
            </button>
            <button data-nav="student" class="nav-link px-3 py-2 rounded-lg text-amber-100/90 hover:text-amber-300 hover:bg-amber-950/40 transition-colors flex items-center space-x-1.5 ${state.currentView === 'student' ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : ''}">
              <span>🎓</span>
              <span>Student</span>
            </button>
          </nav>

          <!-- Right Action Bar: Search, XP Counter, Profile -->
          <div class="flex items-center space-x-3">
            <!-- Global Search Trigger -->
            <button id="search-trigger-btn" class="p-2.5 rounded-xl bg-neutral-900/80 hover:bg-amber-950/50 border border-amber-500/30 text-amber-200 transition-colors flex items-center space-x-2 text-xs">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span class="hidden md:inline text-neutral-400">Search Bharat...</span>
              <kbd class="hidden md:inline px-1.5 py-0.5 text-[10px] bg-neutral-800 rounded border border-neutral-700 text-neutral-400">⌘K</kbd>
            </button>

            <!-- Culture XP Capsule -->
            <div class="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-900/50 to-rose-950/50 border border-amber-500/40 shadow-inner">
              <span class="text-amber-400 text-sm">⚡</span>
              <span class="font-bold text-xs text-amber-300" id="user-xp-display">${state.userXp} XP</span>
            </div>

            <!-- Preservation Alert Pill -->
            <button data-nav="alert" class="nav-link hidden md:flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 text-xs font-semibold transition-all">
              <span class="animate-pulse">🚨</span>
              <span>Report</span>
            </button>

            <!-- Profile / College Avatar -->
            <button id="profile-btn" class="flex items-center space-x-2 p-1.5 rounded-xl bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/30 transition-colors">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-rose-800 flex items-center justify-center font-bold text-xs text-white">
                ${state.userInitials || "RS"}
              </div>
              <div class="hidden lg:block text-left pr-1">
                <p class="text-xs font-semibold text-white leading-tight">${state.userName || "Reshwanth"}</p>
                <p class="text-[10px] text-amber-300/80 leading-tight">${state.userCollege || "SNIST Hyderabad"}</p>
              </div>
            </button>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-btn" class="xl:hidden p-2 text-amber-200 hover:text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden xl:hidden border-t border-amber-900/40 bg-[#120f12]/95 px-4 pt-2 pb-4 space-y-1">
        <button data-nav="home" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🏠 Home</button>
        <button data-nav="map" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🗺️ Cultural GIS Map</button>
        <button data-nav="explorer" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🏛️ Heritage Explorer</button>
        <button data-nav="stories" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">📖 Story of India</button>
        <button data-nav="quest" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🎮 Culture Quest</button>
        <button data-nav="bharatai" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🤖 Bharat AI Cultural Guide</button>
        <button data-nav="languages" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🗣️ Languages of Bharat</button>
        <button data-nav="festivals" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🪔 Festival Calendar</button>
        <button data-nav="voices" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🎙️ Voices of Bharat</button>
        <button data-nav="community" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🧑🤝🧑 Community Archives</button>
        <button data-nav="nearme" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">📍 Heritage Near Me</button>
        <button data-nav="student" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🎓 BharatVerse for Students</button>
        <button data-nav="leaderboard" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🏆 Leaderboard & Badges</button>
        <button data-nav="virtualtour" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-amber-100 hover:bg-amber-950">🏛️ Virtual Tour (360°)</button>
        <button data-nav="alert" class="nav-link block w-full text-left px-3 py-2 rounded text-sm text-rose-300 hover:bg-rose-950">🚨 Report Heritage (Preserve)</button>
      </div>
    </header>
  `;

  // Attach Navigation Listeners
  container.querySelectorAll(".nav-link").forEach(btn => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-nav");
      onNavigate(view);
      // close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu) mobileMenu.classList.add("hidden");
    });
  });

  const logo = container.querySelector("#brand-logo");
  if (logo) logo.addEventListener("click", () => onNavigate("home"));

  const searchBtn = container.querySelector("#search-trigger-btn");
  if (searchBtn) searchBtn.addEventListener("click", onSearch);

  const profileBtn = container.querySelector("#profile-btn");
  if (profileBtn) profileBtn.addEventListener("click", onProfile);

  const mobileToggle = container.querySelector("#mobile-menu-btn");
  const mobileMenu = container.querySelector("#mobile-menu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}
