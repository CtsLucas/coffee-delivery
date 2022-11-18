import { createContext, ReactNode, useState } from 'react'
import { CartItem } from '../@types/Cart'
import { Product } from '../@types/Product'

import { catalogProducts } from '../mocks/utils'

interface CartContextProps {
  products: Product[]
  cartItems: CartItem[]
  handleAddToCart: (product: Product, quantity?: number) => void
  handleDecrementCartItem: (product: Product) => void
  handleRemoveCartItem: (product: Product) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products] = useState<Product[]>(catalogProducts)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleAddToCart(product: Product, quantity: number = 1) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product.id === product.id,
      )

      if (itemIndex < 0) {
        return prevState.concat({
          quantity,
          product,
        })
      }

      const newCartItems = [...prevState]
      const item = newCartItems[itemIndex]

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + quantity,
      }

      return newCartItems
    })
  }

  function handleDecrementCartItem(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product.id === product.id,
      )

      const item = prevState[itemIndex]
      const newCartItems = [...prevState]

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1)

        return newCartItems
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      }

      return newCartItems
    })
  }

  function handleRemoveCartItem(product: Product) {
    console.log(
      '🚀 ~ file: CartContext.tsx ~ line 75 ~ handleRemoveCartItem ~ product',
      product,
    )
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product.id === product.id,
      )

      const newCartItems = [...prevState]

      newCartItems.splice(itemIndex, 1)

      return newCartItems
    })
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartItems,
        handleAddToCart,
        handleDecrementCartItem,
        handleRemoveCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
