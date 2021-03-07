import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAT2EGsvR6FCHBGy8tDA7CctmiiRzh9glI",
	authDomain: "to-do-f2d7e.firebaseapp.com",
	projectId: "to-do-f2d7e",
	storageBucket: "to-do-f2d7e.appspot.com",
	messagingSenderId: "165542281624",
	appId: "1:165542281624:web:8e2678b5837dd4d8f3ebed",
});

const db = firebaseApp.firestore();

export default db;
