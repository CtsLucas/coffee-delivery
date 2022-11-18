import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { CartItem } from './components/CartItem'
import {
  ButtonConfirm,
  PurchaseSummaryContainer,
  ShoppingCart,
  SummaryPrice,
  ListShoppingCart,
} from './styles'

export function PurchaseSummary() {
  const { cartItems } = useContext(CartContext)

  const total = cartItems?.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price
  }, 0)

  return (
    <PurchaseSummaryContainer>
      <h2>Cafés selecionados</h2>

      <ShoppingCart>
        <ListShoppingCart>
          {
            cartItems
              ? cartItems.map((cartItem) => {
                  return (
                    <CartItem
                      key={cartItem.product.id}
                      product={cartItem.product}
                      quantity={cartItem.quantity}
                    />
                  )
                })
              : null /* TO-DO: Adicionar uma mensagem ou uma imagem informando que o carrinho está vazio. */
          }
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
          <button>Confirmar Pedido</button>
        </ButtonConfirm>
      </ShoppingCart>
    </PurchaseSummaryContainer>
  )
}
