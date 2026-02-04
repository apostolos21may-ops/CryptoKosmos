window.TRANSLATIONS = {
  el: {
  
  sf_kicker: "Solana Fees Guide",
  sf_title: "Solana Fees: τι πληρώνεις πραγματικά (και τα 5 πιο συχνά mistakes)",
  sf_lead:
    "Στη Solana οι χρεώσεις φαίνονται “φθηνές”, αλλά υπάρχουν σημεία που μπορούν να σε μπερδέψουν: priority fees, slippage, DEX swaps, ATA accounts και λάθος ρυθμίσεις που κάνουν την συναλλαγή να αποτυγχάνει ή να σου τρώει value. Παρακάτω έχεις ένα πρακτικό checklist για να ξέρεις τι πληρώνεις, πότε χρειάζεται priority και πώς να αποφεύγεις τα κλασικά λάθη.",
  sf_caption:
    "Quick snapshot: fees σε transfers & swaps, priority tips, slippage ρυθμίσεις και “hidden” costs.",

  sf_h2_1: "1) Τι είναι το “fee” στη Solana και γιατί συνήθως είναι μικρό",
  sf_p_1:
    "Κάθε transaction στη Solana έχει network fee (για να μπει στο chain) και συνήθως είναι πολύ χαμηλό σε σχέση με άλλα δίκτυα. Αυτό όμως δεν σημαίνει ότι “δεν πληρώνεις τίποτα”. Όταν κάνεις swaps, interacts με dApps ή στέλνεις tokens που θέλουν να δημιουργηθεί λογαριασμός, μπορεί να εμφανιστούν επιπλέον χρεώσεις ή προσωρινά “extra” ποσά που σε μπερδεύουν. Ο σωστός τρόπος σκέψης είναι: fee για το network + πιθανά extra για προτεραιότητα + πιθανό κόστος από slippage/price impact.",

  sf_h2_2: "2) Transfers vs Swaps: άλλο fee, άλλο “κόστος”",
  sf_p_2:
    "Ένα απλό SOL transfer συνήθως κοστίζει ελάχιστα. Στα swaps όμως μπαίνει και το “κόστος εκτέλεσης”: μπορεί να υπάρχει DEX fee, price impact (αν η ρευστότητα είναι μικρή) και slippage (η ανοχή σου στην αλλαγή τιμής). Έτσι, ενώ το network fee είναι χαμηλό, μπορεί να χάσεις value αν κάνεις swap σε low-liquidity token ή αν έχεις slippage πολύ ψηλά. Για αυτό, πριν πατήσεις swap, δες πάντα price impact και την τελική ποσότητα που θα πάρεις, όχι μόνο το “fee”.",

  sf_h2_3: "3) Priority fees: πότε χρειάζονται και πότε είναι απλά “σπατάλη”",
  sf_p_3:
    "Σε ώρες “φόρτου” ή όταν πολλοί κάνουν ταυτόχρονα swaps/mints, οι συναλλαγές μπορεί να καθυστερούν ή να αποτυγχάνουν. Εκεί μπαίνουν τα priority fees: πληρώνεις λίγο παραπάνω για να αυξήσεις τις πιθανότητες να περάσει γρήγορα η συναλλαγή. Δεν χρειάζονται πάντα. Αν κάνεις απλό transfer ή swap χωρίς βιασύνη, μπορείς να μείνεις σε χαμηλή/auto ρύθμιση. Αν όμως βλέπεις failed txs, congestion ή κυνηγάς timing (π.χ. γρήγορο swap), τότε ένα μικρό priority fee μπορεί να σε σώσει από retries.",

  sf_h2_4: "4) Slippage: το “κρυφό” λάθος που τρώει value",
  sf_p_4:
    "Slippage είναι η ανοχή σου να εκτελεστεί το swap σε χειρότερη τιμή από αυτή που βλέπεις. Αν το βάλεις πολύ χαμηλά, το swap μπορεί να αποτυγχάνει σε volatile tokens. Αν το βάλεις πολύ ψηλά, ανοίγεις πόρτα να εκτελεστεί σε πολύ χειρότερη τιμή και να χάσεις value (ειδικά σε thin liquidity ή όταν υπάρχουν bots). Πρακτικά: για μεγάλα tokens με ρευστότητα, κράτα χαμηλό slippage. Για μικρά/volatile, ανέβασέ το όσο χρειάζεται αλλά όχι “στο Θεό”. Και πάντα έλεγχε price impact πριν υπογράψεις.",

  sf_h2_5: "Τα 5 πιο συχνά mistakes (και πώς να τα αποφύγεις)",
  sf_p_5:
    "(1) Νομίζεις ότι “fee = μόνο network”, και αγνοείς slippage/price impact. (2) Βάζεις πολύ ψηλό slippage και χάνεις value σε swaps. (3) Πληρώνεις priority fee χωρίς λόγο ή το αφήνεις μόνιμα ψηλά. (4) Κάνεις swap σε low-liquidity token χωρίς να κοιτάξεις price impact. (5) Κάνεις συνεχόμενα retries όταν έχει congestion αντί να ρυθμίσεις σωστά priority/route. Κανόνας: για transfers κράτα το απλό, για swaps κοίτα πάντα output + price impact + slippage, και χρησιμοποίησε priority μόνο όταν χρειάζεται.",

   pf_title: "Διάβασε επίσης",
   
    pf_sub_altcoins: "Περισσότερα Altcoins άρθρα & checklists",
  pf_news_card3_aria: "Featured άρθρο Altcoins: Solana fees & tips",

  pf_tag_altcoins: "Altcoins",
  pf_read: "Διάβασε",

  pf_c3_s4_title: "Altcoin picks: quick checklist πριν μπεις σε θέση",
pf_c3_s4_b1: "Narrative + catalysts της εβδομάδας",
pf_c3_s4_b2: "Liquidity/volume: αν “κρατάει” στα dips",
pf_c3_s4_b3: "Risk plan: size, invalidation, έξοδος",

  // Card 2 — Alt Rotation
  pf_c3_s2_title: "Alt rotation: 3 σημάδια ότι “γυρίζει” η αγορά",
  pf_c3_s2_b1: "BTC dominance: πτώση = χώρο για alts",
  pf_c3_s2_b2: "Volume σε majors→alts (on-chain/cex)",
  pf_c3_s2_b3: "Narratives: ποιο trend τραβάει",

  // Card 3 — On-chain Checklist
  pf_c3_s3_title: "On-chain checklist: τι κοιτάμε πριν αγοράσουμε alt",
  pf_c3_s3_b1: "Holders / concentration (whales)",
  pf_c3_s3_b2: "Liquidity & locked LP",
  pf_c3_s3_b3: "Token unlocks & emissions",

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

  sf_kicker: "Solana Fees Guide",
  sf_title: "Solana Fees: what you really pay (and the 5 most common mistakes)",
  sf_lead:
    "On Solana, fees look “cheap”, but a few things can still confuse you: priority fees, slippage, DEX swaps, ATA accounts, and settings that make transactions fail or leak value. Here’s a practical checklist to understand what you pay, when priority helps, and how to avoid the classic mistakes.",
  sf_caption:
    "Quick snapshot: transfer & swap fees, priority tips, slippage settings, and hidden costs.",

  sf_h2_1: "1) What a “fee” is on Solana (and why it’s usually small)",
  sf_p_1:
    "Every Solana transaction has a network fee to be included on-chain, and it’s usually very low. But “low” doesn’t mean “zero”. When you swap, interact with dApps, or send tokens that require an account to be created, you may see extra charges or temporary “extras”. Think of it as: network fee + optional priority fee + potential cost from slippage/price impact.",

  sf_h2_2: "2) Transfers vs swaps: different fee, different “cost”",
  sf_p_2:
    "A simple SOL transfer is usually tiny. Swaps add execution costs: DEX fees, price impact (if liquidity is thin), and slippage (your tolerance for price movement). So even if the network fee is low, you can lose value if you swap into low-liquidity tokens or set slippage too high. Always look at price impact and final output—not just the “fee”.",

  sf_h2_3: "3) Priority fees: when they help (and when they’re wasted)",
  sf_p_3:
    "During congestion or high activity, transactions can slow down or fail. Priority fees let you pay a bit more to increase the chance of fast inclusion. You don’t always need them. For normal transfers or non-urgent swaps, auto/low settings are fine. If you see failed txs, heavy congestion, or you’re timing-sensitive, a small priority bump can save retries.",

  sf_h2_4: "4) Slippage: the “hidden” mistake that leaks value",
  sf_p_4:
    "Slippage is the worst price you’re willing to accept compared to what you see. Too low and swaps fail in volatility. Too high and you can execute at a much worse price—especially in thin liquidity or bot-heavy pairs. Practically: keep slippage low for liquid majors, raise it only as needed for volatile tokens, and always check price impact before you sign.",

  sf_h2_5: "The 5 most common mistakes (and how to avoid them)",
  sf_p_5:
    "(1) You assume “fee = network only” and ignore slippage/price impact. (2) You set slippage too high and leak value. (3) You pay priority fees unnecessarily or leave them permanently high. (4) You swap into low-liquidity tokens without checking impact. (5) You spam retries during congestion instead of adjusting priority/route. Rule of thumb: keep transfers simple; for swaps, always check output + impact + slippage, and use priority only when it truly helps.",

  pf_sub_altcoins: "More Altcoins articles & checklists",
  pf_news_card3_aria: "Featured Altcoins article: Solana fees & tips",

  pf_tag_altcoins: "Altcoins",
  pf_read: "Read",

  pf_c3_s4_title: "Altcoin picks: a quick checklist before you enter",
pf_c3_s4_b1: "Narrative + weekly catalysts",
pf_c3_s4_b2: "Liquidity/volume: does it hold dips?",
pf_c3_s4_b3: "Risk plan: size, invalidation, exit",

  // Card 2 — Alt Rotation
  pf_c3_s2_title: "Alt rotation: 3 signs the market is rotating",
  pf_c3_s2_b1: "BTC dominance: down = room for alts",
  pf_c3_s2_b2: "Volume majors→alts (on-chain/cex)",
  pf_c3_s2_b3: "Narratives: what trend is leading",

  // Card 3 — On-chain Checklist
  pf_c3_s3_title: "On-chain checklist: what to check before buying an alt",
  pf_c3_s3_b1: "Holders / concentration (whales)",
  pf_c3_s3_b2: "Liquidity & locked LP",
  pf_c3_s3_b3: "Token unlocks & emissions",
  

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