// 🎙️ BHARATVERSE — Voices of Bharat: Living Oral Heritage Audio Archive
import { ORAL_HISTORIES } from "../data/oralHistories.js";

let currentAudioId = null;
let isPlaying = false;
let playbackInterval = null;
let currentSeconds = 0;

export function renderVoicesOfBharat(container, onContribute) {
  let activeStoryId = "oral-1";

  function getStory() {
    return ORAL_HISTORIES.find(s => s.id === activeStoryId) || ORAL_HISTORIES[0];
  }

  function togglePlay() {
    if (isPlaying) {
      isPlaying = false;
      clearInterval(playbackInterval);
      if ('speechSynthesis' in window) window.speechSynthesis.pause();
    } else {
      isPlaying = true;
      const story = getStory();
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(story.transcript);
        utter.rate = 0.88;
        utter.onend = () => {
          isPlaying = false;
          clearInterval(playbackInterval);
          currentSeconds = 0;
          render();
        };
        window.speechSynthesis.speak(utter);
      }

      playbackInterval = setInterval(() => {
        if (currentSeconds < story.durationSec) {
          currentSeconds++;
          const timeDisplay = container.querySelector("#current-play-time");
          const progressFill = container.querySelector("#audio-progress-fill");
          if (timeDisplay) {
            const mins = Math.floor(currentSeconds / 60);
            const secs = currentSeconds % 60;
            timeDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
          }
          if (progressFill) {
            progressFill.style.width = `${(currentSeconds / story.durationSec) * 100}%`;
          }
        } else {
          isPlaying = false;
          clearInterval(playbackInterval);
          currentSeconds = 0;
          render();
        }
      }, 1000);
    }
    render();
  }

  function render() {
    const story = getStory();

    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 uppercase tracking-wider">Living Memory Archive</span>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Voices of Heritage</h1>
            <p class="text-xs text-neutral-300 mt-1">Unfiltered oral histories recorded from village elders, master weavers, folk artists, and oral lineage keepers.</p>
          </div>
          <button id="contribute-story-btn" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-2">
            <span>🎙️ Record an Elder's Story</span>
            <span>+</span>
          </button>
        </div>

        <!-- Main Player & Playlist Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Audio Player Stage (7 Columns) -->
          <div class="lg:col-span-7 glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-500/40 shadow-2xl space-y-6">
            
            <!-- Narrator Profile Header -->
            <div class="flex items-center space-x-4 border-b border-amber-500/20 pb-4">
              <div class="w-16 h-16 rounded-2xl bg-neutral-900 border border-amber-500/30 flex items-center justify-center text-3xl shrink-0 shadow-inner">
                ${story.avatar}
              </div>
              <div class="flex-1">
                <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">${story.category}</span>
                <h2 class="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">${story.title}</h2>
                <p class="text-xs text-neutral-300 font-medium">${story.narrator} • <span class="text-amber-300">${story.region}</span></p>
                <p class="text-[11px] text-neutral-400">Spoken in ${story.dialect}</p>
              </div>
            </div>

            <!-- Waveform Visualizer -->
            <div class="h-20 bg-neutral-950/80 rounded-2xl border border-amber-500/20 p-4 flex items-end justify-between space-x-1 overflow-hidden">
              ${Array.from({ length: 36 }).map((_, i) => `
                <div 
                  class="wave-bar flex-1 bg-gradient-to-t from-amber-600 to-amber-300 rounded-t-sm" 
                  style="
                    height: ${isPlaying ? Math.max(15, (Math.sin(i * 0.5) * 40 + 50)) : 20}%;
                    animation-duration: ${0.8 + (i % 5) * 0.2}s;
                    animation-play-state: ${isPlaying ? 'running' : 'paused'};
                  "
                ></div>
              `).join('')}
            </div>

            <!-- Playback Controls -->
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span id="current-play-time">0:00</span>
                <span>${story.duration}</span>
              </div>
              <div class="w-full h-2 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800">
                <div id="audio-progress-fill" class="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300" style="width: 0%;"></div>
              </div>
            </div>

            <div class="flex items-center justify-center space-x-6 pt-2">
              <button id="main-play-toggle" class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 flex items-center justify-center text-2xl shadow-xl shadow-amber-500/30 hover:scale-105 active:scale-95 transition-all">
                ${isPlaying ? '⏸' : '▶'}
              </button>
            </div>

            <!-- Verified Transcript -->
            <div class="space-y-2 pt-2 border-t border-amber-500/20">
              <p class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center space-x-1.5">
                <span>📜 Verbatim Oral History Transcript:</span>
              </p>
              <div class="p-4 rounded-2xl bg-neutral-950/70 border border-amber-500/20 text-xs sm:text-sm text-neutral-200 leading-relaxed font-serif italic max-h-56 overflow-y-auto">
                "${story.transcript}"
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${story.tags.map(t => `<span class="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">#${t}</span>`).join('')}
            </div>

          </div>

          <!-- Right: Oral Archive Playlist (5 Columns) -->
          <div class="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-4">
            <h3 class="font-cinzel text-xl font-bold text-white">Living Archive Recordings</h3>
            <p class="text-xs text-neutral-400">Select an oral testimony from our national preservation repository.</p>

            <div class="space-y-3 pt-2">
              ${ORAL_HISTORIES.map(item => `
                <div 
                  data-story-id="${item.id}" 
                  class="oral-item-card p-4 rounded-2xl border transition-all cursor-pointer ${
                    item.id === activeStoryId 
                      ? 'bg-amber-950/60 border-amber-400 shadow-lg' 
                      : 'bg-neutral-900/60 border-amber-500/15 hover:border-amber-400/50'
                  }"
                >
                  <div class="flex items-center space-x-3">
                    <span class="text-2xl">${item.avatar}</span>
                    <div class="flex-1">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold text-amber-300">${item.region}</span>
                        <span class="text-[10px] font-mono text-neutral-400">⏱ ${item.duration}</span>
                      </div>
                      <h4 class="font-cinzel text-sm font-bold text-white mt-0.5 line-clamp-1">${item.title}</h4>
                      <p class="text-[11px] text-neutral-400">${item.narrator} (${item.role})</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </section>
    `;

    // Attach listeners
    container.querySelector("#main-play-toggle")?.addEventListener("click", togglePlay);
    container.querySelector("#contribute-story-btn")?.addEventListener("click", onContribute);

    container.querySelectorAll(".oral-item-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-story-id");
        if (id !== activeStoryId) {
          activeStoryId = id;
          if (isPlaying) {
            isPlaying = false;
            clearInterval(playbackInterval);
            if ('speechSynthesis' in window) window.speechSynthesis.cancel();
          }
          currentSeconds = 0;
          render();
        }
      });
    });
  }

  render();
}
