window.TRANSLATIONS = window.TRANSLATIONS || {};

window.TRANSLATIONS.el = Object.assign(window.TRANSLATIONS.el || {}, {
  /* =======================
     HEADER / SHARED
  ======================= */
  header_tagline: "Διάβασε την αγορά. Μην την ακούς.",
  nav_market: "Αγορά",
  nav_charts: "Τάσεις",
  nav_guides: "Οδηγοί",
  nav_glossary: "Γλωσσάρι",
  nav_articles: "Άρθρα",
  theme_dark: "Dark",
  mobile_theme: "Αλλαγή Θέματος",
  login: "Login",
  logout: "Logout",
  footer_disclaimer: "Εκπαιδευτικό περιεχόμενο μόνο. Δεν αποτελεί επενδυτική συμβουλή.",

  /* =======================
     HERO
  ======================= */
  ws_eyebrow: "ΟΔΗΓΟΣ",
  ws_title: "Πώς στήνω Wallet σωστά",
  ws_lead:
    "Ένα wallet δεν είναι «app για crypto» — είναι ο τρόπος που ελέγχεις τα κλειδιά σου. Αν το στήσεις σωστά από την αρχή, γλιτώνεις τα πιο συχνά λάθη.",

  /* =======================
     TYPES
  ======================= */
  ws_types_title: "Τύποι Wallet — ποιο να διαλέξω;",
  ws_types_text:
    "Τα wallets χωρίζονται σε hot (συνδεδεμένα στο internet) και cold (offline). Για μικρά ποσά και καθημερινές συναλλαγές κάνει ένα software wallet (MetaMask, Trust Wallet). Για αποταμίευση ή μεγαλύτερα ποσά, hardware wallet (Ledger, Trezor) — τα κλειδιά σου δεν φεύγουν ποτέ online.",

  /* =======================
     STEPS
  ======================= */
  ws_steps_title: "Στήσιμο Wallet βήμα-βήμα",
  ws_step1: "Κατέβασε το wallet μόνο από επίσημο site ή store — έλεγξε το domain δύο φορές.",
  ws_step2: "Δημιούργησε νέο wallet (όχι «import») και σημείωσε το seed phrase.",
  ws_step3: "Γράψε τη seed phrase σε χαρτί ή μεταλλική πλάκα — ποτέ σε screenshot ή cloud.",
  ws_step4: "Επιβεβαίωσε τη seed phrase: το wallet θα σε ρωτήσει να την ξαναγράψεις με σωστή σειρά.",
  ws_step5: "Ρύθμισε PIN ή biometric lock για το άνοιγμα του app.",
  ws_step6: "Δοκίμασε πρώτα με μικρό ποσό πριν μεταφέρεις μεγάλα κεφάλαια.",

  /* =======================
     SEED PHRASE
  ======================= */
  ws_seed_title: "Seed phrase: ο πιο σημαντικός κανόνας",
  ws_seed_text:
    "Η seed phrase (12 ή 24 λέξεις) είναι το μοναδικό backup του wallet σου. Αν χαθεί ή κλαπεί, τα funds χάνονται για πάντα ή πηγαίνουν στον κλέφτη. Μην τη φωτογραφίσεις, μην την αποθηκεύσεις σε email ή cloud, μην την πεις σε κανέναν — ούτε σε «support».",

  /* =======================
     BACKUP
  ======================= */
  ws_backup_title: "Backup που πραγματικά δουλεύει",
  ws_backup_text:
    "Γράψε τη seed phrase σε δύο διαφορετικά χαρτιά και φύλαξέ τα σε δύο διαφορετικές τοποθεσίες. Για ακόμα καλύτερη προστασία, χρησιμοποίησε μεταλλική πλάκα (fire & waterproof). Ποτέ μην βασίζεσαι σε ένα μόνο αντίγραφο.",
  ws_tip_title: "Tip:",
  ws_tip:
    "Κάνε «restore test» — διέγραψε το app και ανέκτησε το wallet με τη seed phrase, για να σιγουρευτείς ότι λειτουργεί σωστά.",

  /* =======================
     SECURITY SETTINGS
  ======================= */
  ws_security_title: "Ρυθμίσεις ασφάλειας (must)",
  ws_sec1: "Ενεργοποίησε PIN ή biometric lock.",
  ws_sec2: "Απενεργοποίησε auto-fill passwords για το wallet app.",
  ws_sec3: "Χρησιμοποίησε dedicated συσκευή ή browser profile για crypto.",
  ws_sec4: "Έλεγχε τακτικά τα permissions που έχεις δώσει σε dApps.",
  ws_sec5: "Ενημέρωνε το firmware αν έχεις hardware wallet.",

  /* =======================
     MISTAKES
  ======================= */
  ws_mistakes_title: "Συχνά λάθη",
  ws_mistake1: "Screenshot ή φωτογραφία της seed phrase.",
  ws_mistake2: "Αποθήκευση seed phrase σε Google Drive, iCloud ή email.",
  ws_mistake3: "Download wallet από ανεπίσημο link ή ad.",
  ws_mistake4: "Χρήση του ίδιου wallet για DeFi και αποταμίευση.",
  ws_mistake5: "Δεν ελέγχουν το address πριν στείλουν.",
  ws_mistake6: "Δίνουν unlimited approval σε smart contracts.",
  ws_mistake7: "Μόνο ένα backup της seed phrase.",

  /* =======================
     CHECKLIST
  ======================= */
  ws_check_title: "Mini checklist πριν βάλεις χρήματα",
  ws_check1: "Seed phrase γραμμένη χειρόγραφα και αποθηκευμένη offline;",
  ws_check2: "Wallet downloaded από επίσημο source;",
  ws_check3: "PIN / biometric ενεργοποιημένο;",
  ws_check4: "Restore test έχει γίνει επιτυχώς;",
  ws_check5: "Δοκιμαστική μεταφορά με μικρό ποσό πριν τα μεγάλα;",

  /* =======================
     CONCLUSION
  ======================= */
  ws_conclusion_title: "Συμπέρασμα",
  ws_conclusion:
    "Το wallet είναι το θεμέλιο. Στήσε το σωστά μία φορά και θα έχεις ηρεμία για πάντα — το αντίθετο είναι δύσκολο να διορθωθεί.",

  guides_more: "Δες περισσότερα →",
});

