window.TRANSLATIONS = {
  el: {
  
/* =======================
   ON-CHAIN DATA (EL)
======================= */
oc_title: "On-chain δεδομένα (βασικά)",
oc_intro:
  "Τα on-chain δεδομένα είναι πληροφορίες που “γράφονται” στο blockchain και δείχνουν τι γίνεται πραγματικά στο δίκτυο: κινήσεις wallets, flows, activity και χρήσιμα σημάδια τάσης.",

oc_what_title: "Τι σημαίνει “on-chain”;",
oc_what_text:
  "“On-chain” σημαίνει ότι τα δεδομένα προέρχονται από το ίδιο το blockchain (συναλλαγές, διευθύνσεις, ποσά, blocks). Δεν είναι γνώμη/φήμη — είναι μετρήσεις από τη δραστηριότητα του δικτύου.",

oc_metrics_title: "Βασικά metrics που αξίζει να ξέρεις",
oc_metric1: "Active addresses: πόσες διευθύνσεις κάνουν συναλλαγές σε μια περίοδο.",
oc_metric2: "Transaction count/volume: πόσες συναλλαγές γίνονται και τι “όγκο” έχουν.",
oc_metric3: "Fees & congestion: πόσο “φορτωμένο” είναι το δίκτυο (και πόσο κοστίζει).",
oc_metric4: "Exchange inflows/outflows: πόσα coins μπαίνουν/βγαίνουν από ανταλλακτήρια.",
oc_metric5: "Whale activity: κινήσεις μεγάλων κατόχων (με προσοχή στην ερμηνεία).",
oc_metric6: "Supply metrics: π.χ. πόσο supply μένει σε exchanges ή κινείται σε long-term holders.",

oc_flows_title: "Flows: εισροές/εκροές σε exchanges",
oc_flows_text:
  "Γενικά, όταν πολλά coins μπαίνουν σε exchanges (inflows), μπορεί να σημαίνει πρόθεση πώλησης. Όταν βγαίνουν (outflows), μπορεί να δείχνει αποθήκευση/μακροπρόθεσμη κατοχή. Όμως δεν είναι “σήμα” μόνο του — χρειάζεται πλαίσιο.",

oc_whales_title: "Whales & μεγάλοι κάτοχοι",
oc_whales_text:
  "Οι whales μπορούν να μετακινούν μεγάλα ποσά και να επηρεάζουν την αγορά. Μια μεταφορά whale δεν σημαίνει πάντα πώληση: μπορεί να είναι αναδιάρθρωση, OTC, αλλαγή wallet, custody κ.ά.",
oc_tip_title: "Tip:",
oc_tip:
  "Μην πανικοβάλλεσαι από ένα tweet/alert. Κοίτα αν η κίνηση πήγε σε exchange, αν ακολούθησε selling volume και τι δείχνει το trend συνολικά.",

oc_limits_title: "Περιορισμοί (τι ΔΕΝ σου λένε τα on-chain)",
oc_limit1: "Δεν βλέπεις πάντα τον “κάτοχο” πίσω από μια διεύθυνση.",
oc_limit2: "Μπορεί να υπάρχουν internal transfers (π.χ. exchange wallets) που μπερδεύουν.",
oc_limit3: "Bridges/L2s κάνουν τη ροή πιο σύνθετη (δεν είναι όλα στο ίδιο chain).",
oc_limit4: "Τα δεδομένα μπορεί να έχουν lag ή διαφορετικές μεθόδους υπολογισμού ανά πλατφόρμα.",
oc_limit5: "On-chain ≠ τιμή. Η αγορά κινείται και από sentiment, macro, news, liquidity.",

oc_mistakes_title: "Συχνά λάθη στην ερμηνεία",
oc_mistake1: "Βλέπω inflow και “σίγουρη πτώση” — χωρίς επιβεβαίωση σε volume/price.",
oc_mistake2: "Μπερδεύω internal exchange transfers με πραγματικές καταθέσεις χρηστών.",
oc_mistake3: "Αγνοώ το timeframe (άλλο 1 ώρα, άλλο 1 μήνας).",
oc_mistake4: "Κοιτάω 1 metric μόνο αντί για συνδυασμό.",
oc_mistake5: "Δεν συγκρίνω με ιστορικά επίπεδα (τι είναι “υψηλό”;).",
oc_mistake6: "Παίρνω whale alerts ως “σήματα trading”.",
oc_mistake7: "Δεν ελέγχω αν η κίνηση έγινε σε exchange ή σε άλλο wallet/custody.",

oc_check_title: "Mini checklist (πριν βγάλεις συμπέρασμα)",
oc_check1: "Ποιο timeframe κοιτάω (ώρα/μέρα/εβδομάδα);",
oc_check2: "Υπάρχει επιβεβαίωση σε volume/price action;",
oc_check3: "Η μεταφορά πήγε σε exchange ή απλά άλλαξε wallet;",
oc_check4: "Τι δείχνουν 2–3 metrics μαζί (όχι ένα μόνο);",
oc_check5: "Υπάρχει news/sentiment που εξηγεί την κίνηση;",

oc_conclusion_title: "Συμπέρασμα",
oc_conclusion:
  "Τα on-chain δεδομένα είναι πολύ χρήσιμα για να καταλάβεις τη δραστηριότητα ενός δικτύου, αλλά θέλουν σωστή ερμηνεία. Χρησιμοποίησέ τα σαν ‘εργαλείο επιβεβαίωσης’ μαζί με price/volume και γενικό πλαίσιο.",

guides_more: "Δες περισσότερα →",

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
   
/* =======================
   ON-CHAIN DATA (EN)
======================= */
oc_title: "On-chain Data (Basics)",
oc_intro:
  "On-chain data comes directly from the blockchain and shows what’s actually happening on the network: wallet movements, flows, activity, and useful trend signals.",

oc_what_title: "What does “on-chain” mean?",
oc_what_text:
  "“On-chain” means the data is sourced from the blockchain itself (transactions, addresses, amounts, blocks). It’s not opinion or rumor — it’s measurable network activity.",

oc_metrics_title: "Key metrics worth knowing",
oc_metric1: "Active addresses: how many addresses transact over a period.",
oc_metric2: "Transaction count/volume: how many transactions happen and their volume.",
oc_metric3: "Fees & congestion: how busy the network is (and how costly it is).",
oc_metric4: "Exchange inflows/outflows: coins moving into/out of exchanges.",
oc_metric5: "Whale activity: large-holder movements (interpret carefully).",
oc_metric6: "Supply metrics: e.g., supply on exchanges vs long-term holders.",

oc_flows_title: "Flows: exchange inflows/outflows",
oc_flows_text:
  "In general, large inflows to exchanges can suggest selling intent, while outflows can suggest storage/long-term holding. But it’s not a standalone signal — context matters.",

oc_whales_title: "Whales & large holders",
oc_whales_text:
  "Whales can move big amounts and influence markets. A whale transfer doesn’t always mean selling: it can be rebalancing, OTC, wallet migration, custody moves, etc.",
oc_tip_title: "Tip:",
oc_tip:
  "Don’t panic from a single alert. Check whether it went to an exchange, whether selling volume followed, and what the broader trend looks like.",

oc_limits_title: "Limitations (what on-chain DOESN’T tell you)",
oc_limit1: "You often can’t identify the real owner behind an address.",
oc_limit2: "Internal transfers (e.g., exchange wallets) can distort signals.",
oc_limit3: "Bridges/L2s make flows more complex across chains.",
oc_limit4: "Different platforms may calculate metrics differently or with delays.",
oc_limit5: "On-chain ≠ price. Markets also move on sentiment, macro, news, liquidity.",

oc_mistakes_title: "Common interpretation mistakes",
oc_mistake1: "Seeing inflows and calling a guaranteed dump without confirmation.",
oc_mistake2: "Confusing internal exchange shuffles with real user deposits.",
oc_mistake3: "Ignoring timeframe (1 hour vs 1 month tells a different story).",
oc_mistake4: "Relying on one metric instead of a set of signals.",
oc_mistake5: "Not comparing to historical baselines (what counts as “high”?).",
oc_mistake6: "Treating whale alerts as trading signals.",
oc_mistake7: "Not checking whether a move went to an exchange or just another wallet.",

oc_check_title: "Mini checklist (before drawing conclusions)",
oc_check1: "What timeframe am I looking at (hour/day/week)?",
oc_check2: "Is there confirmation in volume/price action?",
oc_check3: "Did the transfer go to an exchange or just change wallets?",
oc_check4: "Do 2–3 metrics agree (not just one)?",
oc_check5: "Is there news/sentiment that explains the move?",

oc_conclusion_title: "Conclusion",
oc_conclusion:
  "On-chain data is powerful for understanding network activity, but it must be interpreted carefully. Use it as a confirmation tool alongside price/volume and broader context.",

guides_more: "See more →",


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