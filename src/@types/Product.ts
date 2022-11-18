export interface Product {
  id: number
  name: string
  tags: string[]
  description: string
  image: string
  price: number
  amount?: number
  total?: number
}
