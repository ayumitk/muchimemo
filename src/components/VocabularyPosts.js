import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Heading } from '.'

const VocabularyPostsContainer = styled.div`
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0.75rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
  }
  span {
    text-indent: -9999px;
    display: block;
    position: absolute;
  }
  a {
    transition: all 0.15s ease-out;
  }
  a:hover {
    margin-top: -5px;
  }
`

const VocabularyPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { category: { eq: "vocabulary" } } }
          limit: 6
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "YYYY/MM/DD")
              description
              category
              tags
              squareimage {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              books
              type
            }
            excerpt(pruneLength: 130)
          }
        }
      }
    `
  )
  return (
    <div style={{ marginBottom: `3rem` }}>
      <Heading>単語帳</Heading>
      <VocabularyPostsContainer>
        {allMdx.nodes.map(n => (
          <Link to={n.fields.slug} key={n.fields.slug}>
            <Img fluid={n.frontmatter.squareimage.childImageSharp.fluid} />
            <span>{n.frontmatter.title}</span>
          </Link>
        ))}
      </VocabularyPostsContainer>
      <div style={{ textAlign: `center` }}>
        <Link to="/vocabulary/">M/Mロマンス小説のための単語帳へ</Link>
      </div>
    </div>
  )
}

export default VocabularyPosts
