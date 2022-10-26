import { ProductCard } from '../ProductCard'
import { CatalogContainer, CatalogContent } from './styles'

import { catalogProducts } from './mocks/utils'

export function Catalog() {
  return (
    <CatalogContainer>
      <h2>Nossos cafés</h2>
      <CatalogContent>
        {catalogProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CatalogContent>
    </CatalogContainer>
  )
}
