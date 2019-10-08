import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Heading } from '../components'
import PopularPosts from '../components/PopularPosts'

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Content>
        <PopularPosts grid />
        <Heading>最新記事</Heading>
        {posts.map(post => (
          <Article
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.excerpt}
            timeToRead={post.timeToRead}
            slug={post.fields.slug}
            description={post.frontmatter.description}
            category={post.frontmatter.category}
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { fields: { sourceName: { ne: "page" } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
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
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
