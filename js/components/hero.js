// 🏠 SANNIVESHAM — Hero & Landing Page Showcase
export function renderHero(container, onNavigate, onSelectState) {
  container.innerHTML = `
    <!-- Hero Section with Rich Graphics & Visual Dynamics -->
    <section class="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      
      <!-- Background Patterns & Gradients -->
      <div class="absolute inset-0 z-0 opacity-25 pointer-events-none bg-jali-pattern"></div>
      
      <!-- Multi-Layer Luminous Aurora Glows -->
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full bg-gradient-to-tr from-rose-950/40 via-amber-900/25 to-amber-600/15 blur-[120px] pointer-events-none animate-pulse-glow"></div>
      <div class="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-rose-700/10 blur-[100px] pointer-events-none"></div>

      <!-- Floating Graphics & Heritage Motifs with Staggered Parallax -->
      <div class="absolute top-20 left-10 sm:left-24 text-4xl sm:text-6xl opacity-30 animate-float pointer-events-none select-none filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">🛕</div>
      <div class="absolute bottom-28 left-16 sm:left-36 text-4xl sm:text-6xl opacity-30 animate-float pointer-events-none select-none filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" style="animation-delay: 1.6s;">💃</div>
      <div class="absolute top-28 right-16 sm:right-36 text-4xl sm:text-6xl opacity-30 animate-float pointer-events-none select-none filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" style="animation-delay: 2.4s;">🪕</div>
      <div class="absolute bottom-32 right-12 sm:right-28 text-4xl sm:text-6xl opacity-30 animate-float pointer-events-none select-none filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]" style="animation-delay: 0.9s;">📜</div>

      <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        <!-- Top English Capsule (No SIH badge) -->
        <div class="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full glass-panel-maroon border border-amber-500/40 shadow-2xl shadow-amber-950/60">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
          <span class="text-xs sm:text-sm font-semibold text-amber-200 tracking-widest uppercase">India's Living Cultural Heritage Platform</span>
        </div>

        <!-- Main English Title -->
        <div class="space-y-4">
          <p class="font-cinzel text-xs sm:text-sm text-amber-400/90 tracking-[0.35em] uppercase font-semibold">Living Culture • Shared History • Timeless Heritage</p>
          <h1 class="font-cinzel text-5xl sm:text-7xl lg:text-9xl font-black tracking-tight text-white leading-none drop-shadow-2xl">
            SANNIVE<span class="text-gold-gradient">SHAM</span>
          </h1>
          <p class="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-amber-300/90 tracking-wide max-w-3xl mx-auto">
            One Nation. Thousands of Stories. One Digital Heritage.
          </p>
        </div>

        <!-- Subheading in English -->
        <p class="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Discover the sacred architecture, classical performing arts, GI-tagged crafts, seasonal harvest festivals, and living oral traditions that make India extraordinary.
        </p>

        <!-- CTA Action Buttons with Shimmer & Glow Effects -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button id="hero-btn-explore" class="btn-shimmer w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-neutral-950 font-bold text-base shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2">
            <span>🗺️ Explore Cultural GIS</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          <button id="hero-btn-quest" class="w-full sm:w-auto px-8 py-4 rounded-2xl glass-panel-maroon hover:bg-rose-950/90 border border-amber-500/40 text-amber-200 font-semibold text-base hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
            <span>🎮 Begin Culture Quest</span>
            <span class="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">+50 XP</span>
          </button>
          <button id="hero-btn-ai" class="w-full sm:w-auto px-6 py-4 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 border border-amber-500/20 text-neutral-200 font-medium text-base hover:scale-105 transition-all flex items-center justify-center space-x-2">
            <span>🤖 Ask Sannivesham AI</span>
          </button>
        </div>

        <!-- Quick Metrics Bar -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10">
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-all hover:-translate-y-1">
            <p class="font-cinzel text-3xl font-black text-amber-400">36</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">States & Territories Mapped</p>
          </div>
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-all hover:-translate-y-1">
            <p class="font-cinzel text-3xl font-black text-rose-400">4,000+</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">Years of Living Wisdom</p>
          </div>
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-all hover:-translate-y-1">
            <p class="font-cinzel text-3xl font-black text-amber-400">22</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">Recognized Languages</p>
          </div>
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20 text-center hover:border-amber-400/50 transition-all hover:-translate-y-1">
            <p class="font-cinzel text-3xl font-black text-emerald-400">100%</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">Source-Backed Heritage</p>
          </div>
        </div>

      </div>
    </section>

    <!-- 5 CONNECTED INNOVATION PILLARS -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-amber-900/30">
      <div class="text-center space-y-3 mb-12">
        <span class="text-xs font-semibold tracking-widest text-amber-400 uppercase">Core Architectural Pillars</span>
        <h2 class="font-cinzel text-3xl sm:text-5xl font-bold text-white">The Sannivesham Digital Ecosystem</h2>
        <p class="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">A connected digital platform empowering exploration, academic research, storytelling, and civic preservation.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        <!-- Pillar 1: Cultural GIS -->
        <div data-nav-target="map" class="pillar-card glass-panel p-6 rounded-3xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
            🗺️
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">1. Cultural GIS</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Interactive geospatial layers mapping monuments, classical dance, crafts, and harvest festivals.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Explore Map</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 2: Sannivesham AI -->
        <div data-nav-target="bharatai" class="pillar-card glass-panel p-6 rounded-3xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
            🤖
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">2. Cultural AI Guide</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Source-backed conversational assistant citing the Archaeological Survey of India (ASI) & National Archives.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Ask Questions</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 3: Culture Quest -->
        <div data-nav-target="quest" class="pillar-card glass-panel p-6 rounded-3xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
            🎮
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">3. Culture Quest</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Gamified challenges across 5 levels with audio SFX, streak multipliers, XP, and digital badges.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Play & Learn</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 4: Voices of Heritage -->
        <div data-nav-target="voices" class="pillar-card glass-panel p-6 rounded-3xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
            🎙️
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">4. Living Archive</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Audio recordings from village elders, master weavers, folk singers, and Vedic chanters.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Listen Voices</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 5: Heritage Preservation -->
        <div data-nav-target="alert" class="pillar-card glass-panel p-6 rounded-3xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
            🚨
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">5. Preservation Net</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Crowdsourced civic reporting for damaged monuments and vanishing indigenous crafts.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-rose-400 space-x-1">
            <span>Report & Protect</span>
            <span>→</span>
          </div>
        </div>

      </div>
    </section>

    <!-- FEATURED SPOTLIGHT: TELANGANA & DECCAN HERITAGE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="relative rounded-3xl overflow-hidden glass-panel-maroon border border-amber-500/40 p-8 sm:p-12 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <span>🌟 Regional Spotlight</span>
            </div>
            <h2 class="font-cinzel text-3xl sm:text-5xl font-bold text-white leading-tight">
              Explore Telangana:<br/><span class="text-gold-gradient">Kakatiyas to Charminar</span>
            </h2>
            <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Journey into the land of the 13th-century UNESCO World Heritage Ramappa Temple with its earthquake-defying floating bricks, the acoustic marvels of Golconda Fort, and the vibrant living floral festival of Bathukamma.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-3 py-1 rounded-xl bg-neutral-900/70 text-xs border border-amber-500/20 text-amber-200">🏛 Ramappa UNESCO</span>
              <span class="px-3 py-1 rounded-xl bg-neutral-900/70 text-xs border border-amber-500/20 text-amber-200">💎 Golconda Acoustics</span>
              <span class="px-3 py-1 rounded-xl bg-neutral-900/70 text-xs border border-amber-500/20 text-amber-200">🌸 Bathukamma Floral</span>
              <span class="px-3 py-1 rounded-xl bg-neutral-900/70 text-xs border border-amber-500/20 text-amber-200">🧵 Pochampally Ikat GI</span>
            </div>
            <div class="pt-4 flex flex-wrap items-center gap-4">
              <button id="spotlight-telangana-btn" class="btn-shimmer px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center space-x-2">
                <span>Open Telangana Cultural Dossier</span>
                <span>→</span>
              </button>
              <button id="spotlight-story-btn" class="px-6 py-3.5 rounded-xl glass-panel text-amber-200 hover:text-white text-sm font-semibold border border-amber-500/30 transition-all">
                <span>The Story of Charminar</span>
              </button>
            </div>
          </div>
          <div class="relative group">
            <div class="aspect-[4/3] rounded-3xl overflow-hidden border border-amber-500/40 shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80" alt="Charminar" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 p-5 rounded-2xl glass-panel border border-white/15">
                <p class="text-xs text-amber-400 font-bold uppercase tracking-wider">National Monument • 1591 CE</p>
                <p class="font-cinzel text-xl font-bold text-white mt-0.5">Charminar, Hyderabad</p>
                <p class="text-xs text-neutral-300 mt-1">Four soaring minarets rising 48.7m, commemorating the victory of hope over epidemic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STUDENT & INSTITUTION SECTION -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="glass-panel p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between space-y-4 hover:border-amber-400/50 transition-all">
          <div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 uppercase tracking-wider">🎓 For Students</span>
            <h3 class="font-cinzel text-2xl font-bold text-white mt-3">Personalized 5-Day Bharat Journey</h3>
            <p class="text-neutral-300 text-sm mt-2">Select your interests in Architecture, Music, Epics, or Ancient Sciences and let Sannivesham generate an aligned learning curriculum with gamified tasks.</p>
          </div>
          <button data-nav-target="student" class="self-start px-6 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all flex items-center space-x-2">
            <span>Generate Student Pathway</span>
            <span>→</span>
          </button>
        </div>

        <div class="glass-panel p-8 rounded-3xl border border-amber-500/30 flex flex-col justify-between space-y-4 hover:border-amber-400/50 transition-all">
          <div>
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 uppercase tracking-wider">🏫 For Educators & Colleges</span>
            <h3 class="font-cinzel text-2xl font-bold text-white mt-3">Heritage Classroom Dashboard</h3>
            <p class="text-neutral-300 text-sm mt-2">Educators can create field assignments, verify student discovery field reports, and track college culture rankings on the national leaderboard.</p>
          </div>
          <button data-nav-target="leaderboard" class="self-start px-6 py-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-all flex items-center space-x-2">
            <span>View College Leaderboards</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  `;

  // Attach button listeners
  container.querySelector("#hero-btn-explore")?.addEventListener("click", () => onNavigate("map"));
  container.querySelector("#hero-btn-quest")?.addEventListener("click", () => onNavigate("quest"));
  container.querySelector("#hero-btn-ai")?.addEventListener("click", () => onNavigate("bharatai"));
  container.querySelector("#spotlight-telangana-btn")?.addEventListener("click", () => onSelectState("telangana"));
  container.querySelector("#spotlight-story-btn")?.addEventListener("click", () => onNavigate("stories"));

  container.querySelectorAll("[data-nav-target]").forEach(card => {
    card.addEventListener("click", () => {
      const view = card.getAttribute("data-nav-target");
      onNavigate(view);
    });
  });
}
