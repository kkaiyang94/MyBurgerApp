import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const BuildControls = ({ increment, decrement, disabled, price, purchasable, submitOrder, ingredientPrices }) => (
  <div className={classes.BuildControls}>
    <p>Total Price: <strong>${price.toFixed(2)}</strong></p>
    {controls.map(ingredient => {
      return <BuildControl
      key={ingredient.label}
      label={ingredient.label}
      ingredientPrice={ingredientPrices[ingredient.type].toFixed(2)}
      increment={() => increment(ingredient.type)}
      decrement={() => decrement(ingredient.type)}
      disabled={disabled[ingredient.type]}
      />
    })}
    <button
      className={classes.OrderButton}
      disabled={!purchasable}
      onClick={submitOrder}
      >SUBMIT ORDER</button>
  </div>
)

export default BuildControls;