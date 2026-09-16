// 🚨 BHARATVERSE — Heritage Alert: Civic Preservation Reporting Platform
export function renderHeritageAlert(container, state, onNewReport) {
  const defaultReports = [
    {
      id: "alert-1",
      title: "Weathered Kakatiya Inscription Slab in Agricultural Field",
      location: "Near Hanamkonda, Warangal, Telangana",
      category: "Damaged / Neglected Structure",
      urgency: "High",
      urgencyClass: "bg-amber-950 text-amber-300 border-amber-500/40",
      date: "12 Sept 2026",
      reporter: "Karthik R. (Archaeology Student)",
      desc: "Discovered an ancient 12th-century stone inscription slab with Old Telugu script lying unhedged in a private field edge. Risk of tractor collision and erosion.",
      status: "Dispatched to ASI Hyderabad Circle",
      statusClass: "bg-blue-950 text-blue-300 border-blue-500/40"
    },
    {
      id: "alert-2",
      title: "Endangered Cheriyal Natural Pigment Grinding Tradition",
      location: "Cheriyal Village, Siddipet, Telangana",
      category: "Endangered Traditional Craft",
      urgency: "Critical",
      urgencyClass: "bg-rose-950 text-rose-300 border-rose-500/40",
      date: "05 Sept 2026",
      reporter: "Padma V. (Cultural Researcher)",
      desc: "Only two remaining families possess the technique of grinding tree resin with local white mud stones. Requires institutional raw material subsidy.",
      status: "State Handloom Directorate Intervened",
      statusClass: "bg-emerald-950 text-emerald-300 border-emerald-500/40"
    }
  ];

  let storedReports = [];
  try {
    const raw = localStorage.getItem("sannivesham_reports");
    if (raw) storedReports = JSON.parse(raw);
  } catch (e) {}

  const allReports = [...storedReports, ...defaultReports];

  function render() {
    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        <!-- Header -->
        <div class="glass-panel p-6 rounded-3xl border border-rose-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div class="flex items-center space-x-2">
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded bg-rose-500/20 text-rose-300 uppercase tracking-wider">Civic Heritage Guard</span>
              <span class="text-xs text-neutral-400">Civic Preservation Network</span>
            </div>
            <h1 class="font-cinzel text-3xl sm:text-4xl font-bold text-white mt-1">Heritage Alert: Preservation Network</h1>
            <p class="text-xs text-neutral-300 mt-1">Transform from passive readers into active custodians. Report damaged structures, vanishing crafts, or endangered oral traditions.</p>
          </div>
          
          <!-- Metrics -->
          <div class="flex items-center space-x-3 text-center">
            <div class="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <p class="text-xl font-bold text-amber-400 font-mono">${allReports.length}</p>
              <p class="text-[10px] text-neutral-400 uppercase">Alerts Logged</p>
            </div>
            <div class="p-3 rounded-2xl bg-neutral-900/80 border border-neutral-800">
              <p class="text-xl font-bold text-emerald-400 font-mono">18</p>
              <p class="text-[10px] text-neutral-400 uppercase">ASI Actions Taken</p>
            </div>
          </div>
        </div>

        <!-- Form & Live Reports Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Left: Civic Report Form (5 Columns) -->
          <div class="lg:col-span-5 glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-rose-500/40 shadow-2xl space-y-5">
            <div>
              <span class="text-xs font-bold text-rose-400 uppercase tracking-wider">Direct Civic Action</span>
              <h2 class="font-cinzel text-2xl font-bold text-white mt-1">File a Heritage Alert</h2>
              <p class="text-xs text-neutral-300 mt-1">Alert state archaeological authorities, university research wings, and preservation trusts.</p>
            </div>

            <form id="heritage-report-form" class="space-y-4 text-xs">
              <div>
                <label class="block text-neutral-300 font-medium mb-1">Issue / Structure Name *</label>
                <input 
                  type="text" 
                  id="rep-title" 
                  required 
                  placeholder="e.g. Neglected Stepwell with Broken Stone Lintels"
                  class="w-full bg-neutral-900 border border-rose-500/30 rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-rose-400"
                />
              </div>

              <div>
                <label class="block text-neutral-300 font-medium mb-1">Exact Geographic Location *</label>
                <input 
                  type="text" 
                  id="rep-location" 
                  required 
                  placeholder="e.g. Village Palampet, Mulugu District, Telangana"
                  class="w-full bg-neutral-900 border border-rose-500/30 rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-rose-400"
                />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-neutral-300 font-medium mb-1">Threat Category *</label>
                  <select id="rep-category" class="w-full bg-neutral-900 border border-rose-500/30 rounded-xl px-3 py-2 text-rose-200 focus:outline-none focus:border-rose-400">
                    <option value="Damaged / Neglected Structure">Damaged Monument</option>
                    <option value="Endangered Traditional Craft">Endangered Craft</option>
                    <option value="Disappearing Oral Tradition">Vanishing Tradition</option>
                    <option value="Illegal Encroachment">Encroachment</option>
                  </select>
                </div>
                <div>
                  <label class="block text-neutral-300 font-medium mb-1">Urgency Level *</label>
                  <select id="rep-urgency" class="w-full bg-neutral-900 border border-rose-500/30 rounded-xl px-3 py-2 text-rose-200 focus:outline-none focus:border-rose-400">
                    <option value="Critical">Critical (Immediate)</option>
                    <option value="High">High (Impending Damage)</option>
                    <option value="Moderate">Moderate (Needs Care)</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-neutral-300 font-medium mb-1">Description of Threat & Evidence *</label>
                <textarea 
                  id="rep-desc" 
                  rows="4" 
                  required 
                  placeholder="Detail visible structural cracks, weather damage, lack of boundary fencing, or elders unable to find apprentices..."
                  class="w-full bg-neutral-900 border border-rose-500/30 rounded-xl p-3 text-white placeholder-neutral-500 focus:outline-none focus:border-rose-400"
                ></textarea>
              </div>

              <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center space-x-2">
                <span>Dispatch Heritage Alert to Authorities</span>
                <span>🚨</span>
              </button>
            </form>
          </div>

          <!-- Right: Active Alert Feed (7 Columns) -->
          <div class="lg:col-span-7 space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-cinzel text-xl font-bold text-white">Active Heritage Watchfeed</h3>
              <span class="text-xs text-rose-400 font-semibold">Live Moderation Pipeline</span>
            </div>

            <div class="space-y-4">
              ${allReports.map(rep => `
                <div class="glass-panel p-6 rounded-3xl border border-rose-500/20 hover:border-rose-400/40 transition-colors space-y-3">
                  <div class="flex items-start justify-between">
                    <div>
                      <div class="flex items-center space-x-2">
                        <span class="text-[10px] font-bold px-2 py-0.5 rounded ${rep.urgencyClass || 'bg-rose-950 text-rose-300 border border-rose-500/30'}">${rep.urgency} Urgency</span>
                        <span class="text-[10px] text-neutral-400">📅 ${rep.date || 'Today'}</span>
                      </div>
                      <h4 class="font-cinzel text-lg font-bold text-white mt-1.5">${rep.title}</h4>
                      <p class="text-xs text-amber-300/90 font-medium">📍 ${rep.location}</p>
                    </div>
                    <span class="text-[10px] font-bold px-2 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-700">${rep.category}</span>
                  </div>

                  <p class="text-xs text-neutral-200 leading-relaxed">${rep.desc}</p>

                  <div class="pt-2 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span class="text-neutral-400">Logged by: <strong>${rep.reporter}</strong></span>
                    <span class="px-2.5 py-1 rounded-lg ${rep.statusClass || 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'} font-semibold">
                      ${rep.status}
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </section>
    `;

    // Handle Form Submit
    const form = container.querySelector("#heritage-report-form");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const newRep = {
        id: "alert-" + Date.now(),
        title: container.querySelector("#rep-title")?.value,
        location: container.querySelector("#rep-location")?.value,
        category: container.querySelector("#rep-category")?.value,
        urgency: container.querySelector("#rep-urgency")?.value,
        desc: container.querySelector("#rep-desc")?.value,
        date: "Just Now",
        reporter: `${state.userName || 'Reshwanth'} (${state.userCollege || 'SNIST'})`,
        status: "Transmitted to ASI State Directorate",
        statusClass: "bg-blue-950 text-blue-300 border-blue-500/40"
      };

      storedReports.unshift(newRep);
      try {
        localStorage.setItem("sannivesham_reports", JSON.stringify(storedReports));
      } catch (err) {}

      onNewReport(50);
      render();
    });
  }

  render();
}
