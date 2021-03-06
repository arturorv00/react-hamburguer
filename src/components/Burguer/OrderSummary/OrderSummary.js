import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingKey, index) => {
      return (
        <li className="text-capitalize" key={index}>
          {ingKey} : {props.ingredients[ingKey]}
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <h6>
        <strong>Total price:</strong> ${props.totalPrice}
      </h6>

      <p>Continue Checkout?</p>
      <Button clicked={props.purchaseCanceled} type="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinued} type="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
