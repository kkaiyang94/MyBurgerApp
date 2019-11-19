import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>{children}</main>
      </>
    )
  }
}

export default Layout;