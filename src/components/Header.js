import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'
import config from '../../config'
import Nav from './Nav'
import HamburgerMenu from './HamburgerMenu'
import Search from './Search'
import Logo from '../../assets/logo.svg'

import Content from './Content'

const searchIndices = [{ name: `Posts`, title: `ブログ記事`, hitComp: `PostHit` }]

const SiteTitle = styled.div`
  padding: 1rem 0 0.75rem 0;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0.5rem 0 0.75rem 0;
  }
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

const StyledContent = styled(Content)`
  text-align: center;
  margin: 0 auto 1rem auto;
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

const Header = () => {
  const eventTracker = () => {
    ReactGA.event({
      category: 'Logo',
      action: globalHistory.location.pathname,
      label: config.siteTitle,
    })
  }

  return (
    <HeaderContainer>
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <HamburgerMenu />
        <Search indices={searchIndices} />
      </div>
      <StyledContent>
        <SiteTitle>
          <Link to="/" onClick={eventTracker()}>
            <StyledLogo />
          </Link>
          <Tagline>{config.siteTitleManifest}</Tagline>
        </SiteTitle>
      </StyledContent>
      <Nav />
    </HeaderContainer>
  )
}

export default Header
