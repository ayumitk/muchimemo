import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Article, Heading } from '.'

const PopularPostsContainer = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`

const PopularPosts = ({ topPage }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            fields: { slug: { in: ["/tv-movie/london-spy/", "/misc/menstrual-cup/"] }, sourceName: { ne: "page" } }
          }
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
  return (
    <PopularPostsContainer topPage={topPage}>
      <Heading>人気記事</Heading>
      <ul>
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
            PopularPosts
            topPage
          />
        ))}
      </ul>
    </PopularPostsContainer>
  )
}

export default PopularPosts
