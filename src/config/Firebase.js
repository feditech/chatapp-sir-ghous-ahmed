import { initializeApp, } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, collection, query, where, onSnapshot, addDoc, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBEsc_6RenE0hZAD0YkeTlxtZmCCMxdU8M",
    authDomain: "react-practice-70683.firebaseapp.com",
    projectId: "react-practice-70683",
    storageBucket: "react-practice-70683.appspot.com",
    messagingSenderId: "207620628832",
    appId: "1:207620628832:web:016824f34ed1eb43d03e05",
    measurementId: "G-FY9BRK6QD9"
};

initializeApp(firebaseConfig)

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    db,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    orderBy
};