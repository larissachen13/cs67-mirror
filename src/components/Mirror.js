import React, { Component } from 'react';
import { Sun } from 'react-feather';
import AppBar from './AppBar';
import MirrorControl from './MirrorControl';
import Weather from './Weather';
import Mailbox from './Mailbox';
import Calendar from './Calendar';
import Gesturewheel from './Gesturewheel';
import { MODULE_ACTIVE, SMALLER_SIZE } from './util';

class Mirror extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moduleActive: MODULE_ACTIVE.NONE,
      moduleBlinking: MODULE_ACTIVE.NONE,
    };
  }

  onModuleActiveChange = (newModuleActive) => {
    this.setState({
      moduleActive: newModuleActive,
    });
  }

  onModuleBlinkingChange = (newModuleBlinking) => {
    this.setState({
      moduleBlinking: newModuleBlinking,
    });
  }


  render() {
    let activeModule;
    if (this.state.moduleActive === MODULE_ACTIVE.WEATHER) {
      activeModule = <Weather />;
    } else if (this.state.moduleActive === MODULE_ACTIVE.MAILBOX) {
      activeModule = <Mailbox />;
    } else if (this.state.moduleActive === MODULE_ACTIVE.CALENDAR) {
      activeModule = <Calendar />;
    } else {
      activeModule = <div />;
    }
    return (
      <div className="mirror">
        <div className="mirror-content">
          <div className="top-of-mirror">
            <div className="mirror-header">
              <div className="mirror-header-time"> Thurs., May 18 </div>
              <div className="mirror-header-time"> 01:10pm </div>
              <div className="mirror-header-weather">
                <Sun color="#fff" size={SMALLER_SIZE + 20} /> <span className="mirror-header-degrees"> 67 &#8457;</span>
              </div>
            </div>
            <div className="active-module">
              {activeModule}
            </div>
          </div>
          <div className="bottom-of-mirror">
            <Gesturewheel moduleActive={this.state.moduleActive} />
            <AppBar moduleActive={this.state.moduleActive} moduleBlinking={this.state.moduleBlinking} />
          </div>
        </div>
        <div>
          <MirrorControl
            className="mirror-control"
            onModuleActiveChange={this.onModuleActiveChange}
            onModuleBlinkingChange={this.onModuleBlinkingChange}
          />
        </div>
      </div>
    );
  }
}

export default Mirror;
