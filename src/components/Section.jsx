import React from 'react';

import ExperienceContents from './ExperienceContents';

const Section = ({header, data, children}) => (
  <div className="section">
    {header && 
      <div class="section-header">
        <p>{header}</p>
      </div>
    }
    {data && data.map(datum => (
      <div>
					<div class="experience-row">
						<p class="bold experience-name">{datum.name}</p>
						<p>{datum.url}</p>
					</div>
					<div class="experience-row">
						<div class="bold name">{datum.title}</div>
						<div class="bold">{datum.dates}</div>
					</div>
					<ExperienceContents
						description={datum.experienceContents.description}
						projects={datum.experienceContents.projects}
					/>
      </div>
    ))}
    {children}
  </div>
);

export default Section;