import React from 'react';

const ExperienceContents = ({description, projects, otherItems}) => (
  <div className="experience-contents">
    {description && <div className="experience-description">
      {description.map(item => <li key={item}>{item}</li>)}
    </div>}
    {projects && projects.map(project => (
      <div key={project.name || project.techsUsed}>
        {project.name && <p className="project">
          {project.name}
        </p>}
        {project.techsUsed && <div className="used">
          <p>Used: {project.techsUsed}</p>
        </div>}
      </div>
    ))}
    {otherItems && <div className="experience-description">
      {otherItems.map(item => <p key={item}>{item}</p>)}
    </div>}
  </div>
);

export default ExperienceContents;