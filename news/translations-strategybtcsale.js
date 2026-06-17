/**
 * translations-strategybtcsale.js
 * Page-specific i18n strings for strategybtcsale.html / strategybtcsale-en.html
 * (CryptoKosmos)
 *
 * Matches the i18n.js engine: reads from window.TRANSLATIONS[lang][key]
 * (lang = "el" | "en") and applies it to any element with a matching
 * data-i18n / data-i18n-placeholder attribute.
 *
 * Includes:
 *  - shared header / nav / auth-modal strings (used by the header.js-
 *    injected header, mobile menu and login/signup/verify modals)
 *  - page-specific "ss_*" strings (the article body itself is static
 *    per-language HTML, these are kept for consistency / future use)
 *  - "pf_*" strings for the "Διάβασε επίσης" / "Read Also" section
 *
 * Using Object.assign so this file can be loaded alongside other
 * global/shared translation files without wiping their keys.
 */

(function () {
  const el = {
   "header_tagline": "Διάβασε την αγορά. Μην την ακούς.",
    "nav_market": "Αγορά",
    "nav_charts": "Τάσεις",
    "nav_guides": "Οδηγοί",
    "nav_glossary": "Γλωσσάρι",
    "nav_articles": "Άρθρα",
    "theme_dark": "Dark",
    "login": "Login",
    "mobile_theme": "Αλλαγή Θέματος",
    "login_title": "Σύνδεση",
    "login_email": "Email",
    "login_password": "Κωδικός",
    "login_btn": "Σύνδεση",
    "login_demo": "Ο λογαριασμός σου αποθηκεύεται με ασφάλεια στο cloud.",
    "login_no_account": "Λάθος email ή κωδικός.",
    "login_create_account": "Δημιουργία λογαριασμού",
    "signup_title": "Δημιούργησε λογαριασμό",
    "signup_email": "Email",
    "signup_pass1": "Κωδικός",
    "signup_pass2": "Επιβεβαίωση κωδικού",
    "signup_error": "Οι κωδικοί δεν ταιριάζουν.",
    "signup_btn": "Δημιουργία λογαριασμού",
    "signup_have_account": "Έχεις ήδη λογαριασμό;",
    "signup_back": "Σύνδεση",
    "verify_title": "Επαλήθευση Email",
    "verify_subtitle": "Σου στείλαμε έναν 6-ψήφιο κωδικό.",
    "verify_code": "Κωδικός",
    "verify_error": "Λάθος κωδικός. Προσπάθησε ξανά.",
    "verify_btn": "Επιβεβαίωση",
    "ss_kicker": "Crypto Market News",
    "ss_title": "Όταν ο «never sell» πούλησε: τι μαθαίνουμε από την κίνηση της Strategy",
    "ss_lead": "Για πρώτη φορά μετά από τέσσερα χρόνια, η Strategy του Michael Saylor πούλησε Bitcoin — μόλις 32 BTC, αλλά αρκετά για να ταράξουν ένα αφήγημα που χτιζόταν πάνω στη λέξη «ποτέ». Λίγες μέρες μετά, τα spot Bitcoin ETFs κατέγραψαν το μεγαλύτερο outflow streak στην ιστορία τους. Δύο γεγονότα, ένα μάθημα: τι σημαίνει στην πράξη όταν ένας θεσμός που έλεγε «ποτέ δεν πουλάμε» πουλάει, και πώς να το διαβάζεις χωρίς πανικό.",
    "ss_tldr_title": "Τι έγινε σε 30 δευτερόλεπτα",
    "ss_h2_1": "1) Τι ακριβώς έγινε",
    "ss_h2_2": "2) Γιατί το ασήμαντο νούμερο έγινε μεγάλη είδηση",
    "ss_h2_3": "3) Η αντίδραση της αγοράς: ETF outflows-ρεκόρ",
    "ss_h2_4": "4) Πώς απάντησε ο Saylor",
    "ss_h2_5": "Το πρακτικό συμπέρασμα",
    "ss_h2_6": "6) Τι να παρακολουθείς τις επόμενες μέρες",
    "ss_faq_title": "Συχνές ερωτήσεις (FAQ)",
    "pf_title": "Διάβασε επίσης",
    "pf_sub_ss": "Περισσότερα άρθρα & checklists για risk management",
    "pf_tag_altcoins": "Altcoins",
    "pf_read": "Διάβασε"
  };

  const en = {
   "header_tagline": "Read the market. Don't follow the noise",
    "nav_market": "Market",
    "nav_charts": "Trends",
    "nav_guides": "Guides",
    "nav_glossary": "Glossary",
    "nav_articles": "Articles",
    "theme_dark": "Dark",
    "login": "Login",
    "mobile_theme": "Switch Theme",
    "login_title": "Log In",
    "login_email": "Email",
    "login_password": "Password",
    "login_btn": "Log In",
    "login_demo": "Your account is securely stored in the cloud.",
    "login_no_account": "Incorrect email or password.",
    "login_create_account": "Create Account",
    "signup_title": "Create an Account",
    "signup_email": "Email",
    "signup_pass1": "Password",
    "signup_pass2": "Confirm Password",
    "signup_error": "Passwords don't match.",
    "signup_btn": "Create Account",
    "signup_have_account": "Already have an account?",
    "signup_back": "Log In",
    "verify_title": "Verify Email",
    "verify_subtitle": "We sent you a 6-digit code.",
    "verify_code": "Code",
    "verify_error": "Incorrect code. Try again.",
    "verify_btn": "Verify",
    "ss_kicker": "Crypto Market News",
    "ss_title": "When the “Never Sell” Investor Sold: What Strategy's Bitcoin Move Teaches Us",
    "ss_lead": "For the first time in four years, Michael Saylor's Strategy sold Bitcoin — just 32 BTC, but enough to shake a narrative built on the word “never.” Days later, spot Bitcoin ETFs logged their largest outflow streak on record. Two events, one lesson: what it really means when an institution that said “we never sell” sells — and how to read that signal without panicking.",
    "ss_tldr_title": "What Happened in 30 Seconds",
    "ss_h2_1": "1) What Exactly Happened",
    "ss_h2_2": "2) Why a Tiny Number Became a Big Story",
    "ss_h2_3": "3) The Market Reaction: Record ETF Outflows",
    "ss_h2_4": "4) How Saylor Responded",
    "ss_h2_5": "The Practical Takeaway",
    "ss_h2_6": "6) What to Watch in the Coming Days",
    "ss_faq_title": "Frequently Asked Questions (FAQ)",
    "pf_title": "Read Also",
    "pf_sub_ss": "More articles & checklists on risk management",
    "pf_tag_altcoins": "Altcoins",
    "pf_read": "Read"
  };

  window.TRANSLATIONS = window.TRANSLATIONS || {};
  window.TRANSLATIONS.el = Object.assign({}, window.TRANSLATIONS.el || {}, el);
  window.TRANSLATIONS.en = Object.assign({}, window.TRANSLATIONS.en || {}, en);
})();