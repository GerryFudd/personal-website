import React from 'react';
import {Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux';

import Container from './layout/Container';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<Container>
				<Route exact path='/' component={HomePage}/>
				<Route path='/resume' component={ResumePage}/>
			</Container>
		</Router>
  </Provider>
);

export default App;
