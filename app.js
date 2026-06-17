// ========================================
// UNIVERSAL APP.JS (CryptoKosmos)
// Υποστηρίζει ΟΛΕΣ τις σελίδες
// ========================================


if (window.__CK_APP_BOOTED__) { /* already loaded */ }
window.__CK_APP_BOOTED__ = true;

// ★ Debug helper — γράψε ck_debug() στο console
window.ck_debug = function() {
    console.group("%c CryptoKosmos Debug", "color:#5bb4ff;font-weight:bold;font-size:14px");
    console.log("ck-user:", localStorage.getItem("ck-user"));
    console.log("ck-lang:", localStorage.getItem("ck-lang"));
    console.log("ck-theme:", localStorage.getItem("ck-theme"));
    console.log("ck-watchlist:", localStorage.getItem("ck-watchlist"));
    console.log("pending-code:", sessionStorage.getItem("ck-pending-code"));
    console.log("pending-user:", sessionStorage.getItem("ck-pending-user"));
    console.groupEnd();
};

// ★ EmailJS init
(function(){
  try{
    if(typeof emailjs!=="undefined")
      emailjs.init({ publicKey: "-xUBLgps3ZQ3VP1TN" });
  }catch(e){}
})();

// ★ Toast notification (bilingual)
function showCKToast(msg, type="success"){
  const ex=document.getElementById("ck-toast");
  if(ex) ex.remove();
  const t=document.createElement("div");
  t.id="ck-toast";
  t.textContent=msg;
  const ok=type==="success";
  t.style.cssText=`
    position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);
    background:${ok?"linear-gradient(135deg,#1a3a2a,#0d2d1f)":"linear-gradient(135deg,#3a1a1a,#2d0d0d)"};
    color:${ok?"#4ade80":"#f97373"};
    border:1px solid ${ok?"rgba(74,222,128,.3)":"rgba(249,115,115,.3)"};
    padding:14px 24px;border-radius:999px;font-size:14px;font-weight:600;
    box-shadow:0 8px 30px rgba(0,0,0,.5);z-index:9999;
    font-family:system-ui,sans-serif;
    opacity:0;transition:opacity .3s ease,transform .3s ease;white-space:nowrap;
  `;
  document.body.appendChild(t);
  requestAnimationFrame(()=>{t.style.opacity="1";t.style.transform="translateX(-50%) translateY(0)";});
  setTimeout(()=>{
    t.style.opacity="0";t.style.transform="translateX(-50%) translateY(10px)";
    setTimeout(()=>t.remove(),350);
  },3500);
}



// ==========================
// 1) LOAD USER FROM STORAGE
// ==========================
// ==========================
// 1) FIREBASE AUTH + localStorage fallback
// ==========================
const _fbConfig = {
    apiKey: "AIzaSyC6K0qqRG8odUSnni6xpmUSpDaaEYHiuvc",
    authDomain: "cryptokosmos-1524f.firebaseapp.com",
    projectId: "cryptokosmos-1524f",
    storageBucket: "cryptokosmos-1524f.firebasestorage.app",
    messagingSenderId: "1065352538515",
    appId: "1:1065352538515:web:18345d24f111e64f7f2066"
};

let _fbAuth = null;
let currentUser = null;

function initFirebase() {
    try {
        // ★ Εμφάνισε ΑΜΕΣΩΣ την κατάσταση από localStorage (πριν Firebase)
        const cachedAuth = localStorage.getItem("ck-auth-state");
        if (cachedAuth === "logged-in") {
            currentUser = { cached: true }; // placeholder
            updateAuthUI();
        }

        if (typeof firebase === "undefined") {
            try { currentUser = JSON.parse(localStorage.getItem("ck-current-user")) || null; } catch {}
            updateAuthUI();
            return;
        }
        if (!firebase.apps.length) firebase.initializeApp(_fbConfig);
        _fbAuth = firebase.auth();

        _fbAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            _fbAuth.onAuthStateChanged(user => {
                currentUser = user || null;
                // ★ Αποθήκευσε κατάσταση για instant display
                if (user) localStorage.setItem("ck-auth-state", "logged-in");
                else localStorage.removeItem("ck-auth-state");
                updateAuthUI();
                document.dispatchEvent(new Event("authChanged"));
            });
        });
    } catch(e) { console.warn("Firebase:", e); }
}
document.addEventListener("DOMContentLoaded", initFirebase);

