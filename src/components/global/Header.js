// dependencies
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

// assets
import logo from './images/icon.png';
import nunchee_logo from './images/NuncheeInteractive.png';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <br/>
          <img src={nunchee_logo} className="nuchee-logo" alt="Nunchee Interactive" />
          <br/>
          <Col md={6} mdOffset={3}>
             <p className="header-text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             </p>
          </Col>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default Header;
