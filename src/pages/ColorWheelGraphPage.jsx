import React from 'react';
import {ComplexNumber} from 'complex-calculator';
import styled from 'styled-components';
import MathJax from 'react-mathjax';

import graphImage  from '../resources/graphImage.png';
import CollapsibleParagraph from '../components/CollapsibleParagraph';
import ExampleGraph from '../components/ExampleGraph';

const StyledCWGPage = styled.div`
display: flex;
align-items: center;
flex-direction: column;

.narrative-container {
  width: 80%;
  min-width: 500px;
}

.example-graph {
  align-self: flex-start;
}
`;

const partialSums = `
\\begin{aligned}
1 + 2 &= 3\\\\
1 + 2 + 3 &= 6\\\\
1 + 2 + 3 + 4 &= 10
\\end{aligned}
`;

const derivation = `
\\begin{aligned}
c&=1+2+3+4+...\\\\
4c&=\\hspace{0.78cm}4+\\hspace{0.7cm}8+...\\\\
-3c&=1-2+3-4+...
\\end{aligned}
`;

const printPolynomial = coefficientsFunc => index => {
  const coefficients = [];
  for (let i = 0; i <= index; i++) {
    coefficients.push(coefficientsFunc(i));
  }
  return coefficients.reduce((acc, coefficient, ind) => {
    if (coefficient === 0) {
      return acc;
    }
    let newTerm;
    let power;
    if (ind === 0) {
      newTerm = coefficient;
    } else {
      if (ind === 1) {
        power = `x`;
      } else {
        power = `x^{${ind}}`;
      }

      if (coefficient === 1) {
        newTerm = power;
      } else if (coefficient === -1) {
        newTerm = `-${power}`;
      } else {
        newTerm = `${coefficient}x^{${ind}}`;
      }
    }
    if (acc === '0') {
      return newTerm;
    }
    return `${acc} + ${newTerm}`;
  }, '0');
};

const taylorSeriesExampleConfig = {
  func: complexNumber => complexNumber.pow(2).plus([1, 0]).pow(-1),
  center: new ComplexNumber(0, 0),
  coefficientsFunc: index => {
    switch(index % 4) {
      case 0:
        return 1;
      case 2:
        return -1;
      case 1:
      case 3:
        return 0;
    }
  },
  markdown: '\\frac{1}{x^2 + 1}'
};

