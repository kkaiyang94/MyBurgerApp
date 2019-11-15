import React from 'react';

import classes from './Toolbar.module.css';

const Toolbar = props => (
  <header className={classes.Toolbar}>
    <div>HEADER</div>
    <div>LOGO</div>
    <nav>
      ...
    </nav>
  </header>
);

export default Toolbar;