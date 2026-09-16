// 🏫 BHARATVERSE — Institution Mode: Heritage Classroom & Teacher Dashboard
export function renderInstitutionMode(container, state) {
  let pendingSubmissions = [
    {
      id: "sub-101",
      student: "Aarav Sharma",
      rollNo: "21SN1A0501",
      topic: "Oral Documentation of Cheriyal Scroll Painting in Siddipet",
      date: "15 Sept 2026",
      summary: "Interviewed master artist Sri Vaikuntam Nakash. Documented the process of boiling tamarind seed paste for canvas treatment and natural mineral yellow stone grinding.",
      status: "Pending Grading"
    },
    {
      id: "sub-102",
      student: "Ananya Deshmukh",
      rollNo: "21SN1A0518",
      topic: "Photographic Survey of Golconda Outer Moat Encroachments",
      date: "14 Sept 2026",
      summary: "GPS-tagged 4 sections of the outer bastion with visible erosion and vegetation overgrowth. Compiled field report for submission to ASI Hyderabad Circle.",
      status: "Pending Grading"
    }
  ];

  function render() {
    container.innerHTML = `
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        <!-- Header & Institution Badge -->
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/30 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-900 border border-amber-400/40 flex items-center justify-center text-3xl shrink-0 shadow-lg">
              🏛️
            </div>
            <div>
              <div class="flex items-center space-x-2">
                <span class="text-xs font-bold px-2.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">VERIFIED ACADEMIC INSTITUTION</span>
                <span class="text-xs text-neutral-400">AICTE Innovation Node</span>
              </div>
              <h1 class="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-1">Sreenidhi Institute of Science & Technology (SNIST)</h1>
              <p class="text-xs text-neutral-300">Department of Computer Science & Heritage Technology Lab • Hyderabad, Telangana</p>
            </div>
          </div>

          <div class="flex items-center space-x-2">
            <button id="create-assignment-btn" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all flex items-center space-x-1.5">
              <span>+ New Heritage Assignment</span>
            </button>
          </div>
        </div>

        <!-- Metric KPI Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20">
            <p class="text-xs text-neutral-400 uppercase font-semibold">Enrolled Scholars</p>
            <p class="font-cinzel text-3xl font-black text-amber-400 mt-1">48</p>
            <p class="text-[10px] text-emerald-400 mt-1">↑ 12 new this semester</p>
          </div>
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20">
            <p class="text-xs text-neutral-400 uppercase font-semibold">Active Field Missions</p>
            <p class="font-cinzel text-3xl font-black text-rose-400 mt-1">5</p>
            <p class="text-[10px] text-neutral-400 mt-1">39 Completed Submissions</p>
          </div>
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20">
            <p class="text-xs text-neutral-400 uppercase font-semibold">Quiz Class Average</p>
            <p class="font-cinzel text-3xl font-black text-emerald-400 mt-1">82%</p>
            <p class="text-[10px] text-neutral-400 mt-1">Level 3 Traditions Tier</p>
          </div>
          <div class="glass-panel p-5 rounded-2xl border border-amber-500/20">
            <p class="text-xs text-neutral-400 uppercase font-semibold">College Culture XP</p>
            <p class="font-cinzel text-3xl font-black text-gold-gradient mt-1">420k XP</p>
            <p class="text-[10px] text-amber-300 mt-1">🏆 #1 Ranked College</p>
          </div>
        </div>

        <!-- Student Assignment Grading Table -->
        <div class="glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-500/30 space-y-6">
          <div class="flex items-center justify-between border-b border-amber-500/20 pb-4">
            <div>
              <h2 class="font-cinzel text-xl font-bold text-white">Student Heritage Field Submissions (Pending Verification)</h2>
              <p class="text-xs text-neutral-300 mt-0.5">Faculty review queue for awarding academic credits and national archive approval.</p>
            </div>
            <span class="text-xs font-bold text-amber-400 bg-neutral-950 px-3 py-1 rounded-xl border border-neutral-800">${pendingSubmissions.length} To Review</span>
          </div>

          <div class="space-y-4">
            ${pendingSubmissions.length === 0 ? `
              <p class="text-center py-8 text-neutral-400 text-xs">All student submissions have been graded and accredited! 🎉</p>
            ` : pendingSubmissions.map(sub => `
              <div class="p-5 rounded-2xl bg-neutral-900/80 border border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="space-y-1.5 flex-1">
                  <div class="flex items-center space-x-2">
                    <span class="text-xs font-bold text-white">${sub.student}</span>
                    <span class="text-[11px] font-mono text-neutral-400">(${sub.rollNo})</span>
                    <span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">📅 ${sub.date}</span>
                  </div>
                  <h4 class="font-cinzel text-base font-bold text-amber-300">${sub.topic}</h4>
                  <p class="text-xs text-neutral-300 leading-relaxed">${sub.summary}</p>
                </div>

                <div class="flex items-center space-x-2 shrink-0 self-end md:self-center">
                  <button data-approve-id="${sub.id}" class="approve-sub-btn px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md shadow-emerald-600/30 flex items-center space-x-1">
                    <span>✓ Approve & Award +100 XP</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </section>
    `;

    // Handle Approvals
    container.querySelectorAll(".approve-sub-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-approve-id");
        pendingSubmissions = pendingSubmissions.filter(s => s.id !== id);
        render();
      });
    });

    container.querySelector("#create-assignment-btn")?.addEventListener("click", () => {
      alert("Assignment Created: 'Document Your Local Temple Water Reservoir or Stepwell'. Notifications dispatched to 48 enrolled students.");
    });
  }

  render();
}
