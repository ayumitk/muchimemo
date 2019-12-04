import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'
import CategoryConfig from '../../config/category'

const Wrapper = styled.nav`
  /* background: ${props => props.theme.colors.grey.default}; */
  background: ${props => props.theme.colors.grey.dark};
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
      &.podcast {
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

const Nav = () => {
  const eventTracker = label => {
    ReactGA.event({
      category: 'Global Nav',
      action: globalHistory.location.pathname,
      label,
    })
  }

  return (
    <Wrapper>
      <Content>
        <li className="mmRomance">
          <Link to="/category/mm-romance" onClick={eventTracker(CategoryConfig.mmRomance.label)}>
            {CategoryConfig.mmRomance.label}
          </Link>
        </li>
        <li className="blManga">
          <Link to="/category/bl-manga" onClick={eventTracker(CategoryConfig.blManga.label)}>
            {CategoryConfig.blManga.label}
          </Link>
        </li>
        <li className="tvMovie">
          <Link to="/category/tv-movie" onClick={eventTracker(CategoryConfig.tvMovie.label)}>
            {CategoryConfig.tvMovie.label}
          </Link>
        </li>
        <li className="podcast">
          <Link to="/category/podcast" onClick={eventTracker(CategoryConfig.podcast.label)}>
            {CategoryConfig.podcast.label}
          </Link>
        </li>
        <li className="misc">
          <Link to="/category/misc" onClick={eventTracker(CategoryConfig.misc.label)}>
            {CategoryConfig.misc.label}
          </Link>
        </li>
        <li className="english">
          <Link to="/category/english" onClick={eventTracker(CategoryConfig.english.label)}>
            {CategoryConfig.english.label}
          </Link>
        </li>
      </Content>
    </Wrapper>
  )
}

export default Nav
