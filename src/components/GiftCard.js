import React, { Component } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Gift } from 'styled-icons/boxicons-regular/Gift'

const Container = styled.div`
  background: #232f3e;
  color: #fff;
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: center;
`

const Copy = styled.div`
  position: relative;
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  input {
    background: rgba(255, 255, 255, 0.9);
    color: #232f3e;
    border-radius: 0.25rem;
    flex: 1;
    text-align: center;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      padding: 0.4rem;
    }
  }
  button {
    background: #48a3c6;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.25rem 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-left: 0.25rem;
    color: #fff;
    white-space: nowrap;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.875rem;
    }
    &:hover {
      opacity: 0.8;
      color: #fff;
    }
  }
  span {
    position: absolute;
  }
`

const Note = styled.p`
  font-size: 0.687rem;
  a {
    color: #48a3c6;
    &:hover {
      text-decoration: underline;
    }
  }
`

const SupportButton = styled.a`
  background: #ffa724;
  font-weight: bold;
  color: #000;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-top: 0.5rem;
  &:hover {
    opacity: 0.8;
    color: #000;
  }
`

class GiftCard extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'gina.muchimemo@gmail.com', copied: false }
  }

  render() {
    const { value, copied } = this.state
    return (
      <div>
        <Container>
          <p style={{ textAlign: 'center' }}>この記事が気に入ったら、ジーナをサポートをしませんか？</p>

          <Copy>
            <input value={value} />
            <CopyToClipboard text={value} onCopy={() => this.setState({ copied: true })}>
              <button type="button">コピー</button>
            </CopyToClipboard>
            {copied ? <span>Copied.</span> : null}
          </Copy>

          <Note>
            サポートはAmazonギフト券にて15円から受け付けています。上のメールアドレス宛にお送りください。
            <a href="#">詳しくはこちら</a>
          </Note>

          <SupportButton href="https://www.amazon.co.jp/dp/B06X982RQ9/" target="_blank" rel="noopener noreferrer">
            <Gift />
            Amazonギフト券でサポート
          </SupportButton>
        </Container>
      </div>
    )
  }
}

export default GiftCard
