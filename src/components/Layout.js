import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { Heart } from 'styled-icons/boxicons-solid/Heart'
import { MailOutline } from 'styled-icons/material/MailOutline'
import config from '../../config'
import Header from './Header'

import SEO from './SEO'
import theme from '../../config/theme'
import useBuildTime from '../hooks/useBuildTime'

import Button from './Button'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "NotoSansJP";
    font-style: normal;
    font-weight: 400;
    src: url("/font/NotoSansJP-DemiLight.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "NotoSansJP";
    font-style: normal;
    font-weight: 600;
    src: url("/font/NotoSansJP-Medium.woff") format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "NotoSansJP";
    font-style: normal;
    font-weight: 700;
    src: url("/font/NotoSansJP-Bold.woff") format("woff");
    font-display: swap;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  ::selection {
    color: ${props => props.theme.colors.bg};
    background: ${props => props.theme.colors.primary};
  }
  html {
    /* font-family: ${props => props.theme.fontFamily.sansSerif}; */
    font-family: "NotoSansJP", sans-serif;
    font-size: ${props => props.theme.baseFontSize};
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.6rem;
    }
    h5 {
      font-size: 1.25rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 16px;
      h1 {
        font-size: 1.6rem;
      }
      h2 {
        font-size: 1.6rem;
      }
      h3 {
        font-size: 1.6rem;
      }
      h4 {
        font-size: 1.6rem;
      }
      h5 {
        font-size: 1.6rem;
      }
    }
  }
  body {
    background: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.grey.default};
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: all ${props => props.theme.transitions.normal};
  }
  a:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }
    &:focus {
      outline: 0;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.grey.dark};
    /* font-family: ${props => props.theme.fontFamily.serif}; */
    font-family: "NotoSansJP", sans-serif;
    line-height:1.25;
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    /* font-family: ${props => props.theme.fontFamily.sansSerif}; */
    font-family: "NotoSansJP", sans-serif;
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  table {
    border-collapse: collapse;
    background-color: ${props => props.theme.colors.bg};
  }
  caption {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    color: ${props => props.theme.colors.color};
    text-align: center;
    caption-side: bottom;
  }
  th {
    text-align: left;
  }
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  legend {
    display: block;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
  }
  input[type='search'] {
    -webkit-appearance: none;
  }
  output {
    display: inline-block;
  }
  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }
  [hidden] {
    display: none !important;
  }
  svg{
    width:1rem;
    height:1rem;
  }
`

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime()

  return (
    <ThemeProvider theme={theme}>
      <>
        {!customSEO && <SEO buildTime={buildTime} />}
        <GlobalStyle />
        <Header />
        {children}
        <Footer>
          <div>
            <Link to="/contact">
              <Button big>
                <MailOutline />
                お問い合わせ
              </Button>
            </Link>
          </div>
          &copy; {new Date().getFullYear()}
          {` `}
          <Link to="/">{config.siteTitle}</Link> Made with <Heart /> in Canada.
          <br />
          <span>Last build: {buildTime}</span>
        </Footer>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