const ColorWheelGraphPage = () => (<StyledCWGPage>
    <div className="narrative-container">
        <CollapsibleParagraph
          headerType="two"
          headerElement={<h2>Why did I make this?</h2>}
          separated
          >
    <p>
      Last year I agreed to speak at my company's TED-style series of talks called "Cayuniversity". The only direction was that I speak about something weird that is interesting to me. Since I hadn't had an excuse to talk at a captive audience about math in a long time, I decided to find some math topic that was interesging to me at the time. I looked at youtube to see what sorts of math talks people were putting out for public consumption so that I could get some inspiration.
    </p>
    <p>
      There is no shortage of videos about math aimed at the general public. But the video that inspired me wasn't what I expected. It was a video of complete nonsense, but it was presented as though it was something profound that students should just accept as fact. It's not surprising that someone was wrong on the internet, but this was a physics professor who was sharing a claim from a physics textbook that was actually used by professional string theorists. I became obsessed with the claim that they were making. Why is it useful to believe something that is obviously false? Why would this claim exist in a textbook? How does this professor still have a job?
    </p>
    <CollapsibleParagraph
      headerType="three"
      headerElement={<h3>What is this claim that inspired me?</h3>}
    >
    <MathJax.Provider>
    <p>The claim is that the following series converges and that it converges to a particular value.</p>
    <MathJax.Node className="centered" formula={'1 + 2 + 3 + ...=-\\frac{1}{12}'}/>
    <p>The presenter in this video even explains exactly why the claim is nonsense. A series converges if its partial sums converge to a particular number. In this case you can see that </p>
    <MathJax.Node className="centered" formula={partialSums}/>
    <p>and any other partial sum will only get bigger. These sums will never get anywhere close to <MathJax.Node inline formula={'-\\frac{1}{12}'}/>. Why would anyone believe this obviously wrong claim? That's what got under my skin.</p>
    </MathJax.Provider>
    </CollapsibleParagraph>
    <CollapsibleParagraph
      headerType="three"
      headerElement={<h3>Why does anyone believe this?</h3>}
    >
      <MathJax.Provider>
    <p>Here's where things get interesting. This identity appeared in a letter that a man named Ramanujan wrote in 1913 to a professor in Britain who recognized his genius. He was clearly a genius because he proved a great number of intractable theorems without the benefit of a formal education.</p>
    <p>One section of Ramanujan's letter was truly bizarre however. It began with the heading "I have got theorems on divergent series, theorems to calculate the convergent values corresponding to the divergen series, viz." It contained the identity from the youtube video that I was so obsessed with as well as many others that were equally strange. He was fully aware that these series diverged and yet he thought it was worthwhile to calculate their values.</p>
    <p>Here is the proof that Ramanujan offered for the identity. Let's call the limit of the series <MathJax.Node inline formula={'c = 1 + 2 + 3 + ...'}/> Then consider the following</p>
    <MathJax.Node className="centered" formula={derivation}/>
    <p>which is sensible enough if you subtract the second line from the first. There is a bit of slight of hand in this step already. Ramanujan is cleverly rearranging the terms so that the second series has its terms matched with every other term of the first. This is not strictly kosher, but the star claim of this proof is a real whopper.</p>
    <p>This is the claim that showed me exactly where things went off the rails.</p>
    <MathJax.Node className="centered" formula={'1 - 2 + 3 - 4 + ... = \\frac{1}{(1 + 1)^2}'}/>
    <p>If this were true, then <MathJax.Node inline formula={'-3c=\\frac{1}{4}'}/> and finally <MathJax.Node inline formula={'c=-\\frac{1}{12}'}/>. This is all a very clever line of reasoning, but it ignored some subtle fine print on a couple of theorems.</p>
    <p>This is exactly the sort of error that is made by smart calculus students...or the mathematicians who first discovered Taylor Series. There is an actual taylor series identity</p>
    <MathJax.Node className="centered" formula={'1 - 2x + 3x^2 - 4x^3 + ... = \\frac{1}{(1 + x)^2},'}/>
    <p>which is true when <MathJax.Node inline formula={'|x|<1'}/>. This restriction that the formula will absolutely work for every value input within a certain range but will absolutely fail outside of that range is completely mysterious at first. Why should it be? What is going on at the boundary between valid inputs and invalid ones. This is exactly the sort of question that Leonard Euler wrestled with in the mid 1700's. This question wasn't fully resolved until Augustin-Louis Cauchy nailed down the rule that dictated where a Taylor Series will converge in the early 1800's. It was by no means an obvious finding and the ultimate answer to the question was one of the most beautiful findings in mathematics in my opinion.</p>
    <p>I was personally deeply disappointed that such a beautiful result would get perverted into "let's just ignore the fact that this isn't true" by modern day mathematical charlatans. But how could I present the real answer to this topic in a way that was accessible to a room full of laypeople? Cauchy's solution was based on his research about complex functions. How would I even graph complex functions? I'd need some way to represent the real and imaginary part of an input and the real and imaginary part of an output all in one point on a screen.</p>
    </MathJax.Provider>
    </CollapsibleParagraph>
    </CollapsibleParagraph>
    <CollapsibleParagraph
      headerType="two"
      headerElement={<h2><span className="space-right">What is a</span><a href="https://en.wikipedia.org/wiki/Domain_coloring" target="_colorWhelGraphWiki">color wheel graph</a>?</h2>}
    >
    <p>The short answer is that it is a way of drawing the graph of a function where its input is a complex number and its output is a complex number. This is tricky because a screen only gives you two dimensions to play with. Functions where the input and output are real numbers will use one dimension to represent the input and one dimension to represent the output. On the other hand a single complex number is typically drawn as a point where one dimension represents its real part and the other dimension represents its imaginary part.</p>
    <p>This is the world of computer screens and not chalk boards. We're not bound by a single color. Colors in fact use three dimensions already, that's what RGB refers to. We just need to translate a pair of numbers into an RGB code, and voila. Every complex number gets a color. If we use red for real numbers, blue for imaginary numbers, and fill with the appropriate amount of green to make the colors aesthetically pleasing, then the identity function looks like this.</p>
    <img alt="graph image" src={graphImage}/>
    <CollapsibleParagraph
      headerType="three"
      headerElement={<h3>How does this component help visualize convergent series?</h3>}
    >
      <MathJax.Provider>
      <p>I used the example of <MathJax.Node inline formula={`y = ${taylorSeriesExampleConfig.markdown}`}/> to demonstrate how Taylor Series expansions actually work and when they converge. In this case <MathJax.Node inline formula={`y=${printPolynomial(taylorSeriesExampleConfig.coefficientsFunc)(4)}+...`} /> is the power series. This series converges when <MathJax.Node inline formula={'|x|<1'}/> and in fact everywhere in this region the taylor series converges to the function. The question is, what is going on when <MathJax.Node inline formula={'|x|=1'}/>>? It turns out that if a function "goes to infinity" (as <MathJax.Node inline formula={`y = ${taylorSeriesExampleConfig.markdown}`}/> does when <MathJax.Node inline formula={'x'}/> approaches eiter <MathJax.Node inline formula={'i'}/> or <MathJax.Node inline formula={'-i'}/>), then its Taylor Series will only converge in a disc that doesn't contain the point where the funciton goes to infinity.</p>
      <p>I chose to demonstrate this phenomenon with the following graph.</p>
      </MathJax.Provider>
      <ExampleGraph
        {...taylorSeriesExampleConfig}
        printPolynomial={printPolynomial(taylorSeriesExampleConfig.coefficientsFunc)}
      />
    </CollapsibleParagraph>
    </CollapsibleParagraph>
    </div>
</StyledCWGPage>);

export default ColorWheelGraphPage;
