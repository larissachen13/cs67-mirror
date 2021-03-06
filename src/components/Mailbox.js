import React from 'react';
import { Mail } from 'react-feather';
import { MAIN_SIZE } from './util';

const Mailbox = () => {
  return (
    <div className="mail">
      <div className="mail-header">
        <Mail color="#fff" size={MAIN_SIZE - 100} />
        <div className="montserrat-semibold mailbox-name"> lar1@gmail.com </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller"> Chase</div>
        <div className="mail-line-item bigger"> Your balance is... </div>
        <div className="mail-line-item smaller"> 12:30am </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> David </div>
        <div className="mail-line-item bigger"> Hi! Are you available for... </div>
        <div className="mail-line-item smaller"> 9:30pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Equinox </div>
        <div className="mail-line-item bigger"> Complete your registration ... </div>
        <div className="mail-line-item smaller"> 8:48am </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Boss </div>
        <div className="mail-line-item bigger"> Can you come in today ... </div>
        <div className="mail-line-item smaller"> 7:48pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Ebay </div>
        <div className="mail-line-item bigger"> Your order is complete. ... </div>
        <div className="mail-line-item smaller"> 7:12pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Amazon </div>
        <div className="mail-line-item bigger"> Everything is 50% off... </div>
        <div className="mail-line-item smaller"> 6:10pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Dartmouth </div>
        <div className="mail-line-item bigger"> Would you want to ... </div>
        <div className="mail-line-item smaller"> 5:25pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Mom </div>
        <div className="mail-line-item bigger"> How are you going... </div>
        <div className="mail-line-item smaller"> 4:38pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Carson </div>
        <div className="mail-line-item bigger"> Left a voicemail... </div>
        <div className="mail-line-item smaller"> 3:58pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Youtube </div>
        <div className="mail-line-item bigger"> Check back for new videos... </div>
        <div className="mail-line-item smaller"> 2:23pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Dartmouth </div>
        <div className="mail-line-item bigger"> New gmail account has... </div>
        <div className="mail-line-item smaller"> 1:47pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Brittany</div>
        <div className="mail-line-item bigger"> Hi, Larissa, I enjoyed... </div>
        <div className="mail-line-item smaller"> 12:48pm </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Brittany</div>
        <div className="mail-line-item bigger"> Hi, Laririssa... </div>
        <div className="mail-line-item smaller"> 11:48am </div>
      </div>
      <div className="mail-item">
        <div className="mail-line-item smaller "> Bloomingd </div>
        <div className="mail-line-item bigger">  Your discount is inside... </div>
        <div className="mail-line-item smaller"> 10:48am </div>
      </div>
    </div>
  );
};

export default Mailbox;
