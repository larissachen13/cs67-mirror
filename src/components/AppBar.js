import React from 'react';
import { Sun, Mail, Calendar } from 'react-feather';
import { MODULE_ACTIVE } from './util';

const size = 120;
const white = '#fff';

const AppBar = (props) => {
  const weatherBolded = props.moduleActive === MODULE_ACTIVE.WEATHER ? 'bolded' : '';
  const mailBolded = props.moduleActive === MODULE_ACTIVE.MAILBOX ? 'bolded' : '';
  const calendarBolded = props.moduleActive === MODULE_ACTIVE.CALENDAR ? 'bolded' : '';

  const weatherBlinking = props.moduleBlinking === MODULE_ACTIVE.WEATHER ? 'blink-me' : '';
  const mailBlinking = props.moduleBlinking === MODULE_ACTIVE.MAILBOX ? 'blink-me' : '';
  const calendarBlinking = props.moduleBlinking === MODULE_ACTIVE.CALENDAR ? 'blink-me' : '';
  return (
    <div className="app-bar">
      <div className={`app-bar-item ${weatherBolded} ${weatherBlinking}`} >
        <Sun color={white} size={size} />
      </div>
      <div className={`app-bar-item ${mailBolded} ${mailBlinking}`} >
        <Mail color={white} size={size} />
      </div>
      <div className={`app-bar-item ${calendarBolded} ${calendarBlinking}`} >
        <Calendar color={white} size={size} />
      </div>
    </div>
  );
};

export default AppBar;
