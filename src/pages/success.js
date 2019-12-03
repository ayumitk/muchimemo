/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Layout, Wrapper, Content } from '../components'
import config from '../../config'
import styled from 'styled-components'

const StyledContent = styled(Content)`
  max-width: 680px;
  margin: 0 auto 6rem auto;
`

const Success = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`送信完了 | ${config.siteTitle}`} />
      <StyledContent>
        <h1>送信完了</h1>
        <p>お問い合わせありがとうございます。なるべく早く返信しますね！</p>
      </StyledContent>
    </Wrapper>
  </Layout>
)

export default Success
