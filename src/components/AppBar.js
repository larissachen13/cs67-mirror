import React from 'react';
import { Sun, Mail, Calendar } from 'react-feather';

const size = 120;
const white = '#fff';

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-bar-item" >
        <Sun color={white} size={size} />
      </div>
      <div className="app-bar-item" >
        <Mail color={white} size={size} />
      </div>
      <div className="app-bar-item" >
        <Calendar color={white} size={size} />
      </div>
    </div>
  );
};

export default AppBar;
