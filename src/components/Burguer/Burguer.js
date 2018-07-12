import React from 'react';
import BurguerIngredient from '../Burguer/BurguerIngredient/BurguerIngredient';

const burguer = props => {
  const transformedIngredient = props.ingredients
    ? Object.keys(props.ingredients)
        .map(igKey => {
          return [...Array(props.ingredients[igKey])].map((_, index) => {
            return <BurguerIngredient key={igKey + index} type={igKey} />;
          });
        })
        .reduce((arr, el) => {
          return arr.concat(el);
        }, [])
    : [];

  const markUp =
    transformedIngredient.length > 0 ? (
      transformedIngredient
    ) : (
      <p>Please start adding ingredients</p>
    );

  return (
    <div className="Burguer">
      <BurguerIngredient type="bread-top" />
      {markUp}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
