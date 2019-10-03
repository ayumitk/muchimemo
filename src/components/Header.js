import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import config from '../../config'
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'

const Wrapper = styled.header`
  grid-column: 1 / -1;
  text-align: center;
  margin-bottom: 1rem;
`

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
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const Header = () => (
  <Wrapper>
    <HamburgerMenu />
    <Content>
      <SiteTitle>
        <Link to="/">{config.siteTitle}</Link>
      </SiteTitle>
      <Tagline>{config.siteTitleManifest}</Tagline>
    </Content>
    <Nav />
  </Wrapper>
)

export default Header
