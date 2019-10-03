/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Layout, Wrapper } from '../components'

import config from '../../config'

const Success = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <div>
        <h1>送信完了</h1>
        <p>お問い合わせありがとうございます。なるべく早く返信しますね！</p>
      </div>
    </Wrapper>
  </Layout>
)

export default Success
