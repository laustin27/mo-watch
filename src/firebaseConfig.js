import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBLYuScmM2f7tn458Ue9TiWVS5FnuCExfQ",
    authDomain: "mo-watch.firebaseapp.com",
    databaseURL: "https://mo-watch-default-rtdb.firebaseio.com",
    projectId: "mo-watch",
    storageBucket: "mo-watch.appspot.com",
    messagingSenderId: "86065285680",
    appId: "1:86065285680:web:eb770abf0d22044715bbf5",
    measurementId: "G-TFCK2JPGGG"
  };

const app = Firebase.initializeApp(firebaseConfig);

export const db = app.database();