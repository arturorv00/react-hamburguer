import React from 'react';

const buildControl = props => (
  <div className="BuildControl col-3">
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed}>Less</button>
    <button className="More" onClick={props.added}>More</button>
  </div>
);

export default buildControl;
