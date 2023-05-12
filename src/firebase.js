// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBdmOm6ZEzUDU96qpHugBoJBiNGiQa4Vko',
	authDomain: 'recipeapp-340ef.firebaseapp.com',
	projectId: 'recipeapp-340ef',
	storageBucket: 'recipeapp-340ef.appspot.com',
	messagingSenderId: '352033844981',
	appId: '1:352033844981:web:7b9f0116ade1a270d41fbc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
