import { lighten } from 'polished'

const colors = {
  primary: '#47a89c', // Color for buttons or links
  primaryLight: lighten(0.05, '#47a89c'),
  bg: 'white', // Background color
  grey: {
    dark: 'rgba(0, 0, 0, 0.9)',
    default: 'rgba(0, 0, 0, 0.7)',
    light: 'rgba(0, 0, 0, 0.55)',
    ultraLight: 'rgba(0, 0, 0, 0.2)',
  },
  white: 'white',
  secondary: '#f36979',
}

const transitions = {
  normal: '0.5s',
}

const fontSize = {
  small: '0.812rem',
}

const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
}

const breakpoints = {
  tablet: '1200px',
  phone: '600px',
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
}

const theme = {
  colors,
  transitions,
  fontSize,
  breakpoints,
  fontFamily,
  maxWidth: '1000px',
  baseFontSize: '18px',
}

export default theme
