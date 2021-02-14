import React from 'react';
import s from './Clock.module.css';

const Clock = () => {

  let hours = React.createRef();
  let colon = React.createRef();
  let minutes = React.createRef();

  return (
    <div className={s.clock}>
      <span ref={hours} className={s.hours}>19</span><span ref={colon} className={s.colon}>:</span><span ref={minutes} className={s.minutes}>23</span>
    </div>
  );
}

export default Clock;