import { MapPin, ShoppingCart } from 'phosphor-react'

import { Cart, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <div>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <Cart>
          <NavLink to="/checkout" title="Checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </Cart>
      </div>
    </HeaderContainer>
  )
}
