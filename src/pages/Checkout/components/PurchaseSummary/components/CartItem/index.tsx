import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { Product } from '../../../../../../@types/Product'
import { CartContext } from '../../../../../../contexts/CartContext'
import { formatCurrency } from '../../../../../../utils/formatCurrency'
import { ButtonCounter, CartItemContainer } from './styles'

interface CartItemProps {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { handleAddToCart, handleDecrementCartItem, handleRemoveCartItem } =
    useContext(CartContext)

  return (
    <CartItemContainer key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="cart-content">
        <div className="cart-header">
          <h3>{product.name}</h3>
          <span>{formatCurrency(product.price || 0, true)}</span>
        </div>

        <div className="cart-count">
          <ButtonCounter>
            <button
              type="button"
              onClick={() => handleDecrementCartItem(product)}
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => handleAddToCart(product)}>
              <Plus size={14} weight="bold" />
            </button>
          </ButtonCounter>
          <ButtonCounter>
            <button type="button" onClick={() => handleRemoveCartItem(product)}>
              <Trash size={14} weight="bold" />
              <span>Remover</span>
            </button>
          </ButtonCounter>
        </div>
      </div>
    </CartItemContainer>
  )
}