// localStorage helpers (fallback for local testing)
function loadAllUsers() {
    try { return JSON.parse(localStorage.getItem("ck-users") || "[]"); } catch { return []; }
}
function saveUserLocal(user) {
    if (!user) return;
    const users = loadAllUsers();
    const idx = users.findIndex(u => u.email === user.email);
    if (idx >= 0) users[idx] = user; else users.push(user);
    localStorage.setItem("ck-users", JSON.stringify(users));
}
function findUserLocal(email, pass) {
    return loadAllUsers().find(u => u.email === email && u.pass === pass) || null;
}
function setCurrentUser(user) {
    currentUser = user;
    if (user) localStorage.setItem("ck-current-user", JSON.stringify(user));
    else localStorage.removeItem("ck-current-user");
}

// ==========================
// 2) THEME — init immediately (no DOM needed)
// ==========================
function applyTheme(light) {
    const root = document.documentElement;
    const themeIcon  = document.getElementById("theme-icon");
    const themeLabel = document.getElementById("theme-label");
    const siteLogo   = document.getElementById("site-logo");

    // Detect path depth for image paths
    const isSubpage = location.pathname.split("/").filter(Boolean).length > 1 &&
                      !location.pathname.endsWith("index.html") &&
                      location.pathname !== "/";
    const r = isSubpage ? "../" : "./";

    if (light) {
        root.classList.add("light-theme");
        document.body.classList.add("light-theme");
        localStorage.setItem("ck-theme", "light");
        if (themeIcon)  themeIcon.src  = r + "IMG_5299.png";
        if (themeLabel) themeLabel.textContent = "Light";
        if (siteLogo)   siteLogo.src   = r + "logo.png";
    } else {
        root.classList.remove("light-theme");
        document.body.classList.remove("light-theme");
        localStorage.setItem("ck-theme", "dark");
        if (themeIcon)  themeIcon.src  = r + "IMG_5300.png";
        if (themeLabel) themeLabel.textContent = "Dark";
        if (siteLogo)   siteLogo.src   = r + "black logo.png";
    }
    document.dispatchEvent(new Event("themeChanged"));
    // ★ Εμφάνισε τα icons (κρυμμένα μέχρι το theme να φορτώσει)
    document.documentElement.classList.add("theme-ready");
}
window.applyTheme = applyTheme;

// Apply saved theme immediately
applyTheme(localStorage.getItem("ck-theme") === "light");

// ==========================
// 3) LOGIN UI UPDATE
// ==========================


function updateAuthUI() {
    const authBtn   = document.getElementById("auth-btn");
    const authLabel = document.getElementById("auth-label");
    const authIcon  = document.getElementById("auth-icon");
    const mobileAuthBtn = document.getElementById("mobile-auth-btn");
    if (!authBtn) return;

    const isSubpage = location.pathname.split("/").filter(Boolean).length > 1 &&
                      !location.pathname.endsWith("index.html") &&
                      location.pathname !== "/";
    const r = isSubpage ? "../" : "./";

    const lang = localStorage.getItem("ck-lang") || "el";
    const dict = window.TRANSLATIONS?.[lang] || {};

    if (currentUser) {
        const txt = dict.logout || "Logout";
        if (authLabel) authLabel.textContent = txt;
        if (mobileAuthBtn) mobileAuthBtn.textContent = txt;
        authBtn.dataset.state = "logout";
        if (authIcon) authIcon.src = r + "IMG_5367.png";
    } else {
        const txt = dict.login || "Login";
        if (authLabel) authLabel.textContent = txt;
        if (mobileAuthBtn) mobileAuthBtn.textContent = txt;
        authBtn.dataset.state = "login";
        if (authIcon) authIcon.src =
        r + "IMG_5301.png";
    }
}
document.addEventListener("languageChanged", updateAuthUI);
document.addEventListener("authChanged", updateAuthUI);

