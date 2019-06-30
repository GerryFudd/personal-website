import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import MathJax from 'react-mathjax';

import App from './App';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render();
if (module.hot) {
  module.hot.accept('./App.jsx', render);
}
