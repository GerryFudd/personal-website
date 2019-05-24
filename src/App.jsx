import React from 'react';
import converter from 'number-to-words';

import Page from './components/Page';
import Section from './components/Section';
import Profile from './components/Profile';
import SectionRow from './components/SectionRow';
import ExperienceContents from './components/ExperienceContents';

const technicalExperience = require('./data/technicalExperience.json');
const profile = require('./data/profile.json');
const summary = require('./data/summary.json');

const App = () => (
  <div class="container">
			<Page>
				<Profile
					{...profile}
					briefMessage={profile.briefMessage.replace('{}', converter.toWords(new Date(Date.now() - 1430377200000).getFullYear() - 1970))}
				/>
				<Section header="Summary">
					{summary.map(({name, body}) => (<SectionRow key={name}
						name={name}
						body={body}
					/>))}
				</Section>
				<Section
					header="Technical Experience"
					data={[technicalExperience[0]]}
				/>
			</Page>
			<Page>
				<Section data={[technicalExperience[1]]}/>
				<Section header="Education">
					<div class="experience-row">
						<p class="bold experience-name">Portland Code School</p>
						<p>http://www.portlandcodeschool.com/</p>
					</div>
					<div class="experience-row">
						<div class="bold name">Javascript Full Stack Immersion</div>
						<div class="bold">10/2014 - 4/2015</div>
					</div>
					<ExperienceContents
						description={[
							'Worked in teams to make programs with Javascript every day',
							'Learned full stack Javascript as well as PostgreSQL and MongoDB database languages',
							'Made a simple puzzle game in a team of two using AngularJs as a final project'
						]}
						projects={[
							{
								techsUsed: 'Javascript, AngularJS, Node.js, Express, Socket.io, MongoDB, Knex.js, PostgreSQL, git, bash, html, CSS, Jasmine'
							}
						]}
					/>
					<div class="experience-row">
						<p class="bold experience-name">Portland State University</p>
					</div>
					<div class="experience-row">
						<div class="bold name">MS Mathematics</div>
						<div class="bold">03/2009 - 06/2011</div>
					</div>
					<div class="experience-contents">
						<p>Awarded FS Cater Prize in 2011</p>
					</div>
					<div class="experience-row">
						<p class="bold experience-name">Oregon State University</p>
					</div>
					<div class="experience-row">
						<p class="bold name">Bachelor of Science, Mathematics</p>
						<p class="bold">09/2003 - 12/2008</p>
					</div>
					<div class="experience-contents">
						<p>Minor, Physics</p>
					</div>
				</Section>
				<Section header="Other Experience">
					<div class="experience-row">
						<div class="bold experienct-name">Portland CC</div>
					</div>
					<div class="experience-row">
						<div class="bold name">Mathematics Instructor</div>
						<p class="bold">09/2013 - 04/2015</p>
					</div>
					<div class="experience-contents">
						<div class="experience-description">
							<li>Wrote all handouts including pdfs of lecture notes</li>
							<li>Lectured daily from the notes that I created</li>
							<li>Created course materials with technical formatting and diagrams</li>
						</div>
					</div>
					<div class="experience-row">
						<div class="bold experienct-name">Mt. Hood CC</div>
					</div>
					<div class="experience-row">
						<div class="bold name">Mathematics Instructor</div>
						<p class="bold">01/2012 - 08/2014</p>
					</div>
					<div class="experience-contents">
						<div class="experience-description">
							<li>Advised full time faculty on course content</li>
							<li>Adapted curriculum to emphasize analytical skills</li>
						</div>
					</div>
					<div class="experience-row">
						<div class="bold experience-name">Portland State University</div>
					</div>
					<div class="experience-row">
						<div class="bold name">Mathematics Instructor</div>
						<p class="bold">09/2010 - 12/2011</p>
					</div>
					<div class="experience-contents">
						<div class="experience-description">
							<li>Earned an MS in mathematics while teaching</li>
							<li>Recognized as top mathematics student in 2011</li>
							<li>Facilitated classroom discussions</li>
							<li>Guided individual learning during small group work and in office hours</li>
						</div>
					</div>
				</Section>
			</Page>
			<Page>
				<Section header="Personal or Volunteer Projects">
					<div class="experience-row">
						<p class="bold experience-name">Code For PDX</p>
						<p class="bold">https://github.com/CodeForPortland/symptomsurvey_frontend/</p>
					</div>
					<div class="experience-row">
						<p></p>
						<p class="bold">https://github.com/CodeForPortland/symptomsurvey_backend/</p>
					</div>
					<div class="experience-row">
						<p class="bold name">An app for use by Clackamas County to monitor public health</p>
						<p class="bold">10/2018-present</p>
					</div>
					<div class="experience-contents">
						<p>An app that will be used by Clackamas County for monitoring public health. It scrapes social media and identifies areas with high insidences of symptoms of Hepatitis A</p>
						<p>Used: Javascript, Node.js, React, glamorous, webpack, git, bash</p>
					</div>
					<div class="experience-row">
						<p class="bold experience-name">Color Wheel Graph</p>
						<p class="bold">https://github.com/GerryFudd/graph-tool</p>
					</div>
					<div class="experience-row">
						<p class="bold name">React app to graph complex functions using domain coloring</p>
						<p class="bold">07/2018</p>
					</div>
					<div class="experience-contents">
						<p>A front end that leverages the Calculator App to graph complex functions. This was an app that I used as a visual aid during a talk on Taylor Series where I displayed the graphs of complex functions and their Taylor series using color wheel graphs (https://en.wikipedia.org/wiki/Domain_coloring).</p>
						<p>Used: Javascript, Node.js, React, webpack, git, bash</p>
					</div>
					<div class="experience-row">
						<p class="bold experience-name">Calculator App</p>
						<p class="bold">https://github.com/GerryFudd/calculator</p>
					</div>
					<div class="experience-row">
						<p class="bold name">Node.js program that can solve complex polynomial equations</p>
						<p class="bold">02/2015 - 03/2015 && 07/2018</p>
					</div>
					<div class="experience-contents">
						<p>A calculator that I built to use Javascripts built in Math object to build a Polynomial object with methods for performing arithmetic on polynomials and finding complex number solutions for up to third order polynomials.</p>
						<p>Used: Javascript, Node.js, git, bash, Jasmine (replaced with mocha), Mocha, Chai</p>
					</div>
				</Section>
			</Page>
		</div>
);

export default App;