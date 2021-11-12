import './NoiseEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function NoiseEvent(props) {
    const isLoud = props.volume == 'loud';
    const isMedium = props.volume == 'medium';
    const isQuiet = props.volume == 'quiet';

    const iconColor = isLoud ? 'red' : (isMedium ? 'yellow' : (isQuiet ? 'green' : ''));
    const text = isLoud ? 'BIG BARK!' : (isMedium ? 'Bark' : (isQuiet ? 'baby bark' : ''));
    return (
      <div>
        <div className="noise-event-container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', fontSize: '0.75rem'}}>
          <div style={{display: 'flex', flexDirection: 'row', marginRight: '2rem', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faExclamationCircle} style={{marginRight: '1rem', color: iconColor, fontSize: '1rem'}} fixedWidth/>
            <span className="noise-event-text">{text}</span>
          </div>
          <div key={props.key} style={{display: 'flex', flexDirection: 'column'}}>
            <span>{'From: ' + props?.startTime + ' - ' + props.endTime}</span>
            <span>{'Duration: ' + props?.duration}</span>
          </div>
        </div>
      </div>
    )
}

export default NoiseEvent;
