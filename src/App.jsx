import React, {Component} from 'react';

import Resume from './Resume';

const resume = require('./data/resume.json');

class AppComponent extends Component {
	render() {
		const {resume} = this.props;
		if (resume) {
			return <Resume {...resume}/>
		}

		return <p>Loading. Please wait.</p>
	}
}

const App = () => {
	return <AppComponent
	 	resume={resume}
	/>
}

export default App;
