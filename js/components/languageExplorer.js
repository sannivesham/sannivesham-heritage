// 🗣️ BHARATVERSE — Languages & Script Explorer
import { LANGUAGES_DATA, COMPARATIVE_SCRIPTS } from "../data/languagesData.js";

// Web Speech API text-to-speech helper
function speakText(text, langCode = "te-IN") {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // stop current utterance
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.85; // slightly slower for clear phonetic articulation
    window.speechSynthesis.speak(utterance);
  }
}

export function renderLanguageExplorer(container) {
  let activeLangKey = "telangana" in LANGUAGES_DATA ? "telangana" : "telugu";

  function render() {
    const lang = LANGUAGES_DATA[activeLangKey] || LANGUAGES_DATA["telugu"];

    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Epigraphy & Phonetics</span>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Languages & Scripts of Bharat</h1>
            <p class="text-xs text-neutral-300 mt-1">Discover India's classical scripts, Brahmic genealogy, phonetic matrices, and timeless literary epics.</p>
          </div>
          <div class="flex items-center space-x-2 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            <span>🔊 Web Speech Pronunciation Engine Active</span>
          </div>
        </div>

        <!-- Language Selector Tabs -->
        <div class="flex flex-wrap items-center gap-2 border-b border-amber-500/20 pb-4">
          ${Object.keys(LANGUAGES_DATA).map(key => {
            const item = LANGUAGES_DATA[key];
            const isSelected = key === activeLangKey;
            return `
              <button 
                data-lang="${key}" 
                class="lang-tab px-4 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center space-x-2 ${
                  isSelected 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20' 
                    : 'glass-panel text-amber-200 border-amber-500/20 hover:border-amber-400/60'
                }"
              >
                <span class="text-base">${item.nativeName}</span>
                <span>${item.name}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Active Language Dossier -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Script Identity & Phonetics (7 Columns) -->
          <div class="lg:col-span-7 glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6">
            
            <div class="flex items-center justify-between border-b border-amber-500/20 pb-4">
              <div>
                <span class="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">${lang.status}</span>
                <h2 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-2 flex items-center space-x-3">
                  <span>${lang.name}</span>
                  <span class="text-amber-400 text-2xl font-serif">(${lang.nativeName})</span>
                </h2>
                <p class="text-xs text-neutral-400 mt-1">${lang.family} • ${lang.speakers} Native Speakers</p>
              </div>

              <!-- Pronounce Language Name -->
              <button id="listen-lang-name-btn" class="p-3 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-bold transition-all flex items-center space-x-1.5" title="Listen to Native Pronunciation">
                <span>🔊</span>
                <span>Listen</span>
              </button>
            </div>

            <p class="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">${lang.originSummary}</p>

            <!-- Alphabet Glyphs Matrix -->
            <div class="space-y-3">
              <p class="text-xs font-bold text-amber-400 uppercase tracking-wider">Vowels (Achulu / Swaras):</p>
              <div class="flex flex-wrap gap-2">
                ${lang.scriptVowels.map(v => `
                  <button data-glyph="${v}" class="glyph-btn w-9 h-9 rounded-xl glass-panel hover:bg-amber-500/30 border border-amber-500/20 text-amber-200 text-base font-bold flex items-center justify-center transition-all hover:scale-110">
                    ${v}
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Script Evolution Timeline -->
            <div class="space-y-3 pt-2">
              <p class="text-xs font-bold text-amber-400 uppercase tracking-wider">Historical Epigraphical Evolution:</p>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                ${lang.evolution.map(step => `
                  <div class="p-3 rounded-xl bg-neutral-950/60 border border-amber-500/20">
                    <p class="text-[10px] text-amber-400 font-mono">${step.era}</p>
                    <p class="text-white font-medium mt-1 leading-tight text-[11px]">${step.stage}</p>
                  </div>
                `).join('')}
              </div>
            </div>

          </div>

          <!-- Right: Classical Masters & Epics (5 Columns) -->
          <div class="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6">
            <div class="flex items-center space-x-2">
              <span class="text-2xl">📚</span>
              <div>
                <h3 class="font-cinzel text-xl font-bold text-white">Literary Masters & Works</h3>
                <p class="text-xs text-neutral-400">Timeless poetry, epics, and philosophical treatises</p>
              </div>
            </div>

            <div class="space-y-4">
              ${lang.classics.map(w => `
                <div class="p-4 rounded-2xl bg-neutral-900/60 border border-amber-500/20 space-y-1 hover:border-amber-400/40 transition-colors">
                  <h4 class="font-cinzel text-base font-bold text-amber-300">${w.work}</h4>
                  <p class="text-xs text-white font-medium">Author: ${w.author}</p>
                  <p class="text-[11px] text-neutral-400">Era: ${w.era}</p>
                </div>
              `).join('')}
            </div>

            <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200">
              💡 <strong>Did You Know?</strong> India is home to 22 constitutionally recognized scheduled languages and over 1,600 mother tongues, forming the world's most intricate linguistic tapestry.
            </div>
          </div>

        </div>

        <!-- COMPARATIVE SCRIPT MATRIX -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Multi-Script Comparative Matrix</span>
              <h3 class="font-cinzel text-2xl font-bold text-white mt-1">One Meaning across Sacred Indian Scripts</h3>
              <p class="text-xs text-neutral-400">Observe how identical spiritual and civilizational concepts are written across languages.</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="border-b border-amber-500/20 text-neutral-400 uppercase text-[10px] tracking-wider">
                  <th class="py-3 px-4">Concept</th>
                  <th class="py-3 px-4">Hindi</th>
                  <th class="py-3 px-4">Telugu</th>
                  <th class="py-3 px-4">Kannada</th>
                  <th class="py-3 px-4">Tamil</th>
                  <th class="py-3 px-4">Bengali</th>
                  <th class="py-3 px-4">Audio</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-800">
                ${COMPARATIVE_SCRIPTS.map(row => `
                  <tr class="hover:bg-neutral-900/50 transition-colors">
                    <td class="py-3.5 px-4 font-bold text-amber-300">
                      <div>${row.word}</div>
                      <div class="text-[10px] font-normal text-neutral-400">${row.meaning}</div>
                    </td>
                    <td class="py-3.5 px-4 font-medium text-white text-sm">${row.translations.hindi}</td>
                    <td class="py-3.5 px-4 font-medium text-white text-sm">${row.translations.telugu}</td>
                    <td class="py-3.5 px-4 font-medium text-white text-sm">${row.translations.kannada}</td>
                    <td class="py-3.5 px-4 font-medium text-white text-sm">${row.translations.tamil}</td>
                    <td class="py-3.5 px-4 font-medium text-white text-sm">${row.translations.bengali}</td>
                    <td class="py-3.5 px-4">
                      <button data-speak-text="${row.translations.telugu}" data-speak-lang="te-IN" class="speak-btn px-2 py-1 rounded bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-amber-300 text-xs transition-colors">
                        🔊
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </section>
    `;

    // Attach Tab listeners
    container.querySelectorAll(".lang-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        activeLangKey = tab.getAttribute("data-lang");
        render();
      });
    });

    // Pronounce Language name
    container.querySelector("#listen-lang-name-btn")?.addEventListener("click", () => {
      speakText(lang.nativeName, lang.speechCode);
    });

    // Glyphs click to speak
    container.querySelectorAll(".glyph-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const char = btn.getAttribute("data-glyph");
        speakText(char, lang.speechCode);
      });
    });

    // Speak buttons in matrix
    container.querySelectorAll(".speak-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const text = btn.getAttribute("data-speak-text");
        const code = btn.getAttribute("data-speak-lang") || "te-IN";
        speakText(text, code);
      });
    });
  }

  render();
}
