import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { ItemServiceContainer, IconService } from './styles'

interface ItensServiceProps {
  icon?: 'coffee' | 'package' | 'shoppingCart' | 'timer'
  label: string
}

export function ItensService({ icon, label }: ItensServiceProps) {
  switch (icon) {
    case 'coffee':
      return (
        <ItemServiceContainer>
          <IconService type={icon}>
            <Coffee size={16} weight="fill" />
          </IconService>
          <span>{label}</span>
        </ItemServiceContainer>
      )
    case 'package':
      return (
        <ItemServiceContainer>
          <IconService type={icon}>
            <Package size={16} weight="fill" />
          </IconService>
          <span>{label}</span>
        </ItemServiceContainer>
      )
    case 'shoppingCart':
      return (
        <ItemServiceContainer>
          <IconService type={icon}>
            <ShoppingCart size={16} weight="fill" />
          </IconService>
          <span>{label}</span>
        </ItemServiceContainer>
      )
    case 'timer':
      return (
        <ItemServiceContainer>
          <IconService type={icon}>
            <Timer size={16} weight="fill" />
          </IconService>
          <span>{label}</span>
        </ItemServiceContainer>
      )
    default:
      return (
        <ItemServiceContainer>
          <span>{label}</span>
        </ItemServiceContainer>
      )
  }
}
