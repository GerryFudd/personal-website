import React from 'react';
import converter from 'number-to-words';

import Page from './components/Page';
import Section from './components/Section';
import Profile from './components/Profile';
import Summary from './components/Summary';

const Resume = ({
	summary, technicalExperience, education, otherExperience, personalProjects,
	...profile
}) => (
  <div className="container">
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
		</div>
);

export default Resume;
