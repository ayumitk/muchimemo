import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Article, Heading } from '.'

const RelatedPosts = ({ category, tags, slug }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { fields: { sourceName: { ne: "page" } } }
        ) {
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

  const index = allMdx.nodes.findIndex(v => v.fields.slug === slug)
  allMdx.nodes.splice(index, 1)

  const tagArray = []

  tags.forEach(tag => {
    let tagPoint = 0
    let tagName = ''
    const tagObject = {}

    allMdx.nodes.forEach(n => {
      const tagCheck = n.frontmatter.tags.filter(nTag => nTag === tag)
      if (tagCheck.length > 0) {
        tagName = tagCheck[0]
        tagPoint += 1
      }
    })

    tagObject.tagName = tagName
    tagObject.tagPoint = tagPoint

    tagArray.push(tagObject)
  })

  tagArray.sort(function(a, b) {
    return a.tagPoint < b.tagPoint ? -1 : 1
  })

  const relatedTag = tagArray[0].tagName

  let count = 0
  const newNodes = []
  allMdx.nodes.forEach(n => {
    if (relatedTag) {
      if (n.frontmatter.tags.indexOf(relatedTag) >= 0) {
        if (count < 5) {
          newNodes.push(n)
          count += 1
        }
      }
    } else if (n.frontmatter.category === category) {
      if (count < 5) {
        newNodes.push(n)
        count += 1
      }
    }
  })

  return (
    <>
      <Heading>関連記事</Heading>
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
        />
      ))}
    </>
  )
}

export default RelatedPosts

RelatedPosts.propTypes = {
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
}
