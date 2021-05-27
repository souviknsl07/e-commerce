import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEPIsy9izzecj5hnyvldHKhGqT45GHcV0",
  authDomain: "e-commerce-fullstack-template.firebaseapp.com",
  projectId: "e-commerce-fullstack-template",
  storageBucket: "e-commerce-fullstack-template.appspot.com",
  messagingSenderId: "1073721888159",
  appId: "1:1073721888159:web:872f2898dc28dbaf54c1aa",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
