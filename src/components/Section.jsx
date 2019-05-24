import React from 'react';

import ExperienceContents from './ExperienceContents';

const Section = ({header, data, children}) => (
  <div className="section">
    {header && 
      <div className="section-header">
        <p>{header}</p>
      </div>
    }
    {data && data.map(datum => (
      <div key={datum.name}>
					<div className="experience-row">
						<p className="bold experience-name">{datum.name}</p>
						{datum.url && <p>{datum.url}</p>}
					</div>
          {datum.overflowUrls && datum.overflowUrls.map(url => (
            <div key={url} className="experience-row">
              <p className="bold experience-name"></p>
              <p>{url}</p>
            </div>
          ))}
					<div className="experience-row">
						<div className="bold name">{datum.title}</div>
						<div className="bold">{datum.dates}</div>
					</div>
					{datum.experienceContents && <ExperienceContents
						{...datum.experienceContents}
					/>}
      </div>
    ))}
    {children}
  </div>
);

export default Section;