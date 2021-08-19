import logo from './logo.svg';
import './App.css';


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

function App() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const [testValue, setTestValue] = React.useState();

  const test = firebase.database().ref().child('object');

  test.on('value', snap => setTestValue(snap.val()));

  return (
    <span>{testValue}</span>
  );
}

export default App;
