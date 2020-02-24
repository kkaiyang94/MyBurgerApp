import React, { Component } from 'react';
import axios from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandling from '../../hoc/WithErrorHandling/WithErrorHandling';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .45,
  meat: 1.3,
  bacon: .75,
}

class BurgerBuilder extends Component {
  state = {
    loading: false,
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchaseState: false,
    error: false,
  }
  componentDidMount() {
    axios.get('https://my-burger-app-66838.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({
          ingredients: response.data
        })
      })
      .catch(error => {
        this.setState({error: true});
      })
  }
  purchaseStateHandler = () => {
    this.setState({ purchaseState: true });
  }

  cancelPurchaseHandler = () => {
    this.setState({ purchaseState: false });
  }

  confirmPurchaseHandler = () => {
    // alert('continuing with order')
    const { ingredients, totalPrice } = this.state;
    
    const ingredientsOrdered = [];
    for (let ingredient in ingredients) {
      ingredientsOrdered.push(encodeURIComponent(ingredient) + '=' + encodeURIComponent(ingredients[ingredient]));
    }
    ingredientsOrdered.push(encodeURIComponent('totalPrice') + '=' + encodeURIComponent(totalPrice));

    const ingredientsOrderedString = ingredientsOrdered.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + ingredientsOrderedString,
    });
  }

  setPurchasableState = () => {
    const { ingredients } = this.state;
    const items = {
      ...ingredients
    }
    const total = Object.values(items).reduce((a, b) => a + b, 0);

    this.setState({ purchasable: total > 0 });
  }

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const updateIngredients = {
      ...ingredients
    }

    updateIngredients[type]++;

    const newPrice = totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    }, () => this.setPurchasableState());
  }

  subtractIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const updateIngredients = {
      ...ingredients
    }

    if (updateIngredients[type] <= 0) {
      return;
    }
    updateIngredients[type]--;

    const newPrice = totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    }, () => this.setPurchasableState());
  }

  render() {
    const { ingredients, totalPrice, purchasable, purchaseState, loading, error } = this.state;
    const disabledInfo = {
      ...ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }
    let burger = error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    let orderStatus = null;
    if (ingredients) {
      burger = (
        <>
          <Burger ingredients={ingredients} />
          <BuildControls
            increment={this.addIngredientHandler}
            decrement={this.subtractIngredientHandler}
            disabled={disabledInfo}
            price={totalPrice}
            purchasable={purchasable}
            submitOrder={this.purchaseStateHandler}
            ingredientPrices={INGREDIENT_PRICES}
          />
        </>
      )
      orderStatus = (
        <OrderSummary
          ingredients={ingredients}
          cancel={this.cancelPurchaseHandler}
          confirm={this.confirmPurchaseHandler}
          totalPrice={totalPrice}
        />
      )
    }

    if (loading) {
      orderStatus = <Spinner />
    }
    return (
      <>
        <Modal
          show={purchaseState}
          modalClosed={this.cancelPurchaseHandler}
        >
          {orderStatus}
        </Modal>
        {burger}
      </>
    )
  }
}

export default WithErrorHandling(BurgerBuilder, axios);
