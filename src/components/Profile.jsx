import React from 'react';

import Section from './Section';

const Profile = ({name, email, portfolio, url, briefMessage}) => (
  <Section header={name}>
    <div className="personal">
      <p>{email}</p>
      <p>{portfolio}</p>
      <p>{url}</p>
      <p>{briefMessage}</p>
    </div>
  </Section>
)

export default Profile;