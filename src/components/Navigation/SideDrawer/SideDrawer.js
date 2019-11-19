import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationalItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const SideDrawer = props => {

  return (
    <>
      <Backdrop show/>
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationalItems />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer;