import React from 'react'
import BarkLog from './BarkLog';
import firebase from 'firebase/app'
import "firebase/database"
import './App.css'
import './Button.css'


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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  const [testValue, setTestValue] = React.useState();

  firebase.database()
  .ref("/object")
  .get()
  .then(snap => setTestValue(snap.val()));

  function clear() {
    alert('clear coming soon');
  }

  return (
    <div className="container">
      <header>Mo-Watch</header>
      <div className="body">
        <BarkLog />
      </div>
      <footer>
        <button onClick={clear} className="primary">Clear</button>
      </footer>
    </div>
  );
}

export default App;
