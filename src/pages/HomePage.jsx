import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

const HomePage = () => (<Grid>
  <Row>
    <Col xs={16}><p className="centered">Sofware engineer in Portland, Oregon. I care about things.</p></Col>
  </Row>
</Grid>);

export default HomePage;
