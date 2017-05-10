// React dependencies
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Components
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="gutter-10">
            <Col xs={12}>
              <Header />
              <Content />
              <Footer />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
