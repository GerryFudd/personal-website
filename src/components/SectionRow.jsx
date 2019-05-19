import React from 'react';

const SectionRow = ({name, body}) => (
  <div class="section-row">
    <div class="row-name">{name}</div>
    <p>{body}</p>
  </div>
);

export default SectionRow;