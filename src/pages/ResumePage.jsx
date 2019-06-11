import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

const CenteredView = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;
`;

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

		return <CenteredView><p className="centered">Loading. Please wait.</p></CenteredView>
	}
}

export default connect(
	({resume}) => ({data: resume.data}),
	dispatch => ({get: bindActionCreators(get, dispatch)})
)(ResumePageComponent);

