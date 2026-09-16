// 🏠 BHARATVERSE — Hero & Landing Page Showcase
export function renderHero(container, onNavigate, onSelectState) {
  container.innerHTML = `
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
      
      <!-- Ambient Background Silhouettes & Glows -->
      <div class="absolute inset-0 z-0 opacity-20 pointer-events-none bg-jali-pattern"></div>
      
      <!-- Circular Mandalas and Glow Orbs -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-tr from-rose-950/40 via-amber-900/30 to-amber-600/10 blur-3xl pointer-events-none animate-pulse-glow"></div>
      
      <!-- Floating Heritage Motifs -->
      <div class="absolute top-16 left-8 sm:left-24 text-3xl sm:text-5xl opacity-25 animate-float pointer-events-none select-none">🛕</div>
      <div class="absolute bottom-20 left-12 sm:left-32 text-3xl sm:text-5xl opacity-25 animate-float pointer-events-none select-none" style="animation-delay: 1.5s;">💃</div>
      <div class="absolute top-24 right-12 sm:right-32 text-3xl sm:text-5xl opacity-25 animate-float pointer-events-none select-none" style="animation-delay: 2.2s;">🪕</div>
      <div class="absolute bottom-24 right-16 sm:right-40 text-3xl sm:text-5xl opacity-25 animate-float pointer-events-none select-none" style="animation-delay: 0.8s;">📜</div>

      <div class="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        <!-- Top Badge -->
        <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel-maroon border border-amber-500/40 shadow-xl shadow-amber-950/40">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span class="text-xs sm:text-sm font-medium text-amber-200 tracking-wider uppercase">National Digital Heritage Platform • SIH 2026</span>
        </div>

        <!-- Main Title -->
        <div class="space-y-4">
          <p class="font-devanagari text-base sm:text-xl text-amber-400/80 tracking-widest">एकं सद् विप్రా బహుధా వదంతి • अनेकता में एकता</p>
          <h1 class="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none">
            BHARAT<span class="text-gold-gradient">VERSE</span>
          </h1>
          <p class="font-cinzel text-xl sm:text-2xl lg:text-3xl font-semibold text-amber-300/90 tracking-wide max-w-3xl mx-auto">
            One Nation. Thousands of Stories. One Digital Heritage.
          </p>
        </div>

        <!-- Subheading -->
        <p class="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Discover the traditions, languages, architecture, festivals, and living oral histories that make India extraordinary. Transforming sacred heritage into an immersive digital universe.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button id="hero-btn-explore" class="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-neutral-950 font-bold text-base shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2">
            <span>🗺️ Explore Cultural GIS</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
          <button id="hero-btn-quest" class="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel-maroon hover:bg-rose-950/80 border border-amber-500/40 text-amber-200 font-semibold text-base hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2">
            <span>🎮 Begin Culture Quest</span>
            <span class="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">+50 XP</span>
          </button>
          <button id="hero-btn-ai" class="w-full sm:w-auto px-6 py-4 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-medium text-base hover:scale-105 transition-all flex items-center justify-center space-x-2">
            <span>🤖 Ask Bharat AI</span>
          </button>
        </div>

        <!-- Quick Metrics Bar -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-10">
          <div class="glass-panel p-4 rounded-xl border border-amber-500/20 text-center">
            <p class="font-cinzel text-2xl sm:text-3xl font-bold text-amber-400">36</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">States & UTs Mapped</p>
          </div>
          <div class="glass-panel p-4 rounded-xl border border-amber-500/20 text-center">
            <p class="font-cinzel text-2xl sm:text-3xl font-bold text-rose-400">4,000+</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">Years of Living Wisdom</p>
          </div>
          <div class="glass-panel p-4 rounded-xl border border-amber-500/20 text-center">
            <p class="font-cinzel text-2xl sm:text-3xl font-bold text-amber-400">22</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">Recognized Languages</p>
          </div>
          <div class="glass-panel p-4 rounded-xl border border-amber-500/20 text-center">
            <p class="font-cinzel text-2xl sm:text-3xl font-bold text-emerald-400">100%</p>
            <p class="text-xs text-neutral-400 uppercase tracking-wider mt-1">Source-Backed Heritage</p>
          </div>
        </div>

      </div>
    </section>

    <!-- 5 SIH INNOVATION PILLARS SHOWCASE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-amber-900/30">
      <div class="text-center space-y-3 mb-12">
        <span class="text-xs font-semibold tracking-widest text-amber-400 uppercase">Core SIH Innovation Pillars</span>
        <h2 class="font-cinzel text-3xl sm:text-4xl font-bold text-white">The BharatVerse Digital Ecosystem</h2>
        <p class="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">A connected architecture empowering exploration, education, research, and civic preservation.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        <!-- Pillar 1: Cultural GIS -->
        <div data-nav-target="map" class="pillar-card glass-panel p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            🗺️
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">1. Cultural GIS</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Interactive geospatial layers mapping monuments, dance, crafts, languages, and festivals.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Explore Map</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 2: Bharat AI -->
        <div data-nav-target="bharatai" class="pillar-card glass-panel p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            🤖
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">2. Bharat AI Guide</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Source-backed cultural conversational AI citing ASI, National Archives, and university monographs.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Ask Questions</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 3: Culture Quest -->
        <div data-nav-target="quest" class="pillar-card glass-panel p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            🎮
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">3. Culture Quest</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Gamified learning system with 5 levels, XP points, digital badges, and college leaderboards.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Play & Learn</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 4: Voices of Bharat -->
        <div data-nav-target="voices" class="pillar-card glass-panel p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            🎙️
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">4. Living Archive</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Authentic audio narratives recorded from village elders, master artisans, and tribal custodians.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-amber-400 space-x-1">
            <span>Listen Voices</span>
            <span>→</span>
          </div>
        </div>

        <!-- Pillar 5: Heritage Preservation -->
        <div data-nav-target="alert" class="pillar-card glass-panel p-6 rounded-2xl border border-amber-500/30 hover:border-amber-400 cursor-pointer group hover:-translate-y-2 transition-all duration-300">
          <div class="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
            🚨
          </div>
          <h3 class="font-cinzel font-bold text-lg text-white group-hover:text-amber-300 transition-colors">5. Preservation Net</h3>
          <p class="text-xs text-neutral-300 mt-2 leading-relaxed">Civic crowdsourced reporting for damaged monuments and vanishing indigenous crafts.</p>
          <div class="mt-4 flex items-center text-xs font-semibold text-rose-400 space-x-1">
            <span>Report & Protect</span>
            <span>→</span>
          </div>
        </div>

      </div>
    </section>

    <!-- FEATURED SPOTLIGHT: TELANGANA & DECCAN HERITAGE -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="relative rounded-3xl overflow-hidden glass-panel-maroon border border-amber-500/40 p-8 sm:p-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <span>🌟 State Spotlight</span>
            </div>
            <h2 class="font-cinzel text-3xl sm:text-5xl font-bold text-white leading-tight">
              Explore Telangana:<br/><span class="text-gold-gradient">Kakatiyas to Charminar</span>
            </h2>
            <p class="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Journey into the land of the 13th-century UNESCO World Heritage Ramappa Temple with its earthquake-defying floating bricks, the acoustic marvels of Golconda Fort, and the vibrant living floral festival of Bathukamma.
            </p>
            <div class="flex flex-wrap gap-2 pt-2">
              <span class="px-3 py-1 rounded-lg bg-neutral-900/60 text-xs border border-amber-500/20 text-amber-200">🏛 Ramappa UNESCO</span>
              <span class="px-3 py-1 rounded-lg bg-neutral-900/60 text-xs border border-amber-500/20 text-amber-200">💎 Golconda Acoustics</span>
              <span class="px-3 py-1 rounded-lg bg-neutral-900/60 text-xs border border-amber-500/20 text-amber-200">🌸 Bathukamma Floral</span>
              <span class="px-3 py-1 rounded-lg bg-neutral-900/60 text-xs border border-amber-500/20 text-amber-200">🧵 Pochampally Ikat GI</span>
            </div>
            <div class="pt-4 flex items-center space-x-4">
              <button id="spotlight-telangana-btn" class="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2">
                <span>Open Telangana Cultural Dossier</span>
                <span>→</span>
              </button>
              <button id="spotlight-story-btn" class="px-6 py-3 rounded-xl glass-panel text-amber-200 hover:text-white text-sm font-semibold border border-amber-500/30 transition-all">
                <span>The Story of Charminar</span>
              </button>
            </div>
          </div>
          <div class="relative group">
            <div class="aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80" alt="Charminar" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                <p class="text-xs text-amber-400 font-semibold uppercase">National Monument • 1591 CE</p>
                <p class="font-cinzel text-lg font-bold text-white">Charminar, Hyderabad</p>
                <p class="text-xs text-neutral-300 mt-0.5">Four minarets rising 48.7m celebrating the victory of hope over plague.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STUDENT & INSTITUTION CALLOUT -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="glass-panel p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between space-y-4">
          <div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300">🎓 FOR STUDENTS</span>
            <h3 class="font-cinzel text-2xl font-bold text-white mt-3">Personalized 5-Day Bharat Journey</h3>
            <p class="text-neutral-300 text-sm mt-2">Select your interests in Architecture, Music, Epics, or Astronomy and let BharatVerse generate an aligned discovery curriculum with gamified tasks.</p>
          </div>
          <button data-nav-target="student" class="self-start px-5 py-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-colors">
            Generate Student Journey →
          </button>
        </div>

        <div class="glass-panel p-8 rounded-2xl border border-amber-500/30 flex flex-col justify-between space-y-4">
          <div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded bg-rose-500/20 text-rose-300">🏛️ FOR INSTITUTIONS & TEACHERS</span>
            <h3 class="font-cinzel text-2xl font-bold text-white mt-3">Heritage Classroom Dashboard</h3>
            <p class="text-neutral-300 text-sm mt-2">Educators at SNIST, colleges, and schools can create heritage assignments, verify student discovery field reports, and track college culture rankings.</p>
          </div>
          <button data-nav-target="leaderboard" class="self-start px-5 py-2.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition-colors">
            View College Leaderboards →
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
