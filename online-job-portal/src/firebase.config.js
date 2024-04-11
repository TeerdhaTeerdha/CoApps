// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrZzUISPUnNkPAycfjfesTqDCYPDft2zc",
  authDomain: "django-62bfa.firebaseapp.com",
  projectId: "django-62bfa",
  storageBucket: "django-62bfa.appspot.com",
  messagingSenderId: "975369810170",
  appId: "1:975369810170:web:1aa834fd2ef3d58b599943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};