// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO936D7eccYgZNhylumZircShUU5gtNK8",
  authDomain: "journey-master-28066.firebaseapp.com",
  projectId: "journey-master-28066",
  storageBucket: "journey-master-28066.appspot.com",
  messagingSenderId: "409210569956",
  appId: "1:409210569956:web:4b8914b8da30f0bc7bd8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;