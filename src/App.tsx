import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Router'

export function App() {
  ReactGA.initialize('G-XX5EP9N1JL')
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  )
}
