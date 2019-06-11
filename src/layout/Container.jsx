import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import styled from 'styled-components';

const StyledContainer = styled.div`
display: flex;
flex-direction: column;

.centered {
  text-align: center;
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
    </Nav>
  </Navbar>
  {children}
  </StyledContainer>
);

export default Container;
