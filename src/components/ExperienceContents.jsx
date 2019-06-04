import React from 'react';

const ExperienceContents = ({description, projects, otherItems}) => (
  <div className="experience-contents">
    {description && <div className="experience-description">
      {description.map(({body}) => <li key={body}>{body}</li>)}
    </div>}
    {projects && projects.map(({name, techsUsed}) => (
      <div key={name || techsUsed}>
        {name && <p className="project">
          {name}
        </p>}
        {techsUsed && <div className="used">
          <p>Used: {techsUsed}</p>
        </div>}
      </div>
    ))}
    {otherItems && <div className="experience-description">
      {otherItems.map(({body}) => <p key={body}>{body}</p>)}
    </div>}
  </div>
);

export default ExperienceContents;