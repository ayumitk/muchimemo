import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Amazon from './Amazon'
import Button from './Button'

import InternalLink from './InternalLink'

const AffiliateBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
  a {
    display: block;
    margin: 0.5rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
    }
  }
`

const NotesTitle = styled.p`
  font-weight: bold;
`
const NotesText = styled.div`
  font-size: 0.75rem;
`

const VocabularyFooter = ({ book }) => {
  const data = useStaticQuery(graphql`
    query AffiliateQuery {
      kimini: file(absolutePath: { regex: "/2844724.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      studysapuri: file(absolutePath: { regex: "/2803030.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Button label="全ての単語を見る→" url="/vocabulary/" />
      <AffiliateBanner>
        <a
          href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3549505&pid=886938238"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            fixed={data.studysapuri.childImageSharp.fixed}
            alt="毎日楽しく続けられる日常英会話学習アプリ｜スタディサプリENGLISH"
          />
        </a>
        <a
          href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3549505&pid=886938236"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            fixed={data.kimini.childImageSharp.fixed}
            alt="学研のKiminiオンライン英会話｜月々5,480円からはじめられる英語学習"
          />
        </a>
      </AffiliateBanner>
      今回、引用したのはこちらの作品。
      <Amazon book={book} />
      <p>
        M/Mロマンス小説について語り明かすチャットコミュニティでは、メンバー同士で原書の分からない表現を質問し合ったり、原書を読む際のポイントを共有したりしています。
        <br />
        原書への挑戦のモチベーションにもなりますので、ぜひ、気軽に参加してみてくださいね。
      </p>
      <InternalLink slug="/mm-romance/slack/" />
      <NotesTitle>注釈：</NotesTitle>
      <NotesText>
        私はカナダのバンクーバーに住んでいますが、同じ英語でも国や地域によって使う単語や言い回しが違う可能性がありますので、ご了承ください。
        <br />
        また、スペルや文法ミス、おかしな翻訳があったらぜひ教えてもらえると助かります。
        私もみなさんと一緒に勉強しながら少しずつボキャブラリーを増やしていきたいと思います。
      </NotesText>
    </>
  )
}

export default VocabularyFooter
