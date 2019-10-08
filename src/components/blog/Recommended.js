import React from 'react'
import styled from 'styled-components'

const RecommendedContainer = styled.span`
  background: ${props => props.theme.colors.secondary};
  font-size: 0.687rem;
  line-height: 1;
  padding: 0.15rem 0.25rem;
  color: #fff;
  vertical-align: middle;
  font-weight: bold;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.625rem;
  }
`

function Recommended() {
  return (
    <>
      <RecommendedContainer>ジーナ一押し！</RecommendedContainer>
    </>
  )
}

export default Recommended
