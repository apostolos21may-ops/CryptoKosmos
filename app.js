// ========================================
// UNIVERSAL APP.JS (CryptoKosmos)
// Υποστηρίζει ΟΛΕΣ τις σελίδες
// ========================================


if (window.__CK_APP_BOOTED__) {
  console.warn("app.js already booted");
} else {
  window.__CK_APP_BOOTED__ = true;

  // ...όλο το app.js εδώ...
}

// ==========================
// 1) LOAD USER FROM STORAGE
// ==========================
function loadUser() {
    try {
        return JSON.parse(localStorage.getItem("ck-user")) || null;
    } catch {
        return null;
    }
}

function saveUser(user) {
    if (user) localStorage.setItem("ck-user", JSON.stringify(user));
    else localStorage.removeItem("ck-user");
}

let currentUser = loadUser();




function closeBurgerMenu() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (!menuToggle || !mobileMenu) return;

    menuToggle.classList.remove("open"); // το κάνει ≡
    mobileMenu.classList.remove("open"); // κλείνει το menu
}


// ==========================
// 2) THEME SYSTEM (GLOBAL)
// ==========================
const themeBtn   = document.getElementById("theme-toggle");
const themeIcon  = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");
const siteLogo   = document.getElementById("site-logo");

function applyTheme(light) {

    if (light) {
        document.body.classList.add("light-theme");
        localStorage.setItem("ck-theme", "light");

        if (themeIcon) themeIcon.src = "./IMG_5299.png";
        if (themeLabel) themeLabel.textContent = "Light";
        if (siteLogo) siteLogo.src = "./logo.png";

    } else {
        document.body.classList.remove("light-theme");
        localStorage.setItem("ck-theme", "dark");

        if (themeIcon) themeIcon.src = "./IMG_5300.png";
        if (themeLabel) themeLabel.textContent = "Dark";
        if (siteLogo) siteLogo.src = "./black logo.png";
    }
}

// φορτώνει τι είχαμε αποθηκεύσει
applyTheme(localStorage.getItem("ck-theme") === "light");

// button toggle
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        const isLight = !document.body.classList.contains("light-theme");
        applyTheme(isLight);
    });
}

document.dispatchEvent(new Event("themeChanged"));


// ==========================
// 3) LOGIN UI UPDATE
// ==========================
const authBtn   = document.getElementById("auth-btn");
const authLabel = document.getElementById("auth-label");
const authIcon  = document.getElementById("auth-icon");

function updateAuthUI() {
    if (!authBtn || !authLabel || !authIcon) return;

    if (currentUser) {
        authLabel.textContent = "Logout";
        authBtn.dataset.state = "logout";
        authIcon.src = "./IMG_5367.png";
    } else {
        authLabel.textContent = "Login";
        authBtn.dataset.state = "login";
        authIcon.src = "./IMG_5301.png";
    }
}
updateAuthUI();


// ==========================
// 4) LOGIN / SIGNUP / VERIFY
// ==========================
const loginModal  = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const verifyModal = document.getElementById("verify-modal");

const loginForm  = document.getElementById("login-form");
const signupBtn  = document.getElementById("signup-btn");
const signupClose = document.querySelector(".signup-close");
const signupCreate = document.getElementById("signup-create");
const backToLogin = document.getElementById("back-to-login");

const verifySubmit = document.getElementById("verify-submit");
const verifyClose  = document.querySelector(".verify-close");

const noAccountMsg = document.getElementById("no-account");
const signupError  = document.getElementById("signup-error");
const verifyError  = document.getElementById("verify-error");

let tempUser = null;
let verificationCode = null;


// Helper modal functions
function openLogin() {
    if (!loginModal) return;
    loginForm?.reset();
    noAccountMsg && (noAccountMsg.style.display = "none");
    signupBtn && (signupBtn.style.display = "none");
    signupModal?.classList.add("hidden");
    verifyModal?.classList.add("hidden");
    loginModal.classList.remove("hidden");
}
function closeLogin() { loginModal?.classList.add("hidden"); }

function openSignup() {
    signupModal?.classList.remove("hidden");
}
function closeSignup() { signupModal?.classList.add("hidden"); }

function openVerify() { verifyModal?.classList.remove("hidden"); }
function closeVerify() { verifyModal?.classList.add("hidden"); }


