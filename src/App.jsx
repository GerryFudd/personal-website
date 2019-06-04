import React, {Component} from 'react';
import {connect} from 'react-redux';

import {get} from './redux/resume/actionCreators';
import Resume from './Resume';

const resume = require('./data/resume.json');

class AppComponent extends Component {
	componentWillMount() {
		this.props.get();
	}
	render() {
		const {data} = this.props;
		if (data) {
			return <Resume {...data}/>
		}

		return <p>Loading. Please wait.</p>
	}
}

const App = connect(
	({resume: {data}}) => ({data}),
	{get}
)(AppComponent);

export default App;
