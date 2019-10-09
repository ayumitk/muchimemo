import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { RightArrowCircle } from 'styled-icons/boxicons-solid/RightArrowCircle'
import { ChevronDown } from 'styled-icons/boxicons-regular/ChevronDown'
import { ChevronUp } from 'styled-icons/boxicons-regular/ChevronUp'

const IndexContainer = styled.div`
  background: #f4f7f6;
  margin: 2rem 0;
  padding: 1rem;
  border: solid 1px #a8ccc7;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.937rem;
    padding: 0.5rem;
  }
`

const IndexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0 !important;
    font-size: 1rem !important;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.937rem !important;
    }
  }
  button {
    background: ${props => props.theme.colors.primary};
    border: 0;
    padding: 0.2rem 0 0.2rem 0.5rem;
    font-size: 0.75rem;
    width: 3.4rem;
    text-align: center;
    margin-left: 0.5rem;
    color: #fff;
    border-radius: 1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      padding: 0.1rem 0 0.1rem 0.5rem;
      font-size: 0.687rem;
    }
  }
`

const IndexLinks = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0;
  }
  a {
    display: block;
    margin: 0.5rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      margin: 0.25rem;
    }
  }
`

class SoThisIsChristmasIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  componentDidMount() {
    const { open } = this.props
    if (open) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }))
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <IndexContainer>
        <IndexHeader>
          <h2>このシリーズの記事</h2>
          <button type="button" onClick={this.toggle}>
            {isOpen ? (
              <>
                閉じる
                <ChevronUp />
              </>
            ) : (
              <>
                開く
                <ChevronDown />
              </>
            )}
          </button>
        </IndexHeader>
        <IndexLinks isOpen={isOpen}>
          <Link to="/english/so-this-is-christmas-1/">
            <RightArrowCircle /> チャプター 1 : ケビンと再会
          </Link>
          <Link to="/english/so-this-is-christmas-2/">
            <RightArrowCircle /> チャプター 2 : 二人のラブラブな生活っぷり
          </Link>
          <Link to="/english/so-this-is-christmas-3/">
            <RightArrowCircle /> チャプター 3 : カフェで険悪ムード
          </Link>
          <Link to="/english/so-this-is-christmas-4/">
            <RightArrowCircle /> チャプター 4 : パブでミーティング
          </Link>
          <Link to="/english/so-this-is-christmas-5/">
            <RightArrowCircle /> チャプター 5 : 新居で夜の思い出を作ろう
          </Link>
          <Link to="/english/so-this-is-christmas-6/">
            <RightArrowCircle /> チャプター 6 : Facebookチェック
          </Link>
          <Link to="/english/so-this-is-christmas-7/">
            <RightArrowCircle /> チャプター 7 : 初めてのリバ
          </Link>
          <Link to="/english/so-this-is-christmas-8/">
            <RightArrowCircle /> チャプター 8 : 久々にガイ登場
          </Link>
          <Link to="/english/so-this-is-christmas-9/">
            <RightArrowCircle /> チャプター 9 : ナタリーの爆弾投下
          </Link>
          <Link to="/english/so-this-is-christmas-10/">
            <RightArrowCircle /> チャプター 10 : 大人のはじけるクリスマスプレゼント
          </Link>
          <Link to="/english/so-this-is-christmas-11/">
            <RightArrowCircle /> チャプター 11 : アイヴァー発見
          </Link>
          <Link to="/english/so-this-is-christmas-12/">
            <RightArrowCircle /> チャプター 12 : ジェイク実家の新年パーティー
          </Link>
        </IndexLinks>
      </IndexContainer>
    )
  }
}

export default SoThisIsChristmasIndex

SoThisIsChristmasIndex.propTypes = {
  open: PropTypes.bool,
}

SoThisIsChristmasIndex.defaultProps = {
  open: false,
}
