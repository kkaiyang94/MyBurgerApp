import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .45,
  meat: 1.3,
  bacon: .75,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchaseState: false,
  }

  purchaseStateHandler = () => {
    this.setState({ purchaseState: true});
  }

  cancelPurchaseHandler = () => {
    this.setState({ purchaseState: false});

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
    const { ingredients, totalPrice, purchasable, purchaseState } = this.state;
    const disabledInfo = {
      ...ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }
    return (
      <>
        <Modal
        show={purchaseState}
        modalClosed={this.cancelPurchaseHandler}
        >
          <OrderSummary ingredients={ingredients}/>
        </Modal>
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
  }
}

export default BurgerBuilder;
