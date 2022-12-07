import { CartItem } from '../../@types/Cart'
import { ActionTypes } from './actions'

export function cartReducer(state: CartItem[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id,
      )

      if (itemIndex < 0) {
        return state.concat({
          quantity: action.payload.quantity,
          product: action.payload.product,
        })
      }

      const newCartItems = [...state]
      const item = newCartItems[itemIndex]

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + action.payload.quantity,
      }

      return newCartItems
    }

    case ActionTypes.DECREMENT_TO_CART: {
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id,
      )

      const item = state[itemIndex]
      const newCartItems = [...state]

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1)

        return newCartItems
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      }

      return newCartItems
    }

    case ActionTypes.REMOVE_TO_CART: {
      const itemIndex = state.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id,
      )

      const newCartItems = [...state]

      newCartItems.splice(itemIndex, 1)

      return newCartItems
    }

    case ActionTypes.CONFIRM_ORDER: {
      const newCartItems: CartItem[] = []

      return newCartItems
    }
    default:
      return state
  }
}
