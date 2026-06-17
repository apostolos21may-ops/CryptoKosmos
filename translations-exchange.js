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
    cexdex_eyebrow: "ΟΔΗΓΟΣ",
    cexdex_title: "CEX vs DEX: Ποια είναι η διαφορά;",
    cexdex_intro:
      "Τα crypto exchanges χωρίζονται σε δύο βασικές κατηγορίες: κεντρικοποιημένα (CEX) και αποκεντρωμένα (DEX). Το καθένα έχει διαφορετική φιλοσοφία, δομή και ρίσκο.",

    /* =======================
       CEX
    ======================= */
    cexdex_cex_title: "Τι είναι CEX;",
    cexdex_cex_text:
      "Ένα Centralized Exchange (CEX) είναι μια πλατφόρμα που λειτουργεί σαν παραδοσιακό χρηματιστήριο — μια εταιρεία διαχειρίζεται τα κεφάλαιά σου, εκτελεί τις συναλλαγές και τηρεί τα αρχεία. Παραδείγματα: Binance, Coinbase, Kraken.",

    /* =======================
       DEX
    ======================= */
    cexdex_dex_title: "Τι είναι DEX;",
    cexdex_dex_text:
      "Ένα Decentralized Exchange (DEX) λειτουργεί μέσω smart contracts απευθείας στο blockchain — χωρίς ενδιάμεσο. Εσύ κρατάς πάντα τα κλειδιά του wallet σου. Παραδείγματα: Uniswap, dYdX, Jupiter.",

    /* =======================
       HOW IT WORKS
    ======================= */
    cexdex_how_title: "Πώς δουλεύει το καθένα;",
    cexdex_how_intro:
      "Η βασική διαφορά είναι ποιος ελέγχει τα κεφάλαια κατά τη διάρκεια μιας συναλλαγής:",
    cexdex_how_li1: "CEX: καταθέτεις crypto στο exchange, το οποίο το κρατάει για λογαριασμό σου.",
    cexdex_how_li2: "CEX: οι συναλλαγές γίνονται στο εσωτερικό σύστημα του exchange (off-chain).",
    cexdex_how_li3: "DEX: το wallet σου συνδέεται απευθείας με το protocol.",
    cexdex_how_li4: "DEX: κάθε swap εκτελείται ως on-chain συναλλαγή μέσω smart contract.",
    cexdex_how_outro:
      "Στο CEX ο έλεγχος είναι κεντρικός. Στο DEX παραμένει πάντα στον χρήστη.",

    /* =======================
       FLOW
    ======================= */
    cexdex_steps_title: "Ροή μιας ανταλλαγής",
    cexdex_step1: "Συνδέεσαι στο CEX ή συνδέεις το wallet σου στο DEX.",
    cexdex_step2: "Επιλέγεις το ζεύγος ανταλλαγής (π.χ. BTC/USDT).",
    cexdex_step3: "Ορίζεις ποσό και τύπο εντολής (market, limit κ.ά.).",
    cexdex_step4: "CEX: η εντολή ταιριάζει με αντίστοιχη στο order book. DEX: το smart contract εκτελεί το swap.",
    cexdex_step5: "Η συναλλαγή επιβεβαιώνεται — στο CEX άμεσα, στο DEX μετά από on-chain επιβεβαίωση.",
    cexdex_step6: "Το υπόλοιπό σου ενημερώνεται.",

    /* =======================
       CUSTODY
    ======================= */
    cexdex_custody_title: "Τι σημαίνει \"custody\";",
    cexdex_custody_text:
      "Custody σημαίνει ποιος κρατάει τα private keys — δηλαδή ποιος ελέγχει πραγματικά τα κρυπτονομίσματά σου. Στο CEX τα κλειδιά ανήκουν στην εταιρεία (custodial). Στο DEX τα κλειδιά ανήκουν πάντα σε εσένα (non-custodial). «Not your keys, not your coins.»",

    /* =======================
       FEES
    ======================= */
    cexdex_fees_title: "Fees & κόστη",
    cexdex_fees_text:
      "Τα CEX χρεώνουν συνήθως maker/taker fees (0.1%–0.5%) καθώς και κόστος ανάληψης. Τα DEX χρεώνουν gas fees (κόστος δικτύου) και swap fees του protocol (συνήθως 0.05%–0.3% ανά ανταλλαγή).",
    cexdex_fees_tip_title: "Tip:",
    cexdex_fees_tip:
      "Σε περιόδους συμφόρησης δικτύου, τα gas fees ενός DEX μπορεί να ξεπεράσουν κατά πολύ τα trading fees ενός CEX.",

    /* =======================
       SECURITY
    ======================= */
    cexdex_security_title: "Ασφάλεια",
    cexdex_security_text:
      "Το ρίσκο είναι διαφορετικό στις δύο περιπτώσεις — και πρέπει να το κατανοείς πριν επιλέξεις.",
    cexdex_security_adv_title: "CEX:",
    cexdex_security_adv:
      "Εάν χρεοκοπήσει ή παραβιαστεί το exchange, τα κεφάλαιά σου κινδυνεύουν. Ιστορικά παραδείγματα: Mt. Gox, FTX.",
    cexdex_security_dis_title: "DEX:",
    cexdex_security_dis:
      "Το ρίσκο είναι στο smart contract — αν υπάρχει bug, μπορεί να εκμεταλλευτεί κάποιος. Εσύ όμως δεν χάνεις κεφάλαια από πτώχευση τρίτου.",

    /* =======================
       WHEN TO USE
    ======================= */
    cexdex_when_title: "Πότε διαλέγω τι;",
    cexdex_when1: "CEX: θέλεις να αγοράσεις crypto με fiat (ευρώ, δολάριο).",
    cexdex_when2: "CEX: είσαι αρχάριος και θέλεις απλή εμπειρία.",
    cexdex_when3: "CEX: χρειάζεσαι high liquidity για μεγάλες συναλλαγές.",
    cexdex_when4: "DEX: θέλεις πλήρη έλεγχο των κεφαλαίων σου.",
    cexdex_when5: "DEX: θέλεις πρόσβαση σε νέα tokens που δεν είναι ακόμα σε CEX.",
    cexdex_when6: "DEX: θέλεις να παρέχεις ρευστότητα (liquidity provision).",
    cexdex_when7: "DEX: δεν θέλεις να κάνεις KYC / να αποκαλύψεις ταυτότητα.",

    /* =======================
       PROS / CONS
    ======================= */
    cexdex_pros_title: "Πλεονεκτήματα",
    cexdex_pro1: "CEX: Εύκολο interface, ιδανικό για αρχάριους.",
    cexdex_pro2: "CEX: Υψηλή ρευστότητα και γρήγορες εκτελέσεις.",
    cexdex_pro3: "CEX: Υποστήριξη πελατών και ανάκτηση λογαριασμού.",
    cexdex_pro4: "DEX: Κανένα custodial ρίσκο — πλήρης αυτονομία.",
    cexdex_pro5: "DEX: Δεν απαιτείται KYC ή εγγραφή.",

    cexdex_cons_title: "Μειονεκτήματα",
    cexdex_con1: "CEX: Εξαρτάσαι από τρίτο μέρος για τα κεφάλαιά σου.",
    cexdex_con2: "CEX: Υπόκειται σε ρυθμιστικές αλλαγές και παγώματα λογαριασμών.",
    cexdex_con3: "DEX: Πιο σύνθετο για αρχάριους — απαιτεί γνώση wallets & gas.",
    cexdex_con4: "DEX: Gas fees μπορεί να κάνουν μικρές συναλλαγές ασύμφορες.",

    /* =======================
       EXAMPLES
    ======================= */
    cexdex_examples_title: "Παραδείγματα",
    cexdex_ex1: "CEX: Binance — το μεγαλύτερο exchange παγκοσμίως σε όγκο.",
    cexdex_ex2: "CEX: Coinbase — δημοφιλές στις ΗΠΑ, ρυθμιζόμενο.",
    cexdex_ex3: "DEX: Uniswap — το πιο γνωστό DEX στο Ethereum.",
    cexdex_ex4: "DEX: Jupiter — κορυφαίο DEX aggregator στο Solana.",

    /* =======================
       CONCLUSION
    ======================= */
    cexdex_conclusion_title: "Συμπέρασμα",
    cexdex_conclusion:
      "Δεν υπάρχει «σωστή» επιλογή — εξαρτάται από τις ανάγκες σου. Τα CEX προσφέρουν άνεση, τα DEX προσφέρουν αυτονομία. Οι περισσότεροι έμπειροι χρήστες χρησιμοποιούν και τα δύο.",

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
    cexdex_eyebrow: "GUIDE",
    cexdex_title: "CEX vs DEX: What's the Difference?",
    cexdex_intro:
      "Crypto exchanges fall into two main categories: centralized (CEX) and decentralized (DEX). Each has a different philosophy, structure, and risk profile.",

    /* CEX */
    cexdex_cex_title: "What is a CEX?",
    cexdex_cex_text:
      "A Centralized Exchange (CEX) works like a traditional stock exchange — a company manages your funds, executes trades, and keeps the records. Examples: Binance, Coinbase, Kraken.",

    /* DEX */
    cexdex_dex_title: "What is a DEX?",
    cexdex_dex_text:
      "A Decentralized Exchange (DEX) operates through smart contracts directly on the blockchain — no intermediary. You always hold the keys to your wallet. Examples: Uniswap, dYdX, Jupiter.",

    /* HOW IT WORKS */
    cexdex_how_title: "How does each one work?",
    cexdex_how_intro:
      "The key difference is who controls the funds during a transaction:",
    cexdex_how_li1: "CEX: you deposit crypto to the exchange, which holds it on your behalf.",
    cexdex_how_li2: "CEX: trades happen in the exchange's internal system (off-chain).",
    cexdex_how_li3: "DEX: your wallet connects directly to the protocol.",
    cexdex_how_li4: "DEX: every swap is executed as an on-chain transaction via smart contract.",
    cexdex_how_outro:
      "On a CEX, control is centralized. On a DEX, it always stays with the user.",

    /* FLOW */
    cexdex_steps_title: "Trade flow",
    cexdex_step1: "Log in to the CEX or connect your wallet to the DEX.",
    cexdex_step2: "Select your trading pair (e.g. BTC/USDT).",
    cexdex_step3: "Set amount and order type (market, limit, etc.).",
    cexdex_step4: "CEX: your order is matched in the order book. DEX: the smart contract executes the swap.",
    cexdex_step5: "The trade is confirmed — instantly on a CEX, after on-chain confirmation on a DEX.",
    cexdex_step6: "Your balance is updated.",

    /* CUSTODY */
    cexdex_custody_title: "What does \"custody\" mean?",
    cexdex_custody_text:
      "Custody means who holds the private keys — i.e. who actually controls your crypto. On a CEX, the keys belong to the company (custodial). On a DEX, the keys always belong to you (non-custodial). \"Not your keys, not your coins.\"",

    /* FEES */
    cexdex_fees_title: "Fees & costs",
    cexdex_fees_text:
      "CEXs typically charge maker/taker fees (0.1%–0.5%) plus withdrawal costs. DEXs charge gas fees (network cost) and protocol swap fees (usually 0.05%–0.3% per trade).",
    cexdex_fees_tip_title: "Tip:",
    cexdex_fees_tip:
      "During network congestion, DEX gas fees can far exceed the trading fees of a CEX.",

    /* SECURITY */
    cexdex_security_title: "Security",
    cexdex_security_text:
      "The risk profile is different in each case — and you need to understand it before choosing.",
    cexdex_security_adv_title: "CEX:",
    cexdex_security_adv:
      "If the exchange goes bankrupt or gets hacked, your funds are at risk. Historical examples: Mt. Gox, FTX.",
    cexdex_security_dis_title: "DEX:",
    cexdex_security_dis:
      "The risk lies in the smart contract — if there's a bug, it can be exploited. But you won't lose funds due to a third party's bankruptcy.",

    /* WHEN TO USE */
    cexdex_when_title: "When should I use which?",
    cexdex_when1: "CEX: you want to buy crypto with fiat (euros, dollars).",
    cexdex_when2: "CEX: you're a beginner and want a simple experience.",
    cexdex_when3: "CEX: you need high liquidity for large trades.",
    cexdex_when4: "DEX: you want full control of your funds.",
    cexdex_when5: "DEX: you want access to new tokens not yet listed on a CEX.",
    cexdex_when6: "DEX: you want to provide liquidity.",
    cexdex_when7: "DEX: you don't want to do KYC or reveal your identity.",

    /* PROS / CONS */
    cexdex_pros_title: "Pros",
    cexdex_pro1: "CEX: Easy interface, ideal for beginners.",
    cexdex_pro2: "CEX: High liquidity and fast execution.",
    cexdex_pro3: "CEX: Customer support and account recovery.",
    cexdex_pro4: "DEX: No custodial risk — full autonomy.",
    cexdex_pro5: "DEX: No KYC or registration required.",

    cexdex_cons_title: "Cons",
    cexdex_con1: "CEX: You depend on a third party for your funds.",
    cexdex_con2: "CEX: Subject to regulatory changes and account freezes.",
    cexdex_con3: "DEX: More complex for beginners — requires knowledge of wallets & gas.",
    cexdex_con4: "DEX: Gas fees can make small trades uneconomical.",

    /* EXAMPLES */
    cexdex_examples_title: "Examples",
    cexdex_ex1: "CEX: Binance — the largest exchange globally by volume.",
    cexdex_ex2: "CEX: Coinbase — popular in the US, regulated.",
    cexdex_ex3: "DEX: Uniswap — the best-known DEX on Ethereum.",
    cexdex_ex4: "DEX: Jupiter — top DEX aggregator on Solana.",

    /* CONCLUSION */
    cexdex_conclusion_title: "The bottom line",
    cexdex_conclusion:
      "There's no single \"right\" choice — it depends on your needs. CEXs offer convenience, DEXs offer autonomy. Most experienced users use both.",

    guides_more: "See more →",
  },
};