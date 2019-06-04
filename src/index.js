import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux';
import App from './App';

const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    root
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', render);
}
