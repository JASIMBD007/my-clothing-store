import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCXm4kEBCyUb5E8d708p3H3AWbXk5iInz0",
    authDomain: "my-clothing-store-db.firebaseapp.com",
    projectId: "my-clothing-store-db",
    storageBucket: "my-clothing-store-db.appspot.com",
    messagingSenderId: "584064658517",
    appId: "1:584064658517:web:788b31a14d7946cc7338dc"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });

        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
}