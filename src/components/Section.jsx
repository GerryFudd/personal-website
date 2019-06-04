import React from 'react';

import ExperienceContents from './ExperienceContents';

const Section = ({header, data, children}) => (
  <div className="section">
    {header && 
      <div className="section-header">
        <p>{header}</p>
      </div>
    }
    {data && data.map(({name, urls, title, dates, ...experienceContents}) => (
      <div key={name}>
					<div className="experience-row">
						<p className="bold experience-name">{name}</p>
						{urls[0] && <p>{urls[0].url}</p>}
					</div>
          {urls.length > 1 && urls.slice(1).map(({url}) => (
            <div key={url} className="experience-row">
              <p className="bold experience-name"></p>
              <p>{url}</p>
            </div>
          ))}
					<div className="experience-row">
						<div className="bold name">{title}</div>
						<div className="bold">{dates}</div>
					</div>
					{<ExperienceContents
						{...experienceContents}
					/>}
      </div>
    ))}
    {children}
  </div>
);

export default Section;