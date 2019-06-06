import React, {Component} from 'react';
import {connect} from 'react-redux';

import {get} from '../redux/resume/actionCreators';
import Resume from '../components/Resume';

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

const ResumePage = connect(
	({resume: {data}}) => ({data}),
	{get}
)(ResumePageComponent);

export default ResumePage;
