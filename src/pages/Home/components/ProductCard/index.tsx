import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import {
  Counter,
  ProductCardContainer,
  PurchaseButton,
  PurchaseField,
} from './styles'

interface Product {
  id: number
  name: string
  tags: string[]
  description: string
  image: string
  price: number
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { name, tags, description, image, price } = product
  const [quantity, setQuantity] = useState(1)
  const { handleAddToCart } = useContext(CartContext)

  function handleQuantityToCart(type: 'add' | 'decrease') {
    switch (type) {
      case 'add':
        setQuantity((prevState) => prevState + 1)
        break
      case 'decrease':
        setQuantity((prevState) => prevState - 1)
        break
    }
  }

  return (
    <ProductCardContainer>
      <img src={image} alt="" />

      <div>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <h3>{name}</h3>

      <p>{description}</p>

      <PurchaseField>
        <p>
          R$ <span>{price}</span>
        </p>

        <div>
          <Counter>
            <button
              type="button"
              onClick={() => handleQuantityToCart('decrease')}
              disabled={quantity === 1}
            >
              <Minus size={14} weight="bold" />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => handleQuantityToCart('add')}>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>

          <PurchaseButton
            type="button"
            onClick={() => handleAddToCart(product, quantity)}
          >
            <ShoppingCart size={22} weight="fill" />
          </PurchaseButton>
        </div>
      </PurchaseField>
    </ProductCardContainer>
  )
}
