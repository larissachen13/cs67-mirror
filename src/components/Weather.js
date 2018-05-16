import React from 'react';
import { Sun, Cloud, CloudDrizzle } from 'react-feather';
import { MAIN_SIZE, SMALLER_SIZE } from './util';

const Weather = () => {
  return (
    <div className="weather">
      <div className="weather-main">
        <div>
          <Sun color="#fff" size={MAIN_SIZE} />
          <span className="degrees">
            57 &#8457;
          </span>
        </div>
        <div className="montserrat-light"> Sunny and warm </div>
      </div>
      <div className="weather-hours">
        <div className="weather-hour">
          <span className="weather-hour-time"> 8:00am </span>
          <Cloud className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 57 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 9:00am </span>
          <Cloud className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 58 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 10:00am </span>
          <Cloud className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 60 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 10:00am </span>
          <CloudDrizzle className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 60 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 11:00am </span>
          <CloudDrizzle className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 60 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 12:00pm </span>
          <CloudDrizzle className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 60 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 12:00pm </span>
          <Cloud className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 62 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 1:00pm </span>
          <Cloud className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 62 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 2:00pm </span>
          <Cloud className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 62 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 3:00pm </span>
          <Sun className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 64 &#8457; </span>
        </div>
        <div className="weather-hour">
          <span className="weather-hour-time"> 4:00pm </span>
          <Sun className="weather-hour-icon" color="#fff" size={SMALLER_SIZE} />
          <span className="weather-hour-degree"> 64 &#8457; </span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
