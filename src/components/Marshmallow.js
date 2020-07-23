import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'

const MarshmallowContainer = styled.div`
  margin-top: 2rem;
  .gatsby-image-wrapper {
    overflow: inherit !important;
  }
  a {
    background: #f3969a;
    border-radius: 0.25rem;
    display: block;
    text-align: center;
    padding: 0 1rem 1rem 1rem;
    &:hover {
      opacity: 0.75;
    }
    img {
      animation: bound 0.4s infinite ease-out alternate;
    }
    @keyframes bound {
      0% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(-25px);
      }
    }
    h2 {
      font-size: 1.25rem;
      margin: -0.75rem 0 0.5rem 0;
    }
    p {
      font-size: 0.75rem;
      margin: 0;
      padding: 0.25rem;
      border-radius: 0.25rem;
      background: #fff;
      color: ${props => props.theme.colors.grey.default};
    }
  }
`

const Marshmallow = () => {
  const data = useStaticQuery(graphql`
    query MarshmallowQuery {
      marshmallow: file(absolutePath: { regex: "/marshmallow-logo.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const eventTracker = () => {
    ReactGA.event({
      category: 'Marshmallow',
      action: globalHistory.location.pathname,
      label: 'ジーナにマシュマロを投げる',
    })
  }

  return (
    <MarshmallowContainer>
      <a
        href="https://marshmallow-qa.com/muchimemo?utm_medium=url_text&utm_source=promotion"
        target="_blank"
        rel="noopener noreferrer"
        onClick={eventTracker()}
      >
        <Image fixed={data.marshmallow.childImageSharp.fixed} alt="ジーナにマシュマロを投げる" />
        <h2>ジーナにマシュマロを投げる</h2>
        <p>匿名のメッセージを受け付けています。質問、感想、雑談、何でもお気軽に投げつけてくださいね。</p>
      </a>
    </MarshmallowContainer>
  )
}

export default Marshmallow
