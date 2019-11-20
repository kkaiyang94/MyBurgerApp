import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.module.css';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { show } = this.props;

    return nextProps.show !== show;
  }
  render() {
    const { show, children, modalClosed } = this.props;
    return (
      <>
        <Backdrop
          show={show}
          clicked={modalClosed}
        />
        <div
          className={classes.Modal}
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          {children}
        </div>
      </>
    )
  }
};

export default Modal;