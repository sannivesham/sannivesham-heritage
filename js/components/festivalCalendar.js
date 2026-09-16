// 🪔 BHARATVERSE — Festival Calendar 2026
import { FESTIVALS_CALENDAR } from "../data/festivalsData.js";

export function renderFestivalCalendar(container) {
  let selectedMonthNum = 1; // 1 = January, 7 = July (Bonalu), 9 = September (Ganesh Chaturthi), etc.

  function getMonthFestivals() {
    if (selectedMonthNum === 0) return FESTIVALS_CALENDAR; // all
    return FESTIVALS_CALENDAR.filter(f => f.monthNum === selectedMonthNum);
  }

  function render() {
    const activeFestivals = getMonthFestivals();
    const months = [
      { num: 0, label: "All Year" },
      { num: 1, label: "January (Pongal/Sankranti)" },
      { num: 2, label: "February (Maha Shivaratri)" },
      { num: 3, label: "March (Holi/Ugadi)" },
      { num: 7, label: "July (Bonalu)" },
      { num: 9, label: "September (Ganesh Chaturthi)" },
      { num: 10, label: "October (Navaratri/Bathukamma)" },
      { num: 11, label: "November (Diwali)" }
    ];

    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Living Cultural Rhythms</span>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">India's Cultural Calendar 2026</h1>
            <p class="text-xs text-neutral-300 mt-1">Experience how astronomical cycles, agricultural harvests, and regional devotion weave a living festival continuum.</p>
          </div>
          <div class="text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            🗓️ Year: 2026 (Saka Era 1948)
          </div>
        </div>

        <!-- Month Filter Tabs -->
        <div class="flex flex-wrap gap-2 border-b border-amber-500/20 pb-4">
          ${months.map(m => `
            <button 
              data-month="${m.num}" 
              class="month-btn px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                selectedMonthNum === m.num 
                  ? 'bg-amber-500 text-neutral-950 border-amber-400 font-bold shadow-md shadow-amber-500/20' 
                  : 'glass-panel text-neutral-300 border-amber-500/20 hover:border-amber-400/60'
              }"
            >
              ${m.label}
            </button>
          `).join('')}
        </div>

        <!-- Festival Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          ${activeFestivals.map(fest => `
            <div class="glass-panel-maroon rounded-3xl border border-amber-500/30 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-400 transition-all duration-300">
              
              <div class="relative h-56 overflow-hidden">
                <img src="${fest.image}" alt="${fest.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
                <div class="absolute top-4 left-4 flex items-center space-x-2">
                  <span class="text-2xl">${fest.symbol}</span>
                  <span class="text-[10px] font-bold px-2.5 py-1 rounded bg-neutral-950/80 text-amber-300 border border-amber-500/30 uppercase">${fest.type}</span>
                </div>
                <div class="absolute bottom-4 left-4 right-4">
                  <p class="text-xs text-amber-400 font-semibold">${fest.dayRange}</p>
                  <h3 class="font-cinzel text-2xl font-bold text-white mt-0.5">${fest.name}</h3>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-6 space-y-4 text-xs leading-relaxed text-neutral-200 flex-1 flex flex-col justify-between">
                <div class="space-y-3">
                  <p class="font-medium text-amber-200/90">${fest.tagline}</p>

                  <div class="p-3 rounded-xl bg-neutral-900/70 border border-amber-500/15 space-y-1">
                    <p class="font-bold text-amber-300 text-[11px] uppercase">🌾 Agricultural & Ecological Link:</p>
                    <p class="text-neutral-300 text-[11px]">${fest.agriculturalLink}</p>
                  </div>

                  <div class="p-3 rounded-xl bg-neutral-900/70 border border-amber-500/15 space-y-1">
                    <p class="font-bold text-amber-300 text-[11px] uppercase">🪔 Sacred Traditions & Rituals:</p>
                    <p class="text-neutral-300 text-[11px]">${fest.rituals}</p>
                  </div>

                  <div class="p-3 rounded-xl bg-neutral-900/70 border border-amber-500/15 space-y-1">
                    <p class="font-bold text-amber-300 text-[11px] uppercase">📜 Folklore & Historical Context:</p>
                    <p class="text-neutral-300 text-[11px]">${fest.folklore}</p>
                  </div>
                </div>

                <div class="pt-2 border-t border-amber-500/20 flex flex-wrap items-center gap-1.5">
                  <span class="text-[10px] text-neutral-400 uppercase font-semibold">Celebrated Across:</span>
                  ${fest.regions.map(r => `
                    <span class="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] border border-amber-500/20">${r}</span>
                  `).join('')}
                </div>

              </div>

            </div>
          `).join('')}
        </div>

      </section>
    `;

    // Month button listeners
    container.querySelectorAll(".month-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedMonthNum = parseInt(btn.getAttribute("data-month"), 10);
        render();
      });
    });
  }

  render();
}
