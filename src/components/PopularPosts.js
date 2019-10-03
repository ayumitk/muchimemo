import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Article } from '.'

const PopularPosts = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            fields: { slug: { in: ["/tv-movie/london-spy/", "/misc/menstrual-cup/"] }, sourceName: { eq: "post" } }
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
    <div>
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
        />
      ))}
    </div>
  )
}

export default PopularPosts
