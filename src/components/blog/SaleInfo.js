import React from 'react'
import styled from 'styled-components'
import { RightArrowCircle } from '@styled-icons/boxicons-solid/RightArrowCircle'

const Sale = styled.div`
  margin-top: 2.5rem;
  background: #fff1f2;
  border: solid 2px #fda4af;
  padding: 1rem;
  font-size: 0.875rem;
  a {
    color: #be123c;
    font-weight: bold;
  }
  a:hover {
    color: #e11d48;
  }
`

const SaleInfo = () => (
  <Sale>
    <div>
      最近、少しでもお得にたくさんBLマンガ・小説を読みたい！と思い、電子書籍（Kindle、Renta!、シーモア、DMMブックス）のセール情報と、私のおすすめ作品を紹介するWebサイトを始めました。ぜひお役立てください。
    </div>
    <a href="https://sale.muchimemo.com/" target="_blank" rel="noopener noreferrer">
      <RightArrowCircle /> セール中のおすすめBLをまとめてチェック！
    </a>
  </Sale>
)

export default SaleInfo
