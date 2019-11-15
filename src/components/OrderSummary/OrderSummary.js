import React from 'react';

import Button from '../UI/Button/Button';

const OrderSummary = ({ ingredients, cancel, confirm, totalPrice }) => {
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
      <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      <p>Continue to Checkout</p> 
      <Button
        btnType='Danger'
        clicked={cancel}
      >Cancel</Button>
      <Button
        btnType='Success'
        clicked={confirm}  
      >Continue</Button>
    </>
  )
}

export default OrderSummary;