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

  const [values, loading, error] = useListVals(props.firebase.database().ref("/NoiseEvents"));
  const [summary, setSummary] = React.useState();

  React.useEffect(() => {

  }, [values]);
  return (
    <body>
      <header>
        {/* <img src={headerImg} /> */}
        {/* <span style={{marginTop: '0.5rem'}}>Mo Watch</span> */}
        { value &&
          <span>
            {`Device last started on ${value.toLocaleDateString('en-US', dateOptions)} at ${value.toLocaleTimeString('en-US')}`}
          </span>
        }
      </header>
      <div className="body">
        <NoiseEventList values={values} loading={loading} error={error}/>
      </div>
      <footer>
        
      </footer>
    </body>
  );
}

export default App;
