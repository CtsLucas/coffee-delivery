import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContext'

import logo from '../../assets/logo.svg'

import { Cart, HeaderContainer, Location } from './styles'
import ReactGA from 'react-ga4'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  ReactGA.initialize('G-XX5EP9N1JL')

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
        <Cart onClick={() => navigate('checkout')}>
          <ShoppingCart size={22} weight="fill" />
          {cartItems?.length > 0 && <span>{cartItems.length}</span>}
        </Cart>
      </div>
    </HeaderContainer>
  )
}
