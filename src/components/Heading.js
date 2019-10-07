import styled from 'styled-components'

const Heading = styled.h2`
  overflow: hidden;
  text-align: center;
  font-size: 1.25rem;
  &::before,
  &::after {
    background-color: #333;
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &::before {
    right: 0.5em;
    margin-left: -50%;
  }
  &::after {
    left: 0.5em;
    margin-right: -50%;
  }
`

export default Heading
