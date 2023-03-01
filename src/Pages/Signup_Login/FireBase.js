import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_vwFHLeJlbUDTXvI4C76HPM3tyVLyPD4",
  authDomain: "lime-road-login-otp.firebaseapp.com",
  projectId: "lime-road-login-otp",
  storageBucket: "lime-road-login-otp.appspot.com", 
  messagingSenderId: "489885127316",
  appId: "1:489885127316:web:c2df0225b8647688c71a81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
