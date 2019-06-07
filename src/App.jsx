import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux';

import Container from './layout/Container';
import ResumePage from './pages/ResumePage';
const HomePage = () => (<div>Hello, world.<Link to="resume">Resume</Link></div>);

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
