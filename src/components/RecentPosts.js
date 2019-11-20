import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Article, Heading } from '.'

const RecentPosts = ({ sm }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { sourceName: { ne: "page" } } }
          limit: 3
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
            }
            excerpt(pruneLength: 130)
          }
        }
      }
    `
  )
  return (
    <div>
      <Heading>最新記事</Heading>
      {allMdx.nodes.map(n => (
        <Article
          title={n.frontmatter.title}
          date={n.frontmatter.date}
          excerpt={n.excerpt}
          timeToRead={n.timeToRead}
          slug={n.fields.slug}
          description={n.frontmatter.description}
          category={n.frontmatter.category}
          tags={n.frontmatter.tags}
          key={n.fields.slug}
          image={n.frontmatter.squareimage.childImageSharp.fluid}
          sm={sm}
        />
      ))}
    </div>
  )
}

export default RecentPosts

RecentPosts.propTypes = {
  sm: PropTypes.bool,
}

RecentPosts.defaultProps = {
  sm: false,
}
