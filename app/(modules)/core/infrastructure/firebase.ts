import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA8ZNeubslYSSgu_2VeZuLWgN3mKxPQAwM',
	authDomain: 'fir-auth-311de.firebaseapp.com',
	projectId: 'fir-auth-311de',
	storageBucket: 'fir-auth-311de.appspot.com',
	messagingSenderId: '185349758929',
	appId: '1:185349758929:web:ecbd1eb36813dfb2544af0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
