// 🇮🇳 BHARATVERSE — Main Application Orchestrator & Router
import { renderNavbar } from "./components/navbar.js";
import { renderHero } from "./components/hero.js";
import { renderCulturalMap } from "./components/culturalMap.js";
import { renderStateProfile } from "./components/stateProfileModal.js";
import { renderHeritageExplorer } from "./components/heritageExplorer.js";
import { renderStoryViewer } from "./components/storyViewer.js";
import { renderCultureQuest } from "./components/cultureQuest.js";
import { renderBharatAi } from "./components/bharatAi.js";
import { renderLanguageExplorer } from "./components/languageExplorer.js";
import { renderFestivalCalendar } from "./components/festivalCalendar.js";
import { renderVoicesOfBharat } from "./components/voicesOfBharat.js";
import { renderCommunityArchive } from "./components/communityArchive.js";
import { renderHeritageNearMe } from "./components/heritageNearMe.js";
import { renderStudentJourney } from "./components/studentJourney.js";
import { renderLeaderboard } from "./components/leaderboard.js";
import { renderVirtualTour } from "./components/virtualTour.js";
import { renderHeritageAlert } from "./components/heritageAlert.js";
import { renderInstitutionMode } from "./components/institutionMode.js";
import { HERITAGE_CATALOG } from "./data/heritageData.js";

class BharatverseApp {
  constructor() {
    // Initial user state with local storage fallback
    const savedXp = localStorage.getItem("bharatverse_user_xp");
    this.state = {
      userName: "Reshwanth",
      userInitials: "RS",
      userCollege: "SNIST Hyderabad",
      userXp: savedXp ? parseInt(savedXp, 10) : 7820,
      currentView: "home",
      selectedStateId: "telangana",
      selectedStoryId: "charminar"
    };

    this.navContainer = document.getElementById("navbar-mount");
    this.mainContainer = document.getElementById("main-content");
    this.modalContainer = document.getElementById("modal-root");

    this.init();
  }

  init() {
    this.setupRouter();
    this.setupGlobalShortcuts();
    this.renderCurrentView();
  }

  setupRouter() {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      this.navigate(hash, false);
    };