document.addEventListener("languageChanged", updateAuthUI);

// Bind theme button after DOM ready
document.addEventListener("DOMContentLoaded", () => {
    // Re-apply after header.js has injected elements
    applyTheme(localStorage.getItem("ck-theme") === "light");
    updateAuthUI();

    const themeBtn = document.getElementById("theme-toggle");
    themeBtn?.addEventListener("click", () => {
        applyTheme(!document.body.classList.contains("light-theme"));
    });

  
});


// ==========================
// 4) LOGIN / SIGNUP / VERIFY (Firebase)
// ==========================
document.addEventListener("DOMContentLoaded", function() {

const loginModal  = document.getElementById("login-modal");
const signupModal = document.getElementById("signup-modal");
const verifyModal = document.getElementById("verify-modal");

const loginForm   = document.getElementById("login-form");
const signupBtn   = document.getElementById("signup-btn");
const signupClose = document.querySelector(".signup-close");
const signupCreate = document.getElementById("signup-create");
const backToLogin = document.getElementById("back-to-login");

const verifySubmit = document.getElementById("verify-submit");
const verifyClose  = document.querySelector(".verify-close");

const noAccountMsg = document.getElementById("no-account");
const signupError  = document.getElementById("signup-error");
const verifyError  = document.getElementById("verify-error");

function openLogin() {
    if (!loginModal) return;
    loginForm?.reset();
    if (noAccountMsg) noAccountMsg.style.display = "none";
    if (signupBtn)    signupBtn.style.display    = "none";
    signupModal?.classList.add("hidden");
    verifyModal?.classList.add("hidden");
    loginModal.classList.remove("hidden");
}
function closeLogin() { loginModal?.classList.add("hidden"); }

function openSignup() {
    if (signupError) signupError.style.display = "none";
    loginModal?.classList.add("hidden");
    verifyModal?.classList.add("hidden");
    signupModal?.classList.remove("hidden");
}
function closeSignup() { signupModal?.classList.add("hidden"); }

function openVerify() {
    if (verifyError) verifyError.style.display = "none";
    const v = document.getElementById("verify-code");
    if (v) v.value = "";
    loginModal?.classList.add("hidden");
    signupModal?.classList.add("hidden");
    verifyModal?.classList.remove("hidden");
}
function closeVerify() { verifyModal?.classList.add("hidden"); }

// Auth button
const authBtnEl = document.getElementById("auth-btn");
if (authBtnEl) {
    authBtnEl.addEventListener("click", () => {
        if (authBtnEl.dataset.state === "login") {
            openLogin();
        } else {
            const lang = localStorage.getItem("ck-lang") || "el";
            const doLogout = () => {
                setCurrentUser(null);
                localStorage.removeItem("ck-auth-state");
                updateAuthUI();
                showCKToast(lang === "en" ? "👋 Logged out." : "👋 Αποσυνδέθηκες.");
                document.dispatchEvent(new Event("authChanged"));
            };
            if (_fbAuth) _fbAuth.signOut().then(doLogout); else doLogout();
        }
    });
}

document.getElementById("login-close")?.addEventListener("click", closeLogin);
signupClose?.addEventListener("click", closeSignup);
verifyClose?.addEventListener("click", closeVerify);

document.addEventListener("click", (e) => {
    if (e.target.classList?.contains("modal-backdrop")) {
        closeLogin(); closeSignup(); closeVerify();
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { closeLogin(); closeSignup(); closeVerify(); }
});

// Mobile auth
document.getElementById("mobile-auth-btn")?.addEventListener("click", () => {
    authBtnEl?.click();
});

// Login submit — Firebase
loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email")?.value.trim();
    const pass  = document.getElementById("login-pass")?.value.trim();
    const lang  = localStorage.getItem("ck-lang") || "el";
    const btn   = loginForm.querySelector(".modal-submit");

    if (!email || !pass) return;
    if (btn) { btn.disabled = true; btn.textContent = "..."; }

    // Αν _fbAuth δεν είναι έτοιμο ακόμα, περίμενε λίγο
    if (!_fbAuth && typeof firebase !== "undefined") {
        try {
            if (!firebase.apps.length) firebase.initializeApp(_fbConfig);
            _fbAuth = firebase.auth();
        } catch(e) {}
    }

    try {
        if (_fbAuth) {
            const result = await _fbAuth.signInWithEmailAndPassword(email, pass);
            if (result.user) {
                closeLogin();
                showCKToast(lang === "en" ? "✅ Welcome back!" : "✅ Καλώς ήρθες!");
            }
        } else {
            const saved = findUserLocal(email, pass);
            if (!saved) throw new Error("not found");
            setCurrentUser(saved);
            updateAuthUI();
            closeLogin();
            showCKToast(lang === "en" ? "✅ Welcome back!" : "✅ Καλώς ήρθες!");
            document.dispatchEvent(new Event("authChanged"));
        }
    } catch(err) {
        console.warn("Login error:", err.code, err.message);
        if (noAccountMsg) {
            noAccountMsg.style.display = "block";
            noAccountMsg.textContent = lang === "en" ? "Wrong email or password." : "Λάθος email ή κωδικός.";
        }
        if (signupBtn) signupBtn.style.display = "block";
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = "Login →"; }
    }
});

