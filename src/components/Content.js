import styled from 'styled-components'

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0 auto;
  }
`

export default Content
