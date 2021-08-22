import './BarkLogRow.css';

function BarkLogRow(props) {
    return (
      <div className="bark-row-container">
        <span className="bark-row-text">Bark!</span>
        <span className="bark-row-start">{props.startTime}</span>
        <span className="bark-row-end">{props.endTime}</span>
      </div>
    )
}

export default BarkLogRow;
