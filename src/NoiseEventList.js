import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './NoiseEventList.css';
import NoiseEvent from './NoiseEvent.js'
import { faSmileBeam, faFrown, faHourglass, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { useListVals } from 'react-firebase-hooks/database';
import moBounce from './moBounce2.gif'

function formatTime(data) {
  let dataString = data.toString();

  if (dataString) {
    if (dataString.length == 1) {
      return '0' + dataString;
    }

    return dataString;
  }

  return null;
}

function NoiseEventList(props) {
  const [values, loading, error] = useListVals(props.firebase.database().ref("/NoiseEvents"));

  let content;
  if (error) {
    content = 
      <div className="message-container">
        <FontAwesomeIcon icon={faFrown} className="big-icon"/>
        <h1>Something went wrong</h1>
      </div>
  } else if (loading) {
    content = 
      <div className="message-container">
        <img src={moBounce} style={{height: '70px', width: '70px'}}></img>
        <h2 style={{marginTop: '0'}}>Loading...</h2>
      </div>
  } else if (values && values.length > 0) {
    content = 
      values?.map((noiseEvent, index) => { 
        const volume = noiseEvent.LoudNoiseHappened == 1 
                        ? 'loud' 
                        : (
                            noiseEvent.MediumNoiseHappened == 1
                            ? 'medium' 
                            : (
                              noiseEvent.QuietNoiseHappened == 1 ? 'quiet' : ''
                              )
                          );
        return (
          <NoiseEvent 
            key = {index}
            volume={volume}
            startTime={formatTime(noiseEvent.StartTimestampMinute) + ':' + formatTime(noiseEvent.StartTimestampSecond)}
            endTime={formatTime(noiseEvent.EndTimestampMinute) + ':' + formatTime(noiseEvent.EndTimestampSecond)}
            duration={formatTime(noiseEvent.DurationMinutes) + ':' + formatTime(noiseEvent.DurationSeconds)}
          />
        )
      });
  } else if (values.length == 0) {
    content = 
      <div className="message-container">
        <FontAwesomeIcon icon={faSmileBeam} className="big-icon"/>
        <h1>Hooray!!</h1>
        <span>No barks have happened yet</span>
      </div>
  } else {
    content = 
      <div className="message-container">
        <FontAwesomeIcon icon={faQuestion} className="big-icon"/>
        <h1>Not Sure</h1>
        <span>This is embarassing... I don't know what to display</span>
      </div>
  }

  return (
    <div class="noise-event-list-container">
      { content }
    </div>
  );
}

export default NoiseEventList;
