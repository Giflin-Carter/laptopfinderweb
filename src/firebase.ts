// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHlmSas63oEmpL0f8yAjW_G6SJaB2rvSQ",
    authDomain: "fullstack-laptop-project.firebaseapp.com",
    projectId: "fullstack-laptop-project",
    storageBucket: "fullstack-laptop-project.firebasestorage.app",
    messagingSenderId: "1072794004785",
    appId: "1:1072794004785:web:a153d986c34faf8ba0d410",
    measurementId: "G-GN4055MJX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