// NAVBUTTON LOGIN / LOGOUT
if (authBtn) {
    authBtn.addEventListener("click", () => {
        if (authBtn.dataset.state === "login") openLogin();
        else {
            currentUser = null;
            saveUser(null);
            updateAuthUI();
        }
    });
}

// Close login modal
document.getElementById("login-close")?.addEventListener("click", closeLogin);

// Click outside modal
loginModal?.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) closeLogin();
});

// Login submit
loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const pass  = document.getElementById("login-pass").value.trim();
    const saved = loadUser();

    if (!saved || saved.email !== email || saved.pass !== pass) {
        noAccountMsg.style.display = "block";
        signupBtn.style.display = "block";
        return;
    }

    currentUser = saved;
    updateAuthUI();
    closeLogin();
});

// "Δημιουργία λογαριασμού" → Open Signup
signupBtn?.addEventListener("click", () => {
    closeLogin();
    noAccountMsg.style.display = "none";
    signupBtn.style.display = "none";
    openSignup();
});

// Signup close
signupClose?.addEventListener("click", closeSignup);

// Back to login
backToLogin?.addEventListener("click", () => {
    closeSignup();
    openLogin();
});

// Signup create
signupCreate?.addEventListener("click", () => {
    const email = document.getElementById("signup-email").value.trim();
    const pass1 = document.getElementById("signup-pass1").value.trim();
    const pass2 = document.getElementById("signup-pass2").value.trim();

    if (!email || !pass1 || !pass2) return;

    if (pass1 !== pass2) {
        signupError.style.display = "block";
        return;
    }

    signupError.style.display = "none";

    // fake code
    verificationCode = String(Math.floor(100000 + Math.random() * 900000));
    console.log("Verification:", verificationCode);

    tempUser = { email, pass: pass1 };

    closeSignup();
    openVerify();
});

// Verify
verifySubmit?.addEventListener("click", () => {
    const code = document.getElementById("verify-code").value.trim();
    if (code !== verificationCode) {
        verifyError.style.display = "block";
        return;
    }
    verifyError.style.display = "none";

    saveUser(tempUser);
    currentUser = tempUser;
    updateAuthUI();
    closeVerify();
    alert("Ο λογαριασμός δημιουργήθηκε!");
});

verifyClose?.addEventListener("click", closeVerify);


// ==========================
// 5) PASSWORD EYE (universal)
// ==========================
function setupPasswordToggle(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon  = document.getElementById(iconId);
    if (!input || !icon) return;

    icon.addEventListener("click", () => {
        const isHidden = input.type === "password";
        input.type = isHidden ? "text" : "password";
        icon.src = isHidden ? "./IMG_5381.png" : "./IMG_5380.png";
    });
}

// LOGIN
setupPasswordToggle("login-pass", "login-pass-toggle");
// SIGNUP
setupPasswordToggle("signup-pass1", "signup-pass1-toggle");
setupPasswordToggle("signup-pass2", "signup-pass2-toggle");

// ================================
// ARTICLE IMAGE THEME SWITCH
// ================================

const articleImage = document.getElementById("article-image");

function updateArticleImage() {
  if (!articleImage) return;

  const lightImg = articleImage.dataset.lightImg;
  const darkImg  = articleImage.dataset.darkImg;

  // ✅ Αν δεν υπάρχουν data attributes, κράτα το src όπως είναι
  if (!lightImg && !darkImg) return;

  const isLight = document.body.classList.contains("light-theme");

  // ✅ Αν λείπει το ένα, χρησιμοποίησε το άλλο ή το υπάρχον src
  const fallback = articleImage.getAttribute("src");
  const target = isLight ? (lightImg || fallback) : (darkImg || fallback);

  if (target) articleImage.setAttribute("src", target);
}

themeBtn?.addEventListener("click", () => {
  setTimeout(updateArticleImage, 20);
});

document.addEventListener("DOMContentLoaded", updateArticleImage);
updateArticleImage();


function translateAllHidden() {
  const lang = localStorage.getItem("ck-lang") || "el";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (window.TRANSLATIONS?.[lang]?.[key]) {
      el.textContent = window.TRANSLATIONS[lang][key];
    }
  });
}

