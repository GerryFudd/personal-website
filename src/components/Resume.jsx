import React from 'react';
import converter from 'number-to-words';

import Page from './Page';
import Section from './Section';
import Profile from './Profile';
import Summary from './Summary';

import styled from 'styled-components';

const StyledResume = styled.div`
width: 8.5in;
padding: 0.5in 0 0.5in 0.5in;

p {
  margin: 0;
}

* {
  font-family: PT Sans;
  font-size: 14px;
}

.bold {
  font-weight: 800;
}

.project {
  font-weight: 600;
}

.section {
  padding-bottom: 10px;
  display: flex;
  align-items: stretch;
  width: 7.5in;
  flex-direction: column;
}

.page {
  height: 12in;
}

.section-header {
  border-bottom: 2px solid #ccc;
	p {
		font-size: 18px;
		font-weight: 800;
		font-family: Open Sans;
	}
}

.section-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
	padding-bottom: 5px;
	
	p {
		display: flex;
		flex: 3;
	}
}

.row-name {
  flex: 1;
}

.experience-name {
  font-size: 16px;
}

.experience-row {
  display: flex;
  flex-direction: row;
	justify-content: space-between;
	
	p:first-of-type {
		max-width: 60%;
	}
}

.experience-description {
  padding-left: .1in;
}

.used {
  padding-left: .1in;
}

.experience-contents {
  padding: 0 0 10px .25in;
}
`;

const Resume = ({
	summary, technicalExperience, education, otherExperience, personalProjects,
	...profile
}) => (
  <StyledResume>
			<Page>
				<Profile
					{...profile}
					briefMessage={profile.briefMessage.replace('{}', converter.toWords(new Date(Date.now() - profile.careerStartDate * 1000).getFullYear() - 1970))}
				/>
				<Summary summary={summary}/>
				<Section
					header="Technical Experience"
					data={[technicalExperience[0]]}
				/>
			</Page>
			<Page>
				<Section data={[technicalExperience[1]]}/>
				<Section 
					header="Education"
					data={education}
				/>
				<Section
					header="Other Experience"
					data={otherExperience}
				/>
			</Page>
			<Page>
				<Section
					header="Personal or Volunteer Projects"
					data={personalProjects}
				/>
			</Page>
		</StyledResume>
);

export default Resume;
