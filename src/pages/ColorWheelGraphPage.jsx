import React from 'react';
import {Graph} from 'color-wheel-graph';
import styled from 'styled-components';

const StyledCWGPage = styled.div`

`;

const ColorWheelGraphPage = () => (<StyledCWGPage>
  <Graph
    resolution={101}
    cellSize={Math.floor(window.outerWidth / 100)}
    windowMaxReal={2}
    windowMaxImaginary={2}
    outputMaxReal={2}
    outputMaxImaginary={2}
    func={z => z}
  />
</StyledCWGPage>);

export default ColorWheelGraphPage;
