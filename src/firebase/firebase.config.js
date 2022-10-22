// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyBnOtUXIXTLXSSvR7vQC98VK-7pKsVXfBk",
  // authDomain: "zens-tech.firebaseapp.com",
  // projectId: "zens-tech",
  // storageBucket: "zens-tech.appspot.com",
  // messagingSenderId: "69536334173",
  // appId: "1:69536334173:web:26e7fed1af677d2fc9e8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;