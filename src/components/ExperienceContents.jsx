import React from 'react';

const ExperienceContents = ({description, projects}) => (
  <div class="experience-contents">
    <div class="experience-description">
      {description.map(item => <li key={item}>{item}</li>)}
    </div>
    {projects.map(project => (
      <div key={project.name}>
        <p class="project">
          {project.name}
        </p>
        <div class="used">
          <p>Used: {project.techsUsed}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ExperienceContents;