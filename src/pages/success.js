/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import styled from 'styled-components'
import { Layout, Wrapper, Content, SEO } from '../components'

const StyledContent = styled(Content)`
  max-width: 680px;
  margin: 0 auto 6rem auto;
`

const Success = () => (
  <Layout customSEO>
    <Wrapper>
      <SEO pageTitle="送信完了" pageDescription="" pageOgp="" page />
      <StyledContent>
        <h1>送信完了</h1>
        <p>お問い合わせありがとうございます。なるべく早く返信しますね！</p>
      </StyledContent>
    </Wrapper>
  </Layout>
)

export default Success
