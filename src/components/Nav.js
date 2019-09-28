import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import CategoriesConfig from '../../config/categories'

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
        font-size: 0.812rem;
      }
    }
  }
`

const Nav = () => (
  <>
    <Wrapper>
      <Content>
        <li>
          <Link to="/categories/mm-romance/">{CategoriesConfig.mmRomance}</Link>
        </li>
        <li>
          <Link to="/categories/bl-manga/">{CategoriesConfig.blManga}</Link>
        </li>
        <li>
          <Link to="/categories/tv-movie/">{CategoriesConfig.tvMovie}</Link>
        </li>
        <li>
          <Link to="/categories/misc/">{CategoriesConfig.misc}</Link>
        </li>
        <li>
          <Link to="/categories/english/">{CategoriesConfig.english}</Link>
        </li>
      </Content>
    </Wrapper>
  </>
)

export default Nav
