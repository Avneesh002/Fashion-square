// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_vwFHLeJlbUDTXvI4C76HPM3tyVLyPD4",
  authDomain: "lime-road-login-otp.firebaseapp.com",
  projectId: "lime-road-login-otp",
  storageBucket: "lime-road-login-otp.appspot.com",
  messagingSenderId: "489885127316",
  appId: "1:489885127316:web:c2df0225b8647688c71a81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app;