// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtjLD_yw8ueDbvup9vj4RD6e_igGNVrtQ",
  authDomain: "vue3firebase9-d2ffe.firebaseapp.com",
  projectId: "vue3firebase9-d2ffe",
  storageBucket: "vue3firebase9-d2ffe.appspot.com",
  messagingSenderId: "727699407368",
  appId: "1:727699407368:web:0f9b7e9eb55bf48d3c07bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, 'cities');

export default citiesColRef;