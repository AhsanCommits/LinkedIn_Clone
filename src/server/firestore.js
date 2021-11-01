import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBsUAag-mhySGCStb8UQelAvU8ISjYShyg',
  authDomain: 'linkedin-clone-43f55.firebaseapp.com',
  projectId: 'linkedin-clone-43f55',
  storageBucket: 'linkedin-clone-43f55.appspot.com',
  messagingSenderId: '152386639146',
  appId: '1:152386639146:web:d21f0a84ef8a894b3a7a53',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
