window.TRANSLATIONS = {
  el: {
  /* =======================
     GAS FEES & FEES
======================= */
fees_title: "Gas Fees & Fees: Τι πληρώνεις στα crypto;",
fees_intro:
  "Στα crypto δεν είναι όλα τα “fees” ίδια. Κάποια είναι χρεώσεις δικτύου (gas) για να εκτελεστεί μια on-chain ενέργεια, ενώ άλλα είναι χρεώσεις υπηρεσίας (π.χ. trading fees σε ανταλλακτήρια).",

fees_gas_title: "Τι είναι Gas Fee;",
fees_gas_text:
  "Gas fee είναι το κόστος που πληρώνεις στο δίκτυο για μια on-chain ενέργεια (μεταφορά, swap, mint, approve). Πηγαίνει σε validators/miners και εξαρτάται από τη συμφόρηση του δικτύου και από το πόσο “βαριά” υπολογιστικά είναι η συναλλαγή.",

fees_other_title: "Τι είναι τα “άλλα fees”;",
fees_other_text:
  "Πέρα από το gas, υπάρχουν χρεώσεις πλατφόρμας: trading fees (αγορά/πώληση), spread (διαφορά τιμής), withdrawal fees (ανάληψη από CEX), DEX fees (μικρό fee στο swap) και slippage (απόκλιση τιμής λόγω ρευστότητας).",

fees_why_title: "Γιατί αλλάζουν τα fees;",
fees_why_intro:
  "Τα fees δεν είναι σταθερά—εξαρτώνται από το δίκτυο, τη ζήτηση και τον τύπο συναλλαγής:",
fees_why_li1: "Ζήτηση δικτύου: όταν πολλοί κάνουν συναλλαγές, το gas ανεβαίνει.",
fees_why_li2: "Πολυπλοκότητα: swap/contract calls κοστίζουν περισσότερο από μια απλή μεταφορά.",
fees_why_li3: "Ρευστότητα: χαμηλή ρευστότητα σε DEX μπορεί να αυξήσει το slippage.",
fees_why_li4: "Πολιτική πλατφόρμας: κάθε CEX/DEX έχει διαφορετική δομή χρεώσεων.",
fees_why_outro:
  "Άρα μια μεταφορά, ένα swap και ένα mint NFT μπορεί να έχουν τελείως διαφορετικό κόστος.",

fees_steps_title: "Τι πληρώνεις σε μια συναλλαγή (ροή)",
fees_step1: "Διαλέγεις ενέργεια: transfer / swap / approve / mint / withdraw.",
fees_step2: "Ελέγχεις gas (on-chain) ή trading fees (σε CEX).",
fees_step3: "Σε DEX: ελέγχεις slippage και routing (router/aggregator).",
fees_step4: "Επιβεβαιώνεις στο wallet και βλέπεις την τελική εκτίμηση κόστους.",
fees_step5: "Η συναλλαγή εκτελείται και χρεώνεται gas/fees.",
fees_step6: "Βλέπεις το αποτέλεσμα και το συνολικό ποσό που πλήρωσες.",

fees_terms_title: "Βασικοί όροι",
fees_terms_text:
  "Gas = “καύσιμο” για υπολογισμό στο blockchain. Slippage = απόκλιση τιμής στο swap. Spread = διαφορά τιμής αγοράς/πώλησης. Withdrawal fee = κόστος ανάληψης από CEX. Maker/Taker = διαφορετικές χρεώσεις σε order book.",

fees_reduce_title: "Πώς μπορώ να μειώσω τα fees;",
fees_reduce_text:
  "Μπορείς να μειώσεις τα κόστη αν κάνεις συναλλαγές όταν το δίκτυο έχει χαμηλή κίνηση, αν χρησιμοποιείς L2 ή φθηνότερο network όταν γίνεται, αν αποφεύγεις πολλά μικρά transfers και αν προσέχεις τα approvals που δεν χρειάζονται.",
fees_reduce_tip_title: "Tip:",
fees_reduce_tip:
  "Σε DEX, σωστό timing + σωστό network + λογικό slippage = πολύ χαμηλότερο συνολικό κόστος.",

fees_mistakes_title: "Συχνά λάθη",
fees_mistake1: "Κάνεις swap σε ώρες αιχμής και πληρώνεις υπερβολικό gas.",
fees_mistake2: "Αγνοείς το slippage και παίρνεις χειρότερη τιμή εκτέλεσης.",
fees_mistake3: "Κάνεις πολλά μικρά transfers αντί για λίγες μεγαλύτερες κινήσεις.",
fees_mistake4: "Κάνεις approve σε λάθος contract ή unlimited approval χωρίς λόγο.",
fees_mistake5: "Μπερδεύεις spread με fee (πολύ συχνό σε απλές πλατφόρμες/brokers).",
fees_mistake6: "Κάνεις withdraw από CEX χωρίς να ελέγξεις network/fee.",
fees_mistake7: "Δεν υπολογίζεις το συνολικό κόστος (fee + gas + slippage).",

fees_pros_title: "Τι μπορεί να “αξίζει να πληρώνεις”",
fees_pro1: "Λογικό trading fee σε αξιόπιστη πλατφόρμα (για ρευστότητα/ευκολία).",
fees_pro2: "Gas fees όταν χρειάζεσαι on-chain οριστικότητα/ασφάλεια.",
fees_pro3: "Μικρό slippage σε ζεύγη με καλή ρευστότητα (όχι υπερβολές).",
fees_pro4: "Withdrawal fees όταν διαλέγεις σωστό network για χαμηλότερο κόστος.",
fees_pro5: "Μικρό DEX fee (συνήθως χαμηλό ποσοστό).",

fees_cons_title: "Τι να προσέχεις",
fees_con1: "Υπερβολικό gas (ειδικά σε περιόδους συμφόρησης).",
fees_con2: "Μη ξεκάθαρα fees/spread σε πλατφόρμες με “κρυφές” χρεώσεις.",
fees_con3: "Μη αξιόπιστα contracts και επικίνδυνα approvals.",
fees_con4: "Χαμηλή ρευστότητα που προκαλεί μεγάλο slippage.",

fees_examples_title: "Παραδείγματα κόστους",
fees_ex1: "Απλή μεταφορά: συνήθως πιο φθηνό gas από ένα swap.",
fees_ex2: "Swap σε DEX: gas + DEX fee + πιθανό slippage.",
fees_ex3: "Trade σε CEX: trading fee (maker/taker) + spread.",
fees_ex4: "Ανάληψη από CEX: withdrawal fee + επιλογή network.",

fees_conclusion_title: "Συμπέρασμα",
fees_conclusion:
  "Το “fee” δεν είναι ένα πράγμα. Τα gas fees πληρώνονται για on-chain εκτέλεση, ενώ τα trading/withdrawal fees είναι χρεώσεις πλατφορμών. Αν διαχειρίζεσαι σωστά timing, network, slippage και approvals, μπορείς να μειώσεις πολύ το συνολικό κόστος.",

guides_more: "Δες περισσότερα →",


fees_img: "./image12.png",




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
     GAS FEES & FEES
======================= */
fees_title: "Gas Fees & Fees: What are you paying for?",
fees_intro:
  "In crypto, not all “fees” are the same. Some are network fees (gas) needed to execute an on-chain action, while others are service fees (e.g., trading fees on exchanges).",

fees_gas_title: "What is a Gas Fee?",
fees_gas_text:
  "A gas fee is the cost you pay to the network for an on-chain action (transfer, swap, mint, approve). It goes to validators/miners and depends on network congestion and how much computation the transaction requires.",

fees_other_title: "What are the “other fees”?",
fees_other_text:
  "Beyond gas, you may pay platform fees: trading fees (buy/sell), spread (price difference), withdrawal fees (from a CEX), DEX fees (small swap fee), and slippage (price impact due to liquidity).",

fees_why_title: "Why do fees change?",
fees_why_intro:
  "Fees are not fixed—they depend on the network, demand, and transaction type:",
fees_why_li1: "Network demand: when many users transact, gas goes up.",
fees_why_li2: "Complexity: swaps/contract calls cost more than simple transfers.",
fees_why_li3: "Liquidity: low liquidity on DEXs can increase slippage.",
fees_why_li4: "Platform policy: each CEX/DEX has its own fee structure.",
fees_why_outro:
  "So a transfer, a swap, and an NFT mint can have very different costs.",

fees_steps_title: "What you pay in a transaction (flow)",
fees_step1: "Decide the action: transfer / swap / approve / mint / withdraw.",
fees_step2: "Check gas (on-chain) or trading fees (on a CEX).",
fees_step3: "On DEXs: check slippage and routing (router/aggregator).",
fees_step4: "Confirm in your wallet and review the final cost estimate.",
fees_step5: "The transaction executes and gas/fees are charged.",
fees_step6: "Review the result and the total amount paid overall.",

fees_terms_title: "Key terms",
fees_terms_text:
  "Gas = fuel for computation on-chain. Slippage = price deviation on swaps. Spread = buy/sell price difference. Withdrawal fee = cost to withdraw from a CEX. Maker/Taker = different order-book fee tiers.",

fees_reduce_title: "How can I reduce fees?",
fees_reduce_text:
  "You can reduce costs by transacting during low congestion, using L2s or cheaper networks when possible, avoiding many small transactions, and being careful with unnecessary approvals.",
fees_reduce_tip_title: "Tip:",
fees_reduce_tip:
  "On DEXs, good timing + the right network + sensible slippage = much lower total cost.",

fees_mistakes_title: "Common mistakes",
fees_mistake1: "Swapping during peak hours and overpaying gas.",
fees_mistake2: "Ignoring slippage and getting a worse execution price.",
fees_mistake3: "Doing many small transfers instead of fewer larger ones.",
fees_mistake4: "Approving the wrong contract or using unlimited approvals unnecessarily.",
fees_mistake5: "Confusing spread with fees (common on simple brokers).",
fees_mistake6: "Withdrawing from a CEX without checking the network/fee.",
fees_mistake7: "Not calculating the total cost (fee + gas + slippage).",

fees_pros_title: "What can be “worth paying”",
fees_pro1: "Reasonable trading fees on a trusted platform (for liquidity/convenience).",
fees_pro2: "Gas fees when you need on-chain finality/security.",
fees_pro3: "Small slippage on liquid pairs (not excessive).",
fees_pro4: "Withdrawal fees when using the right network for lower cost.",
fees_pro5: "A small DEX fee (usually fixed/low percentage).",

fees_cons_title: "What to watch out for",
fees_con1: "Excessive gas (especially during congestion/spam).",
fees_con2: "Unclear fees/spread on platforms with hidden charges.",
fees_con3: "Untrusted contracts and risky approvals.",
fees_con4: "Low liquidity leading to large slippage.",

fees_examples_title: "Cost examples",
fees_ex1: "Simple transfer: usually cheaper gas than a swap.",
fees_ex2: "DEX swap: gas + DEX fee + possible slippage.",
fees_ex3: "CEX trade: trading fee (maker/taker) + spread.",
fees_ex4: "CEX withdrawal: withdrawal fee + network choice.",

fees_conclusion_title: "Conclusion",
fees_conclusion:
  "A “fee” isn’t just one thing. Gas fees pay for on-chain execution, while trading/withdrawal fees belong to platforms. If you manage timing, network choice, slippage, and approvals, you can significantly reduce total costs.",

guides_more: "See more →",



fees_img: "./image4.png",

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