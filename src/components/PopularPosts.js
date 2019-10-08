import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Article, Heading } from '.'

const PopularPostsContainer = styled.div`
  margin-bottom: 3rem;
  ${props => Layout(props)}
`

const Layout = props => {
  if (props.grid) {
    return `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.75rem;
    @media (max-width: ${props.theme.breakpoints.phone}) {
      grid-template-columns: repeat(2, 1fr);
    }
    `
  }
}

const PopularPosts = ({ sm, grid }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            fields: { slug: { in: ["/tv-movie/london-spy/", "/misc/menstrual-cup/", "/misc/digital-minimalism/", "/mm-romance/a-dangerous-thing/"] }, sourceName: { ne: "page" } }
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
    <>
      <Heading>人気記事</Heading>
      <PopularPostsContainer grid={grid} sm={sm}>
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
            grid={grid}
            sm={sm}
          />
        ))}
      </PopularPostsContainer>
    </>
  )
}

export default PopularPosts

PopularPosts.propTypes = {
  sm: PropTypes.bool,
  grid: PropTypes.bool,
}

PopularPosts.defaultProps = {
  sm: false,
  grid: false,
}
