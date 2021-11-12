import './NoiseEvent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

function NoiseEvent(props) {
    const isLoud = props.volume == 'loud';
    const isMedium = props.volume == 'medium';
    const isQuiet = props.volume == 'quiet';

    const fontSize = isLoud ? '1.75rem' : (isMedium ? '1.25rem' : (isQuiet ? '0.75rem' : ''));
    const iconColor = isLoud ? 'red' : (isMedium ? 'yellow' : (isQuiet ? 'green' : ''));
    const text = isLoud ? 'Loud Noise!' : (isMedium ? 'Medium Noise' : (isQuiet ? 'Quiet Noise' : ''));
    return (
      <div className="noise-event-container" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'row', marginRight: '2rem', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faExclamationCircle} style={{marginRight: '1rem', fontSize: fontSize, color: iconColor}} />
          <span className="noise-event-text" style={{fontSize: fontSize}}>{text}</span>
        </div>
        <div key={props.key} style={{display: 'flex', flexDirection: 'column', fontSize: '0.875rem', color: '#424141'}}>
          <span>{'From: ' + props?.startTime + ' - ' + props.endTime}</span>
          <span>{'Duration: ' + props?.duration}</span>
        </div>
      </div>
    )
}

export default NoiseEvent;
