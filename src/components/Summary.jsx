import React from 'react';

import Section from './Section';
import SectionRow from './SectionRow';

const Summary = ({summary}) => (<Section header="Summary">
{summary.map(({name, body}) => (<SectionRow key={name}
  name={name}
  body={body}
/>))}
</Section>);

export default Summary;