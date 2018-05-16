import React, { Component } from 'react';
import AppBar from './AppBar';
import MirrorControl from './MirrorControl';
import Weather from './Weather';
import Mailbox from './Mailbox';
import Calendar from './Calendar';
import Gesturewheel from './Gesturewheel';
import { MODULE_ACTIVE } from './util';

class Mirror extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moduleActive: MODULE_ACTIVE.NONE,
    };
  }

  onModuleActiveChange = (newModuleActive) => {
    this.setState({
      moduleActive: newModuleActive,
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
            <p> {this.state.moduleActive} </p>
            <div className="active-module">
              {activeModule}
            </div>
          </div>
          <div className="bottom-of-mirror">
            <Gesturewheel moduleActive={this.state.moduleActive} />
            <AppBar />
          </div>
        </div>
        <div>
          <MirrorControl onModuleActiveChange={this.onModuleActiveChange} />
        </div>
      </div>
    );
  }
}

export default Mirror;
