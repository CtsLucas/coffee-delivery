import ReactGA from 'react-ga4'

const signIn = () => {
  ReactGA.event({
    category: 'User',
    action: 'Sign In',
  })
}

const gaEvents = {
  signIn,
}

export { gaEvents }
