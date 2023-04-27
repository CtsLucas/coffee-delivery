import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactGA from 'react-ga4'

import { App } from './App'

ReactGA.initialize('G-XX5EP9N1JL')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
