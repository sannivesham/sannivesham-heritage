// 🏆 BHARATVERSE — Leaderboard & Digital Heritage Badges
import { LEADERBOARD_STUDENTS, LEADERBOARD_COLLEGES, BADGES_DATA } from "../data/questQuestions.js";

export function renderLeaderboard(container, state) {
  let activeTab = "students"; // "students" | "colleges" | "badges"

  function render() {
    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Academic Gamification</span>
              <span class="text-xs text-neutral-400">Inter-University Innovation</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Culture Leaderboard & Badges</h1>
            <p class="text-xs text-neutral-300 mt-1">Students and institutions compete purely on cultural scholarship, field documentation, and heritage quizzes.</p>
          </div>
          <div class="flex items-center space-x-3">
            <div class="p-3 rounded-2xl bg-gradient-to-r from-amber-950 to-rose-950 border border-amber-500/30 text-right">
              <p class="text-[10px] text-neutral-400">Your Current Rank</p>
              <p class="text-base font-bold text-amber-300">#6 Pan-India • ${state.userXp} XP</p>
            </div>
          </div>
        </div>

        <!-- View Tabs -->
        <div class="flex items-center space-x-2 border-b border-amber-500/20 pb-4">
          <button data-tab="students" class="tab-btn px-4 py-2 rounded-xl text-xs font-bold border transition-all ${activeTab === 'students' ? 'bg-amber-500 text-neutral-950 border-amber-400' : 'glass-panel text-neutral-300 border-amber-500/20'}">
            👨🎓 Student Champions
          </button>
          <button data-tab="colleges" class="tab-btn px-4 py-2 rounded-xl text-xs font-bold border transition-all ${activeTab === 'colleges' ? 'bg-amber-500 text-neutral-950 border-amber-400' : 'glass-panel text-neutral-300 border-amber-500/20'}">
            🏫 College / University Rankings
          </button>
          <button data-tab="badges" class="tab-btn px-4 py-2 rounded-xl text-xs font-bold border transition-all ${activeTab === 'badges' ? 'bg-amber-500 text-neutral-950 border-amber-400' : 'glass-panel text-neutral-300 border-amber-500/20'}">
            🏅 Digital Heritage Badges
          </button>
        </div>

        <!-- Tab Content -->
        ${activeTab === 'students' ? `
          <!-- Students Leaderboard -->
          <div class="glass-panel-maroon rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead>
                  <tr class="border-b border-amber-500/20 text-neutral-400 uppercase text-[10px] tracking-wider bg-neutral-950/40">
                    <th class="py-4 px-6">Rank</th>
                    <th class="py-4 px-6">Scholar & College</th>
                    <th class="py-4 px-6">Badges Earned</th>
                    <th class="py-4 px-6 text-right">Culture XP</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-amber-500/10">
                  ${LEADERBOARD_STUDENTS.map(s => `
                    <tr class="hover:bg-neutral-900/40 transition-colors ${s.rank <= 3 ? 'bg-amber-500/5 font-semibold' : ''}">
                      <td class="py-4 px-6">
                        <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${
                          s.rank === 1 ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/30' :
                          s.rank === 2 ? 'bg-neutral-300 text-neutral-950' :
                          s.rank === 3 ? 'bg-amber-700 text-white' :
                          'bg-neutral-800 text-neutral-300'
                        }">
                          ${s.rank === 1 ? '🥇' : s.rank === 2 ? '🥈' : s.rank === 3 ? '🥉' : s.rank}
                        </span>
                      </td>
                      <td class="py-4 px-6">
                        <div class="flex items-center space-x-3">
                          <span class="text-xl">${s.avatar}</span>
                          <div>
                            <p class="font-bold text-white text-sm">${s.name}</p>
                            <p class="text-[11px] text-amber-300/80">${s.college}</p>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-6">
                        <div class="flex items-center space-x-1 text-amber-400">
                          <span>🏅</span>
                          <span>${s.badges} Unlocked</span>
                        </div>
                      </td>
                      <td class="py-4 px-6 text-right">
                        <span class="text-sm font-black text-amber-300 font-mono">${s.xp.toLocaleString()} XP</span>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        ` : activeTab === 'colleges' ? `
          <!-- Colleges Leaderboard -->
          <div class="space-y-4">
            ${LEADERBOARD_COLLEGES.map(col => `
              <div class="glass-panel p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div class="flex items-center space-x-4">
                  <span class="w-10 h-10 rounded-2xl bg-neutral-950 border border-amber-500/30 flex items-center justify-center font-cinzel font-bold text-amber-400 text-base shrink-0">
                    #${col.rank}
                  </span>
                  <div>
                    <h3 class="font-cinzel text-lg font-bold text-white">${col.name}</h3>
                    <p class="text-xs text-neutral-400">${col.students} Participating Students • Total ${col.totalXp}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4 shrink-0">
                  <div class="w-48 bg-neutral-900 rounded-full h-3 border border-neutral-800 overflow-hidden">
                    <div class="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full" style="width: ${col.score};"></div>
                  </div>
                  <span class="text-sm font-bold text-amber-300 font-mono w-12 text-right">${col.score}</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <!-- Digital Heritage Badges Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${BADGES_DATA.map(badge => {
              const isUnlocked = state.userXp >= badge.xpRequired;
              return `
                <div class="badge-card glass-panel p-6 rounded-3xl border ${isUnlocked ? 'border-amber-500/50 shadow-xl shadow-amber-500/10' : 'border-neutral-800 opacity-60'} space-y-4 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between">
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-neutral-900 to-amber-950/40 border border-amber-500/30 flex items-center justify-center text-3xl shadow-inner">
                        ${badge.icon}
                      </div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded ${
                        isUnlocked 
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' 
                          : 'bg-neutral-800 text-neutral-400'
                      }">
                        ${isUnlocked ? 'CLAIMED 🏆' : `UNLOCK AT ${badge.xpRequired} XP`}
                      </span>
                    </div>
                    <h3 class="font-cinzel text-xl font-bold text-white mt-3">${badge.name}</h3>
                    <p class="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">${badge.tier} Honor Tier</p>
                    <p class="text-xs text-neutral-300 mt-2 leading-relaxed">${badge.desc}</p>
                  </div>

                  <div class="pt-3 border-t border-amber-500/15 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>${isUnlocked ? 'In Student Profile' : `${Math.max(0, badge.xpRequired - state.userXp)} XP Needed`}</span>
                    <span class="text-amber-300 font-bold">${badge.xpRequired} XP Required</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}

      </section>
    `;

    // Attach Tab listeners
    container.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeTab = btn.getAttribute("data-tab");
        render();
      });
    });
  }

  render();
}