signupBtn?.addEventListener("click", () => {
    if (noAccountMsg) noAccountMsg.style.display = "none";
    if (signupBtn)    signupBtn.style.display    = "none";
    closeLogin();
    openSignup();
});

backToLogin?.addEventListener("click", () => {
    closeSignup();
    openLogin();
});

// ★ HYBRID: EmailJS sends code → verify modal → Firebase creates account
// Κρατάμε προσωρινά τα στοιχεία εγγραφής
let _pendingEmail = null;
let _pendingPass  = null;
let _pendingCode  = null;

signupCreate?.addEventListener("click", async () => {
    const email = document.getElementById("signup-email")?.value.trim();
    const pass1 = document.getElementById("signup-pass1")?.value.trim();
    const pass2 = document.getElementById("signup-pass2")?.value.trim();
    const lang  = localStorage.getItem("ck-lang") || "el";

    if (!email || !pass1 || !pass2) return;

    if (pass1 !== pass2) {
        if (signupError) signupError.style.display = "block";
        return;
    }
    if (signupError) signupError.style.display = "none";

    if (signupCreate) {
        signupCreate.disabled = true;
        signupCreate.textContent = lang === "en" ? "Sending code..." : "Αποστολή κωδικού...";
    }

    // Δημιουργία 6ψήφιου κωδικού
    _pendingCode  = String(Math.floor(100000 + Math.random() * 900000));
    _pendingEmail = email;
    _pendingPass  = pass1;

    const templateId = lang === "en" ? "template_anrcp3g" : "template_acp4mua";
    const expiryTime = new Date(Date.now() + 15*60000).toLocaleTimeString(
        lang === "en" ? "en-US" : "el-GR",
        { hour: "2-digit", minute: "2-digit" }
    );

    try {
        // ── ΒΗΜΑ 1: EmailJS στέλνει τον κωδικό ──
        if (typeof emailjs !== "undefined") {
            await emailjs.send("service_yx4k8mg", templateId, {
                email, passcode: _pendingCode, time: expiryTime
            });
        } else {
            // Dev fallback: δείξε τον κωδικό στο console
            console.info(`%c[DEV] Code: ${_pendingCode}`, "color:#4ade80;font-size:16px;font-weight:bold;");
        }
        // ── ΒΗΜΑ 2: Άνοιξε το verify modal ──
        closeSignup();
        openVerify();
    } catch(err) {
        console.warn("EmailJS error:", err);
        // Αν αποτύχει το email, άνοιξε verify και δείξε κωδικό στο console
        console.info(`%c[FALLBACK] Code: ${_pendingCode}`, "color:#f59e0b;font-size:16px;font-weight:bold;");
        closeSignup();
        openVerify();
    } finally {
        if (signupCreate) {
            signupCreate.disabled = false;
            signupCreate.textContent = lang === "en" ? "Create Account" : "Δημιουργία λογαριασμού";
        }
    }
});

