import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: .5,
  cheese: .4,
  meat: 1.3,
  bacon: .7,
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
    });
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
    });
  }

  render() {
    const { ingredients } = this.state;
    const disabledInfo = {
      ...ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = (disabledInfo[key] <= 0);
    }
    return (
      <>
        <Burger ingredients={ingredients}/>
        <BuildControls
        increment={this.addIngredientHandler}
        decrement={this.subtractIngredientHandler}
        disabled={disabledInfo}
        />
      </>
    )
  }
}

export default BurgerBuilder;
