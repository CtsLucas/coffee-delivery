import { ReactNode } from 'react'
import {
  Coffee,
  CurrencyCircleDollar,
  MapPin,
  Package,
  ShoppingCart,
  Timer,
} from 'phosphor-react'

import { IconLabelContainer, IconContainer } from './styles'

interface IconLabelProps {
  icon?:
    | 'coffee'
    | 'package'
    | 'shoppingCart'
    | 'timer'
    | 'mapPin'
    | 'currencyDollar'
  children: ReactNode
}

export function IconLabel({ icon, children }: IconLabelProps) {
  switch (icon) {
    case 'coffee':
      return (
        <IconLabelContainer>
          <IconContainer type={icon}>
            <Coffee size={16} weight="fill" />
          </IconContainer>
          {children}
        </IconLabelContainer>
      )
    case 'package':
      return (
        <IconLabelContainer>
          <IconContainer type={icon}>
            <Package size={16} weight="fill" />
          </IconContainer>
          {children}
        </IconLabelContainer>
      )
    case 'shoppingCart':
      return (
        <IconLabelContainer>
          <IconContainer type={icon}>
            <ShoppingCart size={16} weight="fill" />
          </IconContainer>
          {children}
        </IconLabelContainer>
      )
    case 'timer':
      return (
        <IconLabelContainer>
          <IconContainer type={icon}>
            <Timer size={16} weight="fill" />
          </IconContainer>
          {children}
        </IconLabelContainer>
      )
    case 'mapPin':
      return (
        <IconLabelContainer>
          <IconContainer type={icon}>
            <MapPin size={16} weight="fill" />
          </IconContainer>
          {children}
        </IconLabelContainer>
      )
    case 'currencyDollar':
      return (
        <IconLabelContainer>
          <IconContainer type={icon}>
            <CurrencyCircleDollar size={16} weight="fill" />
          </IconContainer>
          {children}
        </IconLabelContainer>
      )

    default:
      return <IconLabelContainer>{children}</IconLabelContainer>
  }
}
