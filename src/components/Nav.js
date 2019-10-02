import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import CategoryConfig from '../../config/category'

const Wrapper = styled.nav`
  background: ${props => props.theme.colors.grey.default};
`

const Content = styled.ul`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  border-left: solid 1px rgba(255, 255, 255, 0.3);
  li {
    list-style: none;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      width: 33.33%;
    }
    a {
      display: block;
      font-size: 0.937rem;
      color: ${props => props.theme.colors.white};
      padding: 0.75rem 1rem;
      border-right: solid 1px rgba(255, 255, 255, 0.3);
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 0.25rem 0;
        font-size: ${props => props.theme.fontSize.small};
      }
    }
  }
`

const Nav = () => (
  <>
    <Wrapper>
      <Content>
        <li>
          <Link to="/category/mm-romance">{CategoryConfig.mmRomance}</Link>
        </li>
        <li>
          <Link to="/category/bl-manga">{CategoryConfig.blManga}</Link>
        </li>
        <li>
          <Link to="/category/tv-movie">{CategoryConfig.tvMovie}</Link>
        </li>
        <li>
          <Link to="/category/misc">{CategoryConfig.misc}</Link>
        </li>
        <li>
          <Link to="/category/english">{CategoryConfig.english}</Link>
        </li>
      </Content>
    </Wrapper>
  </>
)

export default Nav
