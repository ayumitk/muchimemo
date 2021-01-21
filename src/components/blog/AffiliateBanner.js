import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Banners = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem 0;
  a {
    display: block;
    margin: 0.5rem;
    line-height: 0;
  }
`

const AffiliateBanner = () => {
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
      <Banners>
        <a
          href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3549505&pid=886938238"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Img
            fixed={data.studysapuri.childImageSharp.fixed}
            alt="毎日楽しく続けられる日常英会話学習アプリ｜スタディサプリENGLISH"
          />
        </a>
        <a
          href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3549505&pid=886938236"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Img
            fixed={data.kimini.childImageSharp.fixed}
            alt="学研のKiminiオンライン英会話｜月々5,480円からはじめられる英語学習"
          />
        </a>
      </Banners>
    </>
  )
}

export default AffiliateBanner
