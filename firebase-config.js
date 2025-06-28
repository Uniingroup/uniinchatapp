// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Same exact config
const firebaseConfig = {
  apiKey: "AIzaSyBkr3uTfSqeeShHccsYH9B8iDKPWNTbAAY",
  authDomain: "uniinchatapp.firebaseapp.com",
  projectId: "uniinchatapp",
  storageBucket: "uniinchatapp.firebasestorage.app",
  messagingSenderId: "362376051567",
  appId: "1:362376051567:web:eb8bf76bdf51d5aac9869a",
  measurementId: "G-H3BJG5WCZQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
