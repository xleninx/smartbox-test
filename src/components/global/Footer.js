// dependencies
import React, { Component } from 'react';

// assets
import './css/Footer.css';
import footer_image from './images/NuncheeInteractive White.png'


class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="parallax">
        </div>
        <div className="footer-wrapper">
          <img src={footer_image} className="footer-image" alt="footer_image"/>
        </div>
      </div>
    );
  }
}

export default Footer;
