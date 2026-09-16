// 🎓 BHARATVERSE — Student Mode: Personalized Cultural Journey Planner
export function renderStudentJourney(container, state, onStartJourney) {
  let selectedInterests = ["Architecture", "History", "Literature"];

  const AVAILABLE_INTERESTS = [
    { id: "History", label: "History & Dynasties", icon: "👑" },
    { id: "Art", label: "Traditional Art & Painting", icon: "🎨" },
    { id: "Festivals", label: "Living Festivals", icon: "🪔" },
    { id: "Languages", label: "Languages & Scripts", icon: "🗣️" },
    { id: "Architecture", label: "Temple & Fort Architecture", icon: "🏛️" },
    { id: "Literature", label: "Epics & Classical Poetry", icon: "📚" },
    { id: "Music", label: "Carnatic, Hindustani & Folk", icon: "🎵" },
    { id: "Food", label: "Culinary Heritage", icon: "🍲" },
    { id: "Science", label: "Ancient Metallurgy & Ayurveda", icon: "🔬" },
    { id: "Mythology", label: "Folklore & Mythology", icon: "🏹" }
  ];

  function generate5DayPath() {
    return [
      {
        day: 1,
        title: "Hyderabad Heritage & Urban Foundations",
        theme: "History & Architecture",
        desc: "Explore the founding of Hyderabad, the 1591 plague prayer, and the four cardinal arches of Charminar.",
        task: "Read the 'Story of Charminar' and answer 2 Culture Quest questions.",
        xpReward: 50,
        badge: "Charminar Scholar"
      },
      {
        day: 2,
        title: "Deccan Acoustic & Fortification Wonders",
        theme: "Architecture & Science",
        desc: "Investigate the parabolic sound arches of Golconda Fort and the earthquake sandbox foundation of Ramappa Temple.",
        task: "Inquire Bharat AI on 'How do Ramappa temple bricks float?'",
        xpReward: 60,
        badge: "Kakatiya Engineer"
      },
      {
        day: 3,
        title: "Telugu Classical Literature & Sangam Epics",
        theme: "Literature & Language",
        desc: "Study Bammera Pothana's refusal of royal patronage and explore the script evolution of Kadamba-Bhattiprolu.",
        task: "Practice pronouncing 5 Telugu vowels using the Web Speech synthesizer.",
        xpReward: 50,
        badge: "Bhasha Mitra"
      },
      {
        day: 4,
        title: "Folk Traditions & Living Rites of Bonalu",
        theme: "Living Rites & Folklore",
        desc: "Listen to elder Laxmi Amma's oral history and discover the medicinal botany behind Bathukamma flowers.",
        task: "Listen to 1 full audio oral history in 'Voices of Bharat'.",
        xpReward: 60,
        badge: "Living Memory Custodian"
      },
      {
        day: 5,
        title: "Pochampally Ikat Mathematics & GI Crafts",
        theme: "Art & Science",
        desc: "Discover how warp-and-weft tie-dye weaving incorporates matrix mathematics and natural dyes.",
        task: "Submit a family tradition or field report to My Heritage.",
        xpReward: 75,
        badge: "Bharat Heritage Champion"
      }
    ];
  }

  function render() {
    const journey = generate5DayPath();

    container.innerHTML = `
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Personalized Learning Pathway</span>
              <span class="text-xs text-neutral-400">Student Centric Mode</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Sannivesham for Students</h1>
            <p class="text-xs text-neutral-300 mt-1">Pick your academic and personal passions to generate a custom 5-Day micro-curriculum with gamified missions.</p>
          </div>
          <div class="text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
            👨🎓 Student: ${state.userName} (${state.userCollege})
          </div>
        </div>

        <!-- Step 1: Pick Interests -->
        <div class="glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-5">
          <div class="flex items-center justify-between">
            <div>
              <h2 class="font-cinzel text-xl font-bold text-white">1. Select Your Cultural Interests</h2>
              <p class="text-xs text-neutral-300">Choose at least 2 categories to tailor your pathway:</p>
            </div>
            <span class="text-xs font-semibold text-amber-400">${selectedInterests.length} Selected</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            ${AVAILABLE_INTERESTS.map(item => {
              const isChecked = selectedInterests.includes(item.id);
              return `
                <button 
                  data-interest="${item.id}" 
                  class="interest-pill p-3.5 rounded-2xl border text-left transition-all ${
                    isChecked 
                      ? 'bg-amber-500 text-neutral-950 font-bold border-amber-400 shadow-md shadow-amber-500/20' 
                      : 'bg-neutral-900/80 text-neutral-300 border-amber-500/20 hover:border-amber-400/60'
                  }"
                >
                  <div class="text-xl mb-1">${item.icon}</div>
                  <div class="text-xs leading-tight">${item.label}</div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Step 2: Generated 5-Day Bharat Journey -->
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">Your Personalized 5-Day Pathway</span>
              <h2 class="font-cinzel text-2xl font-bold text-white mt-0.5">Your Bharat Journey</h2>
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-xs text-neutral-400">Total Reward:</span>
              <span class="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">+295 Culture XP</span>
            </div>
          </div>

          <div class="space-y-4">
            ${journey.map(step => `
              <div class="glass-panel p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                <div class="flex items-start space-x-4">
                  <div class="w-14 h-14 rounded-2xl bg-neutral-950 border border-amber-500/30 flex flex-col items-center justify-center font-cinzel font-bold text-amber-400 shrink-0">
                    <span class="text-[10px] text-neutral-400">DAY</span>
                    <span class="text-lg leading-none">${step.day}</span>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">${step.theme}</span>
                    <h3 class="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors mt-1">${step.title}</h3>
                    <p class="text-xs text-neutral-300 mt-1">${step.desc}</p>
                    <p class="text-[11px] text-amber-400/90 font-medium mt-1">🎯 <strong>Action Mission:</strong> ${step.task}</p>
                  </div>
                </div>

                <div class="flex items-center space-x-3 shrink-0 self-end md:self-center">
                  <div class="text-right hidden sm:block">
                    <p class="text-[10px] text-neutral-400">Reward</p>
                    <p class="text-xs font-bold text-amber-300">+${step.xpReward} XP</p>
                  </div>
                  <button class="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs transition-all flex items-center space-x-1">
                    <span>Start Day ${step.day}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </section>
    `;

    // Attach interest clicks
    container.querySelectorAll(".interest-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        const id = pill.getAttribute("data-interest");
        if (selectedInterests.includes(id)) {
          if (selectedInterests.length > 1) {
            selectedInterests = selectedInterests.filter(x => x !== id);
          }
        } else {
          selectedInterests.push(id);
        }
        render();
      });
    });
  }

  render();
}
