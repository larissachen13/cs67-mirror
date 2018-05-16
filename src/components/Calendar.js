import React from 'react';
import { List } from 'react-feather';
import { MAIN_SIZE } from './util';


const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <List color="#fff" size={MAIN_SIZE - 100} />
        <div className="montserrat-semibold calendar-name"> Schedule </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 9:00am </div>
        <div className="calendar-item-text"> Meeting w/ Kim </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 10:00am </div>
        <div className="calendar-item-text"> Meeting w/ Joey </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 11:00am </div>
        <div className="calendar-item-text"> Meeting w/ Casey </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 12:00pm </div>
        <div className="calendar-item-text"> Lunch  </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 1:00pm </div>
        <div className="calendar-item-text"> Break  </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 2:00pm </div>
        <div className="calendar-item-text"> Nap  </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 3:00pm </div>
        <div className="calendar-item-text"> Call w/ Katy  </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 4:00pm </div>
        <div className="calendar-item-text"> Catch up  </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 5:00pm </div>
        <div className="calendar-item-text"> Relax  </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 6:00pm </div>
        <div className="calendar-item-text"> Go home </div>
      </div>
      <div className="calendar-item">
        <div className="calendar-item-time"> 7:00pm </div>
        <div className="calendar-item-text"> Dinner  </div>
      </div>
    </div>

  );
};

export default Calendar;
