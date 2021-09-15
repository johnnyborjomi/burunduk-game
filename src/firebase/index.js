import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBiY9tiljK0qg73xYodJFJclRE9uW_aWLc",
    authDomain: "burunduk-game.firebaseapp.com",
    projectId: "burunduk-game",
    storageBucket: "burunduk-game.appspot.com",
    messagingSenderId: "499062892902",
    appId: "1:499062892902:web:b542e0b3566cd476a500a7"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log('init prowel');

const db = getFirestore();


const getCollection = async (name) => {  
    const querySnapshot = await getDocs(collection(db, name));
    const data = querySnapshot.docs.map((doc) => {
        return {...doc.data(), id: doc.id};
    })
    console.log('getdata:', data)
    return data;
}

const addUser = async (user) => {
    const newuser = await addDoc(collection(db, "users"), user);
    console.log('added user:', newuser)
    return newuser;
}




export {getCollection, addUser};
