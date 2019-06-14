import React from 'react';
import {Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import storeProvider from './redux';

import Container from './layout/Container';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

const history = createBrowserHistory();

const App = () => (
	<Provider store={storeProvider(history)}>
		<ConnectedRouter history={history}>
			<Container>
				<Route exact path='/' component={HomePage}/>
				<Route path='/resume' component={ResumePage}/>
				<Route path='/portfolio' component={PortfolioPage}/>
			</Container>
		</ConnectedRouter>
  </Provider>
);

export default App;
