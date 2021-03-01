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

const AffiliateBanner = ({ type }) => {
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
      unext: file(absolutePath: { regex: "/2792569.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  if (type === 'unext') {
    return (
      <>
        <Banners>
          <a
            href="https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3549505&pid=886995495&vc_url=https%3A%2F%2Fvideo.unext.jp%2Ftitle%2FSID0055445%2F%3Fcid%3DD33139%26adid%3DVC1%26alp%3D1%26alpad%3D1%26alpge%3D1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img
              fixed={data.unext.childImageSharp.fixed}
              alt="観るのも読むのも、U-NEXTひとつ。映画/ ドラマ/ アニメから、マンガまで。最新作も見放題も、ぞくぞく配信。"
            />
          </a>
        </Banners>
      </>
    )
  }
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
