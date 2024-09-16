import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSDl_iGZPTDDlzzmnhTlLNmtfOSiMe9_U",
  authDomain: "input-1fe89.firebaseapp.com",
  projectId: "input-1fe89",
  storageBucket: "input-1fe89.appspot.com",
  messagingSenderId: "467077463856",
  appId: "1:467077463856:web:8a0275b7cf1347b5fd12f5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
