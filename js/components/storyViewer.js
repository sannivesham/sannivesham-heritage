// 📖 BHARATVERSE — Story of India: Scroll-Based Immersive Storyteller
import { HERITAGE_STORIES } from "../data/storiesData.js";

export function renderStoryViewer(container, storyId = "charminar", onBack) {
  const story = HERITAGE_STORIES.find(s => s.id === storyId) || HERITAGE_STORIES[0];

  container.innerHTML = `
    <article class="relative min-h-screen pb-20">
      
      <!-- Top Sticky Progress Bar & Controls -->
      <div class="sticky top-20 z-40 glass-panel border-b border-amber-500/20 px-4 sm:px-8 py-3">
        <div class="max-w-5xl mx-auto flex items-center justify-between">
          <button id="story-back-btn" class="text-xs text-amber-300 hover:text-amber-200 font-semibold flex items-center space-x-1.5">
            <span>←</span>
            <span>Back to Explorer</span>
          </button>
          <div class="text-center hidden sm:block">
            <p class="font-cinzel text-xs font-bold text-white tracking-wider uppercase">${story.title}</p>
            <p class="text-[10px] text-amber-300/80">${story.location} • ${story.year}</p>
          </div>
          <!-- Reading Progress Indicator -->
          <div class="flex items-center space-x-2 text-xs text-neutral-400">
            <span>Scroll to Explore</span>
            <div class="w-16 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
              <div id="story-progress-bar" class="h-full bg-amber-400 transition-all duration-150" style="width: 10%;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Story Hero Banner -->
      <header class="relative min-h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <img src="${story.heroImage}" alt="${story.title}" class="absolute inset-0 w-full h-full object-cover"/>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0d0c0e] via-[#0d0c0e]/80 to-[#0d0c0e]/40"></div>

        <div class="relative z-10 max-w-4xl mx-auto space-y-4 pt-12">
          <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass-panel-maroon border border-amber-500/40 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <span>📖 Scroll-Based Heritage Story</span>
          </div>
          <h1 class="font-cinzel text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            ${story.title}
          </h1>
          <p class="font-playfair text-xl sm:text-2xl text-amber-300 italic font-medium max-w-2xl mx-auto">
            ${story.subtitle}
          </p>
          <div class="flex items-center justify-center space-x-4 text-xs text-neutral-300 pt-2">
            <span>📍 ${story.location}</span>
            <span>•</span>
            <span>👑 ${story.dynasty}</span>
            <span>•</span>
            <span>🕰️ Founded ${story.year}</span>
          </div>
        </div>
      </header>

      <!-- Chapter Index Quick-Nav -->
      <nav class="max-w-4xl mx-auto px-4 py-6 border-b border-amber-500/20 mb-12">
        <p class="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-3 text-center">Jump to Chapter:</p>
        <div class="flex flex-wrap items-center justify-center gap-2 text-xs">
          ${story.chapters.map(ch => `
            <a href="#chapter-${ch.id}" class="px-3 py-1.5 rounded-xl bg-neutral-900/80 hover:bg-amber-950 text-amber-200 border border-amber-500/20 hover:border-amber-400 transition-all flex items-center space-x-1">
              <span>${ch.icon}</span>
              <span>${ch.title.split(':')[0]}</span>
            </a>
          `).join('')}
        </div>
      </nav>

      <!-- Chapters Stream -->
      <main class="max-w-4xl mx-auto px-4 sm:px-6 space-y-20">
        ${story.chapters.map((ch, idx) => `
          <section id="chapter-${ch.id}" class="space-y-6 scroll-mt-36">
            
            <!-- Chapter Header -->
            <div class="border-b border-amber-500/20 pb-4">
              <div class="flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <span>Chapter 0${idx + 1}</span>
                <span>•</span>
                <span>${ch.icon}</span>
              </div>
              <h2 class="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">${ch.title}</h2>
            </div>

            <!-- Chapter Narrative or Facts -->
            ${ch.narrative ? `
              <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                ${ch.image ? `
                  <div class="md:col-span-5 rounded-2xl overflow-hidden border border-amber-500/30 shadow-xl group">
                    <img src="${ch.image}" alt="${ch.title}" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                ` : ''}
                
                <div class="${ch.image ? 'md:col-span-7' : 'md:col-span-12'} space-y-4">
                  <div class="text-sm sm:text-base text-neutral-300 leading-relaxed whitespace-pre-line font-light">
                    ${ch.narrative}
                  </div>
                  ${ch.quote ? `
                    <blockquote class="p-4 rounded-xl glass-panel-maroon border-l-4 border-amber-400 text-amber-200 italic font-playfair text-sm">
                      ${ch.quote}
                    </blockquote>
                  ` : ''}
                </div>
              </div>
            ` : ''}

            <!-- Did You Know Facts List -->
            ${ch.facts ? `
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                ${ch.facts.map(fact => `
                  <div class="glass-panel p-5 rounded-2xl border border-amber-500/30 space-y-2">
                    <div class="text-xl">💡</div>
                    <p class="text-xs text-neutral-200 leading-relaxed">${fact}</p>
                  </div>
                `).join('')}
              </div>
            ` : ''}

          </section>
        `).join('')}
      </main>

      <!-- Bottom Completion Banner -->
      <footer class="max-w-4xl mx-auto px-4 mt-20 text-center">
        <div class="glass-panel p-8 rounded-3xl border border-amber-500/40 space-y-4">
          <span class="text-3xl">🏆</span>
          <h3 class="font-cinzel text-2xl font-bold text-white">Story Completed!</h3>
          <p class="text-xs text-neutral-300 max-w-md mx-auto">You've unlocked the history of Charminar. Test your knowledge in Culture Quest to earn +50 XP and the Monument Explorer badge!</p>
          <div class="flex items-center justify-center space-x-4 pt-2">
            <button id="story-quest-cta" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all">
              Take Charminar Quiz (+50 XP) →
            </button>
            <button id="story-bottom-back" class="px-5 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white text-xs font-semibold border border-neutral-700 transition-all">
              Back to Stories
            </button>
          </div>
        </div>
      </footer>

    </article>
  `;

  // Attach handlers
  container.querySelector("#story-back-btn")?.addEventListener("click", onBack);
  container.querySelector("#story-bottom-back")?.addEventListener("click", onBack);
  
  container.querySelector("#story-quest-cta")?.addEventListener("click", () => {
    window.location.hash = "#quest";
  });

  // Scroll Progress Tracking
  const progressBar = container.querySelector("#story-progress-bar");
  const onScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0 && progressBar) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(5, progress))}%`;
    }
  };

  window.addEventListener("scroll", onScroll);
}
