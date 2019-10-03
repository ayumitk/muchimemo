/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Layout, Wrapper, Button } from '../components'

import config from '../../config'

const Content = styled.div`
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
        box-sizing: border-box;
        width: 100%;
      }
      textarea {
        resize: vertical;
        box-sizing: border-box;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`お問い合わせ | ${config.siteTitle}`} />
      <Content>
        <h1>お問い合わせ</h1>
        <p>感想でも雑談でもお気軽に♪</p>
        <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <p>
            <label htmlFor="contact-name">
              お名前
              <input name="name" id="contact-name" type="text" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-email">
              メールアドレス <input name="email" id="contact-email" type="email" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-message">
              メッセージ <textarea name="message" id="contact-message" required />
            </label>
          </p>
          <p style={{ textAlign: 'center' }}>
            <Button>送信する</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </Content>
    </Wrapper>
  </Layout>
)

export default Contact
