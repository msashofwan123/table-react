// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQN8OBJCsw8Bbom8NDtE-IulXpGGKVVAo",
  authDomain: "table-aef7f.firebaseapp.com",
  databaseURL: "https://table-aef7f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "table-aef7f",
  storageBucket: "table-aef7f.appspot.com",
  messagingSenderId: "687021707878",
  appId: "1:687021707878:web:a2624613aac9c8fa0993a7"
};

// Initialize Firebase
const firebaseku = initializeApp(firebaseConfig);

export default firebaseku;