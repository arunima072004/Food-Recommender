// Import the functions you need from the SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZMiPhlO0IM22CMxSENRyXOMYAB8k9-x4",
    authDomain: "gen-lang-client-0436258283.firebaseapp.com",
    projectId: "gen-lang-client-0436258283",
    storageBucket: "gen-lang-client-0436258283.firebasestorage.app",
    messagingSenderId: "916812191893",
    appId: "1:916812191893:web:b1da232ce96b91bea0639c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore to use in your app
export const auth = getAuth(app);
export const db = getFirestore(app);
