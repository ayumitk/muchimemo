import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
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
          鞭が似合うとか、壇蜜に似てるとか言われる、M/Mロマンス小説とBLマンガ愛好家。
          <br />
          カナダ、バンクーバー在住。
          <br />
          <a
            href="https://twitter.com/muchimemo"
            rel="noopener noreferrer"
            target="_blank"
            style={{ marginRight: '0.5rem' }}
          >
            Twitter »
          </a>
          <Link to="/contact/" style={{ marginRight: '0.5rem' }}>
            質問や感想はこちら »
          </Link>
          <Link to="/support/">サポートはこちら »</Link>
        </p>
      </Info>
    </BioContainer>
  )
}

export default Bio
