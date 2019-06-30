import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import styled from 'styled-components';

const StyledContainer = styled.div`
display: flex;
flex-direction: column;

.space-right {
  margin-right: 5px!important;
}

li, p {
  font-size: 18px;
}

p {
  margin: 0 0 20px;
  margin-bottom: 20px;
  line-height: 35px;
  font-size: 18px;
}

.navbar {
  margin-bottom: 0;
}

.centered {
  text-align: center;
}

.title {
  font-size: 30px;
}

.sub-title {
  font-size: 20px;
}
`;
const Container = ({children}) => (
  <StyledContainer style={{minHeight: window.innerHeight}}>
    <Navbar fluid inverse>
    <Navbar.Header>
      <Navbar.Brand><Link to='/'>David Hasenjaeger</Link></Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={0} href={'/resume'}>
        Resume
      </NavItem>
      <NavItem eventKey={0} href={'/portfolio'}>
        Portfolio
      </NavItem>
    </Nav>
  </Navbar>
  {children}
  </StyledContainer>
);

export default Container;
