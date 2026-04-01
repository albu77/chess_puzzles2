import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Stub configuration - replace with real credentials later
const firebaseConfig = {
  apiKey: "AIzaSyDummy",
  authDomain: "chess-puzzles.firebaseapp.com",
  projectId: "chess-puzzles",
  storageBucket: "chess-puzzles.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
