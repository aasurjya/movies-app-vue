import firebase from 'firebase'
// import { initializeApp } from 'firebase/app'
// import firestore from 'firebase/firestore'

//Initialize firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCcR1Wi-peAjoeEHwAWNvA0ErcvDMSw2ko",
    authDomain: "userdatabase-fb5a6.firebaseapp.com",
    projectId: "userdatabase-fb5a6",
    storageBucket: "userdatabase-fb5a6.appspot.com",
    messagingSenderId: "198477178473",
    appId: "1:198477178473:web:ff3f1081d13f6e368ba4f8",
    measurementId: "G-JJNSL9B43G"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    
    export default firebaseApp.firestore()