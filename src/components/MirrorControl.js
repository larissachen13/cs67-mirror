import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MODULE_ACTIVE } from './util';

class MirrorControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: MODULE_ACTIVE.NONE,
    };
  }

  onButtonChangeNone = (activeModule) => {
    this.setState({
      active: activeModule,
    });
    this.props.onModuleActiveChange(activeModule);
  }


  onButtonChange = (activeModule) => {
    this.setState({
      active: activeModule,
    });
    this.props.onModuleBlinkingChange(activeModule);
    setTimeout(() => {
      this.props.onModuleActiveChange(activeModule);
      this.props.onModuleBlinkingChange(MODULE_ACTIVE.NONE);
    }, 1000);
  }

  render() {
    return (
      <div className="mirror-control">
        <input type="radio" // none
          checked={this.state.active === MODULE_ACTIVE.NONE}
          onChange={() => this.onButtonChangeNone(MODULE_ACTIVE.NONE)}
        />
        <input type="radio" // weather
          checked={this.state.active === MODULE_ACTIVE.WEATHER}
          onChange={() => this.onButtonChange(MODULE_ACTIVE.WEATHER)}
        />
        <input type="radio" // mail
          checked={this.state.active === MODULE_ACTIVE.MAILBOX}
          onChange={() => this.onButtonChange(MODULE_ACTIVE.MAILBOX)}
        />
        <input type="radio" // calendar
          checked={this.state.active === MODULE_ACTIVE.CALENDAR}
          onChange={() => this.onButtonChange(MODULE_ACTIVE.CALENDAR)}
        />
      </div>
    );
  }
}

MirrorControl.propTypes = {
  onModuleActiveChange: PropTypes.func.isRequired,
};

export default MirrorControl;
