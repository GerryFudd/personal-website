import React from 'react';

const SectionRow = ({name, body}) => (
  <div className="section-row">
    <div className="row-name">{name}</div>
    <p>{body}</p>
  </div>
);

export default SectionRow;