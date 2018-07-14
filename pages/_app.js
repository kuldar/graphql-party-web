import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'

// Local
import { initGA, logPageView } from '../utils/analytics'
import theme from '../styles/theme'

// MyApp
export default class MyApp extends App {

  // Set props
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  // Log the event
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  // Render the app
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}
