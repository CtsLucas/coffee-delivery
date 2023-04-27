import ReactGA from 'react-ga4'
import { Product } from '../@types/Product'

const pageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page })
}

const addToCart = (product: Product) => {
  ReactGA.event({
    action: 'Add To Cart',
    category: 'Ecommerce',
    label: product.name,
    value: product.price,
  })
}

const gaEvents = {
  addToCart,
  pageView,
}

export { gaEvents }
