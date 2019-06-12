import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import mudboneGrownGroupPhoto  from '../resources/mudboneGrownGroupPhoto.jpg';
import keyboard  from '../resources/keyboard.jpg';
import landscape  from '../resources/landscape.jpg';
import {
  backgroundOfColorAndImage, transparentDark, transparentRed, transparentGrey
} from '../layout/snippets';

const StyledHomePage = styled.div`
flex: 1;

.tile {
  height: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.portfolio {
  background: ${backgroundOfColorAndImage(transparentDark, keyboard)};
}

.extra-curriculars {
  background: ${backgroundOfColorAndImage(transparentRed, mudboneGrownGroupPhoto)};
}

p.blurb {
  color: #fff;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3)
}

.title-box {
  padding: 120px 0;
  margin-top: -20px;
  background: ${backgroundOfColorAndImage(transparentGrey, landscape)};
}

.title {
  font-size: 30px;
}

.sub-title {
  font-size: 20px;
}
`;
const HomePage = () => (<StyledHomePage>
  <div className="title-box">
      <p className="centered title">Sofware engineer in Portland, Oregon.</p>
      <p className="centered sub-title">I care about things.</p>
    </div>
  <Grid>
  <Row>
    <Col xs={12} sm={6}><div className="tile portfolio"><p className="centered blurb">Portfolio</p></div></Col>
    <Col xs={12} sm={6}><div className="tile extra-curriculars"><p className="centered blurb">Extra Curriculars</p></div></Col>
  </Row>
  </Grid>
</StyledHomePage>);

export default HomePage;
