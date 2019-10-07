import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Article, Heading } from '.'

const RecentPosts = () => {
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
          RecentPosts
        />
      ))}
    </div>
  )
}

export default RecentPosts
