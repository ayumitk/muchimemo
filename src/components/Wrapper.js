import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 1.5rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0 0.75rem;
  }
`

export default Wrapper
