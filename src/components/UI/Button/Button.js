import React from 'react';

const button = props => {
  const buttonClasses = ['Button' , props.type];
  return (
    <button onClick={props.clicked} className={buttonClasses.join(' ')}>
      {props.children}
    </button>
  );
};

export default button;
