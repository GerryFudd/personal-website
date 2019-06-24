import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import colorWheelGraphImage from '../resources/colorWheelGraph.png';
import StyledGrid from '../components/StyledGrid';
import {backgroundOfColorAndImage} from '../layout/snippets';

const StyledPortfolioPage = styled.div`
.color-wheel-graph {
  background: ${backgroundOfColorAndImage('transparent', colorWheelGraphImage)}
}
`;

const PortfolioPage = ({push}) => (
  <StyledPortfolioPage>
    <StyledGrid>
      <Row>
        <Col xs={12} sm={6}><div onClick={() => push('/color-wheel-graph')} className="tile color-wheel-graph"><p className="centered blurb">Color Wheel Graph</p></div></Col>
        <Col xs={12} sm={6}></Col>
      </Row>
    </StyledGrid>
  </StyledPortfolioPage>
);

export default connect(() => ({}), {push})(PortfolioPage);
