import ReactGA from 'react-ga'
import { analytics } from './variables'

// Init Google Analytics
export const initGA = () => {
  ReactGA.initialize(analytics.id)
}

// Log Page View
export const logPageView = () => {
  if (typeof window !== 'undefined') {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}

// Log Event
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

// Log Exception
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}