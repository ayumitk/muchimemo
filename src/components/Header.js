import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import config from '../../config'
import Nav from './Nav'

const Wrapper = styled.header`
  grid-column: 1 / -1;
  padding: 2rem 0 0 0;
  text-align: center;
`

const SiteTitle = styled.div`
  a {
    color: ${props => props.theme.colors.grey.dark};
    font-size: 1.8rem;
    font-weight: bold;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.grey.dark};
    }
  }
`

const Tagline = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.grey.light};
  margin-bottom: 1rem;
`

const Header = () => (
  <Wrapper>
    <SiteTitle>
      <Link to="/">{config.siteTitle}</Link>
    </SiteTitle>
    <Tagline>{config.siteTitleManifest}</Tagline>
    <Nav />
  </Wrapper>
)

export default Header
