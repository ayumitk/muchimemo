import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import CategoryConfig from '../../config/category'

const Wrapper = styled.nav`
  /* background: ${props => props.theme.colors.grey.default}; */
  background: ${props => props.theme.colors.grey.dark};
  .vocabulary{
    position: relative;
    a::after{
      content:'New';
      color:${props => props.theme.colors.secondary};
      position:absolute;
      right:4px;
      top:2px;
      line-height:1;
      font-size:0.625rem;
      animation: blink 1.4s linear infinite;
      font-weight:bold;
    }
  }
  @keyframes blink{
    0%{opacity: .2;}
    40%{opacity: 1;}
    100%{opacity: 1;}
  }
`

const Content = styled.ul`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  border-left: solid 1px rgba(255, 255, 255, 0.2);
  li {
    list-style: none;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      width: 30%;
      &.mmRomance,
      &.misc {
        width: 40%;
      }
    }
    a {
      display: block;
      font-size: 0.937rem;
      color: ${props => props.theme.colors.white};
      padding: 0.75rem 1rem;
      border-right: solid 1px rgba(255, 255, 255, 0.2);
      border-bottom: solid 1px rgba(255, 255, 255, 0.2);
      text-align: center;
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 0.25rem 0;
        font-size: 0.75rem;
      }
    }
  }
`

const Nav = () => (
  <Wrapper>
    <Content>
      <li className="mmRomance">
        <Link to="/category/mm-romance/">{CategoryConfig.mmRomance.label}</Link>
      </li>
      <li className="blManga">
        <Link to="/category/bl-manga/">{CategoryConfig.blManga.label}</Link>
      </li>
      <li className="tvMovie">
        <Link to="/category/tv-movie/">{CategoryConfig.tvMovie.label}</Link>
      </li>
      <li className="misc">
        <Link to="/category/misc/">{CategoryConfig.misc.label}</Link>
      </li>
      <li className="english">
        <Link to="/category/english/">{CategoryConfig.english.label}</Link>
      </li>
      <li className="vocabulary">
        <Link to="/vocabulary/">{CategoryConfig.vocabulary.label}</Link>
      </li>
    </Content>
  </Wrapper>
)

export default Nav
