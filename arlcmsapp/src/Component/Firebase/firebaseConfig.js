import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIlBfXdkLvmVTd5ovjejEU1NAOiw0VZsQ",
  authDomain: "arl-reactjs.firebaseapp.com",
  projectId: "arl-reactjs",
  storageBucket: "arl-reactjs.appspot.com",
  messagingSenderId: "187149007691",
  appId: "1:187149007691:web:4404cd30fd4851a86c86ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireStore = getFirestore(app);
