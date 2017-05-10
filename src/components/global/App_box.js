// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

// Assets
import './css/App_box.css';


class AppBox extends Component {
  static propTypes = {
    template_type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    const { template_type, img, text } = this.props
    return (
      <div className="app-box gutter-10">
        <Col lg="4" md="4" sm="12" xs="12">
          <div className={`image-wrapper-${template_type}`}>
            <img src={require(img)} alt='app_image' />
            <p> { text } </p>
          </div>
        </Col>
      </div>
    );
  }
}

export default AppBox;
