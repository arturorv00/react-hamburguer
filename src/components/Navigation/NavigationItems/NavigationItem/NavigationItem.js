import React from 'react';

const navigationItem = props => {
  const classes = props.active ? 'nav-item active' : 'nav-item';
  return (
    <li className={classes}>
      <a className="nav-link" href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
