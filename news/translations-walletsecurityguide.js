window.TRANSLATIONS = {
  el: {
  
pf_title: "Διάβασε επίσης",
pf_sub_guides: "Περισσότεροι οδηγοί & tips ασφάλειας",

  

pm_kicker: "Wallet Security Guide",

    pm_title: "Permit approvals (EIP-2612): το “αόρατο” approval που λίγοι καταλαβαίνουν",

    pm_lead:
      "Δεν βλέπεις approve transaction. Δεν πληρώνεις gas. Και όμως, μόλις έδωσες δικαίωμα σε κάποιον να ξοδεύει τα tokens σου. Το permit (EIP-2612) είναι ένα από τα πιο παρεξηγημένα features του DeFi — και ταυτόχρονα ένα από τα πιο επικίνδυνα όταν δεν το καταλαβαίνεις. Παρακάτω εξηγούμε πώς δουλεύει, πού κρύβεται το ρίσκο και πώς να το διαχειρίζεσαι σωστά.",

    pm_caption:
      "Security snapshot: off-chain signature, δικαιώματα spender και delayed drain.",

    pm_h2_1:
      "1) Τι είναι το permit (EIP-2612) με απλά λόγια",

    pm_p_1:
      "Το permit είναι ένας μηχανισμός που επιτρέπει να δώσεις allowance σε ένα smart contract χωρίς on-chain approve transaction. Αντί να πληρώσεις gas και να γράψεις approval στο blockchain, υπογράφεις ένα μήνυμα off-chain. Αυτό το μήνυμα μπορεί αργότερα να χρησιμοποιηθεί από το contract για να αποκτήσει δικαίωμα μεταφοράς των tokens σου. Για τον χρήστη μοιάζει σαν “απλό sign”, αλλά στην πράξη είναι πλήρες approval.",

    pm_h2_2:
      "2) Γιατί το permit θεωρείται “αόρατο” approval",

    pm_p_2:
      "Το πρόβλημα με το permit δεν είναι το design του, αλλά το ότι δεν φαίνεται. Δεν υπάρχει approve στο ιστορικό, δεν φαίνεται allowance τη στιγμή της υπογραφής και το wallet συνήθως γράφει απλά “Sign message”. Ο χρήστης νομίζει ότι κάνει verify ή login, ενώ στην πραγματικότητα δίνει δικαίωμα μεταφοράς token. Αυτό το κενό εκμεταλλεύονται τα scam frontends.",

    pm_h2_3:
      "3) Πώς χρησιμοποιείται το permit σε legit apps — και πώς σε scams",

    pm_p_3:
      "Σε legit εφαρμογές, το permit μειώνει friction και gas fees. Σε scam sites όμως, το ίδιο pattern χρησιμοποιείται για να πάρει ο attacker δικαιώματα χωρίς να το καταλάβει ο χρήστης. Το signature αποθηκεύεται και το drain μπορεί να γίνει άμεσα ή ώρες/μέρες μετά. On-chain όλα φαίνονται απολύτως νόμιμα.",

    pm_h2_4:
      "4) Γιατί το permit είναι πιο επικίνδυνο από ένα κλασικό approve",

    pm_p_4:
      "Το κλασικό approve είναι ορατό και σε βάζει σε mindset προσοχής. Το permit περνάει κάτω από το radar. Δεν υπάρχει άμεση ένδειξη ότι δόθηκε allowance και ο spender μπορεί να το χρησιμοποιήσει όποτε θέλει όσο ισχύει η υπογραφή. Γι’ αυτό πολλοί χρήστες λένε “δεν έκανα ποτέ approve”, ενώ στην πραγματικότητα έδωσαν permit.",

    pm_h2_5:
      "Πρακτικός κανόνας ασφάλειας για permit signatures",

    pm_p_5:
      "Αν δεν καταλαβαίνεις γιατί υπογράφεις, μην υπογράφεις. Treat κάθε sign σαν πιθανό approval. Μην κάνεις permit signatures από links, ads ή replies. Κράτα main wallet μόνο για holdings και ξεχωριστό hot wallet για DeFi. Το permit δεν είναι κακό εργαλείο — είναι απλά πολύ δυνατό για να το χρησιμοποιείς στα τυφλά.",

  pf_read: "Διάβασε",

    pf_g1_title: "Wallet drain scams: πώς αδειάζει ένα wallet χωρίς seed",
  pf_g1_b1: "Sign vs approve traps",
  pf_g1_b2: "Delayed on-chain drains",
  pf_g1_b3: "Main vs hot wallet rule",

  // Card 2 — Fake Sites
  pf_g2_title: "Fake sites: πώς να τα αναγνωρίζεις σε 10s",
  pf_g2_b1: "Domain & TLD traps",
  pf_g2_b2: "UI / frontend mismatches",
  pf_g2_b3: "Wallet prompts πριν το drain",


  // Card 4 — Security Tips
  pf_g4_title: "Crypto security tips που σώζουν wallets",
  pf_g4_b1: "Wallet separation",
  pf_g4_b2: "Bookmarks μόνο",
  pf_g4_b3: "Routine checks",

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




    pm_kicker: "Wallet Security Guide",

    pm_title: "Permit approvals (EIP-2612): the “invisible” approval most users don’t understand",

    pm_lead:
      "You don’t see an approve transaction. You don’t pay gas. Yet you just gave someone the right to spend your tokens. Permit (EIP-2612) is one of the most misunderstood DeFi features — and one of the most dangerous when you don’t understand it. Below we explain how it works, where the risk hides, and how to manage it safely.",

    pm_caption:
      "Security snapshot: off-chain signatures, spender rights, and delayed drains.",

    pm_h2_1:
      "1) What permit (EIP-2612) actually is",

    pm_p_1:
      "Permit allows you to grant allowance to a smart contract without an on-chain approve transaction. Instead of paying gas, you sign an off-chain message. That signature can later be used by the contract to gain spending rights over your tokens. To the user it looks like a simple sign — but functionally it is a full approval.",

    pm_h2_2:
      "2) Why permit is considered an “invisible” approval",

    pm_p_2:
      "The danger of permit is not its design, but its invisibility. There is no approve in your transaction history and no clear allowance shown at signing time. Wallets often display a generic “Sign message”. Users think they are verifying or logging in, while actually granting token spending rights. This gap is exactly what scam frontends exploit.",

    pm_h2_3:
      "3) How permit is used in legit apps — and abused in scams",

    pm_p_3:
      "In legit apps, permit reduces friction and gas costs. In scam sites, the same pattern is used to silently collect permissions. The signature is stored and the drain can happen immediately or days later. From an on-chain perspective, everything looks perfectly valid.",

    pm_h2_4:
      "4) Why permit can be more dangerous than a classic approve",

    pm_p_4:
      "Classic approves are visible and trigger caution. Permit flies under the radar. There is no immediate signal that allowance was granted, and the spender can use it at any time while the signature is valid. That’s why many victims say “I never approved anything” — yet the wallet drained.",

    pm_h2_5:
      "A practical safety rule for permit signatures",

    pm_p_5:
      "If you don’t understand why you’re signing, don’t sign. Treat every signature as a potential approval. Never sign permits from links, ads, or replies. Keep a main wallet for holdings and a separate hot wallet for DeFi. Permit isn’t evil — it’s just too powerful to use blindly.",


  pf_read: "Read",


    // Card 1 — Wallet Drain
  pf_g1_title: "Wallet drain scams: how wallets get drained without a seed",
  pf_g1_b1: "Sign vs approve traps",
  pf_g1_b2: "Delayed on-chain drains",
  pf_g1_b3: "Main vs hot wallet rule",

  // Card 2 — Fake Sites
  pf_g2_title: "Fake sites: spot them in 10 seconds",
  pf_g2_b1: "Domain & TLD traps",
  pf_g2_b2: "UI / frontend mismatches",
  pf_g2_b3: "Wallet prompts before the drain",


  // Card 4 — Security Tips
  pf_g4_title: "Crypto security tips that save wallets",
  pf_g4_b1: "Wallet separation",
  pf_g4_b2: "Bookmarks only",
  pf_g4_b3: "Routine checks",

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