import React, { Component } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Gift } from 'styled-icons/boxicons-regular/Gift'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Container = styled.div`
  background: rgba(0, 0, 0, 0.075);
  border-radius: 0.25rem;
  padding: 1.5rem 1rem;
  text-align: center;
  margin-top: 3rem;
`

const Title = styled.p`
  text-align: center;
  font-weight: bold;
  line-height: 1.25;
  br {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.875rem;
    br {
      display: block;
    }
  }
`

const Copy = styled.div`
  position: relative;
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  input[type='text'] {
    background: #fff;
    border-radius: 0.25rem;
    text-align: center;
    padding: 0.5rem;
    min-width: 340px;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      min-width: 220px;
      font-size: 0.875rem;
    }
  }
  button {
    background: ${props => props.theme.colors.grey.light};
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
      padding: 0.25rem 0.5rem;
    }
    &:hover {
      opacity: 0.8;
      color: #fff;
    }
  }
  span {
    position: absolute;
    top: -3rem;
    padding: 0.5em 1em 0.4em;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 0.25rem;
    color: #fff;
    &:after {
      content: '';
      position: absolute;
      top: 100%;
      left: 15px;
      border: solid transparent;
      margin-left: 1px;
      border-top-color: ${props => props.theme.colors.secondary};
      border-width: 6px;
    }
  }
`

const Note = styled.p`
  font-size: 0.687rem !important;
  strong {
    color: ${props => props.theme.colors.secondary};
  }
`

const SupportButton = styled.a`
  background: ${props => props.theme.colors.primary};
  font-weight: bold;
  color: #fff;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  display: inline-block;
  margin-top: 0.5rem;
  &:hover {
    opacity: 0.8;
    color: #fff;
  }
`

class GiftCard extends Component {
  constructor(props) {
    super(props)
    this.state = { value: 'gina.muchimemo@gmail.com', copied: false }
  }

  render() {
    const { value, copied } = this.state
    const { post } = this.props

    return (
      <Container>
        <Title>
          このブログが気に入ったら、
          <br />
          ジーナをサポートしてみませんか？
        </Title>

        <Copy>
          <input type="text" value={value} />
          <CopyToClipboard
            text={value}
            onCopy={() => {
              this.setState({
                copied: true,
              })
              setTimeout(() => {
                this.setState({
                  copied: false,
                })
              }, 3000)
            }}
          >
            <button type="button">コピー</button>
          </CopyToClipboard>
          <span
            style={{
              transition: '0.5s',
              opacity: copied ? 1 : 0,
            }}
          >
            クリップボードにコピーしました
          </span>
        </Copy>

        <Note>
          サポートはAmazonギフト券にて<strong>15円</strong>から受け付けています。上のメールアドレス宛にお送りください。
          {post ? <Link to="/support/">詳しくはこちら »</Link> : null}
        </Note>

        <SupportButton href="https://www.amazon.co.jp/dp/B06X982RQ9/" target="_blank" rel="noopener noreferrer">
          <Gift />
          Amazonギフト券でサポート
        </SupportButton>
      </Container>
    )
  }
}

export default GiftCard

GiftCard.propTypes = {
  post: PropTypes.bool,
}

GiftCard.defaultProps = {
  post: false,
}
