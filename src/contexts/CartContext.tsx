import {
  useState,
  useEffect,
  useReducer,
  ReactNode,
  createContext,
} from 'react'

import { CartItem } from '../@types/Cart'
import { Product } from '../@types/Product'

import { catalogProducts } from '../mocks/utils'

import { cartReducer } from '../reducers/cart/reducer'

import {
  addToCartAction,
  confirmOrderAction,
  decrementToCartAction,
  removeToCartAction,
} from '../reducers/cart/actions'

interface CartContextProps {
  products: Product[]
  cartItems: CartItem[]
  handleAddToCart: (product: Product, quantity?: number) => void
  handleDecrementCartItem: (product: Product) => void
  handleRemoveCartItem: (product: Product) => void
  handleConfirmOrder: () => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products] = useState<Product[]>(catalogProducts)
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffe-delivery:cart-state-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffe-delivery:cart-state-1.0.0', stateJSON)
  }, [cartItems])

  function handleAddToCart(product: Product, quantity: number = 1) {
    dispatch(addToCartAction(product, quantity))
  }

  function handleDecrementCartItem(product: Product) {
    dispatch(decrementToCartAction(product))
  }

  function handleRemoveCartItem(product: Product) {
    dispatch(removeToCartAction(product))
  }

  function handleConfirmOrder() {
    dispatch(confirmOrderAction())
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        handleAddToCart,
        handleDecrementCartItem,
        handleRemoveCartItem,
        handleConfirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
