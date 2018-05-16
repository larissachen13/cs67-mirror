import React from 'react';
import { ChevronUp, ChevronDown, ChevronRight, ChevronLeft } from 'react-feather';
import { MODULE_ACTIVE, SMALLER_SIZE } from './util';

const Gesturewheel = (props) => {
  let up, down, left, right, message;
  if (props.moduleActive === MODULE_ACTIVE.WEATHER) {
    up = true;
    down = true;
    left = false;
    right = false;
    message = '';
  } else if (props.moduleActive === MODULE_ACTIVE.MAILBOX) {
    up = true;
    down = true;
    left = false;
    right = false;
    message = '';
  } else if (props.moduleActive === MODULE_ACTIVE.CALENDAR) {
    up = true;
    down = true;
    left = false;
    right = false;
    message = '';
  } else {
    up = false;
    down = false;
    left = false;
    right = false;
    message = 'Make fist over app to select';
  }
  const size = SMALLER_SIZE + 20;
  const upIcon = up ? <ChevronUp color="#fff" size={size} /> : <div />;
  const downIcon = down ? <ChevronDown color="#fff" size={size} /> : <div />;
  const leftIcon = left ? <ChevronLeft color="#fff" size={size} /> : <div />;
  const rightIcon = right ? <ChevronRight color="#fff" size={size} /> : <div />;
  return (
    <div className="gesture-wheel-container">
      <div className="gesture-wheel">
        <div className="gesture-wheel-icon up-icon"> {upIcon} </div>
        <div className="gesture-wheel-icon down-icon "> {downIcon} </div>
        <div className="gesture-wheel-icon left-icon "> {leftIcon} </div>
        <div className="gesture-wheel-icon right-icon "> {rightIcon} </div>
        <div className="gesture-message"> {message} </div>
      </div>
    </div>
  );
};

export default Gesturewheel;
