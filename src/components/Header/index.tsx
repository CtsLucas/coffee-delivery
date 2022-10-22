import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { Cart, HeaderContainer, Location } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  const { colors } = useTheme()

  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <div>
        <Location>
          <MapPin size={22} color={colors.purple.main} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <Cart>
          <ShoppingCart size={22} color={colors.yellow.dark} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
