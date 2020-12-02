import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Article, Wrapper, Heading, Content } from '../components'

const AllPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Content>
        <Heading>全ての記事</Heading>
        <p>{posts.length}記事</p>
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
            sm
          />
        ))}
      </Content>
    </Wrapper>
  </Layout>
)

export default AllPage

AllPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const AllQuery = graphql`
  query AllQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, filter: { fields: { sourceName: { ne: "page" } } }) {
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
        }
        excerpt(pruneLength: 130)
        timeToRead
      }
    }
  }
`
