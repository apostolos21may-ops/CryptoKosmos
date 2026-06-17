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
       ARTICLE — HERO
    ======================= */
    bc_eyebrow: "ΟΔΗΓΟΣ",
    bc_title: "Τι είναι το Blockchain;",
    bc_lead:
      "Ένα blockchain είναι ένα κοινόχρηστο ψηφιακό μητρώο που κανείς δεν ελέγχει μόνος του. Αντί τα δεδομένα να ζουν σε έναν server, ζουν σε χιλιάδες υπολογιστές ταυτόχρονα — και συμφωνούν όλοι για το ίδιο ιστορικό.",

    /* =======================
       ANATOMY OF A BLOCK
    ======================= */
    bc_how_title: "Από τι αποτελείται ένα μπλοκ",
    bc_how_text:
      "Κάθε μπλοκ είναι ένας «φάκελος» με τέσσερα βασικά στοιχεία. Μαζί, αυτά κάνουν αδύνατο να αλλάξεις κάτι χωρίς να το καταλάβει όλο το δίκτυο.",

    bc_anatomy_data_title: "Δεδομένα",
    bc_anatomy_data_text: "Οι συναλλαγές ή πληροφορίες που καταγράφονται μέσα στο μπλοκ.",

    bc_anatomy_time_title: "Χρονική σφραγίδα",
    bc_anatomy_time_text: "Η ακριβής στιγμή που δημιουργήθηκε το μπλοκ — αμετάβλητη απόδειξη χρόνου.",

    bc_anatomy_hash_title: "Hash του μπλοκ",
    bc_anatomy_hash_text: "Ένα μοναδικό «δαχτυλικό αποτύπωμα» που προκύπτει από όλα τα δεδομένα του.",

    bc_anatomy_prev_title: "Hash προηγούμενου μπλοκ",
    bc_anatomy_prev_text: "Ο δεσμός που συνδέει το μπλοκ με αυτό πριν από αυτό, σχηματίζοντας αλυσίδα.",

    bc_how_outro:
      "Αν κάποιος αλλάξει έστω και ένα ψηφίο σε ένα παλιό μπλοκ, το hash του αλλάζει εντελώς — και σπάει η αλυσίδα. Το δίκτυο το εντοπίζει αμέσως και το απορρίπτει.",

    /* =======================
       HASH
    ======================= */
    bc_hash_title: "Τι είναι το hash;",
    bc_hash_text:
      "Ένας hash αλγόριθμος παίρνει οποιαδήποτε ποσότητα δεδομένων και βγάζει έναν κωδικό σταθερού μήκους. Η ίδια είσοδος δίνει πάντα το ίδιο αποτέλεσμα — αλλά η παραμικρή αλλαγή στην είσοδο αλλάζει το αποτέλεσμα εντελώς. Αυτό κάνει το hash ιδανικό για να «σφραγίζεις» δεδομένα.",

    /* =======================
       CONSENSUS: PoW vs PoS
    ======================= */
    bc_consensus_title: "Πώς συμφωνεί το δίκτυο για το επόμενο μπλοκ",
    bc_consensus_lead:
      "Σε ένα αποκεντρωμένο δίκτυο χρειάζεται κανόνας: ποιος έχει το δικαίωμα να προτείνει το επόμενο μπλοκ; Οι δύο πιο διαδεδομένες απαντήσεις είναι το Proof-of-Work και το Proof-of-Stake.",

    label_pro: "Πλεονέκτημα",
    label_con: "Μειονέκτημα",

    bc_pow_title: "Proof-of-Work",
    bc_pow_text:
      "Οι miners ανταγωνίζονται λύνοντας ένα υπολογιστικό «παζλ». Όποιος το λύσει πρώτος προτείνει το επόμενο μπλοκ και παίρνει ανταμοιβή. Έτσι λειτουργεί το Bitcoin.",
    bc_pow_adv: "Πολύ υψηλή ασφάλεια — η αλλοίωση ιστορικού απαιτεί τεράστια υπολογιστική ισχύ.",
    bc_pow_dis: "Μεγάλη κατανάλωση ενέργειας και πιο αργές συναλλαγές.",

    bc_pos_title: "Proof-of-Stake",
    bc_pos_text:
      "Οι validators «κλειδώνουν» (staking) κρυπτονόμισμα ως εγγύηση καλής συμπεριφοράς. Το δίκτυο επιλέγει ποιος προτείνει το επόμενο μπλοκ ανάλογα με το stake του. Έτσι λειτουργούν Ethereum και Solana.",
    bc_pos_adv: "Πολύ μικρότερη κατανάλωση ενέργειας και πιο γρήγορη επιβεβαίωση.",
    bc_pos_dis: "Όσοι έχουν περισσότερο stake έχουν αναλογικά περισσότερη επιρροή.",

    /* =======================
       USE CASES
    ======================= */
    bc_uses_title: "Πού χρησιμοποιείται σήμερα",
    bc_use1: "Πληρωμές & κρυπτονομίσματα",
    bc_use2: "Smart contracts",
    bc_use3: "DeFi — δανεισμός, ανταλλαγές, yield",
    bc_use4: "Ψηφιακή ταυτότητα",
    bc_use5: "Ιχνηλάτηση εφοδιαστικής αλυσίδας",
    bc_use6: "Ασφαλής αποθήκευση αρχείων",
    bc_use7: "Ψηφιακά πιστοποιητικά & NFTs",

    /* =======================
       PROS / CONS
    ======================= */
    bc_pros_title: "Πλεονεκτήματα",
    bc_pro1: "Καμία κεντρική αρχή — το δίκτυο λειτουργεί χωρίς «αφεντικό».",
    bc_pro2: "Δεδομένα κρυπτογραφικά προστατευμένα και πρακτικά αμετάβλητα.",
    bc_pro3: "Πλήρης διαφάνεια — κάθε συναλλαγή είναι ελέγξιμη από όλους.",
    bc_pro4: "Λειτουργεί 24/7, χωρίς διακοπές ή αργίες.",
    bc_pro5: "Καταγραφή που δεν μπορεί να «χαθεί» ή να διαγραφεί.",

    bc_cons_title: "Μειονεκτήματα",
    bc_con1: "Τα δίκτυα Proof-of-Work καταναλώνουν πολύ ενέργεια.",
    bc_con2: "Τα fees μπορούν να ανέβουν απότομα όταν υπάρχει συνωστισμός.",
    bc_con3: "Η κλιμάκωση είναι δύσκολη χωρίς συμβιβασμούς.",
    bc_con4: "Η εμπειρία χρήστη είναι ακόμα δύσκολη για αρχάριους.",

    /* =======================
       EXAMPLES
    ======================= */
    bc_examples_title: "Γνωστά blockchains",
    bc_ex1_sym: "BTC",
    bc_ex1_name: "Bitcoin",
    bc_ex1_desc: "Το πρώτο blockchain — ψηφιακό χρήμα χωρίς τράπεζα.",
    bc_ex2_sym: "ETH",
    bc_ex2_name: "Ethereum",
    bc_ex2_desc: "Έφερε τα smart contracts και το οικοσύστημα DeFi/NFT.",
    bc_ex3_sym: "SOL",
    bc_ex3_name: "Solana",
    bc_ex3_desc: "Σχεδιασμένο για ταχύτητα και πολύ χαμηλά fees.",
    bc_ex4_sym: "LINK",
    bc_ex4_name: "Chainlink",
    bc_ex4_desc: "Συνδέει smart contracts με δεδομένα του πραγματικού κόσμου.",

    /* =======================
       CONCLUSION
    ======================= */
    bc_conclusion_title: "Το σημαντικό",
    bc_conclusion:
      "Το blockchain δεν είναι «μαγικό» — είναι ένας απλός κανόνας (συμφωνία + κρυπτογραφία) που εφαρμόζεται σε τεράστια κλίμακα. Μόλις καταλάβεις το μπλοκ, το hash και τη συναίνεση, καταλαβαίνεις τη βάση πάνω στην οποία χτίζεται όλο το crypto.",

    guides_more: "Δες περισσότερα →",

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
    signup_have_account: "Έχεις ήδη λογαριασμό;",
    signup_back: "Σύνδεση",

    /* =======================
       VERIFY
    ======================= */
    verify_title: "Επαλήθευση Email",
    verify_subtitle: "Σου στείλαμε έναν 6-ψήφιο κωδικό.",
    verify_code: "Κωδικός",
    verify_error: "Λάθος κωδικός. Προσπάθησε ξανά.",
    verify_btn: "Επιβεβαίωση",
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
    bc_eyebrow: "GUIDE",
    bc_title: "What Is Blockchain?",
    bc_lead:
      "A blockchain is a shared digital ledger that no single party controls. Instead of living on one server, the data lives on thousands of computers at once — and they all agree on the same history.",

    /* ANATOMY OF A BLOCK */
    bc_how_title: "What's inside a block",
    bc_how_text:
      "Every block is a small package with four key pieces. Together, they make it practically impossible to change something without the whole network noticing.",

    bc_anatomy_data_title: "Data",
    bc_anatomy_data_text: "The transactions or information recorded inside the block.",

    bc_anatomy_time_title: "Timestamp",
    bc_anatomy_time_text: "The exact moment the block was created — a permanent proof of order.",

    bc_anatomy_hash_title: "Block hash",
    bc_anatomy_hash_text: "A unique fingerprint generated from everything inside the block.",

    bc_anatomy_prev_title: "Previous block's hash",
    bc_anatomy_prev_text: "The link that connects this block to the one before it, forming a chain.",

    bc_how_outro:
      "If anyone changes even a single digit in an old block, its hash changes completely — breaking the chain. The network spots this instantly and rejects it.",

    /* HASH */
    bc_hash_title: "What is a hash?",
    bc_hash_text:
      "A hash function takes any amount of data and outputs a fixed-length code. The same input always produces the same output — but the smallest change to the input completely changes the result. That makes hashes perfect for sealing data.",

    /* CONSENSUS */
    bc_consensus_title: "How the network agrees on the next block",
    bc_consensus_lead:
      "A decentralized network needs a rule: who gets to propose the next block? The two most common answers are Proof-of-Work and Proof-of-Stake.",

    label_pro: "Pro",
    label_con: "Con",

    bc_pow_title: "Proof-of-Work",
    bc_pow_text:
      "Miners compete to solve a computational puzzle. Whoever solves it first proposes the next block and earns a reward. This is how Bitcoin works.",
    bc_pow_adv: "Very high security — rewriting history requires enormous computing power.",
    bc_pow_dis: "High energy use and slower transaction times.",

    bc_pos_title: "Proof-of-Stake",
    bc_pos_text:
      "Validators lock up (stake) cryptocurrency as a guarantee of good behavior. The network picks who proposes the next block based on their stake. This is how Ethereum and Solana work.",
    bc_pos_adv: "Much lower energy use and faster confirmation times.",
    bc_pos_dis: "Larger stakeholders get proportionally more influence.",

    /* USE CASES */
    bc_uses_title: "Where it's used today",
    bc_use1: "Payments & cryptocurrencies",
    bc_use2: "Smart contracts",
    bc_use3: "DeFi — lending, swaps, yield",
    bc_use4: "Digital identity",
    bc_use5: "Supply chain tracking",
    bc_use6: "Secure record storage",
    bc_use7: "Digital certificates & NFTs",

    /* PROS / CONS */
    bc_pros_title: "Advantages",
    bc_pro1: "No central authority — the network runs without a \"boss\".",
    bc_pro2: "Data is cryptographically secured and practically immutable.",
    bc_pro3: "Full transparency — every transaction is publicly verifiable.",
    bc_pro4: "Runs 24/7, with no downtime or holidays.",
    bc_pro5: "A record that can't be quietly lost or erased.",

    bc_cons_title: "Disadvantages",
    bc_con1: "Proof-of-Work networks use a lot of energy.",
    bc_con2: "Fees can spike sharply during congestion.",
    bc_con3: "Scaling is hard without trade-offs.",
    bc_con4: "Still a steep learning curve for newcomers.",

    /* EXAMPLES */
    bc_examples_title: "Well-known blockchains",
    bc_ex1_sym: "BTC",
    bc_ex1_name: "Bitcoin",
    bc_ex1_desc: "The first blockchain — digital money without a bank.",
    bc_ex2_sym: "ETH",
    bc_ex2_name: "Ethereum",
    bc_ex2_desc: "Brought smart contracts and the DeFi/NFT ecosystem to life.",
    bc_ex3_sym: "SOL",
    bc_ex3_name: "Solana",
    bc_ex3_desc: "Built for speed, with very low transaction fees.",
    bc_ex4_sym: "LINK",
    bc_ex4_name: "Chainlink",
    bc_ex4_desc: "Connects smart contracts to real-world data.",

    /* CONCLUSION */
    bc_conclusion_title: "The big picture",
    bc_conclusion:
      "Blockchain isn't magic — it's a simple rule (agreement + cryptography) applied at massive scale. Once you understand the block, the hash, and consensus, you understand the foundation that all of crypto is built on.",

    guides_more: "See more →",

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
    signup_have_account: "Already have an account?",
    signup_back: "Login",

    /* VERIFY */
    verify_title: "Email Verification",
    verify_subtitle: "We sent you a 6-digit code.",
    verify_code: "Code",
    verify_error: "Incorrect code. Try again.",
    verify_btn: "Verify",
  },
};