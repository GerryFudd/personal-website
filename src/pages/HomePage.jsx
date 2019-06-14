import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import mudboneGrownGroupPhoto  from '../resources/mudboneGrownGroupPhoto.jpg';
import keyboard  from '../resources/keyboard.jpg';
import landscape  from '../resources/landscape.jpg';
import {
  backgroundOfColorAndImage, transparentDark, transparentRed, transparentGrey
} from '../layout/snippets';
import StyledGrid from '../components/StyledGrid';

const StyledHomePage = styled.div`
flex: 1;
padding-bottom: 140px;

.portfolio {
  background: ${backgroundOfColorAndImage(transparentDark, keyboard)};
}

.extra-curriculars {
  background: ${backgroundOfColorAndImage(transparentRed, mudboneGrownGroupPhoto)};
}

.title-box {
  padding: 150px 0;
  margin: 0;
  background: ${backgroundOfColorAndImage(transparentGrey, landscape)};
}
`;
const HomePage = ({push}) => (<StyledHomePage>
  <div className="title-box">
      <p className="centered title">Sofware engineer in Portland, Oregon.</p>
      <p className="centered sub-title">I am not a designer.</p>
  </div>
  <StyledGrid>
  <Row>
    <Col xs={12} sm={6} onClick={() => push('/portfolio')}><div className="tile portfolio"><p className="centered blurb">Portfolio</p></div></Col>
    <Col xs={12} sm={6}><div className="tile extra-curriculars"><p className="centered blurb">Extra Curriculars</p></div></Col>
  </Row>
  </StyledGrid>
</StyledHomePage>);

export default connect(()=> ({}), dispatch => ({push: bindActionCreators(push, dispatch)}))(HomePage);
