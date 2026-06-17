/**
 * ★ CryptoKosmos — Shared Prefooter + Footer Script
 * Χρήση: <script src="../prefooter.js"></script> (από subpages)
 *        <script src="./prefooter.js"></script>  (από root)
 *
 * Injάρει το prefooter (CryptoKosmos / Explore / Social + divider)
 * και το site-footer (copyright + disclaimer) — ΧΩΡΙΣ το News section.
 *
 * Χρειάζεται το header-theme.css (φορτωμένο από header.js) για στυλ.
 */
(function () {

  // ── Path detection ──────────────────────────────────────────────────
  const depth = (function () {
    const parts = location.pathname.split("/").filter(Boolean);
    if (parts.length > 1 && !location.pathname.endsWith("index.html")) return 1;
    return 0;
  })();
  const root = depth > 0 ? "../" : "./";

  // ── Inject prefooter + footer if not present ───────────────────────
  function maybeInjectPrefooter() {
    if (document.querySelector(".prefooter")) return; // ήδη υπάρχει

    const html = `
<section class="prefooter">
  <div class="prefooter-glow"></div>

  <div class="prefooter-inner">
    <div class="pf-col">
      <h4 data-i18n="pf_brand_title">CryptoKosmos</h4>
      <p class="pf-muted" data-i18n="pf_brand_sub">Quick links &amp; updates από το crypto σύμπαν.</p>
    </div>

    <div class="pf-col">
      <h4 data-i18n="pf_explore_title">Explore</h4>
      <a href="${root}index.html#market" class="pf-link" data-i18n="pf_explore_market">Market</a>
      <a href="${root}index.html#charts" class="pf-link" data-i18n="pf_explore_trends">Trends</a>
      <a href="${root}index.html#guides" class="pf-link" data-i18n="pf_explore_guides">Guides</a>
      <a href="${root}index.html#glossary" class="pf-link" data-i18n="pf_explore_glossary">Glossary</a>
      <a href="/news/articles.html" class="pf-link" data-i18n="pf_explore_articles">Άρθρα</a>
    </div>

    <div class="pf-col">
      <h4 data-i18n="pf_social_title">Social</h4>
      <a href="https://x.com/CryptoKosmosApp" class="pf-link" target="_blank" rel="noopener" data-i18n="pf_social_x">X / Twitter</a>
      <a href="https://www.instagram.com/cryptokosmos.app/" class="pf-link" target="_blank" rel="noopener" data-i18n="pf_social_ig">Instagram</a>
      <a href="https://youtube.com/@cryptokosmosapp?si=tnWTyUZe6cJgFM4r" class="pf-link" target="_blank" rel="noopener" data-i18n="pf_social_yt">YouTube</a>
      <a href="https://www.tiktok.com/@cryptokosmosapp?_r=1&_t=ZN-943YUhcff0w" class="pf-link" target="_blank" rel="noopener" data-i18n="pf_social_tt">TikTok</a>
      <a href="mailto:cryptokosmos.news@gmail.com" class="pf-link" data-i18n="pf_social_email">Email</a>
    </div>
  </div>

  <div class="prefooter-divider"></div>
</section>

<footer class="site-footer">
  <div class="container">
    <p>© <span id="year"></span> CryptoKosmos</p>
    <p class="muted" data-i18n="footer_disclaimer">
      Disclaimer: Εκπαιδευτικό περιεχόμενο. Δεν αποτελεί επενδυτική συμβουλή.
    </p>
  </div>
</footer>`;

    document.body.insertAdjacentHTML("beforeend", html);

    // Συμπλήρωση τρέχοντος έτους (αν δεν το κάνει ήδη το app.js)
    const yearEl = document.getElementById("year");
    if (yearEl && !yearEl.textContent.trim()) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ── Self-contained translations (ανεξάρτητο από το translations.js
  //    της κάθε σελίδας — δουλεύει παντού) ─────────────────────────
  const PF_DICT = {
    el: {
      pf_brand_title:      "CryptoKosmos",
      pf_brand_sub:        "Ζωντανές τιμές, ανάλυση & οδηγοί στα ελληνικά.",
      pf_explore_title:    "Explore",
      pf_explore_market:   "Market",
      pf_explore_trends:   "Trends",
      pf_explore_guides:   "Guides",
      pf_explore_glossary: "Glossary",
      pf_explore_articles: "Άρθρα",
      pf_social_title:     "Social",
      pf_social_x:         "X / Twitter",
      pf_social_ig:        "Instagram",
      pf_social_yt:        "YouTube",
      pf_social_tt:        "TikTok",
      pf_social_email:     "Email",
      footer_disclaimer:   "Εκπαιδευτικό περιεχόμενο μόνο. Δεν αποτελεί επενδυτική συμβουλή.",
    },
    en: {
      pf_brand_title:      "CryptoKosmos",
      pf_brand_sub:        "Live prices, analysis & guides in plain English.",
      pf_explore_title:    "Explore",
      pf_explore_market:   "Market",
      pf_explore_trends:   "Trends",
      pf_explore_guides:   "Guides",
      pf_explore_glossary: "Glossary",
      pf_explore_articles: "Articles",
      pf_social_title:     "Social",
      pf_social_x:         "X / Twitter",
      pf_social_ig:        "Instagram",
      pf_social_yt:        "YouTube",
      pf_social_tt:        "TikTok",
      pf_social_email:     "Email",
      footer_disclaimer:   "Educational content only. Not financial advice.",
    },
  };

  function applyPrefooterLang(lang) {
    const dict = PF_DICT[lang] || PF_DICT.el;
    document.querySelectorAll(".prefooter [data-i18n], .site-footer [data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    // Update articles link href based on language
    const articlesLink = document.querySelector('.prefooter [data-i18n="pf_explore_articles"]');
    if (articlesLink) {
      articlesLink.href = lang === "en" ? "/news/articles-en.html" : "/news/articles.html";
    }
  }

  function run() {
    maybeInjectPrefooter();

    const lang = localStorage.getItem("ck-lang") || "el";
    applyPrefooterLang(lang);

    // Ενημέρωση όταν αλλάζει γλώσσα (το i18n.js κάνει αυτό dispatch)
    document.addEventListener("languageChanged", () => {
      const newLang = localStorage.getItem("ck-lang") || "el";
      applyPrefooterLang(newLang);
    });
  }

  if (document.body) {
    run();
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }

})();