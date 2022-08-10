import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  orderBy,
  limit,
  onSnapshot,
  query,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDsISOCQaL5ia847TQy4_Z7du-4Wf48REk",
  authDomain: "facebook-clone-73703.firebaseapp.com",
  databaseURL: "https://facebook-clone-73703-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-73703",
  storageBucket: "facebook-clone-73703.appspot.com",
  messagingSenderId: "355599029737",
  appId: "1:355599029737:web:40496c4f25ed8d4fb82778",
  measurementId: "G-K2Z9S19M79"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

export {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
