import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import { Provider } from 'react-redux';
import storeProvider from './redux';
import App from './App';

const browserHistory = createBrowserHistory();
const root = document.getElementById('root');
const store = storeProvider(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history}/>
    </Provider>,
    root
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', render);
}
