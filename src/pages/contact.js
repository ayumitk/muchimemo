/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import styled from 'styled-components'
import { Layout, Wrapper, Button, Content, SEO } from '../components'

const StyledContent = styled(Content)`
  max-width: 680px;
  margin: 0 auto 6rem auto;
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
  <Layout customSEO>
    <Wrapper>
      <SEO pageTitle="お問い合わせ" pageDescription="" pageOgp="" page />
      <StyledContent>
        <h1>お問い合わせ</h1>
        <p style={{ marginBottom: '1.5rem' }}>感想でも雑談でもお気軽に♪</p>
        <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <p style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="contact-name">
              お名前
              <input name="name" id="contact-name" type="text" required />
            </label>
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="contact-email">
              メールアドレス <input name="email" id="contact-email" type="email" required />
            </label>
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="contact-message">
              メッセージ <textarea name="message" id="contact-message" required />
            </label>
          </p>
          <p style={{ textAlign: 'center' }}>
            <Button>送信する</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </form>
      </StyledContent>
    </Wrapper>
  </Layout>
)

export default Contact
