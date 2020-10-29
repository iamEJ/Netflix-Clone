import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvhvCXSEz8KdSMQdePOcPn0eQhzrNpaTo",
  authDomain: "netflix-clone-97fa1.firebaseapp.com",
  databaseURL: "https://netflix-clone-97fa1.firebaseio.com",
  projectId: "netflix-clone-97fa1",
  storageBucket: "netflix-clone-97fa1.appspot.com",
  messagingSenderId: "4921712471",
  appId: "1:4921712471:web:136ca6d0cc461156bc2812",
  measurementId: "G-7THJ0ETHL1",
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const auth = Firebase.auth();

export { auth };
export { firebaseApp };
