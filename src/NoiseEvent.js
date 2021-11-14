import './NoiseEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import {getTimeDifference} from './date-utils'

function NoiseEvent(props) {
    const isLoud = props.volume == 'loud';
    const isMedium = props.volume == 'medium';
    const isQuiet = props.volume == 'quiet';

    const iconColor = isLoud ? 'red' : (isMedium ? 'yellow' : (isQuiet ? 'green' : ''));
    const text = isLoud ? 'BIG BARK!' : (isMedium ? 'Bark' : (isQuiet ? 'baby bark' : ''));

    const timestampDate = getTimeDifference(props.startTime, props.timestampMinutes, props.timestampSeconds);

    return (
      <div>
        <div className="noise-event-container" style={{display: 'flex', flexDirection: 'row', paddingRight: '1rem', paddingLeft: '1rem', fontSize: '0.75rem', alignItems: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'row', width: '33%', marginRight: '1rem'}}>
            <FontAwesomeIcon icon={faExclamationCircle} style={{marginRight: '1rem', color: iconColor, fontSize: '1rem'}} fixedWidth/>
            <span className="noise-event-text">{text}</span>
          </div>
          <div key={props.key} style={{display: 'flex', flexDirection: 'column', width: '67%'}}>
            <div>{'Occurred at ' + timestampDate.toLocaleTimeString('en-US') }</div>
            <div>{'after ' + (props?.timestampMinutes > 1 ? props?.timestampMinutes + (props?.timestampMinutes == 1 ? ' minute' : ' minutes') + ' and ' : '') + props?.timestampSeconds + ' seconds'}</div>
          </div>
        </div>
      </div>
    )
}

export default NoiseEvent;
