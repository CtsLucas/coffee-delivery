import { ProductCard } from '../ProductCard'
import { CatalogContainer, CatalogContent } from './styles'

import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Catalog() {
  const { products } = useContext(CartContext)

  return (
    <CatalogContainer>
      <h2>Nossos cafés</h2>
      <CatalogContent>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CatalogContent>
    </CatalogContainer>
  )
}
