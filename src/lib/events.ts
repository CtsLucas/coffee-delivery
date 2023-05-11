import { Product } from '../@types/Product'

declare global {
  interface Window {
    dataLayer: any
  }
}

function gtag(...args: any[]) {
  window.dataLayer.push(arguments)
}

const addToCart = (product: Product) => {
  gtag('event', 'add_to_cart', {
    currency: 'BRL',
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.amount,
      },
    ],
  })
}

const gaEvents = {
  addToCart,
}

export { gaEvents }
