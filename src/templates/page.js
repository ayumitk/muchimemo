import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Layout, Wrapper } from '../components'

const Content = styled.article`
  max-width: 680px;
  margin: 0 auto;
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

Page.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Page
