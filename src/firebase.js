// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB73YiofGsNcT4aMZ8I9-ujoxKpqmRCy5U",
  authDomain: "binance-clone-a645b.firebaseapp.com",
  projectId: "binance-clone-a645b",
  storageBucket: "binance-clone-a645b.appspot.com",
  messagingSenderId: "959866766881",
  appId: "1:959866766881:web:cf5a429d1d0eb433790560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
