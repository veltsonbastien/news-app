import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCVZfAvjIpmeXLiRau_iXakCKNDkRXgO9o",
    authDomain: "newsapp-ed3c9.firebaseapp.com",
    projectId: "newsapp-ed3c9",
    storageBucket: "newsapp-ed3c9.appspot.com",
    messagingSenderId: "1093849792447",
    appId: "1:1093849792447:web:61252a0ec5fd6686a0ab0a",
    measurementId: "G-YCXB9VQ2HH"
};

const app = initializeApp(firebaseConfig);
const db : Firestore = getFirestore(app);

//get articles
export async function getArticles() {
    try {
        const articlesCol = collection(db, 'articles');
        const articlesSnap = await getDocs(articlesCol);
        return articlesSnap.docs.map(doc => doc.data());
    } catch (e) {
        if(!db) console.log ("Error access firestore instance, variable db undefined...")
        return [];
    }
}