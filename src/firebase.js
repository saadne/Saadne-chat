import firebase from 'firebase/app';
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBDey6ALhwGUI2AN0c6TKtrbuFa1Dz0SRc",
    authDomain: "saadnechat-6d804.firebaseapp.com",
    projectId: "saadnechat-6d804",
    storageBucket: "saadnechat-6d804.appspot.com",
    messagingSenderId: "152655152921",
    appId: "1:152655152921:web:e352aaf8c0a41c02d1a788"
  }).auth();