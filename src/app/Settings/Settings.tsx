import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Background from './Background';
import Widgets from './Widgets';
import { resetAll, resetDashboard, resetSettings } from '../../data';
import './Settings.css';

interface Props {
  resetAll: () => void;
  resetDashboard: () => void;
  resetSettings: () => void;
}

class Settings extends Component<Props> {
  render() {
    return (
      <div className="Settings">
        <Link to="/" className="overlay" />

        <div className="plane">
          <h2>Settings</h2>

          <Background />
          <Widgets />

          <p>
            Reset&nbsp;
            <a href="javascript:;" onClick={this.props.resetDashboard}>dashboard</a>&nbsp;
            <a href="javascript:;" onClick={this.props.resetSettings}>settings</a>
            &nbsp;or&nbsp;
            <a href="javascript:;" onClick={this.props.resetAll}>everything</a>
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  resetAll,
  resetDashboard,
  resetSettings,
}

export default connect(null, mapDispatchToProps)(Settings);