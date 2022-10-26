import { MapPin, ShoppingCart } from 'phosphor-react'

import { Cart, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
