import React from 'react'
import NoiseEventList from './NoiseEventList';
import firebase from 'firebase/app'
import "firebase/database"
import './App.css'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useObjectVal } from 'react-firebase-hooks/database';


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

const dateOptions = {year: 'numeric', month: 'long', day: 'numeric' };

function App() {
  const [value, loading, error] = useObjectVal(
    firebase.database().ref("/StartTime"),
    {
      transform: (val) => (new Date(val))
    }
  );

  function clear() {
    alert('clear coming soon');
  }

  return (
    <body>
      <header>
        {/* <img src={headerImg} /> */}
        <span style={{marginTop: '0.5rem'}}>Mo Watch</span>
      </header>
      <div className="body">
        { value &&
          <span style={{textAlign: 'center', fontSize: '0.75rem', paddingTop: '0.5rem', paddingBottom: '0.5rem'}}>
            {`Device last started on ${value.toLocaleDateString('en-US', dateOptions)} at ${value.toLocaleTimeString('en-US')}`}
          </span>
        }
        <NoiseEventList firebase={firebase}/>
      </div>
    </body>
  );
}

export default App;
