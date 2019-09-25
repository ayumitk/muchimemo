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
  li {
    list-style: none;
    a {
      display: block;
      font-size: 0.9rem;
      color: ${props => props.theme.colors.white};
      padding: 0.25rem 0.5rem;
      border-right: solid 1px rgba(255, 255, 255, 0.3);
    }
  }
`

const Nav = () => (
  <>
    <Wrapper>
      <Content>
        <li>
          <Link to="/categories/mm">{CategoriesConfig.mm}</Link>
        </li>
        <li>
          <Link to="/categories/bl">{CategoriesConfig.bl}</Link>
        </li>
        <li>
          <Link to="/categories/misc">{CategoriesConfig.misc}</Link>
        </li>
      </Content>
    </Wrapper>
  </>
)

export default Nav
