import * as actionTypes from "./action/actionTypes";
import initalState from "./initialState";

export default function cartReducer(state = initalState.cart, action) {
  switch (action) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        c => c.product.id === actionTypes.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_CART:
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState2;
    default:
      return state;
  }
}
