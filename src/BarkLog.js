import React from 'react'
import './BarkLog.css';
import BarkLogRow from './BarkLogRow.js'

function BarkLog(props) {
  return (
    <div class="bark-log-container">
      <BarkLogRow startTime="test" endTime="whatever" />
      <BarkLogRow startTime="test1" endTime="whatever" />
      <BarkLogRow startTime="test" endTime="whatever" />
      <BarkLogRow startTime="test" endTime="whatever4" />
      <BarkLogRow startTime="test4" endTime="whatever" />
      <BarkLogRow startTime="test" endTime="whatever" />
      <BarkLogRow startTime="test5" endTime="whatever" />
      <BarkLogRow startTime="test" endTime="whatever4" />
      <BarkLogRow startTime="test" endTime="whatever" />
    </div>
  );
}

export default BarkLog;
