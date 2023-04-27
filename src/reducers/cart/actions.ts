import { Product } from '../../@types/Product'
import { gaEvents } from '../../lib/events'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  DECREMENT_TO_CART = 'DECREMENT_TO_CART',
  REMOVE_TO_CART = 'REMOVE_TO_CART',
  CONFIRM_ORDER = 'CONFIRM_ORDER',
}

export function addToCartAction(product: Product, quantity: number) {
  gaEvents.addToCart(product)

  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { product, quantity },
  }
}

export function decrementToCartAction(product: Product) {
  return {
    type: ActionTypes.DECREMENT_TO_CART,
    payload: { product },
  }
}

export function removeToCartAction(product: Product) {
  return {
    type: ActionTypes.REMOVE_TO_CART,
    payload: { product },
  }
}

export function confirmOrderAction() {
  return {
    type: ActionTypes.CONFIRM_ORDER,
  }
}
