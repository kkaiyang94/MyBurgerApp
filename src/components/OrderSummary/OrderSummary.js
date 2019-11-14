import React from 'react';

const OrderSummary = ({ ingredients }) => {
  const orderSummary = Object.keys(ingredients)
    .map(ingredient => {
      return <li key={ingredient}>
              <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {ingredients[ingredient]}
            </li>
    });

  return (
    <>
      <h3>Your Order</h3>
      <p>You've order a burger with the following ingredients:</p>
      <ul>
        {orderSummary}
      </ul>
      <p>Continue to Checkout</p>
    </>
  )
}

export default OrderSummary;