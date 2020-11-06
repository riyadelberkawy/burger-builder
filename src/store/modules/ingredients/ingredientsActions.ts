import { ActionTypes } from 'store/actionTypes';
import { INGREDIENTS_PRICE } from './ingredientsReducer';
import { Ingredients } from "types/commonInterface"


export const setIngredient = (oprat:("add" | "remove") ,key: string, initial: Ingredients) =>{
  const oldCount = initial[key];
  const ingredients = initial
  let updateCount = 0

  if(oprat === "add"){
    updateCount = oldCount + 1;
    ingredients[key] = updateCount;
    console.log(key)
  }else{
    updateCount = oldCount - 1;
    ingredients[key] = updateCount;
  }

  return (
    {
      type: ActionTypes.ADD_INGREDIENT,
      payload: ingredients
    }
  )
};


export const updateTotalPrice = (oprat: ("add" | "remove") , initial: number, ingr:string ) => {
  const oldPrice = initial;
  let newPrice = 0;
  if(oprat === "add"){
    newPrice = oldPrice + INGREDIENTS_PRICE[ingr];
  }else{
    newPrice = oldPrice - INGREDIENTS_PRICE[ingr];

  }
  return (
    {
      type: ActionTypes.UPDATE_TOTALPRICE,
      payload: {["totalPrice"]: newPrice}
    }
  )
}