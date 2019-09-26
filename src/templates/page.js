import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper } from '../components'

const Content = styled.article`
  grid-column: 2;
  max-width: 680px;
  border-radius: 1rem;
  margin: 0 auto;
  z-index: 9000;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    /* padding: 3rem 3rem; */
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* padding: 2rem 1.5rem; */
  }
  p {
    font-size: 1rem;
    letter-spacing: -0.003em;
    line-height: 1.8;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 2rem 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }
  hr {
    border: 0;
    border-bottom: solid 1px #ccc;
    margin: 2rem 0;
  }
`

function Page({ children }) {
  return (
    <Layout>
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </Layout>
  )
}

export default Page
