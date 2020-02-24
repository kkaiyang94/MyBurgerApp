import React from 'react';

import classes from './Order.module.css';

const Order = ({ ingredients, price }) => {
  const ingredientList = [];

  for (let ingredientName in ingredients) {
    ingredientList.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }
  const ingredientOutput = ingredientList.map(ingredient => {
    return <span
      key={ingredient.name}
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #BADA55',
        padding: '5px'
      }}
    >{ingredient.name} ({ingredient.amount})</span>
  })
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>${Number.parseFloat(price).toFixed(2)}</strong></p>
    </div>
  )
};

export default Order;