document.dispatchEvent(new Event("themeChanged"));








  function applyArticleImageTheme(){
    const img = document.getElementById("article-image");
    if(!img) return;

    const isLight = document.body.classList.contains("light-theme");
    const target = isLight ? img.dataset.lightImg : img.dataset.darkImg;

    if (target && img.src !== target) img.src = target;
  }

  document.addEventListener("DOMContentLoaded", applyArticleImageTheme);
  document.addEventListener("themeChanged", applyArticleImageTheme); // αν κάνεις dispatch



  // ========================================
// HOME ONLY INIT (index.html)
// ========================================
window.initHome = function initHome() {
  // TradingView
  if (document.getElementById("tradingview_chart")) {
    const s = document.createElement("script");
    s.src = "https://s3.tradingview.com/tv.js";
    s.onload = () => {
      window.__tvWidget = new TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "60",
        timezone: "Europe/Athens",
        theme: document.body.classList.contains("light-theme") ? "light" : "dark",
        style: "1",
        toolbar_bg: "#0f1216",
        enable_publishing: false,
        hide_legend: false,
        container_id: "tradingview_chart"
      });
    };
    document.body.appendChild(s);

    // αλλαγή pair
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".pair");
      if (!btn) return;
      document.querySelectorAll(".pair").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // αν υπάρχει widget, κάνε reload με νέο symbol
      if (window.TradingView) {
        // πιο safe: ξαναφτιάχνουμε widget
        document.getElementById("tradingview_chart").innerHTML = "";
        window.__tvWidget = new TradingView.widget({
          autosize: true,
          symbol: btn.dataset.symbol,
          interval: "60",
          timezone: "Europe/Athens",
          theme: document.body.classList.contains("light-theme") ? "light" : "dark",
          style: "1",
          toolbar_bg: "#0f1216",
          enable_publishing: false,
          hide_legend: false,
          container_id: "tradingview_chart"
        });
      }
    });
  }

  // Live prices (τρέχει μόνο αν υπάρχει το market-cards)
  if (typeof startPrices === "function") startPrices();

  // Hero ranking (τρέχει μόνο αν υπάρχει το hero-rank-inner)
  if (typeof loadHeroRanking === "function") loadHeroRanking();
};




// =========================
// BURGER (index only) — FIXED
// =========================
const menuToggle  = document.getElementById("menu-toggle");
const mobileMenu  = document.getElementById("mobile-menu");
const mobileTheme = document.getElementById("mobile-theme-toggle");
const mobileAuth  = document.getElementById("mobile-auth-btn");
const mobileLang  = document.getElementById("mobile-lang-toggle");

// Guard: μην ξαναδέσεις listeners αν τρέξει 2 φορές
if (!window.__ckBurgerBound) {
  window.__ckBurgerBound = true;

  function closeBurger() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.classList.remove("open");
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
  }

  function openBurger() {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.classList.add("open");
    mobileMenu.classList.add("open");
    mobileMenu.setAttribute("aria-hidden", "false");
  }

  function toggleBurger() {
    if (!menuToggle || !mobileMenu) return;
    const isOpen = mobileMenu.classList.contains("open");
    isOpen ? closeBurger() : openBurger();
  }

  // κάνε το διαθέσιμο global (για άλλα scripts)
  window.closeBurger = closeBurger;

  // Toggle burger
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      toggleBurger();
    });

    // close όταν πατάς link μέσα στο mobile menu
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => closeBurger());
    });
  }

  // Mobile THEME → κλείσε burger + κάνε click στο desktop theme
  if (mobileTheme && window.themeBtn) {
    mobileTheme.addEventListener("click", (e) => {
      e.preventDefault();
      closeBurger();
      window.themeBtn.click();
    });
  } else if (mobileTheme && typeof themeBtn !== "undefined" && themeBtn) {
    // fallback αν themeBtn είναι στη scope σου
    mobileTheme.addEventListener("click", (e) => {
      e.preventDefault();
      closeBurger();
      themeBtn.click();
    });
  }

  // Mobile LOGIN → κλείσε burger + άνοιξε login μέσω του auth-btn (ενιαίο handler)
  mobileAuth?.addEventListener("click", (e) => {
    e.preventDefault();
    closeBurger();
    document.getElementById("auth-btn")?.click();
  });

  // ❌ ΣΗΜΑΝΤΙΚΟ:
  // ΔΕΝ βάζουμε εδώ listener για mobileLang που να πατάει lang-toggle
  // γιατί έχεις ήδη το σωστό lang script στο τέλος (toggleLang()).
  // Άρα εδώ μόνο κλείνουμε burger (προαιρετικά).
  mobileLang?.addEventListener("click", () => {
    // άστο να το χειριστεί το language script σου
    closeBurger();
  });

  // close burger όταν κλείνει modal (backdrop / close)
  document.querySelectorAll(".modal-backdrop, .modal-close").forEach(el => {
    el.addEventListener("click", () => closeBurger());
  });

  // close με ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBurger();
  });
}









