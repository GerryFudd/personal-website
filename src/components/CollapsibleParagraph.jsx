import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CollapsibleParagraphContainer = styled.div`
display: flex;
flex-direction: column;

&.with-separator {
  border-bottom: 8px solid rgba(0, 0, 0, 0.15);
}

.icon-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  
  * {
    display: flex;
    margin: 0;
  }
  svg {
    margin: 0 50px 0 20px;
  }
  
  svg.one {
    font-size: 70px;
  }
  
  svg.two {
    font-size: 60px;
  }
  
  svg.three {
    font-size: 50px;
  }
}

.paragraph-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .centered {
    align-self: center;
  }
}
`;

class CollapsibleParagraph extends Component {
  constructor(props) {
    super(props);

    const {collapsed} = props;
    this.state = {collapsed};
    this.toggle = this.toggle.bind(this);
  }

  toggle(collapsed) {
    this.setState({collapsed});
  }

  render() {
    const {collapsed} = this.state;
    const {children, headerElement, headerType, separated} = this.props;

    return (<CollapsibleParagraphContainer className={separated ? 'with-separator': ''}>
    <div className="icon-header">
      {collapsed
        ? <FontAwesomeIcon onClick={() => this.toggle(false)} className={headerType} icon={faAngleRight}/>
        : <FontAwesomeIcon onClick={() => this.toggle(true)} className={headerType} icon={faAngleDown}/>}
      {headerElement}
    </div>
    {!collapsed && <div className="paragraph-container">
      {children}
    </div>}
    </CollapsibleParagraphContainer>);
  }
}

export default CollapsibleParagraph;
