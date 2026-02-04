window.TRANSLATIONS = {
  el: {
  
pf_title: "Διάβασε επίσης",
pf_sub_guides: "Περισσότεροι οδηγοί & tips ασφάλειας",

   ap_kicker: "Οδηγός Approvals",
    ap_title: "Token Approvals: πώς να μην αδειάσει το wallet σου (και τα 5 πιο συχνά mistakes)",
    ap_lead:
      "Τα approvals (allowances) είναι η “άδεια” που δίνεις σε ένα smart contract να ξοδεύει tokens σου στο μέλλον. Δεν είναι μεταφορά τώρα — αλλά μπορεί να γίνει αργότερα χωρίς να το καταλάβεις, ειδικά αν δώσεις infinite allowance ή αν μπεις σε λάθος site. Παρακάτω έχεις ένα πρακτικό checklist για ασφαλές DeFi και σωστό revoke routine.",
    ap_caption:
      "Safety snapshot: spender check, allowance limits, revoke και hot-wallet κανόνας.",

    ap_h2_1: "1) Τι είναι approval και γιατί είναι “ύπουλο”",
    ap_p_1:
      "Approval σημαίνει ότι επιτρέπεις σε έναν “spender” (ένα contract) να ξοδεύει ένα συγκεκριμένο token από το wallet σου μέχρι ένα όριο (allowance). Το ύπουλο είναι ότι πολλά approvals μοιάζουν με “αθώο sign” για να δουλέψει ένα dApp, ενώ στην πράξη ανοίγεις δικαίωμα που μπορεί να χρησιμοποιηθεί αργότερα. Αν ο spender είναι κακόβουλος ή αν το frontend που χρησιμοποίησες ήταν spoofed, το allowance μπορεί να αξιοποιηθεί για drain, χωρίς να χρειαστεί seed phrase.",

    ap_h2_2: "2) Infinite approvals: βολικό, αλλά αυξάνει το ρίσκο",
    ap_p_2:
      "Πολλά dApps ζητάνε “infinite” (τεράστιο) allowance ώστε να μην κάνεις approve κάθε φορά. Είναι βολικό, αλλά κάνει τη ζημιά μεγαλύτερη αν κάτι πάει στραβά: ένα hacked contract ή ένα λάθος site μπορεί να τραβήξει ό,τι ποσότητα token υπάρχει στο wallet σου. Πιο ασφαλής επιλογή είναι “exact amount” ή μικρό buffer (λίγο παραπάνω από όσο χρειάζεσαι), ειδικά για tokens που κρατάς σαν holdings. Infinite approvals κράτα μόνο σε wallet δοκιμών, με μικρά ποσά.",

    ap_h2_3: "3) Το Νο1 check πριν πατήσεις Confirm: spender + token + ποσό",
    ap_p_3:
      "Πριν εγκρίνεις, κοίτα τρία πράγματα: (α) ποιο token αφορά, (β) ποιος είναι ο spender (contract/διεύθυνση), και (γ) τι allowance δίνεις. Αν βλέπεις άγνωστο spender ή περίεργο prompt και δεν είσαι 100% σίγουρος ότι είσαι στο official site, σταμάτα. Τα περισσότερα scams σήμερα δεν ζητάνε seed· ζητάνε approval. Ο κανόνας είναι απλός: αν δεν καταλαβαίνεις τι δίνεις, μην το δίνεις.",

    ap_h2_4: "4) Revoke: πότε, γιατί και πώς σε σώζει",
    ap_p_4:
      "Revoke σημαίνει “μηδενίζω το allowance” που έχω δώσει. Είναι σαν να κλείνεις την πόρτα αφού τελειώσεις. Κάνε revoke όταν: (α) τελείωσες με ένα dApp που δεν θα ξαναχρησιμοποιήσεις, (β) έδωσες infinite approval “για λίγο”, (γ) έκανες interact με νέο/άγνωστο project, ή (δ) απλά δεν θυμάσαι γιατί υπάρχει αυτό το allowance. Μια καλή ρουτίνα είναι: audit approvals κάθε 2–4 εβδομάδες και καθάρισμα των άχρηστων. Μειώνεις δραματικά το ρίσκο από παλιά allowances που “κάθονται”.",

    ap_h2_5: "Τα 5 πιο συχνά mistakes (και πώς να τα αποφύγεις)",
    ap_p_5:
      "(1) Infinite approvals στο main wallet. (2) Approve από link σε DM / ads αντί για bookmark. (3) Approve χωρίς να κοιτάς spender. (4) Ίδιο wallet για holdings + airdrops/πειράματα. (5) Δεν κάνεις ποτέ revoke και συσσωρεύεις δεκάδες allowances. Κράτα έναν απλό κανόνα: main funds σε “main wallet”, DeFi/airdrops σε “hot wallet”, και approvals μόνο όταν βγάζουν νόημα. Αν υποπτευθείς λάθος approve: disconnect, revoke άμεσα και (αν χρειάζεται) μεταφορά σε νέο wallet.",

  pf_read: "Διάβασε",

  pf_c1_s4_title: "Seed phrase: ο απόλυτος οδηγός ασφάλειας",
pf_c1_s4_b1: "Μην το βάζεις ποτέ online",
pf_c1_s4_b2: "2 backups σε 2 μέρη",
pf_c1_s4_b3: "Καμία φωτογραφία / screenshot",

pf_c1_s5_title: "Phishing: 3 checks πριν πατήσεις link",
pf_c1_s5_b1: "Domain / spelling (copycats)",
pf_c1_s5_b2: "Approvals: τι ζητάει να υπογράψεις",
pf_c1_s5_b3: "Wallet prompts: “drain” patterns",

 pf_c1_s6_title: "Cold wallet: setup χωρίς λάθη (quick steps)",
pf_c1_s6_b1: "Initialize offline + firmware update",
pf_c1_s6_b2: "2 backups seed (σε 2 μέρη)",
pf_c1_s6_b3: "Small test transfer πρώτα",

pf_brand_sub: "Quick links & updates από το crypto σύμπαν.",

    /* =======================
           FOOTER
    ======================= */
    footer_rights: "Όλα τα δικαιώματα διατηρούνται.",


mobile_home: "Αρχική Σελίδα",
mobile_theme: "Αλλαγή Θέματος",


    /* HEADER */
    header_tagline: "Ο παλμός του κόσμου των crypto",
    nav_market: "Αγορά",
    nav_charts: "Τάσεις",
    nav_guides: "Οδηγοί",
    nav_glossary: "Γλωσσάρι",

    /* =======================
             LOGIN
    ======================= */
    login_title: "Σύνδεση",
    login_email: "Email",
    login_password: "Κωδικός",
    login_btn: "Σύνδεση",
    login_no_account: "Δεν έχεις λογαριασμό στο CryptoKosmos.",
    login_create_account: "Δημιουργία λογαριασμού",


    /* =======================
             SIGNUP
    ======================= */
    signup_title: "Δημιούργησε λογαριασμό",
    signup_email: "Email",
    signup_pass1: "Κωδικός",
    signup_pass2: "Επιβεβαίωση κωδικού",
    signup_error: "Οι κωδικοί δεν ταιριάζουν.",
    signup_btn: "Δημιουργία λογαριασμού",
    signup_back: "Σύνδεση",
    signup_have_account: "Έχεις ήδη λογαριασμό;",


    /* =======================
             VERIFY
    ======================= */
    verify_title: "Επαλήθευση Email",
    verify_subtitle: "Σου στείλαμε έναν 6-ψήφιο κωδικό.",
    verify_code: "Κωδικός",
    verify_error: "Λάθος κωδικός. Προσπάθησε ξανά.",
    verify_btn: "Επιβεβαίωση"
  },

  /* ================================================================
                          ENGLISH VERSION
  ================================================================ */
  en: {
   
    pf_title: "Read also",
pf_sub_guides: "More guides & security tips",

  

  pf_read: "Read",

  pf_c1_s4_title: "Seed phrase: the essential security guide",
pf_c1_s4_b1: "Never store it online",
pf_c1_s4_b2: "2 backups in 2 locations",
pf_c1_s4_b3: "No photos / screenshots",

pf_c1_s5_title: "Phishing: 3 checks before you click",
pf_c1_s5_b1: "Domain / spelling (copycats)",
pf_c1_s5_b2: "Approvals: what you’re signing",
pf_c1_s5_b3: "Wallet prompts: “drain” patterns",

 pf_c1_s6_title: "Cold wallet: mistake-free setup (quick steps)",
pf_c1_s6_b1: "Initialize offline + firmware update",
pf_c1_s6_b2: "2 seed backups (2 locations)",
pf_c1_s6_b3: "Do a small test transfer first",


pf_brand_sub: "Quick links & updates from the crypto universe.",


    /* FOOTER */
    footer_rights: "All rights reserved.",


mobile_home: "Home Page",
mobile_theme: "Change Theme",

    /* HEADER */
    header_tagline: "The pulse of the crypto world",
    nav_market: "Market",
    nav_charts: "Trends",
    nav_guides: "Guides",
    nav_glossary: "Glossary",

    /* LOGIN */
    login_title: "Login",
    login_email: "Email",
    login_password: "Password",
    login_btn: "Login",
    login_no_account: "You don't have a CryptoKosmos account.",
    login_create_account: "Create Account",


    /* SIGNUP */
    signup_title: "Create an Account",
    signup_email: "Email",
    signup_pass1: "Password",
    signup_pass2: "Confirm Password",
    signup_error: "Passwords do not match.",
    signup_btn: "Create Account",
    signup_back: "Login",
    signup_have_account: "Already have an account?",


    /* VERIFY */
    verify_title: "Email Verification",
    verify_subtitle: "We sent you a 6-digit code.",
    verify_code: "Code",
    verify_error: "Incorrect code. Try again.",
    verify_btn: "Verify"
  }
};