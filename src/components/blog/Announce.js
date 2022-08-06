import React from 'react'
import styled from 'styled-components'
import { RightArrowCircle } from '@styled-icons/boxicons-solid/RightArrowCircle'

const AnnounceContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  background: #fff1f2;
  border: solid 2px #fda4af;
  padding: 1rem;
  font-size: 0.875rem;
  a.button {
    display: inline-block;
    background: ${props => props.theme.colors.secondary};
    // font-size: 1.125rem;
    color: #fff;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    margin-top: 0.5rem;
    &:hover {
      opacity: 0.8;
      color: #fff;
    }
  }
`

const Announce = ({ children }) => <AnnounceContainer>{children}</AnnounceContainer>

export default Announce