// ── ΒΗΜΑ 3: Verify submit → Firebase createUser ──
verifySubmit?.addEventListener("click", async () => {
    const code = document.getElementById("verify-code")?.value.trim();
    const lang = localStorage.getItem("ck-lang") || "el";

    // Έλεγχος κωδικού
    if (!code || code !== _pendingCode) {
        if (verifyError) verifyError.style.display = "block";
        return;
    }
    if (verifyError) verifyError.style.display = "none";

    const btn = document.getElementById("verify-submit");
    if (btn) { btn.disabled = true; btn.textContent = "..."; }

    try {
        if (_fbAuth) {
            await _fbAuth.createUserWithEmailAndPassword(_pendingEmail, _pendingPass);
        } else {
            const u = { email: _pendingEmail, pass: _pendingPass };
            saveUserLocal(u); setCurrentUser(u); updateAuthUI();
            document.dispatchEvent(new Event("authChanged"));
        }
        _pendingCode = null; _pendingEmail = null; _pendingPass = null;
        closeVerify();
        showCKToast(lang === "en" ? "✅ Account created!" : "✅ Ο λογαριασμός δημιουργήθηκε!");
    } catch(err) {
        let msg = lang==="en"?"❌ Error.":"❌ Σφάλμα.";
        if(err.code==="auth/email-already-in-use") msg=lang==="en"?"⚠️ Email in use.":"⚠️ Το email χρησιμοποιείται.";
        if(err.code==="auth/weak-password") msg=lang==="en"?"⚠️ 6+ chars needed.":"⚠️ Κωδικός 6+ χαρακτήρες.";
        showCKToast(msg,"error");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = lang === "en" ? "Verify" : "Επιβεβαίωση";
        }
    }
});

// Password eye toggles
function setupPasswordToggle(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon  = document.getElementById(iconId);
    if (!input || !icon) return;
    icon.addEventListener("click", () => {
        const hidden = input.type === "password";
        input.type = hidden ? "text" : "password";
        icon.src = hidden ? "./IMG_5381.png" : "./IMG_5380.png";
    });
}
setupPasswordToggle("login-pass", "login-pass-toggle");
setupPasswordToggle("signup-pass1", "signup-pass1-toggle");
setupPasswordToggle("signup-pass2", "signup-pass2-toggle");

}); // END DOMContentLoaded



// ==========================
// 5) ARTICLE IMAGE THEME
// ==========================

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

document.getElementById("theme-toggle")?.addEventListener("click", () => {
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
// BURGER — works on all pages
// =========================
document.addEventListener("DOMContentLoaded", function() {
  const menuToggle  = document.getElementById("menu-toggle");
  const mobileMenu  = document.getElementById("mobile-menu");
  const mobileTheme = document.getElementById("mobile-theme-toggle");
  const mobileAuth  = document.getElementById("mobile-auth-btn");
  const mobileLang  = document.getElementById("mobile-lang-toggle");

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
    window.closeBurger = closeBurger;

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", (e) => { e.preventDefault(); mobileMenu.classList.contains("open") ? closeBurger() : openBurger(); });
      mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => closeBurger()));
    }

    // Mobile THEME
    mobileTheme?.addEventListener("click", (e) => {
      e.preventDefault();
      closeBurger?.();
      applyTheme(!document.body.classList.contains("light-theme"));
    });

    // Mobile LOGIN
    mobileAuth?.addEventListener("click", (e) => {
      e.preventDefault();
      closeBurger?.();
      document.getElementById("auth-btn")?.click();
    });
  }
});


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




