import React from 'react';

import classes from './Backdrop.module.css';

const Backdrop = ({ show }) => (
  show ? <div className={classes.Backdrop}></div> : null
)

export default Backdrop;