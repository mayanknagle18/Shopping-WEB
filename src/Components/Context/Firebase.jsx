import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbHlCcCJA5nIEM3Okcci6wg_5tu-I8YaM",
  authDomain: "new-project-c031a.firebaseapp.com",
  databaseURL: "https://new-project-c031a-default-rtdb.firebaseio.com",
  projectId: "new-project-c031a",
  storageBucket: "new-project-c031a.appspot.com",
  messagingSenderId: "610383097631",
  appId: "1:610383097631:web:c89fb3cc075e21f04bca2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;