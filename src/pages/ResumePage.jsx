import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Resume from '../components/Resume';
import {get} from '../redux/resume/actionCreators';

class ResumePageComponent extends Component {
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

export default connect(
	({resume}) => ({name: resume.data}),
	dispatch => ({get: bindActionCreators(get, dispatch)})
)(ResumePageComponent);

