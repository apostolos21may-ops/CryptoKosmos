window.TRANSLATIONS = {
  el: {
  
pf_title: "Διάβασε επίσης",
pf_sub_guides: "Περισσότεροι οδηγοί & tips ασφάλειας",

  
wd_kicker: "Wallet Security Guide",

    wd_title:
      "Wallet Drain Scams: πώς αδειάζει ένα wallet χωρίς seed phrase (και πώς να το προλάβεις)",

    wd_lead:
      "Τα περισσότερα crypto scams σήμερα δεν σου κλέβουν το seed phrase. Σου ζητάνε κάτι πολύ πιο “αθώο”: ένα sign ή ένα approval. Από εκεί και πέρα, το wallet μπορεί να αδειάσει νόμιμα, on-chain, χωρίς καμία ειδοποίηση. Παρακάτω θα δεις πώς λειτουργούν τα wallet drain scams, γιατί είναι τόσο αποτελεσματικά και ποιο πρακτικό πλαίσιο μπορεί να σε προστατέψει.",

    wd_caption:
      "Security snapshot: sign vs approve, spoofed sites και wallet separation.",

    wd_h2_1:
      "1) Τι είναι wallet drain scam (και γιατί δεν χρειάζεται seed phrase)",

    wd_p_1:
      "Wallet drain scam είναι κάθε επίθεση όπου ο χρήστης υπογράφει ή εγκρίνει κάτι, δίνοντας σε τρίτο μέρος τη δυνατότητα να μεταφέρει assets αργότερα. Δεν υπάρχει “hack” με την κλασική έννοια — όλα γίνονται με valid συναλλαγές στο blockchain. Το πρόβλημα είναι ότι ο χρήστης συχνά δεν καταλαβαίνει τι ακριβώς υπέγραψε. Έτσι, ο attacker δεν χρειάζεται seed phrase ή password· απλά χρησιμοποιεί τα δικαιώματα που του έδωσες εσύ.",

    wd_h2_2:
      "2) Sign ≠ Approve ≠ Transfer: η παγίδα των “αθώων” υπογραφών",

    wd_p_2:
      "Πολλοί πιστεύουν ότι μόνο το approve είναι επικίνδυνο. Στην πράξη, και ένα απλό sign μπορεί να δημιουργήσει σοβαρό ρίσκο. Υπάρχουν signatures που δίνουν δικαίωμα σε contracts να εκτελούν μεταφορές μέσω permit ή meta-transactions. Το wallet συχνά δείχνει ένα γενικό μήνυμα (“Sign message”), χωρίς να εξηγεί τις συνέπειες. Αυτό εκμεταλλεύονται τα scam frontends.",

    wd_h2_3:
      "3) Πώς στήνεται το scam: από το link μέχρι το drain",

    wd_p_3:
      "Το πιο συνηθισμένο σενάριο ξεκινά με ένα link: Twitter reply, DM, Google ad ή fake airdrop. Το site μοιάζει απόλυτα legit. Ο χρήστης συνδέει wallet και του ζητείται ένα sign “για verify”. Στην πραγματικότητα, το sign δημιουργεί δικαίωμα που αποθηκεύεται on-chain. Το drain μπορεί να γίνει ώρες ή μέρες μετά, όταν ο attacker δει ότι υπάρχει αρκετό κεφάλαιο στο wallet.",

    wd_h2_4:
      "4) Γιατί τα main wallets είναι ο κύριος στόχος",

    wd_p_4:
      "Τα scams στοχεύουν κυρίως main wallets γιατί εκεί υπάρχει συγκεντρωμένο κεφάλαιο. Όταν χρησιμοποιείς το ίδιο wallet για holdings, DeFi, airdrops και πειράματα, αυξάνεις δραματικά την επιφάνεια επίθεσης. Ένα μόνο λάθος sign μπορεί να εκθέσει όλα σου τα assets. Γι’ αυτό η απομόνωση ρίσκου (wallet separation) είναι κρίσιμη.",

    wd_h2_5:
      "Πρακτικό πλαίσιο προστασίας (χωρίς υπερβολές)",

    wd_p_5:
      "Ο βασικός κανόνας είναι απλός: μην υπογράφεις ό,τι δεν καταλαβαίνεις. Κράτα main wallet μόνο για holdings και ξεχωριστό hot wallet για DeFi και πειράματα. Μπες σε sites μόνο από bookmarks. Έλεγχε approvals και connected dApps τακτικά. Αν κάτι σου φανεί περίεργο, σταμάτα. Η ασφάλεια στο crypto δεν είναι τελειότητα — είναι σωστή ρουτίνα.",



  pf_read: "Διάβασε",


  // Card 3 — Permit Approvals
  pf_g3_title: "Permit approvals: το “αόρατο” approval",
  pf_g3_b1: "EIP-2612 explained",
  pf_g3_b2: "Sign χωρίς approve",
  pf_g3_b3: "Πότε γίνεται drain",


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

  wd_kicker: "Wallet Security Guide",

    wd_title:
      "Wallet Drain Scams: how wallets get drained without seed phrases (and how to prevent it)",

    wd_lead:
      "Most crypto scams today don’t steal your seed phrase. They ask for something much more “innocent”: a sign or an approval. From there, a wallet can be drained legitimately, on-chain, without any alert. Below you’ll see how wallet drain scams work, why they are so effective, and what practical framework can protect you.",

    wd_caption:
      "Security snapshot: sign vs approve, spoofed sites, and wallet separation.",

    wd_h2_1:
      "1) What a wallet drain scam is (and why no seed phrase is needed)",

    wd_p_1:
      "A wallet drain scam is any attack where the user signs or approves something that grants a third party the ability to move assets later. There is no classic “hack” — everything happens through valid on-chain transactions. The issue is that users often don’t understand what they signed. Attackers don’t need a seed phrase or password; they simply use the permissions you gave them.",

    wd_h2_2:
      "2) Sign ≠ Approve ≠ Transfer: the trap of “harmless” signatures",

    wd_p_2:
      "Many people think only approvals are dangerous. In reality, even a simple sign can introduce serious risk. Some signatures allow contracts to move funds via permits or meta-transactions. Wallets often display generic prompts (“Sign message”) without explaining consequences. Scam frontends rely heavily on this lack of clarity.",

    wd_h2_3:
      "3) How the scam is set up: from link to drain",

    wd_p_3:
      "The most common flow starts with a link: a Twitter reply, DM, Google ad, or fake airdrop. The site looks completely legit. The user connects a wallet and is asked to sign “for verification.” In reality, the signature grants rights stored on-chain. The drain may happen hours or days later, once the attacker sees enough value in the wallet.",

    wd_h2_4:
      "4) Why main wallets are the primary target",

    wd_p_4:
      "Scams focus on main wallets because that’s where capital is concentrated. Using one wallet for holdings, DeFi, airdrops, and experiments dramatically increases attack surface. A single bad signature can expose everything. That’s why wallet separation is one of the most effective security practices.",

    wd_h2_5:
      "A practical protection framework (without overkill)",

    wd_p_5:
      "The core rule is simple: never sign what you don’t understand. Keep a main wallet for holdings and a separate hot wallet for DeFi and experiments. Access sites via bookmarks, not links. Regularly review approvals and connected dApps. If something feels off, stop. Crypto security isn’t about perfection — it’s about disciplined habits.",

  pf_read: "Read",



  // Card 3 — Permit Approvals
  pf_g3_title: "Permit approvals: the “invisible” approval",
  pf_g3_b1: "EIP-2612 explained",
  pf_g3_b2: "Sign without approve",
  pf_g3_b3: "When drains happen",


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