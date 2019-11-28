/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Layout, Wrapper, Content } from '../components'
import config from '../../config'

const Success = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`送信完了 | ${config.siteTitle}`} />
      <Content>
        <h1>送信完了</h1>
        <p>お問い合わせありがとうございます。なるべく早く返信しますね！</p>
      </Content>
    </Wrapper>
  </Layout>
)

export default Success
