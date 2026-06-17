window.TRANSLATIONS = {
  el: {
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
    fees_eyebrow: "ΟΔΗΓΟΣ",
    fees_title: "Gas Fees & Fees: Τι πληρώνεις στα crypto;",
    fees_intro:
      "Στα crypto υπάρχουν διαφορετικά είδη «fees» — άλλα είναι χρεώσεις δικτύου (gas) και άλλα είναι χρεώσεις υπηρεσίας (trading fees). Σε αυτόν τον οδηγό θα δούμε τι πληρώνεις, πότε, και πώς μπορείς να μειώσεις το κόστος.",

    /* =======================
       GAS FEE
    ======================= */
    fees_gas_title: "Τι είναι το Gas Fee;",
    fees_gas_text:
      "Το gas fee είναι η χρέωση που πληρώνεις στο δίκτυο (π.χ. Ethereum) για να επεξεργαστεί και να καταγράψει τη συναλλαγή σου στο blockchain. Δεν πάει σε καμία εταιρεία — πάει στους validators/miners που επεξεργάζονται τα blocks.",

    /* =======================
       OTHER FEES
    ======================= */
    fees_other_title: "Τι είναι τα «άλλα fees»;",
    fees_other_text:
      "Πέρα από το gas, μπορεί να πληρώσεις και χρεώσεις υπηρεσίας: προμήθεια ανταλλακτηρίου (exchange fee), προμήθεια πρωτοκόλλου (π.χ. DEX swap fee) ή προμήθεια ανάληψης (withdrawal fee). Αυτά πάνε στην πλατφόρμα ή στο πρωτόκολλο, όχι στο δίκτυο.",

    /* =======================
       WHY FEES CHANGE
    ======================= */
    fees_why_title: "Γιατί αλλάζουν τα fees;",
    fees_why_intro: "Τα fees δεν είναι σταθερά — ανεβοκατεβαίνουν ανάλογα με:",
    fees_why_li1: "Τη ζήτηση του δικτύου τη συγκεκριμένη στιγμή",
    fees_why_li2: "Την πολυπλοκότητα της συναλλαγής (απλή μεταφορά vs smart contract)",
    fees_why_li3: "Το blockchain που χρησιμοποιείς (π.χ. Ethereum vs Solana vs Polygon)",
    fees_why_li4: "Τις συνθήκες της αγοράς (έντονη δραστηριότητα = μεγαλύτερη συμφόρηση)",
    fees_why_outro: "Σε ώρες αιχμής, τα fees μπορεί να πολλαπλασιαστούν μέσα σε λίγα λεπτά.",

    /* =======================
       TRANSACTION FLOW
    ======================= */
    fees_steps_title: "Τι πληρώνεις σε μια συναλλαγή (ροή)",
    fees_step1: "Στέλνεις μια συναλλαγή (π.χ. swap ή μεταφορά)",
    fees_step2: "Το wallet σου εκτιμά το απαιτούμενο gas",
    fees_step3: "Επιλέγεις ταχύτητα (αργή / κανονική / γρήγορη)",
    fees_step4: "Η συναλλαγή μπαίνει σε αναμονή (mempool)",
    fees_step5: "Κάποιος validator/miner την επεξεργάζεται και τη βάζει σε ένα block",
    fees_step6: "Πληρώνεις το gas fee + τυχόν επιπλέον χρεώσεις της πλατφόρμας",

    /* =======================
       KEY TERMS
    ======================= */
    fees_terms_title: "Βασικοί όροι",
    fees_terms_text:
      "Gas limit: το μέγιστο gas που επιτρέπεις να ξοδευτεί. Gas price: πόσο πληρώνεις ανά μονάδα gas. Base fee & priority fee (Ethereum): το βασικό κόστος του δικτύου plus το «φιλοδώρημα» για ταχύτερη επεξεργασία. Slippage: η διαφορά τιμής που μπορεί να προκύψει σε ένα swap λόγω καθυστέρησης.",

    /* =======================
       HOW TO REDUCE FEES
    ======================= */
    fees_reduce_title: "Πώς μειώνω τα fees;",
    fees_reduce_text:
      "Μπορείς να μειώσεις το κόστος επιλέγοντας τη σωστή στιγμή και το σωστό δίκτυο: συναλλαγές εκτός ωρών αιχμής, χρήση Layer 2 λύσεων (π.χ. Arbitrum, Optimism, Polygon) αντί για το Ethereum mainnet, και batching πολλών ενεργειών σε μία συναλλαγή όπου είναι δυνατό.",
    fees_reduce_tip_title: "Tip:",
    fees_reduce_tip:
      "Έλεγξε πάντα την εκτίμηση gas πριν επιβεβαιώσεις — τα περισσότερα wallets σου δείχνουν το κόστος σε δολάρια πριν πατήσεις confirm.",

    /* =======================
       COMMON MISTAKES
    ======================= */
    fees_mistakes_title: "Συχνά λάθη",
    fees_mistake1: "Να στέλνεις συναλλαγές σε ώρες υψηλής συμφόρησης χωρίς λόγο",
    fees_mistake2: "Να μην ελέγχεις σε ποιο δίκτυο βρίσκεσαι πριν στείλεις",
    fees_mistake3: "Να ορίζεις πολύ χαμηλό gas και η συναλλαγή να «κολλάει»",
    fees_mistake4: "Να αγνοείς το slippage σε μεγάλα swaps",
    fees_mistake5: "Να κάνεις πολλές μικρές συναλλαγές αντί για μία batched",
    fees_mistake6: "Να μπερδεύεις το gas fee με την προμήθεια του ανταλλακτηρίου",
    fees_mistake7: "Να μη λαμβάνεις υπόψη τα fees όταν υπολογίζεις το πραγματικό κόστος μιας στρατηγικής",

    /* =======================
       OK TO PAY
    ======================= */
    fees_pros_title: "Τι είναι «OK» να πληρώνεις",
    fees_pro1: "Μικρό gas fee για μια απλή μεταφορά σε ήσυχες ώρες",
    fees_pro2: "Λογική προμήθεια ανταλλακτηρίου για trading",
    fees_pro3: "Χαμηλά fees σε Layer 2 δίκτυα για συχνές ενέργειες",
    fees_pro4: "Κόστος gas για on-chain ασφάλεια και διαφάνεια",
    fees_pro5: "Μικρή προμήθεια ανάληψης για μεταφορά σε wallet",

    /* =======================
       WATCH OUT FOR
    ======================= */
    fees_cons_title: "Τι να προσέχεις",
    fees_con1: "Υπερβολικά υψηλά fees σε ώρες συμφόρησης",
    fees_con2: "Κρυφές χρεώσεις σε λιγότερο γνωστά ανταλλακτήρια",
    fees_con3: "Πολύ χαμηλό gas που καθυστερεί ή αποτυγχάνει τη συναλλαγή",
    fees_con4: "Μεγάλο slippage σε pools χαμηλής ρευστότητας",

    /* =======================
       EXAMPLES
    ======================= */
    fees_examples_title: "Παραδείγματα κόστους",
    fees_ex1: "Μεταφορά ETH σε ήσυχη ώρα: λίγα cents έως 1-2$",
    fees_ex2: "Swap σε DEX στο Ethereum σε ώρα συμφόρησης: 10-50$ ή περισσότερο",
    fees_ex3: "Συναλλαγή σε Layer 2 (π.χ. Arbitrum, Polygon): συνήθως κάτω από 0,10$",
    fees_ex4: "Mint NFT σε δημοφιλές project: μπορεί να φτάσει δεκάδες ή εκατοντάδες δολάρια σε gas",

    /* =======================
       CONCLUSION
    ======================= */
    fees_conclusion_title: "Συμπέρασμα",
    fees_conclusion:
      "Τα fees είναι μέρος του «κόστους λειτουργίας» στο crypto. Δεν μπορείς να τα αποφύγεις εντελώς, αλλά μπορείς να τα διαχειριστείς: επίλεξε το σωστό δίκτυο, τη σωστή ώρα, και μάθε να διαβάζεις την εκτίμηση πριν επιβεβαιώσεις.",

    guides_more: "Δες περισσότερα →",
  },

  /* ========================================================
       ENGLISH TRANSLATIONS
  ======================================================== */
  en: {
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
    fees_eyebrow: "GUIDE",
    fees_title: "Gas Fees & Fees: What Do You Pay in Crypto?",
    fees_intro:
      "In crypto there are different kinds of \"fees\" — some are network charges (gas) and others are service charges (trading fees). In this guide we'll look at what you pay, when, and how you can reduce the cost.",

    /* GAS FEE */
    fees_gas_title: "What is a Gas Fee?",
    fees_gas_text:
      "A gas fee is the charge you pay to the network (e.g. Ethereum) to process and record your transaction on the blockchain. It doesn't go to any company — it goes to the validators/miners who process the blocks.",

    /* OTHER FEES */
    fees_other_title: "What are the \"other fees\"?",
    fees_other_text:
      "Besides gas, you may also pay service fees: an exchange fee, a protocol fee (e.g. a DEX swap fee), or a withdrawal fee. These go to the platform or protocol, not to the network.",

    /* WHY FEES CHANGE */
    fees_why_title: "Why do fees change?",
    fees_why_intro: "Fees aren't fixed — they go up and down depending on:",
    fees_why_li1: "Current demand on the network",
    fees_why_li2: "The complexity of the transaction (simple transfer vs smart contract)",
    fees_why_li3: "Which blockchain you're using (e.g. Ethereum vs Solana vs Polygon)",
    fees_why_li4: "Market conditions (high activity = more congestion)",
    fees_why_outro: "During peak hours, fees can multiply within minutes.",

    /* TRANSACTION FLOW */
    fees_steps_title: "What you pay in a transaction (the flow)",
    fees_step1: "You send a transaction (e.g. a swap or transfer)",
    fees_step2: "Your wallet estimates the required gas",
    fees_step3: "You choose a speed (slow / normal / fast)",
    fees_step4: "The transaction waits in the mempool",
    fees_step5: "A validator/miner processes it and includes it in a block",
    fees_step6: "You pay the gas fee plus any additional platform charges",

    /* KEY TERMS */
    fees_terms_title: "Key terms",
    fees_terms_text:
      "Gas limit: the maximum gas you allow to be spent. Gas price: how much you pay per unit of gas. Base fee & priority fee (Ethereum): the network's base cost plus a \"tip\" for faster processing. Slippage: the price difference that can occur in a swap due to delay.",

    /* HOW TO REDUCE FEES */
    fees_reduce_title: "How do I reduce fees?",
    fees_reduce_text:
      "You can lower costs by choosing the right time and the right network: transacting outside peak hours, using Layer 2 solutions (e.g. Arbitrum, Optimism, Polygon) instead of Ethereum mainnet, and batching multiple actions into one transaction where possible.",
    fees_reduce_tip_title: "Tip:",
    fees_reduce_tip:
      "Always check the gas estimate before confirming — most wallets show you the cost in dollars before you hit confirm.",

    /* COMMON MISTAKES */
    fees_mistakes_title: "Common mistakes",
    fees_mistake1: "Sending transactions during high-congestion hours without reason",
    fees_mistake2: "Not checking which network you're on before sending",
    fees_mistake3: "Setting gas too low so the transaction gets \"stuck\"",
    fees_mistake4: "Ignoring slippage on large swaps",
    fees_mistake5: "Making many small transactions instead of one batched one",
    fees_mistake6: "Confusing the gas fee with the exchange's commission",
    fees_mistake7: "Not accounting for fees when calculating the real cost of a strategy",

    /* OK TO PAY */
    fees_pros_title: "What's \"OK\" to pay",
    fees_pro1: "A small gas fee for a simple transfer during quiet hours",
    fees_pro2: "A reasonable exchange commission for trading",
    fees_pro3: "Low fees on Layer 2 networks for frequent actions",
    fees_pro4: "Gas cost for on-chain security and transparency",
    fees_pro5: "A small withdrawal fee to move funds to your wallet",

    /* WATCH OUT FOR */
    fees_cons_title: "What to watch out for",
    fees_con1: "Excessively high fees during congestion",
    fees_con2: "Hidden charges on lesser-known exchanges",
    fees_con3: "Gas set too low, delaying or failing the transaction",
    fees_con4: "High slippage in low-liquidity pools",

    /* EXAMPLES */
    fees_examples_title: "Cost examples",
    fees_ex1: "ETH transfer during quiet hours: a few cents up to $1-2",
    fees_ex2: "DEX swap on Ethereum during congestion: $10-50 or more",
    fees_ex3: "Transaction on Layer 2 (e.g. Arbitrum, Polygon): usually under $0.10",
    fees_ex4: "Minting an NFT on a popular project: can reach tens or hundreds of dollars in gas",

    /* CONCLUSION */
    fees_conclusion_title: "Conclusion",
    fees_conclusion:
      "Fees are part of the \"cost of doing business\" in crypto. You can't avoid them entirely, but you can manage them: pick the right network, the right time, and learn to read the estimate before you confirm.",

    guides_more: "See more →",
  },
};