    window.addEventListener("hashchange", handleHash);
    if (window.location.hash) {
      this.state.currentView = window.location.hash.replace("#", "");
    }
  }

  navigate(viewName, updateHash = true) {
    this.state.currentView = viewName;
    if (updateHash) {
      window.location.hash = viewName;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.renderCurrentView();
  }

  updateXp(amount) {
    this.state.userXp += amount;
    localStorage.setItem("bharatverse_user_xp", this.state.userXp.toString());
    this.showToast(`🎉 +${amount} Culture XP Earned! Total: ${this.state.userXp} XP`);
    this.renderNavbarOnly();
  }

  showToast(message) {
    let toast = document.getElementById("app-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "app-toast";
      toast.className = "fixed bottom-6 right-6 z-50 glass-panel-maroon px-5 py-3 rounded-2xl border border-amber-400 text-amber-200 text-xs font-bold shadow-2xl transition-all duration-300 transform translate-y-20 opacity-0 flex items-center space-x-2";
      document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.remove("translate-y-20", "opacity-0");
    setTimeout(() => {
      toast.classList.add("translate-y-20", "opacity-0");
    }, 3500);
  }

  renderNavbarOnly() {
    renderNavbar(
      this.navContainer,
      this.state,
      (view) => this.navigate(view),
      () => this.openSearchModal(),
      () => this.openProfileModal()
    );
  }

  renderCurrentView() {
    this.renderNavbarOnly();

    const onSelectState = (stateId) => {
      this.state.selectedStateId = stateId;
      this.navigate("stateProfile");
    };

    const onOpenStory = (storyId) => {
      this.state.selectedStoryId = storyId;
      this.navigate("stories");
    };

    switch (this.state.currentView) {
      case "home":
        renderHero(this.mainContainer, (v) => this.navigate(v), onSelectState);
        break;

      case "map":
        renderCulturalMap(this.mainContainer, onSelectState, this.state.selectedStateId);
        break;

      case "stateProfile":
        renderStateProfile(this.mainContainer, this.state.selectedStateId, () => this.navigate("map"), onOpenStory);
        break;

      case "explorer":
        renderHeritageExplorer(this.mainContainer, onSelectState, onOpenStory);
        break;

      case "stories":
        renderStoryViewer(this.mainContainer, this.state.selectedStoryId, () => this.navigate("explorer"));
        break;

      case "quest":
        renderCultureQuest(this.mainContainer, this.state, (xp) => this.updateXp(xp));
        break;

      case "bharatai":
        renderBharatAi(this.mainContainer);
        break;

      case "languages":
        renderLanguageExplorer(this.mainContainer);
        break;

      case "festivals":
        renderFestivalCalendar(this.mainContainer);
        break;

      case "voices":
        renderVoicesOfBharat(this.mainContainer, () => this.navigate("community"));
        break;

      case "community":
        renderCommunityArchive(this.mainContainer, this.state, (xp) => this.updateXp(xp));
        break;

      case "nearme":
        renderHeritageNearMe(this.mainContainer);
        break;

      case "student":
        renderStudentJourney(this.mainContainer, this.state, () => this.navigate("quest"));
        break;

      case "leaderboard":
        renderLeaderboard(this.mainContainer, this.state);
        break;

      case "virtualtour":
        renderVirtualTour(this.mainContainer);
        break;

      case "alert":
        renderHeritageAlert(this.mainContainer, this.state, (xp) => this.updateXp(xp));
        break;

      case "institution":
        renderInstitutionMode(this.mainContainer, this.state);
        break;

      default:
        renderHero(this.mainContainer, (v) => this.navigate(v), onSelectState);
    }
  }

  setupGlobalShortcuts() {
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        this.openSearchModal();
      }
    });
  }

  openSearchModal() {
    this.modalContainer.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn" id="search-modal-backdrop">
        <div class="glass-panel p-6 rounded-3xl border border-amber-500/40 w-full max-w-2xl shadow-2xl space-y-4">
          <div class="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">Universal Cultural Search</span>
            <button id="close-search-modal" class="text-neutral-400 hover:text-white text-xs">✕ ESC</button>
          </div>
          
          <input 
            type="text" 
            id="modal-search-input" 
            placeholder="Search Telangana, Charminar, Ramappa, Bonalu, Ikat, Dravida..." 
            class="w-full bg-neutral-900 border border-amber-500/30 rounded-2xl p-4 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400"
            autofocus
          />

          <div id="modal-search-results" class="max-h-80 overflow-y-auto space-y-2 text-xs">
            <p class="text-neutral-400 text-center py-6">Type to search through all 36 Indian states, monuments, classical arts, and oral histories.</p>
          </div>
        </div>
      </div>
    `;

    const input = document.getElementById("modal-search-input");
    const resultsContainer = document.getElementById("modal-search-results");
    const backdrop = document.getElementById("search-modal-backdrop");
    const closeBtn = document.getElementById("close-search-modal");

    const closeModal = () => {
      this.modalContainer.innerHTML = "";
    };

    closeBtn?.addEventListener("click", closeModal);
    backdrop?.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });

    input?.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        resultsContainer.innerHTML = `<p class="text-neutral-400 text-center py-6">Type to search through monuments, dances, and crafts...</p>`;
        return;
      }

      const matches = HERITAGE_CATALOG.filter(item => 
        item.title.toLowerCase().includes(q) || 
        item.state.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p class="text-neutral-400 text-center py-6">No matching cultural assets found for "${q}".</p>`;
        return;
      }

      resultsContainer.innerHTML = matches.map(m => `
        <div class="search-result-row p-3 rounded-xl bg-neutral-900/70 hover:bg-amber-950/60 border border-amber-500/15 cursor-pointer flex items-center justify-between transition-colors" data-id="${m.id}">
          <div>
            <h4 class="font-bold text-white">${m.title}</h4>
            <p class="text-[11px] text-amber-300">📍 ${m.state} • ${m.category}</p>
          </div>
          <span class="text-amber-400 text-xs">Explore →</span>
        </div>
      `).join('');

      resultsContainer.querySelectorAll(".search-result-row").forEach(row => {
        row.addEventListener("click", () => {
          closeModal();
          this.navigate("explorer");
        });
      });
    });
  }

  openProfileModal() {
    this.modalContainer.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" id="profile-modal-backdrop">
        <div class="glass-panel-maroon p-6 sm:p-8 rounded-3xl border border-amber-400 w-full max-w-md shadow-2xl space-y-6">
          <div class="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <span class="text-xs font-bold text-amber-300 uppercase tracking-wider">Student Cultural Profile</span>
            <button id="close-profile-modal" class="text-neutral-400 hover:text-white text-xs">✕</button>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-800 flex items-center justify-center text-xl font-bold text-white border border-amber-300/40">
              ${this.state.userInitials}
            </div>
            <div>
              <h3 class="font-cinzel text-xl font-bold text-white">${this.state.userName}</h3>
              <p class="text-xs text-amber-300">${this.state.userCollege}</p>
              <p class="text-[11px] text-neutral-400 mt-0.5">Heritage Scholar Tier • Rank #6</p>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3 text-xs">
            <div class="p-3 rounded-xl bg-neutral-900/80 border border-amber-500/20 text-center">
              <p class="text-neutral-400 text-[10px] uppercase">Culture XP</p>
              <p class="font-bold text-lg text-amber-300 mt-0.5">${this.state.userXp}</p>
            </div>
            <div class="p-3 rounded-xl bg-neutral-900/80 border border-amber-500/20 text-center">
              <p class="text-neutral-400 text-[10px] uppercase">States Explored</p>
              <p class="font-bold text-lg text-emerald-300 mt-0.5">14 / 36</p>
            </div>
          </div>

          <div class="space-y-3 text-xs">
            <button id="modal-inst-mode-btn" class="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-200 border border-amber-500/30 transition-all font-semibold flex items-center justify-center space-x-2">
              <span>🏫 Open Institution / Teacher Dashboard</span>
            </button>
            <button id="modal-leaderboard-btn" class="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 transition-all font-bold flex items-center justify-center space-x-2">
              <span>🏆 View Pan-India Leaderboard</span>
            </button>
          </div>
        </div>
      </div>
    `;

    const closeModal = () => { this.modalContainer.innerHTML = ""; };
    document.getElementById("close-profile-modal")?.addEventListener("click", closeModal);
    document.getElementById("profile-modal-backdrop")?.addEventListener("click", (e) => {
      if (e.target.id === "profile-modal-backdrop") closeModal();
    });

    document.getElementById("modal-inst-mode-btn")?.addEventListener("click", () => {
      closeModal();
      this.navigate("institution");
    });

    document.getElementById("modal-leaderboard-btn")?.addEventListener("click", () => {
      closeModal();
      this.navigate("leaderboard");
    });
  }
}

// Instantiate on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  window.app = new BharatverseApp();
});
