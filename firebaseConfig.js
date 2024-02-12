import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDlGNzngSJETfpWjd6Rb2BaGA5Xe2p9WA0",
  authDomain: "binaryheading-fba51.firebaseapp.com",
  projectId: "binaryheading-fba51",
  storageBucket: "binaryheading-fba51.appspot.com",
  messagingSenderId: "800653077335",
  appId: "1:800653077335:web:a3420f36807873dfc46c12",
  measurementId: "G-KKE8ZJXKMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app); // 추가

// export { firestore }; // 추가
export const firebase_db = firebase.database(
  "https://binaryheading-fba51-default-rtdb.firebaseio.com/"
);
