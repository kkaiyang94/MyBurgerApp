import React from 'react';

import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ({ ingredients }) => {

  let transformedIngredients = Object.keys(ingredients)
    .map(ingredient => {
      return [...Array(ingredients[ingredient])].map((_, idx) => {
        return <BurgerIngredient key={ingredient + idx} type={ingredient} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  )
}

export default Burger;