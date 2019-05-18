import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <App/>,
    root
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./container', render);
}
