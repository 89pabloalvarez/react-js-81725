// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/*
  apiKey: "AIzaSyDM7WAhN9nIgdQ8obFZ3kVOPtxBUsw0CVw",
  authDomain: "reactjs-81725.firebaseapp.com",
  projectId: "reactjs-81725",
  storageBucket: "reactjs-81725.firebasestorage.app",
  messagingSenderId: "118635654360",
  appId: "1:118635654360:web:2e771fc973a2d200a3bbad"

  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
  */
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)