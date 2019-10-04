import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import config from '../../config'
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'
import Search from './Search'

const searchIndices = [{ name: `Posts`, title: `ブログ記事`, hitComp: `PostHit` }]

const SiteTitle = styled.div`
  padding: 1.5rem 0 0 0;
  font-size: 2rem;
  font-weight: bold;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.grey.dark};
    }
  }
`

const Tagline = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.grey.light};
  margin-bottom: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.625rem;
  }
`

const Content = styled.div`
  text-align: center;
`

const Header = () => (
  <header>
    <HamburgerMenu />
    <Search collapse indices={searchIndices} />
    <Content>
      <SiteTitle>
        <Link to="/">{config.siteTitle}</Link>
      </SiteTitle>
      <Tagline>{config.siteTitleManifest}</Tagline>
    </Content>
    <Nav />
  </header>
)

export default Header
