import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
padding: 50px;
background: rgba(0, 0, 0, 0.2);
width: 100%;

.tile {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

p.blurb {
  color: #fff;
  font-size: 20px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3)
}
`;

export default StyledGrid;
