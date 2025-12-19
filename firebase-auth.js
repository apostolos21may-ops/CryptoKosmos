// firebase-auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

// ΒΑΖΕΙΣ εδώ τα στοιχεία από το CryptoKosmos project σου στο Firebase
const firebaseConfig = {
  apiKey: "********",
  authDomain: "********.firebaseapp.com",
  projectId: "********",
  storageBucket: "********.appspot.com",
  messagingSenderId: "********",
  appId: "********"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SIGNUP
const signupBtn = document.getElementById("signup-create");
signupBtn?.addEventListener("click", async (e) => {
  e.preventDefault();

  const email  = document.getElementById("signup-email").value;
  const pass1  = document.getElementById("signup-pass1").value;
  const pass2  = document.getElementById("signup-pass2").value;
  const errorP = document.getElementById("signup-error");

  if (pass1 !== pass2) {
    errorP.style.display = "block";
    return;
  }
  errorP.style.display = "none";

  try {
    const cred = await createUserWithEmailAndPassword(auth, email, pass1);

    // ΣΤΕΛΝΕΙ ΔΩΡΕΑΝ EMAIL ΕΠΑΛΗΘΕΥΣΗΣ
    await sendEmailVerification(cred.user);

    alert("Σου στείλαμε email επιβεβαίωσης. Έλεγξε το inbox σου ✅");

    // εδώ μπορείς να κλείσεις το signup modal και να ανοίξεις ένα verify-modal αν θέλεις
    // document.getElementById("signup-modal").classList.add("hidden");
    // document.getElementById("verify-modal").classList.remove("hidden");
  } catch (err) {
    console.error(err);
    alert("Κάτι πήγε στραβά: " + err.message);
  }
});

// LOGIN
const loginFormBtn = document.querySelector("#login-form .modal-submit");
loginFormBtn?.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const pass  = document.getElementById("login-pass").value;

  try {
    const cred = await signInWithEmailAndPassword(auth, email, pass);

    if (!cred.user.emailVerified) {
      alert("Το email σου δεν είναι ακόμη επιβεβαιωμένο. Έλεγξε τα email σου.");
      return;
    }

    alert("Συνδέθηκες επιτυχώς! 🎉");
    // εδώ κάνεις ό,τι θέλεις για logged-in user (κλείνεις modal, αλλάζεις UI κτλ.)
  } catch (err) {
    console.error(err);
    alert("Λάθος email ή κωδικός.");
  }
});