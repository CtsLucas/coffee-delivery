import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'

import logo from '../../assets/logo.svg'

import { Cart, HeaderContainer, Location } from './styles'

export function Header() {
  const { cartItems } = useContext(CartContext)

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
          {cartItems?.length > 0 && <span>{cartItems.length}</span>}
        </Cart>
      </div>
    </HeaderContainer>
  )
}
