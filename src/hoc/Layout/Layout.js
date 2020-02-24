import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  closeSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggle = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    const { children } = this.props;
    const { showSideDrawer } = this.state;

    return (
      <>
        <Toolbar drawerToggleClicked={this.sideDrawerToggle} />
        <SideDrawer open={showSideDrawer} close={this.closeSideDrawerHandler} />
        <main className={classes.Content}>{children}</main>
      </>
    )
  }
}


export default Layout;