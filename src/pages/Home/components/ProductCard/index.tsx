import { Minus, Plus, ShoppingCart } from 'phosphor-react'
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

export function ProductCard({
  product: { name, tags, description, image, price },
}: ProductCardProps) {
  const listTags = tags.map((tag) => tag)

  return (
    <ProductCardContainer>
      <img src={image} alt="" />

      <div>
        {listTags.map((tag) => (
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
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </Counter>

          <PurchaseButton>
            <ShoppingCart size={22} weight="fill" />
          </PurchaseButton>
        </div>
      </PurchaseField>
    </ProductCardContainer>
  )
}
