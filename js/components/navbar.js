// 🧭 SANNIVESHAM — Navigation Component
export function renderNavbar(container, state, onNavigate, onSearch, onProfile) {
  container.innerHTML = `
    <header class="sticky top-0 z-50 glass-panel border-b border-amber-500/20 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Left: Logo & Brand -->
          <div class="flex items-center space-x-3 cursor-pointer group" id="brand-logo">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 via-rose-700 to-amber-700 flex items-center justify-center p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <div class="w-full h-full bg-[#140f12] rounded-[10px] flex items-center justify-center border border-amber-400/40">
                <span class="text-xl font-cinzel font-black text-amber-400">S</span>
              </div>
            </div>
            <div>
              <span class="font-cinzel text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">SANNIVE<span class="text-amber-400">SHAM</span></span>
              <p class="text-[10px] text-amber-200/70 tracking-widest uppercase font-medium">Explore • Experience • Preserve</p>
            </div>
          </div>

          <!-- Center: Perfectly Aligned Desktop Dropdown Navigation -->
          <nav class="hidden lg:flex items-center space-x-1 xl:space-x-1.5 font-medium text-xs">
            
            <!-- Home -->
            <button data-nav="home" class="nav-direct-link h-10 px-3.5 rounded-xl text-neutral-200 hover:text-amber-300 hover:bg-neutral-800/70 transition-all flex items-center space-x-1.5 font-semibold uppercase tracking-wider ${state.currentView === 'home' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border border-transparent'}">
              <span>Home</span>
            </button>

            <!-- 1. Explore Dropdown -->
            <div class="nav-dropdown">
              <button class="h-10 px-3.5 rounded-xl text-neutral-200 hover:text-amber-300 hover:bg-neutral-800/70 transition-all flex items-center space-x-1.5 font-semibold uppercase tracking-wider ${['map', 'explorer', 'stateProfile', 'languages', 'festivals'].includes(state.currentView) ? 'text-amber-300 bg-amber-500/20 border border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border border-transparent'}">
                <span>Explore</span>
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="nav-dropdown-menu">
                <button data-nav="map" class="dropdown-item w-full text-left">
                  <span class="text-lg">🗺️</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Cultural GIS Map</p>
                    <p class="text-[10px] text-neutral-400">Interactive layers across India</p>
                  </div>
                </button>
                <button data-nav="explorer" class="dropdown-item w-full text-left">
                  <span class="text-lg">🏛️</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Heritage Explorer</p>
                    <p class="text-[10px] text-neutral-400">Filter monuments, arts, crafts</p>
                  </div>
                </button>
                <button data-nav="stateProfile" class="dropdown-item w-full text-left">
                  <span class="text-lg">🌟</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">State Cultural Profiles</p>
                    <p class="text-[10px] text-neutral-400">Telangana, Rajasthan & more</p>
                  </div>
                </button>
                <button data-nav="languages" class="dropdown-item w-full text-left">
                  <span class="text-lg">🗣️</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Languages & Scripts</p>
                    <p class="text-[10px] text-neutral-400">Compare scripts with audio</p>
                  </div>
                </button>
                <button data-nav="festivals" class="dropdown-item w-full text-left">
                  <span class="text-lg">🪔</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Cultural Calendar</p>
                    <p class="text-[10px] text-neutral-400">Seasonal festival almanac</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- 2. Experience Dropdown -->
            <div class="nav-dropdown">
              <button class="h-10 px-3.5 rounded-xl text-neutral-200 hover:text-amber-300 hover:bg-neutral-800/70 transition-all flex items-center space-x-1.5 font-semibold uppercase tracking-wider ${['stories', 'quest', 'bharatai', 'virtualtour', 'voices'].includes(state.currentView) ? 'text-amber-300 bg-amber-500/20 border border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border border-transparent'}">
                <span>Experience</span>
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="nav-dropdown-menu">
                <button data-nav="stories" class="dropdown-item w-full text-left">
                  <span class="text-lg">📖</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Stories of India</p>
                    <p class="text-[10px] text-neutral-400">Scroll storytelling (Charminar)</p>
                  </div>
                </button>
                <button data-nav="quest" class="dropdown-item w-full text-left">
                  <span class="text-lg">🎮</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Culture Quest</p>
                    <p class="text-[10px] text-neutral-400">Gamified levels & challenges</p>
                  </div>
                </button>
                <button data-nav="bharatai" class="dropdown-item w-full text-left">
                  <span class="text-lg">🤖</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Sannivesham AI</p>
                    <p class="text-[10px] text-neutral-400">Source-backed cultural guide</p>
                  </div>
                </button>
                <button data-nav="virtualtour" class="dropdown-item w-full text-left">
                  <span class="text-lg">🏛️</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">360° Virtual Tours</p>
                    <p class="text-[10px] text-neutral-400">Panoramic walk through Hampi</p>
                  </div>
                </button>
                <button data-nav="voices" class="dropdown-item w-full text-left">
                  <span class="text-lg">🎙️</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Voices of Heritage</p>
                    <p class="text-[10px] text-neutral-400">Living elder audio histories</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- 3. Learn Dropdown -->
            <div class="nav-dropdown">
              <button class="h-10 px-3.5 rounded-xl text-neutral-200 hover:text-amber-300 hover:bg-neutral-800/70 transition-all flex items-center space-x-1.5 font-semibold uppercase tracking-wider ${['student', 'leaderboard', 'institution'].includes(state.currentView) ? 'text-amber-300 bg-amber-500/20 border border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border border-transparent'}">
                <span>Learn</span>
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="nav-dropdown-menu">
                <button data-nav="student" class="dropdown-item w-full text-left">
                  <span class="text-lg">🎓</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Student 5-Day Journey</p>
                    <p class="text-[10px] text-neutral-400">Personalized pathway planner</p>
                  </div>
                </button>
                <button data-nav="leaderboard" class="dropdown-item w-full text-left">
                  <span class="text-lg">🏆</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Leaderboard & Badges</p>
                    <p class="text-[10px] text-neutral-400">College and scholar rankings</p>
                  </div>
                </button>
                <button data-nav="institution" class="dropdown-item w-full text-left">
                  <span class="text-lg">🏫</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Teacher Dashboard</p>
                    <p class="text-[10px] text-neutral-400">Assignments & field grading</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- 4. Preserve Dropdown -->
            <div class="nav-dropdown">
              <button class="h-10 px-3.5 rounded-xl text-neutral-200 hover:text-amber-300 hover:bg-neutral-800/70 transition-all flex items-center space-x-1.5 font-semibold uppercase tracking-wider ${['community', 'nearme', 'alert'].includes(state.currentView) ? 'text-amber-300 bg-amber-500/20 border border-amber-500/50 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border border-transparent'}">
                <span>Preserve</span>
                <svg class="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="nav-dropdown-menu">
                <button data-nav="community" class="dropdown-item w-full text-left">
                  <span class="text-lg">🧑🤝🧑</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">My Heritage Archive</p>
                    <p class="text-[10px] text-neutral-400">Submit elder memories & lore</p>
                  </div>
                </button>
                <button data-nav="nearme" class="dropdown-item w-full text-left">
                  <span class="text-lg">📍</span>
                  <div>
                    <p class="font-semibold text-white leading-tight">Heritage Near Me</p>
                    <p class="text-[10px] text-neutral-400">Hyperlocal geo-radius discovery</p>
                  </div>
                </button>
                <button data-nav="alert" class="dropdown-item w-full text-left">
                  <span class="text-lg">🚨</span>
                  <div>
                    <p class="font-semibold text-rose-300 leading-tight">Heritage Alert</p>
                    <p class="text-[10px] text-neutral-400">Report endangered monuments</p>
                  </div>
                </button>
              </div>
            </div>

          </nav>

          <!-- Right Action Bar: Search, XP Counter, Alert, Profile (Unified h-10 heights) -->
          <div class="flex items-center space-x-2 sm:space-x-2.5">
            
            <!-- Global Search Trigger -->
            <button id="search-trigger-btn" class="h-10 px-3 sm:px-3.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/30 hover:border-amber-400 text-amber-200 transition-all flex items-center space-x-2 text-xs shadow-sm">
              <svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <span class="hidden xl:inline text-neutral-300">Search Heritage...</span>
              <kbd class="hidden xl:inline px-1.5 py-0.5 text-[10px] bg-neutral-800 rounded border border-neutral-700 text-neutral-400 font-mono">⌘K</kbd>
            </button>

            <!-- Culture XP Pill -->
            <div class="hidden sm:flex h-10 items-center space-x-1.5 px-3.5 rounded-xl bg-gradient-to-r from-amber-950/80 to-rose-950/80 border border-amber-500/40 shadow-inner">
              <span class="text-amber-400 text-sm animate-pulse">⚡</span>
              <span class="font-bold text-xs text-amber-300 tracking-wide" id="user-xp-display">${state.userXp} XP</span>
            </div>

            <!-- Report Alert Button -->
            <button data-nav="alert" class="nav-direct-link hidden md:flex h-10 items-center space-x-1.5 px-3.5 rounded-xl bg-rose-950/70 hover:bg-rose-900/80 border border-rose-500/40 text-rose-300 text-xs font-semibold transition-all shadow-sm">
              <span class="animate-pulse text-sm">🚨</span>
              <span>Report</span>
            </button>

            <!-- Profile Avatar -->
            <button id="profile-btn" class="h-10 px-2 sm:px-2.5 rounded-xl bg-amber-950/30 hover:bg-amber-900/40 border border-amber-500/30 hover:border-amber-400 transition-all flex items-center space-x-2 shadow-sm">
              <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-rose-700 flex items-center justify-center font-bold text-xs text-white shrink-0 shadow-inner">
                ${state.userInitials || "RS"}
              </div>
              <div class="hidden xl:block text-left pr-1">
                <p class="text-xs font-semibold text-white leading-tight">${state.userName || "Reshwanth"}</p>
                <p class="text-[10px] text-amber-300/80 leading-tight">${state.userCollege || "SNIST Hyderabad"}</p>
              </div>
            </button>

            <!-- Mobile Menu Toggle Button -->
            <button id="mobile-menu-btn" class="lg:hidden h-10 w-10 rounded-xl bg-neutral-900/90 border border-amber-500/30 text-amber-300 hover:text-white flex items-center justify-center focus:outline-none transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>

          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden lg:hidden border-t border-amber-900/40 bg-[#120f12]/98 px-4 pt-3 pb-6 space-y-2 max-h-[75vh] overflow-y-auto">
        <button data-nav="home" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🏠 Home</button>
        <button data-nav="map" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🗺️ Cultural GIS Map</button>
        <button data-nav="explorer" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🏛️ Heritage Explorer</button>
        <button data-nav="stateProfile" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🌟 State Cultural Profiles</button>
        <button data-nav="stories" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">📖 Stories of India</button>
        <button data-nav="quest" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🎮 Culture Quest (Quiz)</button>
        <button data-nav="bharatai" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🤖 Sannivesham AI Guide</button>
        <button data-nav="languages" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🗣️ Languages & Scripts</button>
        <button data-nav="festivals" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🪔 Cultural Calendar</button>
        <button data-nav="voices" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🎙️ Voices of Heritage Audio</button>
        <button data-nav="virtualtour" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🏛️ 360° Virtual Tours</button>
        <button data-nav="student" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🎓 Student 5-Day Journey</button>
        <button data-nav="leaderboard" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🏆 Leaderboard & Badges</button>
        <button data-nav="community" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">🧑🤝🧑 My Heritage Archive</button>
        <button data-nav="nearme" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-amber-100 hover:bg-neutral-800">📍 Heritage Near Me</button>
        <button data-nav="alert" class="nav-mobile-btn block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-rose-300 hover:bg-rose-950">🚨 Report Heritage (Preserve)</button>
      </div>
    </header>
  `;

  // Attach Navigation Listeners
  const handleNavClick = (btn) => {
    const view = btn.getAttribute("data-nav");
    onNavigate(view);
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu) mobileMenu.classList.add("hidden");
  };

  container.querySelectorAll(".nav-direct-link, .dropdown-item, .nav-mobile-btn").forEach(btn => {
    btn.addEventListener("click", () => handleNavClick(btn));
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
