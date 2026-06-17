/**
 * ★ CryptoKosmos — Shared Header Script
 * Χρήση: <script src="../header.js"></script> (από subpages)
 *        <script src="./header.js"></script>  (από root)
 *
 * ΔΕΝ αντικαθιστά την υπάρχουσα header — μόνο ενεργοποιεί theme/lang/auth.
 * Αν δεν υπάρχει header στη σελίδα, την injάρει αυτόματα.
 */
(function () {

  // ── Path detection ──────────────────────────────────────────────────
  const depth = (function() {
    const parts = location.pathname.split("/").filter(Boolean);
    // αν είμαστε σε subpage (guides/, pages/ κλπ)
    if (parts.length > 1 && !location.pathname.endsWith("index.html")) return 1;
    return 0;
  })();
  const root = depth > 0 ? "../" : "./";

  // ── Fix image src paths based on depth ─────────────────────────────
  function fixPath(src) {
    if (!src || src.startsWith("http")) return src;
    if (src.startsWith("../") || src.startsWith("./")) return src;
    return root + src;
  }

  // ── Inject header if not present ───────────────────────────────────
  function maybeInjectHeader() {
    if (document.querySelector(".site-header")) return; // ήδη υπάρχει

    const headerHTML = `

    <header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="${root}index.html">
      <img id="site-logo" src="${root}black logo.png" alt="CryptoKosmos" class="logo" />
      <div class="brand-text">
        <h1>CryptoKosmos</h1>
        <p class="tagline" data-i18n="header_tagline">Διάβασε την αγορά. Μην την ακούς.</p>
      </div>
    </a>
    <nav class="nav">
      <a href="${root}index.html#market" data-i18n="nav_market">Αγορά</a>
      <a href="${root}index.html#charts" data-i18n="nav_charts">Τάσεις</a>
      <a href="${root}index.html#guides" data-i18n="nav_guides">Οδηγοί</a>
      <a href="${root}index.html#glossary" data-i18n="nav_glossary">Γλωσσάρι</a>
      <a href="/news/articles.html" data-i18n="nav_articles">Άρθρα</a>
    </nav>
    <div class="header-actions">
      <button id="theme-toggle" class="pill-btn" type="button">
        <img id="theme-icon" src="${root}IMG_5300.png" class="icon-img" />
        <span id="theme-label" data-i18n="theme_dark">Dark</span>
      </button>
      <button id="auth-btn" class="pill-btn" type="button" data-state="login">
        <img id="auth-icon" src="${root}IMG_5301.png" class="icon-img" />
        <span id="auth-label" data-i18n="login">Login</span>
      </button>
      <button id="lang-toggle" class="pill-btn">
        <img id="lang-icon" class="icon-img lang-anim" src="${root}IMG_5542.png">
        <span id="lang-label" class="lang-anim">GR</span>
      </button>
      <button id="menu-toggle" class="menu-btn" type="button">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>
    </div>
  </div>
</header>

<div id="mobile-menu" class="mobile-menu" aria-hidden="true">

  <a href="${root}index.html#market" data-i18n="nav_market">Αγορά</a>
  <a href="${root}index.html#charts" data-i18n="nav_charts">Τάσεις</a>
  <a href="${root}index.html#guides" data-i18n="nav_guides">Οδηγοί</a>
  <a href="${root}index.html#glossary" data-i18n="nav_glossary">Γλωσσάρι</a>
  <a href="/news/articles.html" data-i18n="nav_articles">Άρθρα</a>
  <hr>

  <button id="mobile-theme-toggle" class="mobile-btn" type="button" data-i18n="mobile_theme">
    Αλλαγή Θέματος
  </button>

  <button id="mobile-auth-btn" class="mobile-btn" type="button">
    Login
  </button>

  <button id="mobile-lang-toggle" class="mobile-btn" type="button" aria-label="Language toggle">
    <img id="mobile-lang-icon" class="icon-img" src="${root}IMG_5542.png" alt="">
    <span id="mobile-lang-label">GR</span>
  </button>

</div>`;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  }

  // ── Inject modals if not present ───────────────────────────────────
  function maybeInjectModals() {
    if (document.getElementById("login-modal")) return; // ήδη υπάρχουν

    const modalsHTML = `
<div id="login-modal" class="modal hidden">
  <div class="modal-backdrop"></div>
  <div class="modal-card">
    <div class="modal-header">
      <span class="modal-title" data-i18n="login_title">Σύνδεση</span>
      <button class="modal-close" id="login-close">×</button>
    </div>
    <form id="login-form">
      <div class="modal-body">
        <label data-i18n="login_email">Email</label>
        <input id="login-email" type="email" placeholder="Email">
        <label data-i18n="login_password">Κωδικός</label>
        <div class="pass-wrap">
          <input id="login-pass" type="password" placeholder="Password">
          <img id="login-pass-toggle" class="pass-eye" src="${root}IMG_5380.png">
        </div>
      </div>
      <button class="modal-submit" type="submit">Login →</button>
      <p class="modal-hint" data-i18n="login_demo">Ο λογαριασμός σου αποθηκεύεται με ασφάλεια στο cloud.</p>
      <p id="no-account" class="modal-hint" style="color:#ffb3b3;display:none;">Λάθος email ή κωδικός.</p>
      <button id="signup-btn" type="button" style="display:none;margin-top:10px;width:100%;padding:10px 14px;border:none;border-radius:14px;background:#1e293b;color:white;font-weight:600;cursor:pointer;border:1px solid rgba(255,255,255,0.25);">Δημιουργία λογαριασμού</button>
    </form>
  </div>
</div>

<div id="signup-modal" class="modal hidden">
  <div class="modal-backdrop"></div>
  <div class="modal-card">
    <div class="modal-header">
      <h3 class="modal-title" data-i18n="signup_title">Δημιουργία λογαριασμού</h3>
      <button class="modal-close signup-close">×</button>
    </div>
    <div class="modal-body">
      <label>Email</label>
      <input id="signup-email" type="email" placeholder="Email">
      <label>Κωδικός</label>
      <div class="pass-wrap">
        <input id="signup-pass1" type="password" placeholder="Password">
        <img id="signup-pass1-toggle" class="pass-eye" src="${root}IMG_5380.png">
      </div>
      <label>Επιβεβαίωση κωδικού</label>
      <div class="pass-wrap">
        <input id="signup-pass2" type="password" placeholder="Confirm Password">
        <img id="signup-pass2-toggle" class="pass-eye" src="${root}IMG_5380.png">
      </div>
      <p id="signup-error" style="color:#ff6b6b;display:none;">Οι κωδικοί δεν ταιριάζουν.</p>
      <button id="signup-create" class="modal-submit">Δημιουργία λογαριασμού</button>
      <p class="modal-hint">
        <span data-i18n="signup_have_account">Έχεις ήδη λογαριασμό;</span>
        <span id="back-to-login" style="color:#5bb4ff;cursor:pointer;">Σύνδεση</span>
      </p>
    </div>
  </div>
</div>

<div id="verify-modal" class="modal hidden">
  <div class="modal-backdrop"></div>
  <div class="modal-card">
    <div class="modal-header">
      <h3 class="modal-title" data-i18n="verify_title">Επαλήθευση Email</h3>
      <button class="modal-close verify-close">×</button>
    </div>
    <div class="modal-body">
      <p class="muted" data-i18n="verify_subtitle">Σου στείλαμε έναν 6-ψήφιο κωδικό.</p>
      <input id="verify-code" type="text" inputmode="numeric" maxlength="6"
             placeholder="_ _ _ _ _ _"
             style="letter-spacing:6px;font-size:22px;text-align:center;font-weight:700;">
      <p id="verify-error" style="color:#ff6b6b;display:none;">Λάθος κωδικός.</p>
      <button id="verify-submit" class="modal-submit">Επιβεβαίωση</button>
    </div>
  </div>
</div>`;

    document.body.insertAdjacentHTML("beforeend", modalsHTML);
  }

  // ── Fix existing header image paths ────────────────────────────────
  function fixHeaderPaths() {
    const logo = document.getElementById("site-logo");
    if (logo && !logo.src.startsWith("http")) {
      const theme = localStorage.getItem("ck-theme");
      logo.src = theme === "light" ? root + "logo.png" : root + "black logo.png";
    }

    // Fix lang/theme icons
    const icons = {
      "theme-icon": root + (localStorage.getItem("ck-theme") === "light" ? "IMG_5299.png" : "IMG_5300.png"),
      "auth-icon":  root + "IMG_5301.png",
      "lang-icon":  root + (localStorage.getItem("ck-lang") === "en" ? "IMG_5543.png" : "IMG_5542.png"),
    };
    Object.entries(icons).forEach(([id, src]) => {
      const el = document.getElementById(id);
      if (el && !el.src.includes("http")) el.src = src;
    });
  }

  // ── Inject Space Grotesk font if not present ───────────────────────
  function maybeInjectFont() {
    if (document.getElementById("ck-font-preconnect")) return;

    const pre1 = document.createElement("link");
    pre1.id = "ck-font-preconnect";
    pre1.rel = "preconnect";
    pre1.href = "https://fonts.googleapis.com";
    document.head.appendChild(pre1);

    const pre2 = document.createElement("link");
    pre2.rel = "preconnect";
    pre2.href = "https://fonts.gstatic.com";
    pre2.crossOrigin = "anonymous";
    document.head.appendChild(pre2);

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(font);
  }

  // ── Inject immediately (sync) so i18n.js finds the elements ──────
  function run() {
  maybeInjectFont();       // ← ΝΕΟ, πρώτο
  maybeInjectThemeCSS();   // ← πρώτο
  maybeInjectHeader();
  maybeInjectModals();
  fixHeaderPaths();
}
    // ── Inject shared theme CSS if not present ─────────────────────────
function maybeInjectThemeCSS() {
  if (document.getElementById("ck-theme-css")) return;
  const link = document.createElement("link");
  link.id = "ck-theme-css";
  link.rel = "stylesheet";
  link.href = root + "header-theme.css";
  document.head.appendChild(link);
}
  

  if (document.body) {
    run(); // body exists - run now
  } else {
    // body not ready yet - wait for it
    document.addEventListener("DOMContentLoaded", run);
  }

})();






/* ============================================================
   ARTICLES NAV LINK — lang-aware
   Runs after the header is injected and on every language
   change so the link always points to the correct file.
   Uses absolute paths so it works from any folder depth.
============================================================ */
(function () {
  function updateArticlesLinks() {
    var lang = (localStorage.getItem("ck-lang") || "el").trim();
    var href = lang === "en" ? "/news/articles-en.html" : "/news/articles.html";
    document.querySelectorAll('[data-i18n="nav_articles"]').forEach(function (el) {
      el.href = href;
    });
  }

  // Run immediately (header already injected above) and on lang change
  updateArticlesLinks();
  document.addEventListener("languageChanged", updateArticlesLinks);
})();