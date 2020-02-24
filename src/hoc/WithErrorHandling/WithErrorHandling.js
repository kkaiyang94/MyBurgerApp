import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandling = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: false
    }
    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      })
    }
    componentWillUnmount() {
      axios.interceptors.response.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    clearError = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <>
          <Modal show={this.state.error} modalClosed={this.clearError}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

export default WithErrorHandling;