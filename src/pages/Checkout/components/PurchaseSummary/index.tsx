import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { CartItem } from './components/CartItem'

import emptyCart from '../../../../assets/emptyCart.png'

import {
  ButtonConfirm,
  PurchaseSummaryContainer,
  ShoppingCart,
  SummaryPrice,
  ListShoppingCart,
  EmptyContainer,
} from './styles'

export function PurchaseSummary() {
  const { cartItems } = useContext(CartContext)
  const { watch } = useFormContext()

  const fieldsForm = watch([
    'zipCode',
    'street',
    'number',
    'district',
    'city',
    'uf',
    'methodPayment',
  ])

  const formValidation = Object.values(fieldsForm)
    .map((fields) => !!fields)
    .includes(false)

  const total = cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price!
  }, 0)

  return (
    <PurchaseSummaryContainer>
      <h2>Cafés selecionados</h2>

      <ShoppingCart>
        <ListShoppingCart>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem.product.id}
                  product={cartItem.product}
                  quantity={cartItem.quantity}
                />
              )
            })
          ) : (
            <EmptyContainer>
              <img src={emptyCart} alt="" />
              <span>Seu carrinho está vazio!</span>
            </EmptyContainer>
          )}
        </ListShoppingCart>

        <SummaryPrice>
          <div className="summary-row">
            <span>Total de itens</span>
            <span>{formatCurrency(total, true)}</span>
          </div>
          <div className="summary-row">
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div className="summary-row-title">
            <span>Total</span>
            <span>{formatCurrency(Number(total) + 3.5, true)}</span>
          </div>
        </SummaryPrice>

        <ButtonConfirm>
          <button
            type="submit"
            disabled={cartItems.length === 0 || formValidation}
          >
            Confirmar Pedido
          </button>
        </ButtonConfirm>
      </ShoppingCart>
    </PurchaseSummaryContainer>
  )
}
