import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
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
          }
        }
      }
    `
  )

  const newNodes = [allMdx.nodes.find(n => n.fields.slug === slug)]

  return (
    <>
      {newNodes.map(n => (
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
          InternalLink
        />
      ))}
    </>
  )
}

export default InternalLink

InternalLink.propTypes = {
  slug: PropTypes.string.isRequired,
}
