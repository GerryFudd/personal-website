import React, {Component} from 'react';
import MathJax from 'react-mathjax';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import _ from 'lodash';

import {Polynomial, ComplexNumber} from 'complex-calculator';
import {Graph} from 'color-wheel-graph';

const debounce = cb => {
  let timeoutIndex;
  return (...args) => {
    if (!_.isUndefined(timeoutIndex)) {
      clearTimeout(timeoutIndex);
    }

    timeoutIndex = setTimeout(() => {
      cb(...args);
    }, 500);
  }
}

class ExampleGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {func: props.func, markdown: props.markdown};
    this.updateFunction = this.updateFunction.bind(this);
  }

  updateFunction(value) {
    let index;
    if (value < 0) {
      index = 0;
    } else {
      index = Math.min(Number(value));
    }
    console.log(`value ${index}`);
    console.log(typeof index);
    const {func, markdown, printPolynomial, coefficientsFunc} = this.props;
    let coefficients = [];
    for (let i = 0; i <= index; i++) {
      coefficients.push(coefficientsFunc(i));
    }
    const taylorSeries = new Polynomial(coefficients);
    const negativeOne = new ComplexNumber(-1, 0)
    this.setState({
      markdown: `${markdown} - (${printPolynomial(index)})`,
      func: x => func(x).plus(taylorSeries.evaluate(x).times(negativeOne))
    });
  }

  render() {
    const {func, markdown} = this.state;
    return (<div>
      <FormGroup controlId="polynomiallDegree">
        <ControlLabel>How many terms of the Taylor Series do you want to subtract?</ControlLabel>
        <FormControl type="number" placeholder="What is the largest power in the Taylor Series..." onChange={(e) => debounce(this.updateFunction)(e.target.value)}/>
      </FormGroup>
      <MathJax.Provider>
        <MathJax.Node formula={markdown}/>
      </MathJax.Provider>
      <Graph
        resolution={101}
        cellSize={10}
        windowMaxReal={2}
        windowMaxImaginary={2}
        outputMaxReal={2}
        outputMaxImaginary={2}
        func={func}
      />
    </div>)
  }
}

export default ExampleGraph;
