import React from 'react';
import BuilControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
  <div className="BuildControls container-fluid">
    <div className="row no-gutters">
      <p>
        Total Price: <strong>{props.totalPrice}</strong>
      </p>
    </div>
    <div className="row">
      {controls.map(control => (
        <BuilControl
          key={control.label}
          label={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
        />
      ))}
    </div>
    <div className="row justify-content-center">
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.orderClicked}
      >
        ORDER NOW
      </button>
    </div>
  </div>
);

export default buildControls;
