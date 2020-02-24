import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckOutSummary from '../../components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const orderedIngredients = {};
    let price = 0;

    for (let param of query.entries()) {
      if (param[0] === 'totalPrice') price = +param[1];
      else orderedIngredients[param[0]] = +param[1];
    }

    this.setState({ ingredients: orderedIngredients, totalPrice: price });
  }
  checkOutCancelHandler = () => {
    this.props.history.goBack();
  }
  checkOutContinueHandler = () => {
    this.props.history.push('/checkout/contact-data');
  }
  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <div>
        <CheckOutSummary
          ingredients={this.state.ingredients}
          checkOutCancel={this.checkOutCancelHandler}
          checkOutContinue={this.checkOutContinueHandler} />
        <Route path={this.props.match.path + '/contact-data'} render={(props) => (<ContactData totalPrice={totalPrice} ingredients={ingredients} {...props} />)} />
      </div>
    )
  }
}

export default Checkout;