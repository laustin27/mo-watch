import React from 'react'
import firebase from 'firebase/app'
import "firebase/database"
import './App.css'
import './Button.css'
import { useListVals } from 'react-firebase-hooks/database';
import { useObjectVal } from 'react-firebase-hooks/database';
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import {formatTime, NoiseEventList} from './NoiseEventList';


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

function StatsDropdownHeader(props) {
  return (
    <span style={{paddingLeft: '1rem', alignItems: 'center', height: '8vh', display: 'flex', cursor: 'pointer', justifyContent: 'space-between', boxShadow: '0px 0px 6px 0 #000'}}>
      Stats
      <FontAwesomeIcon icon={props.dropdownOpen ? faCaretUp : faCaretDown} style={{paddingRight: '1rem'}}/>
    </span>
  )
}

function App() {
  const [value] = useObjectVal(
    firebase.database().ref("/StartTime"),
    {
      transform: (val) => (new Date(val))
    }
  );

  const [values, loading, error] = useListVals(firebase.database().ref("/NoiseEvents"));
  const [summary, setSummary] = React.useState();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    let quietBarks  = 0;
    let mediumBarks = 0;
    let loudBarks   = 0;
    let firstBarkTime = null;

    if (values?.length > 0) {
      values?.map((noiseEvent, index) => { 
        if (noiseEvent.LoudNoiseHappened == 1) {
          loudBarks++;
        } 
        else if (noiseEvent.MediumNoiseHappened == 1) {
          mediumBarks++;
        }
        else if (noiseEvent.QuietNoiseHappened == 1) {
          quietBarks++;
        }

        if (index == 0) {
          firstBarkTime = formatTime(noiseEvent.StartTimestampMinute) + ':' + formatTime(noiseEvent.StartTimestampSecond);
        }
      });

      setSummary({
        quietBarks: quietBarks,
        mediumBarks: mediumBarks,
        loudBarks: loudBarks,
        firstBarkTime: firstBarkTime
      });
    }
  }, [values]);
  return (
    <body>
      <header>
        { value &&
          <span>
            {`Device last started on ${value.toLocaleDateString('en-US', dateOptions)} at ${value.toLocaleTimeString('en-US')}`}
          </span>
        }
      </header>
      {
        summary && 
        <Collapsible trigger={<StatsDropdownHeader dropdownOpen={dropdownOpen} />} open={dropdownOpen} handleTriggerClick={() => setDropdownOpen(!dropdownOpen)}>
            <p>Baby Barks: {summary.quietBarks}</p>
            <p>Barks: {summary.mediumBarks}</p>
            <p>Big Boy Barks: {summary.loudBarks}</p>
            <p>First noise detected after {summary.firstBarkTime}</p>
        </Collapsible>
      }
      <div className="body">
        <NoiseEventList values={values} loading={loading} error={error}/>
      </div>
    </body>
  );
}

export default App;
