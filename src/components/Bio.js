import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { TwitterFollowButton } from 'react-twitter-embed'
import config from '../../config'

const BioContainer = styled.div`
  display: flex;
  font-size: ${props => props.theme.fontSize.small};
  border-top: 1px solid ${props => props.theme.colors.grey.ultraLight};
  padding-top: 1rem;
  margin-top: 3rem;
`

const Name = styled.p`
  font-weight: bold;
`

const Info = styled.div`
  margin-left: 0.75rem;
`

const TwitterButton = styled.a`
  display: inline-block;
  background: #1da1f2;
  color: #fff;
  font-size: 0.687rem;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  margin-top: 0.5rem;
  &:hover {
    color: #fff;
    opacity: 0.8;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <BioContainer>
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={config.author}
          style={{
            width: '60px',
            height: '60px',
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <Info>
        <Name>{config.author}</Name>
        <p style={{ marginBottom: '0.5rem' }}>
          カナダ、バンクーバー在住。壇蜜に似てるとか、鞭が似合うとか言われますが、職業は女王様ではありません。M/Mロマンス小説とBLマンガがあれば生きていける。
        </p>
        <TwitterFollowButton screenName={config.twitterScreenName} />
      </Info>
    </BioContainer>
  )
}

export default Bio