// ===============================
// GLOBAL NAV (universal) - works in folders + file://
// ===============================
(function () {
  // Αν είσαι ήδη στο index.html, κράτα το ίδιο. Αλλιώς ανέβα 1 επίπεδο (../index.html)
  const INDEX_URL = /\/index\.html$/.test(location.pathname)
    ? new URL("index.html", location.href).href
    : new URL("../index.html", location.href).href;

  function closeBurgerIfOpen() {
    if (typeof window.closeBurger === "function") {
      window.closeBurger();
      return;
    }
    document.getElementById("mobile-menu")?.classList.remove("open");
    document.getElementById("menu-toggle")?.classList.remove("open");
  }

  function goHome() {
    window.location.href = INDEX_URL;
  }

  function goToHref(href) {
    // ΚΑΝΟΝΙΚΟ resolve relative href (../index.html#market κλπ)
    window.location.href = new URL(href, window.location.href).href;
  }

  function bindLogoHome() {
    const brand = document.querySelector(".brand");
    const logo = document.getElementById("site-logo");
    const brandText = document.querySelector(".brand-text");

    // για να δουλεύει και χωρίς JS
    if (brand && brand.tagName.toLowerCase() === "a") brand.href = INDEX_URL;

    [brand, logo, brandText].filter(Boolean).forEach((el) => {
      el.style.cursor = "pointer";
      el.addEventListener("click", (e) => {
        e.preventDefault();
        goHome();
      });
    });
  }

  function bindNavLinks() {
    const links = document.querySelectorAll(".nav a, #mobile-menu a");

    links.forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href") || "";
        if (!href) return;

        // Αν έχει hash, άσε το link να πάει στο ΣΩΣΤΟ URL (relative)
        if (href.includes("#")) {
          e.preventDefault();
          goToHref(href);
          closeBurgerIfOpen();
          return;
        }

        // Αν είναι home-ish link
        if (href.includes("index.html") || href === "/" || href === "./") {
          e.preventDefault();
          goHome();
          closeBurgerIfOpen();
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    bindLogoHome();
    bindNavLinks();
  });
})();





// =========================
// STATIC TICKER (NO SCROLL)
// =========================
(function () {
  const COINS = [
    { id: "bitcoin",  sym: "BTC" },
    { id: "ethereum", sym: "ETH" },
    { id: "solana",   sym: "SOL" },
  ];

  async function fetchData() {
    const ids = COINS.map(c => c.id).join(",");
    const url =
      `https://api.coingecko.com/api/v3/simple/price` +
      `?ids=${encodeURIComponent(ids)}` +
      `&vs_currencies=usd&include_24hr_change=true`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("ticker fetch failed");
    return res.json();
  }

  function fmt(n){
    if (n == null || !isFinite(n)) return "—";
    return "$" + n.toLocaleString(undefined, { maximumFractionDigits: 2 });
  }

  function cls(chg){
    if (!isFinite(chg)) return "";
    return chg > 0 ? "up" : chg < 0 ? "down" : "";
  }

  function render(data){
    document.querySelectorAll("[data-ticker-inner]").forEach(inner => {
      inner.innerHTML = COINS.map(c => {
        const row = data[c.id] || {};
        const price = row.usd;
        const chg = row.usd_24h_change;
        const arrow = isFinite(chg) ? (chg > 0 ? "▲" : chg < 0 ? "▼" : "•") : "•";
        const pct = isFinite(chg) ? `${chg.toFixed(2)}%` : "";
        return `
          <span class="ck-tick ${cls(chg)}">
            <span class="sym">${c.sym}</span>
            <span class="p">${fmt(price)}</span>
            <span class="chg">${arrow} ${pct}</span>
          </span>
        `;
      }).join("");
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    if (!document.querySelector("[data-ticker]")) return;
    try {
      const data = await fetchData();
      render(data);
    } catch (e) {
      console.warn(e);
    }
  });
})();