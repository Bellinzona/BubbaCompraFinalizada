// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage,ref,uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiVDz51gDrADBYgJzWVmGZS8m3nFkuVRc",
  authDomain: "bubbamilanesas-61c38.firebaseapp.com",
  projectId: "bubbamilanesas-61c38",
  storageBucket: "bubbamilanesas-61c38.appspot.com",
  messagingSenderId: "732192623850",
  appId: "1:732192623850:web:25275bce92560231999b93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)