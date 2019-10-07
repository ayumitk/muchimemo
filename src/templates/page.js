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
    margin: 1.75rem 0 0 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.937rem;
    }
  }
  h2,
  h3 {
    margin: 5rem 0 -0.75rem 0;
  }
  h2 {
    font-size: 1.375rem;
  }
  h3 {
    font-size: 1.125rem;
  }
  h2 + h3 {
    margin-top: 1.75rem;
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
