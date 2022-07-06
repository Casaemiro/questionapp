import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


//use .emv files instead
const firebaseConfig = {

    apiKey: "AIzaSyC_4EO5NzDukE_F1FM3QClukIeQa2OaQPU",
  
    authDomain: "questionapp-e915e.firebaseapp.com",
  
    projectId: "questionapp-e915e",
  
    storageBucket: "questionapp-e915e.appspot.com",
  
    messagingSenderId: "751649528710",
  
    appId: "1:751649528710:web:763e8bfd0da7c43c6f2a07",
  
    measurementId: "G-ZHD78BTKBB"
  
  };
  
  

  const app = initializeApp(firebaseConfig)
   export const db = getFirestore(app)