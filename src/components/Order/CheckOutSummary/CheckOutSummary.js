import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckOutSummary.module.css';

const CheckOutSummary = (props) => {
  return (
    <div className={classes.CheckOutSummary}>
      <h1>Enjoy your burger</h1>
      <div style={{width: '100%', margin: 'auto' }}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger">Cancel Order</Button>
      <Button btnType="Success">Continue</Button>
    </div>
  )
}

export default CheckOutSummary;