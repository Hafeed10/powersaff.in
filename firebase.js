// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  // ✅ You missed this import earlier
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_P8sSPJC37e4rLoC0UZeqHX4TTrfHAg",
  authDomain: "powersaff-6fcc0.firebaseapp.com",
  projectId: "powersaff-6fcc0",
  storageBucket: "powersaff-6fcc0.firebasestorage.app",
  messagingSenderId: "980107328447",
  appId: "1:980107328447:web:d2ae9cd40690e1e0a17f0a",
  measurementId: "G-3F9GVQGHQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore and Analytics
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
