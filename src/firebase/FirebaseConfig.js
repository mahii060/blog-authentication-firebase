// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYkOhZmiHLYMORlfmRnJ8QNe8wYD4T6k8",
    authDomain: "blog-authentication-firebase.firebaseapp.com",
    projectId: "blog-authentication-firebase",
    storageBucket: "blog-authentication-firebase.firebasestorage.app",
    messagingSenderId: "67895619073",
    appId: "1:67895619073:web:7d5947a0dafe584ce71a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);