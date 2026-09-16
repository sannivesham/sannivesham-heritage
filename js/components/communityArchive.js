// 🧑🤝🧑 BHARATVERSE — Community Heritage: "My Heritage" Crowdsourced Archive
export function renderCommunityArchive(container, state, onNewSubmission) {
  // Retrieve saved contributions from localStorage or default seeds
  const defaultSeeds = [
    {
      id: "seed-1",
      title: "My Grandfather's Telangana Farmer Harvest Song (Gorru Pata)",
      author: "Sai Teja (Student, SNIST)",
      region: "Warangal, Telangana",
      category: "Oral Song",
      date: "14 Sept 2026",
      desc: "Recorded in our village of Palampet. My 82-year-old Thata (grandfather) demonstrated the rhythmic ox-plowing chant sung when sowing sorghum before the monsoon broke.",
      status: "Verified by Archival Moderator",
      statusClass: "bg-emerald-950 text-emerald-300 border-emerald-500/40"
    },
    {
      id: "seed-2",
      title: "Handmade Bamboo Basket Weaving Technique of Jhabua",
      author: "Pooja Bhil",
      region: "Jhabua, Madhya Pradesh",
      category: "Indigenous Craft",
      date: "08 Sept 2026",
      desc: "Documenting our grandmother's method of splitting wild forest bamboo without metal knives, using only cured river stones and mustard oil conditioning.",
      status: "Verified by Archival Moderator",
      statusClass: "bg-emerald-950 text-emerald-300 border-emerald-500/40"
    }
  ];

  let storedSubmissions = [];
  try {
    const raw = localStorage.getItem("sannivesham_contributions");
    if (raw) storedSubmissions = JSON.parse(raw);
  } catch (e) {}

  const allItems = [...storedSubmissions, ...defaultSeeds];

  function render() {
    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">Living Citizen Archive</span>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">My Heritage: Community Repository</h1>
            <p class="text-xs text-neutral-300 mt-1">Document your family lore, elder songs, disappearing local recipes, and village traditions before they vanish.</p>
          </div>
          <div class="text-xs text-emerald-300 bg-emerald-950/60 px-3.5 py-1.5 rounded-xl border border-emerald-500/30">
            🛡️ Verified Archival Moderation Workflow
          </div>
        </div>

        <!-- Submission Form & Feed Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Submission Form (5 Columns) -->
          <div class="lg:col-span-5 glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-500/40 shadow-2xl space-y-5">
            <div>
              <span class="text-xs font-bold text-amber-400 uppercase tracking-wider">Preserve a Living Tradition</span>
              <h2 class="font-cinzel text-2xl font-bold text-white mt-1">Submit Your Heritage Story</h2>
              <p class="text-xs text-neutral-300 mt-1">Earn +75 Culture XP upon submission. Your recording becomes part of the permanent national digital archive.</p>
            </div>

            <form id="community-submit-form" class="space-y-4 text-xs">
              
              <div>
                <label class="block text-neutral-300 font-medium mb-1">Title of Tradition / Memory *</label>
                <input 
                  type="text" 
                  id="contrib-title" 
                  required 
                  placeholder="e.g. My Grandmother's Telangana Bonalu Song"
                  class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-neutral-300 font-medium mb-1">Your Name / Student ID *</label>
                  <input 
                    type="text" 
                    id="contrib-author" 
                    required 
                    value="${state.userName || 'Reshwanth (SNIST)'}"
                    class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label class="block text-neutral-300 font-medium mb-1">State / District *</label>
                  <input 
                    type="text" 
                    id="contrib-region" 
                    required 
                    placeholder="e.g. Hyderabad, Telangana"
                    class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label class="block text-neutral-300 font-medium mb-1">Heritage Category *</label>
                <select id="contrib-category" class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl px-3 py-2 text-amber-200 focus:outline-none focus:border-amber-400">
                  <option value="Oral Story / Folk Song">🎙 Oral Story / Folk Song</option>
                  <option value="Elder Craft Wisdom">🧵 Elder Craft Wisdom</option>
                  <option value="Traditional Recipe / Culinary">🍲 Traditional Recipe / Culinary</option>
                  <option value="Unrecorded Village Monument">🏛 Unrecorded Village Monument</option>
                  <option value="Folk Festival Ritual">🪔 Folk Festival Ritual</option>
                </select>
              </div>

              <div>
                <label class="block text-neutral-300 font-medium mb-1">Description & Oral Narrative *</label>
                <textarea 
                  id="contrib-desc" 
                  rows="4" 
                  required 
                  placeholder="Record what the elder said, the historical context, the meaning of the words, or the traditional tools used..."
                  class="w-full bg-neutral-900 border border-amber-500/30 rounded-xl p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center space-x-2">
                <span>Contribute to National Archive (+75 XP)</span>
                <span>→</span>
              </button>

            </form>
          </div>

          <!-- Right: Community Feed (7 Columns) -->
          <div class="lg:col-span-7 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-cinzel text-xl font-bold text-white">Recent Community Archives (${allItems.length})</h3>
              <span class="text-xs text-amber-400 font-medium">Public Citizens & Student Submissions</span>
            </div>

            <div class="space-y-4">
              ${allItems.map(item => `
                <div class="glass-panel p-6 rounded-3xl border border-amber-500/20 hover:border-amber-400/40 transition-colors space-y-3">
                  <div class="flex items-start justify-between">
                    <div>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded ${item.statusClass || 'bg-amber-950 text-amber-300 border border-amber-500/30'}">${item.status}</span>
                      <h4 class="font-cinzel text-lg font-bold text-white mt-1.5">${item.title}</h4>
                      <p class="text-xs text-neutral-400">By <strong>${item.author}</strong> • 📍 ${item.region} • ${item.date || 'Today'}</p>
                    </div>
                    <span class="text-xs font-semibold px-2 py-1 rounded bg-neutral-900 text-amber-300 border border-neutral-700">${item.category}</span>
                  </div>
                  <p class="text-xs text-neutral-200 leading-relaxed">${item.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </section>
    `;

    // Handle Form Submit
    const form = container.querySelector("#community-submit-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const newEntry = {
        id: "contrib-" + Date.now(),
        title: container.querySelector("#contrib-title")?.value,
        author: container.querySelector("#contrib-author")?.value,
        region: container.querySelector("#contrib-region")?.value,
        category: container.querySelector("#contrib-category")?.value,
        desc: container.querySelector("#contrib-desc")?.value,
        date: "Just Now",
        status: "Pending Peer Review (+75 XP)",
        statusClass: "bg-amber-950 text-amber-300 border-amber-500/30"
      };

      storedSubmissions.unshift(newEntry);
      try {
        localStorage.setItem("sannivesham_contributions", JSON.stringify(storedSubmissions));
      } catch (err) {}

      onNewSubmission(75);
      render();
    });
  }

  render();
}
