window.TRANSLATIONS = {
  el: {
   
/* =======================
      CEX vs DEX CONTENT
======================= */
cexdex_title: "CEX vs DEX: Ποια είναι η διαφορά;",
cexdex_intro:
  "Τα crypto exchanges χωρίζονται σε δύο βασικές κατηγορίες: κεντρικοποιημένα (CEX) και αποκεντρωμένα (DEX). Το καθένα έχει διαφορετικό τρόπο λειτουργίας, επίπεδο ελέγχου και ρίσκα.",

cexdex_cex_title: "Τι είναι CEX;",
cexdex_cex_text:
  "CEX (Centralized Exchange) είναι ένα κεντρικό ανταλλακτήριο που λειτουργεί σαν “μεσάζοντας”. Συνήθως φτιάχνεις λογαριασμό, κάνεις καταθέσεις και το exchange εκτελεί τις συναλλαγές μέσα στην πλατφόρμα του.",

cexdex_dex_title: "Τι είναι DEX;",
cexdex_dex_text:
  "DEX (Decentralized Exchange) είναι ανταλλακτήριο πάνω στο blockchain. Οι ανταλλαγές γίνονται μέσω smart contracts και εσύ κρατάς τον έλεγχο των κλειδιών σου (non-custodial), συνδέοντας το wallet σου.",

cexdex_how_title: "Πώς δουλεύει το καθένα;",
cexdex_how_intro:
  "Η βασική διαφορά είναι ποιος κρατά τα κεφάλαια και πού εκτελείται η συναλλαγή:",
cexdex_how_li1: "CEX: order book + λογαριασμός στην πλατφόρμα (custodial).",
cexdex_how_li2: "DEX: swap μέσω smart contract (on-chain).",
cexdex_how_li3: "CEX: συχνά απαιτεί KYC, email/2FA και καταθέσεις.",
cexdex_how_li4: "DEX: δεν χρειάζεται λογαριασμός—χρειάζεται wallet και gas.",
cexdex_how_outro:
  "Με απλά λόγια: στο CEX εμπιστεύεσαι την εταιρεία, στο DEX εμπιστεύεσαι τον κώδικα και το δίκτυο.",

cexdex_steps_title: "Ροή μιας ανταλλαγής",
cexdex_step1: "Επιλέγεις αν θα χρησιμοποιήσεις CEX ή DEX ανάλογα με τον στόχο σου.",
cexdex_step2: "CEX: κάνεις login/κατάθεση — DEX: συνδέεις wallet.",
cexdex_step3: "Διαλέγεις ζεύγος (π.χ. BTC/USDT ή ETH/USDC).",
cexdex_step4: "CEX: βάζεις order — DEX: κάνεις swap και εγκρίνεις (approve) αν χρειαστεί.",
cexdex_step5: "Πληρώνεις fees (trading fee / gas).",
cexdex_step6: "Βλέπεις το αποτέλεσμα: υπόλοιπο στον λογαριασμό (CEX) ή στο wallet (DEX).",

cexdex_custody_title: "Τι σημαίνει “custody”;",
cexdex_custody_text:
  "Custody σημαίνει ποιος κρατά τα private keys. Σε custodial λύσεις (συνήθως CEX) τα κλειδιά τα κρατά η πλατφόρμα. Σε non-custodial (συνήθως DEX) τα κλειδιά τα κρατάς εσύ μέσω του wallet σου.",

cexdex_fees_title: "Fees & κόστη",
cexdex_fees_text:
  "Στα CEX πληρώνεις κυρίως trading fees και πιθανές χρεώσεις ανάληψης. Στα DEX πληρώνεις gas fees του δικτύου + πιθανό DEX fee, και μερικές φορές slippage (διαφορά τιμής λόγω ρευστότητας).",
cexdex_fees_tip_title: "Tip:",
cexdex_fees_tip:
  "Σε DEX έλεγχε πάντα gas, slippage και το contract που κάνεις swap.",

cexdex_security_title: "Ασφάλεια",
cexdex_security_text:
  "Τα CEX είναι εύκολα στη χρήση αλλά έχουν ρίσκο “counterparty” (αν συμβεί hack/πάγωμα/λάθος, μπορεί να επηρεαστείς). Τα DEX μειώνουν το custody ρίσκο, αλλά έχουν ρίσκο smart contract, phishing links και λάθος approvals.",
cexdex_security_adv_title: "Συν:",
cexdex_security_adv: "CEX: απλό UX, recovery/2FA — DEX: κρατάς τα keys σου.",
cexdex_security_dis_title: "Πλην:",
cexdex_security_dis: "CEX: εμπιστοσύνη σε τρίτο — DEX: ευθύνη στον χρήστη + on-chain ρίσκο.",

cexdex_when_title: "Πότε διαλέγω τι;",
cexdex_when1: "CEX αν θες εύκολες αγορές/πωλήσεις και fiat καταθέσεις.",
cexdex_when2: "CEX αν κάνεις συχνό trading με χαμηλό slippage σε μεγάλα ζεύγη.",
cexdex_when3: "DEX αν θες non-custodial έλεγχο (τα keys δικά σου).",
cexdex_when4: "DEX αν θες πρόσβαση σε DeFi tokens/νέα ζεύγη γρήγορα.",
cexdex_when5: "DEX αν θες on-chain διαφάνεια και self-custody.",
cexdex_when6: "Απέφυγε DEX αν δεν είσαι άνετος με approvals/gas/links.",
cexdex_when7: "Απέφυγε CEX αν θες 100% έλεγχο και φοβάσαι counterparty ρίσκο.",

cexdex_pros_title: "Πλεονεκτήματα",
cexdex_pro1: "CEX: πολύ εύκολη χρήση και γρήγορες συναλλαγές μέσα στην πλατφόρμα.",
cexdex_pro2: "CEX: συχνά καλύτερη ρευστότητα σε μεγάλα ζεύγη.",
cexdex_pro3: "DEX: non-custodial — κρατάς εσύ τα κλειδιά.",
cexdex_pro4: "DEX: πρόσβαση σε DeFi/νέα tokens χωρίς άδεια.",
cexdex_pro5: "DEX: διαφάνεια on-chain και έλεγχος approvals.",

cexdex_cons_title: "Μειονεκτήματα",
cexdex_con1: "CEX: ρίσκο τρίτου (hack, freeze, περιορισμοί).",
cexdex_con2: "CEX: KYC/λογαριασμός και πιθανές χρεώσεις ανάληψης.",
cexdex_con3: "DEX: gas fees και slippage σε χαμηλή ρευστότητα.",
cexdex_con4: "DEX: ρίσκο smart contracts, phishing και λάθος approvals.",

cexdex_examples_title: "Παραδείγματα",
cexdex_ex1: "CEX: Binance, Coinbase, Kraken (ενδεικτικά).",
cexdex_ex2: "DEX: Uniswap (Ethereum), PancakeSwap (BSC) (ενδεικτικά).",
cexdex_ex3: "DEX aggregators: 1inch (ενδεικτικά).",
cexdex_ex4: "Non-custodial wallets για DEX: MetaMask, Rabby, Phantom (ενδεικτικά).",

cexdex_conclusion_title: "Συμπέρασμα",
cexdex_conclusion:
  "Τα CEX είναι πιο “εύκολα” αλλά βασίζονται στην εμπιστοσύνη σε τρίτο. Τα DEX σου δίνουν περισσότερο έλεγχο, αλλά απαιτούν προσοχή και γνώση. Η καλύτερη επιλογή εξαρτάται από το πόση ευκολία ή αυτονομία θέλεις.",

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
      CEX vs DEX CONTENT
======================= */
cexdex_title: "CEX vs DEX: What’s the difference?",
cexdex_intro:
  "Crypto exchanges fall into two main categories: centralized exchanges (CEX) and decentralized exchanges (DEX). Each has a different workflow, level of control, and risk profile.",

cexdex_cex_title: "What is a CEX?",
cexdex_cex_text:
  "A CEX (Centralized Exchange) is a company/platform that acts as an intermediary. You typically create an account, deposit funds, and trade inside the platform’s system.",

cexdex_dex_title: "What is a DEX?",
cexdex_dex_text:
  "A DEX (Decentralized Exchange) runs on a blockchain. Trades happen via smart contracts and you keep control of your private keys (non-custodial) by connecting your wallet.",

cexdex_how_title: "How does each one work?",
cexdex_how_intro:
  "The key difference is who holds the funds and where the trade is executed:",
cexdex_how_li1: "CEX: order book + platform account (custodial).",
cexdex_how_li2: "DEX: on-chain swap via smart contract.",
cexdex_how_li3: "CEX: often requires KYC, email/2FA, and deposits.",
cexdex_how_li4: "DEX: no account—requires a wallet and gas fees.",
cexdex_how_outro:
  "In short: with a CEX you trust a company; with a DEX you trust the code and the network.",

cexdex_steps_title: "A typical swap flow",
cexdex_step1: "Choose CEX or DEX based on your goal.",
cexdex_step2: "CEX: login/deposit — DEX: connect your wallet.",
cexdex_step3: "Pick a pair (e.g., BTC/USDT or ETH/USDC).",
cexdex_step4: "CEX: place an order — DEX: swap and approve (if needed).",
cexdex_step5: "Pay fees (trading fee / gas).",
cexdex_step6: "See results: balance on the platform (CEX) or in your wallet (DEX).",

cexdex_custody_title: "What does “custody” mean?",
cexdex_custody_text:
  "Custody is about who controls the private keys. In custodial setups (often CEX) the platform holds the keys. In non-custodial setups (often DEX) you hold the keys via your wallet.",

cexdex_fees_title: "Fees & costs",
cexdex_fees_text:
  "On CEXs you mainly pay trading fees and sometimes withdrawal fees. On DEXs you pay network gas fees plus a possible DEX fee, and sometimes slippage (price impact due to liquidity).",
cexdex_fees_tip_title: "Tip:",
cexdex_fees_tip:
  "On DEXs always check gas, slippage, and the contract/router you’re swapping through.",

cexdex_security_title: "Security",
cexdex_security_text:
  "CEXs are easier to use but carry counterparty risk (hack/freeze/errors can affect you). DEXs reduce custody risk, but introduce smart contract risk, phishing links, and risky approvals.",
cexdex_security_adv_title: "Pros:",
cexdex_security_adv: "CEX: smooth UX, recovery/2FA — DEX: you control your keys.",
cexdex_security_dis_title: "Cons:",
cexdex_security_dis: "CEX: trust a third party — DEX: user responsibility + on-chain risks.",

cexdex_when_title: "When should I use which?",
cexdex_when1: "Use a CEX for simple buying/selling and fiat on-ramps.",
cexdex_when2: "Use a CEX for frequent trading with low slippage on major pairs.",
cexdex_when3: "Use a DEX if you want non-custodial control (your keys).",
cexdex_when4: "Use a DEX for fast access to DeFi tokens/new pairs.",
cexdex_when5: "Use a DEX for on-chain transparency and self-custody.",
cexdex_when6: "Avoid DEXs if you’re not comfortable with approvals/gas/links.",
cexdex_when7: "Avoid CEXs if you want full control and fear counterparty risk.",

cexdex_pros_title: "Advantages",
cexdex_pro1: "CEX: very easy to use and fast internal execution.",
cexdex_pro2: "CEX: often deeper liquidity on major pairs.",
cexdex_pro3: "DEX: non-custodial — you hold the keys.",
cexdex_pro4: "DEX: permissionless access to DeFi/new tokens.",
cexdex_pro5: "DEX: on-chain transparency and approval control.",

cexdex_cons_title: "Disadvantages",
cexdex_con1: "CEX: third-party risk (hack, freeze, restrictions).",
cexdex_con2: "CEX: KYC/account + potential withdrawal fees.",
cexdex_con3: "DEX: gas fees and slippage on low liquidity.",
cexdex_con4: "DEX: smart contract risk, phishing, and bad approvals.",

cexdex_examples_title: "Examples",
cexdex_ex1: "CEX: Binance, Coinbase, Kraken (examples).",
cexdex_ex2: "DEX: Uniswap (Ethereum), PancakeSwap (BSC) (examples).",
cexdex_ex3: "DEX aggregators: 1inch (example).",
cexdex_ex4: "Non-custodial wallets: MetaMask, Rabby, Phantom (examples).",

cexdex_conclusion_title: "Conclusion",
cexdex_conclusion:
  "CEXs are more convenient but rely on trusting a third party. DEXs give you more control, but require caution and basic knowledge. The best choice depends on whether you value convenience or autonomy.",

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