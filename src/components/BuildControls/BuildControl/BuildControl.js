import React from 'react';

import classes from './BuildControl.module.css';

const BuildControl = ({ label, increment, decrement, disabled }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.Less} onClick={decrement} disabled={disabled}>Less</button>
    <button className={classes.More} onClick={increment}>More</button>
  </div>
)

export default BuildControl;