import React from 'react'
import PropTypes from 'prop-types'
import { Article } from '.'

const RelatedPosts = ({ category, tags, nodes }) => {
  const tagArray = []

  tags.forEach(tag => {
    let tagPoint = 0
    let tagName = ''
    const tagObject = {}

    nodes.forEach(n => {
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

  return (
    <>
      {nodes.map(n => {
        if (relatedTag) {
          if (n.frontmatter.tags.indexOf(relatedTag) >= 0) {
            return (
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
                sm
              />
            )
          }
        } else if (n.frontmatter.category === category) {
          return (
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
              sm
            />
          )
        }
      })}
    </>
  )
}

export default RelatedPosts

RelatedPosts.propTypes = {
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  nodes: PropTypes.array.isRequired,
}
