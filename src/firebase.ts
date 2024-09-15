// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxx8FWftjjrI3j2CgcaEf4_LV-1nCz7PM",
  authDomain: "twitter-clone-a4044.firebaseapp.com",
  projectId: "twitter-clone-a4044",
  storageBucket: "twitter-clone-a4044.appspot.com",
  messagingSenderId: "844272067862",
  appId: "1:844272067862:web:507583cf65f4b6d17a5c37",
  measurementId: "G-RMX7PQNBNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);//우리 app에 대한 인증을 사용할래