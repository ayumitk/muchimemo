import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper } from '../components'

const Content = styled.div`
  grid-column: 2;
  /* box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1); */
  /* border-radius: 1rem; */
  /* padding: 3rem 6rem; */
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    /* padding: 3rem 2rem; */
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* padding: 2rem 1.5rem; */
  }
  overflow: hidden;
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Content>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            description={post.frontmatter.description}
            categories={post.frontmatter.categories}
            tags={post.frontmatter.tags}
            key={post.fields.slug}
            image={post.frontmatter.squareimage.childImageSharp.fluid}
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          description
          categories
          tags
          squareimage {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
