import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import config from '../../config'
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'
import Search from './Search'
import Logo from '../../assets/logo.svg'

const searchIndices = [{ name: `Posts`, title: `ブログ記事`, hitComp: `PostHit` }]

const SiteTitle = styled.div`
  padding: 1rem 0 0.75rem 0;
  a {
    color: ${props => props.theme.colors.grey.dark};
    display: block;
    line-height: 0;
    margin-bottom: 0.25rem;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.grey.dark};
    }
  }
`

const Tagline = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.grey.light};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.625rem;
  }
`

const Content = styled.div`
  text-align: center;
`

const StyledLogo = styled(Logo)`
  width: calc(111px * 1.3);
  height: calc(25px * 1.3);
  color: ${props => props.theme.colors.grey.dark};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    width: calc(111px * 1);
    height: calc(25px * 1);
  }
`

const HeaderContainer = styled.header`
  margin-bottom: 0.5rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-bottom: 0;
  }
`

const Header = () => (
  <HeaderContainer>
    <HamburgerMenu />
    <Search indices={searchIndices} />
    <Content>
      <SiteTitle>
        <Link to="/">
          <StyledLogo />
        </Link>
        <Tagline>{config.siteTitleManifest}</Tagline>
      </SiteTitle>
    </Content>
    <Nav />
  </HeaderContainer>
)

export default Header
