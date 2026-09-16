// 🎮 BHARATVERSE — Culture Quest: Gamified Learning Engine
import { QUEST_LEVELS, QUEST_QUESTIONS, BADGES_DATA } from "../data/questQuestions.js";

// Web Audio API helper for zero-dependency retro Indian victory and tone SFX
function playSound(type = "correct") {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === "correct") {
      // Ascending triumphant harp chord (C5 - E5 - G5 - C6)
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.1);
      osc.frequency.setValueAtTime(783.99, now + 0.2);
      osc.frequency.setValueAtTime(1046.50, now + 0.3);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc.start(now);
      osc.stop(now + 0.7);
    } else {
      // Gentle warning chord
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.setValueAtTime(220, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (e) {
    // AudioContext blocked or not supported
  }
}

export function renderCultureQuest(container, state, onUpdateXp) {
  let selectedLevel = 1;
  let currentQuestionIdx = 0;
  let streak = 0;
  let answeredState = null; // null | { isCorrect: boolean, selectedKey: string }

  function getLevelQuestions() {
    return QUEST_QUESTIONS.filter(q => q.level === selectedLevel);
  }

  function render() {
    const questions = getLevelQuestions();
    const currentQ = questions[currentQuestionIdx] || questions[0];
    const currentLevelObj = QUEST_LEVELS.find(l => l.level === selectedLevel);

    container.innerHTML = `
      <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header & Stats Bar -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Gamified Learning</span>
              <span class="text-xs text-neutral-400">SIH Signature Innovation #3</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-black text-white mt-1">CULTURE QUEST</h1>
            <p class="text-xs text-neutral-300">Level up your cultural wisdom. Learn through challenges, earn Culture XP, and claim digital heritage badges.</p>
          </div>

          <!-- XP & Streak Counters -->
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-[10px] text-neutral-400 uppercase tracking-wider">Streak</p>
              <p class="text-xl font-black text-amber-400 flex items-center justify-end space-x-1">
                <span>🔥</span>
                <span>${streak}x</span>
              </p>
            </div>
            <div class="h-10 w-px bg-amber-500/30"></div>
            <div class="text-right">
              <p class="text-[10px] text-neutral-400 uppercase tracking-wider">Total Culture XP</p>
              <p class="text-2xl font-black text-gold-gradient" id="quest-xp-counter">${state.userXp} XP</p>
            </div>
          </div>
        </div>

        <!-- Level Selector Carousel -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          ${QUEST_LEVELS.map(lvl => {
            const isUnlocked = state.userXp >= lvl.requiredXp;
            const isSelected = lvl.level === selectedLevel;
            return `
              <button 
                data-level="${lvl.level}" 
                class="level-card p-4 rounded-2xl border text-left transition-all relative overflow-hidden ${
                  isSelected 
                    ? 'bg-gradient-to-b from-amber-900/60 to-rose-950/70 border-amber-400 shadow-xl shadow-amber-500/20 scale-105' 
                    : isUnlocked 
                      ? 'glass-panel border-amber-500/30 hover:border-amber-400/60' 
                      : 'opacity-50 glass-panel border-neutral-800 cursor-not-allowed'
                }"
              >
                <div class="flex items-center justify-between text-xl mb-2">
                  <span>${lvl.icon}</span>
                  <span class="text-[10px] font-bold px-1.5 py-0.5 rounded ${isUnlocked ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-neutral-800 text-neutral-400'}">
                    ${isUnlocked ? 'UNLOCKED' : `LOCKED (${lvl.requiredXp} XP)`}
                  </span>
                </div>
                <p class="text-[11px] text-amber-400 font-bold uppercase tracking-wider">Level ${lvl.level}</p>
                <p class="font-cinzel text-xs font-bold text-white leading-tight mt-0.5">${lvl.title}</p>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Active Quest Question Card -->
        <div class="glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-500/40 shadow-2xl space-y-6 relative overflow-hidden">
          
          <!-- Question Category & Number -->
          <div class="flex items-center justify-between text-xs text-amber-300 border-b border-amber-500/20 pb-3">
            <span class="font-semibold uppercase tracking-wider">Level ${selectedLevel}: ${currentLevelObj.title} • Q${currentQuestionIdx + 1}/${questions.length}</span>
            <span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold">+${currentQ.xp} XP Challenge</span>
          </div>

          <!-- Question Prompt -->
          <div class="space-y-2">
            <span class="text-xs text-amber-400/80 font-bold uppercase tracking-widest">${currentQ.category}</span>
            <h2 class="font-cinzel text-xl sm:text-2xl font-bold text-white leading-relaxed">
              ${currentQ.question}
            </h2>
          </div>

          <!-- Options Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            ${currentQ.options.map(opt => {
              let btnClass = "glass-panel border-amber-500/30 hover:border-amber-400 text-neutral-200";
              let badgeClass = "bg-neutral-900 text-amber-300 border-neutral-700";

              if (answeredState) {
                if (opt.correct) {
                  btnClass = "bg-emerald-950/80 border-emerald-400 text-emerald-100 shadow-lg shadow-emerald-500/20";
                  badgeClass = "bg-emerald-600 text-white";
                } else if (answeredState.selectedKey === opt.key && !opt.correct) {
                  btnClass = "bg-rose-950/80 border-rose-400 text-rose-100";
                  badgeClass = "bg-rose-600 text-white";
                }
              }

              return `
                <button 
                  data-key="${opt.key}" 
                  ${answeredState ? 'disabled' : ''} 
                  class="option-btn p-4 rounded-2xl border text-left flex items-center space-x-3 transition-all ${btnClass} ${answeredState ? 'cursor-default' : 'hover:scale-[1.02] active:scale-98'}"
                >
                  <span class="w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-xs shrink-0 ${badgeClass}">${opt.key}</span>
                  <span class="text-xs sm:text-sm font-medium">${opt.text}</span>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Post-Answer Explanation Card (Source-backed) -->
          ${answeredState ? `
            <div class="p-5 rounded-2xl ${answeredState.isCorrect ? 'bg-emerald-950/50 border border-emerald-500/40' : 'bg-rose-950/50 border border-rose-500/40'} space-y-3 animate-fadeIn">
              <div class="flex items-center space-x-2">
                <span class="text-xl">${answeredState.isCorrect ? '🎉 Correct!' : '❌ Not Quite'}</span>
                <span class="text-xs font-bold ${answeredState.isCorrect ? 'text-emerald-300' : 'text-rose-300'}">
                  ${answeredState.isCorrect ? `+${currentQ.xp} Culture XP awarded!` : 'Review the history below and keep learning!'}
                </span>
              </div>
              <p class="text-xs text-neutral-200 leading-relaxed">${currentQ.explanation}</p>
              <div class="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                <span>📚 <strong>Source:</strong> ${currentQ.source}</span>
                <button id="next-question-btn" class="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs transition-all">
                  Next Question →
                </button>
              </div>
            </div>
          ` : ''}

        </div>

      </section>
    `;

    // Attach level listeners
    container.querySelectorAll(".level-card").forEach(card => {
      card.addEventListener("click", () => {
        const lvl = parseInt(card.getAttribute("data-level"), 10);
        const reqXp = QUEST_LEVELS.find(l => l.level === lvl)?.requiredXp || 0;
        if (state.userXp >= reqXp) {
          selectedLevel = lvl;
          currentQuestionIdx = 0;
          answeredState = null;
          render();
        }
      });
    });

    // Attach option listeners
    container.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (answeredState) return;

        const key = btn.getAttribute("data-key");
        const chosen = currentQ.options.find(o => o.key === key);
        const isCorrect = chosen?.correct || false;

        if (isCorrect) {
          playSound("correct");
          streak++;
          const gainedXp = currentQ.xp;
          onUpdateXp(gainedXp);
        } else {
          playSound("incorrect");
          streak = 0;
        }

        answeredState = { isCorrect, selectedKey: key };
        render();
      });
    });

    // Next Question Button
    container.querySelector("#next-question-btn")?.addEventListener("click", () => {
      if (currentQuestionIdx < questions.length - 1) {
        currentQuestionIdx++;
      } else {
        // Loop back or prompt next level
        if (selectedLevel < 5) selectedLevel++;
        currentQuestionIdx = 0;
      }
      answeredState = null;
      render();
    });
  }

  render();
}
