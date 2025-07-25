import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAOSH80RuEUjFeRDaYZaPk6Zc8GuIGkp88",
  authDomain: "omniplex-fd4f3.firebaseapp.com",
  projectId: "omniplex-fd4f3",
  storageBucket: "omniplex-fd4f3.firebasestorage.app",
  messagingSenderId: "917400077107",
  appId: "1:917400077107:web:5278c07b52546ee40eb446",
  measurementId: "G-S2BM191CMR",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
