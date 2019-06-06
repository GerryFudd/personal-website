import React from 'react';
import {Router, Route, Link} from 'react-router-dom';

import ResumePage from './pages/ResumePage';
const HomePage = () => (<div>Hello, world.<Link to="resume">Resume</Link></div>);

const App = ({history}) => (
	<Router history={history}>
		<Route exact path="/" component={HomePage}/>
		<Route path="/resume" component={ResumePage} />
	</Router>
);

export default App;
