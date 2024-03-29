// Libraries
import React, { Component } from 'react'
import { withRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'

// Locals
import Header from '../components/shared/Header'
import Modal from '../components/shared/Modal'
import { SocialMeta } from '../components/shared/SocialMeta'
import LinkList from '../components/Link/LinkList'
import Nachos from '../assets/Nachos'
import { site } from '../utils/variables'

// Dummy data
import { links } from '../utils/data'

// Index
class Index extends Component {

  static getInitialProps ({ query: { id } }) {
     return { linkId: id }
  }

  constructor (props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() { document.addEventListener('keydown', this.onKeyDown) }
  componentWillUnmount() { document.removeEventListener('keydown', this.onKeyDown) }

  // Close on Esc
  onKeyDown(e) {
    if (!this.props.linkId) return
    if (e.keyCode === 27) { this.props.router.back() }
  }

  dismissModal() {
    this.props.router.back()
  }

  render() {
    const { linkId } = this.props

    return (
      <div>
        { linkId &&
          <Modal
            id={linkId}
            onDismiss={() => this.dismissModal()} />
        }
        <Head>
          <title>{site.title}</title>
          <SocialMeta />
          <style>{linkId && `body {overflow: hidden;}`}</style>
        </Head>

        <Container>
          <HeaderContainer>
            <Header />
          </HeaderContainer>

          <LinkListContainer>
            <LinkList links={links} />
          </LinkListContainer>

          <NachosContainer>
            <Nachos />
          </NachosContainer>
        </Container>
      </div>
    )
  }
}

const Container = styled.div`
  position: relative;
  max-width: ${p => p.theme.pageWidth};
  margin: 0 auto;
`

const HeaderContainer = styled.div`
  padding: 2.5rem;
  position: relative;
  z-index: 1;
`

const LinkListContainer = styled.div`
  position: relative;
  z-index: 1;
`

const NachosContainer = styled.div`
  top: 25px;
  left: -90px;
  position: absolute;
  z-index: 0;
`

export default withRouter(Index)