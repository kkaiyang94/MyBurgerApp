import React from 'react';

import classes from './Button.module.css';

const Button = ({ clicked, btnType, children}) => (
  <button
    className={[classes.Button, classes[btnType]].join(' ')}
    onClicked={clicked}
  >
    {children}
  </button>
)

export default Button;