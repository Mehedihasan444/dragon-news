
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwvLv02_f12OczngmyE0BHh6dyATxMPE4",
  authDomain: "dragon-news-b508b.firebaseapp.com",
  projectId: "dragon-news-b508b",
  storageBucket: "dragon-news-b508b.appspot.com",
  messagingSenderId: "821176238709",
  appId: "1:821176238709:web:88ec8feb6948afe192ee3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default  auth ;
