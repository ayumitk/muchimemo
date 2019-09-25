/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Layout, Wrapper } from '../components'

import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  z-index: 9000;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    /* padding: 3rem 3rem; */
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* padding: 2rem 1.5rem; */
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`

const Success = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Content>
        <h1>送信完了</h1>
        <p>お問い合わせありがとうございます。なるべく早く返信しますね！</p>
      </Content>
    </Wrapper>
  </Layout>
)

export default Success
