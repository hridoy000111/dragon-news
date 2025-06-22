// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPMnbNsHxEuMwqHr61JbmMggPspYQRwlk",
  authDomain: "dragon-news-9e669.firebaseapp.com",
  projectId: "dragon-news-9e669",
  storageBucket: "dragon-news-9e669.firebasestorage.app",
  messagingSenderId: "891355149839",
  appId: "1:891355149839:web:34c88d9786a6149348d57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export default  app;