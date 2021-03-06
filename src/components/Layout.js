import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import theme from '../../config/theme'
import useBuildTime from '../hooks/useBuildTime'

const GlobalStyle = createGlobalStyle`
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
    font-family: ${props => props.theme.fontFamily.sansSerif};
    font-size: ${props => props.theme.baseFontSize};
    line-height: 1.5;
    h1, h2, h3, h4, h5{
      font-family: ${props => props.theme.fontFamily.sansSerif};
      /* font-weight: normal; */
    }
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.375rem;
    }
    h4 {
      font-size: 1.125rem;
    }
    h5 {
      font-size: 1rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1.375rem;
      }
      h3 {
        font-size: 1.125rem;
      }
      h4 {
        font-size: 1rem;
      }
      h5 {
        font-size: 1rem;
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
    font-family: ${props => props.theme.fontFamily.serif};
    line-height:1.25;
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  /* blockquote:before {
    content: "";
    position: absolute;
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  } */
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
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
  p{
    margin:0;
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

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#47a89c',
    },
  },
})

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime()

  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <>
          {!customSEO && <SEO buildTime={buildTime} />}
          <GlobalStyle />
          <Header />
          {children}
          <Footer />
        </>
      </MuiThemeProvider>
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
