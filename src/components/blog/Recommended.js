import React from 'react'
import styled from 'styled-components'

const RecommendedContainer = styled.span`
  background: ${props => props.theme.colors.secondary};
  font-size: 0.687rem !important;
  line-height: 1;
  padding: 0.15rem 0.25rem;
  color: #fff !important;
  vertical-align: middle;
  font-weight: bold !important;
  display: inline-block !important;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.625rem !important;
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
