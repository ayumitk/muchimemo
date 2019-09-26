import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import config from '../../config'
import Nav from './Nav'

const Wrapper = styled.header`
  grid-column: 1 / -1;
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
  font-size: 0.812rem;
  color: ${props => props.theme.colors.grey.light};
  margin-bottom: 1rem;
`

const SubNav = styled.nav`
  padding: 0.5rem;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
    font-size: 0.812rem;
    li {
      margin-left: 1rem;
    }
  }
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const Header = () => (
  <Wrapper>
    <Content>
      <SubNav>
        <ul>
          <li>
            <Link to="/about/">このサイトについて</Link>
          </li>
          <li>
            <Link to="/contact/">お問い合わせ</Link>
          </li>
        </ul>
      </SubNav>
      <SiteTitle>
        <Link to="/">{config.siteTitle}</Link>
      </SiteTitle>
      <Tagline>{config.siteTitleManifest}</Tagline>
    </Content>
    <Nav />
  </Wrapper>
)

export default Header
