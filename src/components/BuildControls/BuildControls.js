import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
];

const BuildControls = ({ increment, decrement, disabled }) => (
  <div className={classes.BuildControls}>
    {controls.map(ingredient => {
      return <BuildControl
      key={ingredient.label}
      label={ingredient.label}
      increment={() => increment(ingredient.type)}
      decrement={() => decrement(ingredient.type)}
      disabled={disabled[ingredient.type]}
      />
    })}
  </div>
)

export default BuildControls;