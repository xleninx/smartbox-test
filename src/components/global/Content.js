// dependencies
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

// Assets
import './css/Content.css';

// components
import AppBox from './App_box'

class Content extends Component {
  render() {
    return (
      <div className="content apps-container">
        <Row>
          <Col md={8} mdOffset={2}>
            <h2 className='apps-title'> Nuestras Apps </h2>
            <div className="apps-lists">
              <AppBox template_type="regular" img="./images/kunga.png" text="KUNGA - Actitud Animal"/>
              <AppBox template_type="radius" img="./images/foto-middle.png" text=""/>
              <AppBox template_type="regular" img="./images/directtv.png" text="DirectTV - TV Interactive"/>
              <div className="clearfix"></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
