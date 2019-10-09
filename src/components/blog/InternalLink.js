import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Article } from '..'

function InternalLink({ slug }) {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(filter: { fields: { sourceName: { ne: "page" } } }) {
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
          }
        }
      }
    `
  )

  const post = allMdx.nodes.find(n => n.fields.slug === slug)

  return (
    <>
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
        InternalLink
      />
    </>
  )
}

export default InternalLink

InternalLink.propTypes = {
  slug: PropTypes.string.isRequired,
}