window.TRANSLATIONS.en = Object.assign(window.TRANSLATIONS.en || {}, {
  /* HEADER / SHARED */
  header_tagline: "Read the market. Don't follow the noise.",
  nav_market: "Market",
  nav_charts: "Trends",
  nav_guides: "Guides",
  nav_glossary: "Glossary",
  nav_articles: "Articles",
  theme_dark: "Dark",
  mobile_theme: "Change Theme",
  login: "Login",
  logout: "Logout",
  footer_disclaimer: "Educational content only. Not financial advice.",

  /* HERO */
  ws_eyebrow: "GUIDE",
  ws_title: "How to Set Up a Wallet Properly",
  ws_lead:
    "A wallet isn't just a 'crypto app' — it's how you control your keys. Set it up correctly from the start and you'll avoid the most common mistakes.",

  /* TYPES */
  ws_types_title: "Wallet Types — Which One Should I Choose?",
  ws_types_text:
    "Wallets come in two flavors: hot (internet-connected) and cold (offline). For small amounts and daily use, a software wallet works fine (MetaMask, Trust Wallet). For savings or larger amounts, go hardware (Ledger, Trezor) — your keys never leave the device.",

  /* STEPS */
  ws_steps_title: "Setting Up a Wallet Step by Step",
  ws_step1: "Download only from the official site or store — double-check the domain.",
  ws_step2: "Create a new wallet (not 'import') and write down the seed phrase.",
  ws_step3: "Write the seed phrase on paper or a metal plate — never screenshot or cloud.",
  ws_step4: "Confirm the seed phrase: the wallet will ask you to re-enter it in the correct order.",
  ws_step5: "Set a PIN or biometric lock to open the app.",
  ws_step6: "Test with a small amount first before transferring large funds.",

  /* SEED PHRASE */
  ws_seed_title: "Seed Phrase: The Most Important Rule",
  ws_seed_text:
    "The seed phrase (12 or 24 words) is the only backup for your wallet. If it's lost or stolen, funds are gone forever or go to the thief. Don't photograph it, don't store it in email or cloud, don't share it with anyone — not even 'support'.",

  /* BACKUP */
  ws_backup_title: "Backup That Actually Works",
  ws_backup_text:
    "Write the seed phrase on two separate pieces of paper and store them in two different locations. For even better protection, use a metal plate (fire & waterproof). Never rely on a single copy.",
  ws_tip_title: "Tip:",
  ws_tip:
    "Do a 'restore test' — delete the app and recover the wallet with the seed phrase, to make sure it works correctly.",

  /* SECURITY SETTINGS */
  ws_security_title: "Security Settings (Must-Do)",
  ws_sec1: "Enable PIN or biometric lock.",
  ws_sec2: "Disable auto-fill passwords for the wallet app.",
  ws_sec3: "Use a dedicated device or browser profile for crypto.",
  ws_sec4: "Regularly check the permissions you've granted to dApps.",
  ws_sec5: "Update the firmware if you have a hardware wallet.",

  /* MISTAKES */
  ws_mistakes_title: "Common Mistakes",
  ws_mistake1: "Screenshot or photo of the seed phrase.",
  ws_mistake2: "Storing the seed phrase in Google Drive, iCloud, or email.",
  ws_mistake3: "Downloading a wallet from an unofficial link or ad.",
  ws_mistake4: "Using the same wallet for DeFi and savings.",
  ws_mistake5: "Not checking the address before sending.",
  ws_mistake6: "Giving unlimited approval to smart contracts.",
  ws_mistake7: "Only one backup of the seed phrase.",

  /* CHECKLIST */
  ws_check_title: "Mini Checklist Before Depositing Funds",
  ws_check1: "Seed phrase written by hand and stored offline?",
  ws_check2: "Wallet downloaded from an official source?",
  ws_check3: "PIN / biometric enabled?",
  ws_check4: "Restore test completed successfully?",
  ws_check5: "Test transfer with a small amount before the big ones?",

  /* CONCLUSION */
  ws_conclusion_title: "Conclusion",
  ws_conclusion:
    "The wallet is the foundation. Set it up right once and you'll have peace of mind forever — the alternative is very hard to fix.",

  guides_more: "See more →",
});