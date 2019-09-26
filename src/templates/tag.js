import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Wrapper, Subline, Article, SectionTitle } from '../components'
import config from '../../config'
import TagsConfig from '../../config/tags'

const Content = styled.div`
  grid-column: 2;
  z-index: 9000;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    /* padding: 3rem 3rem; */
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* padding: 2rem 1.5rem; */
  }
`

const Tag = ({ pageContext: { tag }, data: { allMdx } }) => {
  const { nodes, totalCount } = allMdx
  const subline = `${totalCount} 記事`

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`Tag: ${tag} | ${config.siteTitle}`} />
        <Content>
          <SectionTitle>
            {TagsConfig[tag]} {subline}
          </SectionTitle>
          <Subline sectionTitle>
            <Link to="/tags">全てのタグを見る</Link>
          </Subline>
          {nodes.map(post => (
            <Article
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              timeToRead={post.timeToRead}
              description={post.frontmatter.description}
              slug={post.fields.slug}
              categories={post.frontmatter.categories}
              tags={post.frontmatter.tags}
              key={post.fields.slug}
              image={post.frontmatter.squareimage.childImageSharp.fluid}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Tag

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query TagPage($tag: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } }, fields: { sourceName: { eq: "post" } } }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          description
          categories
          tags
          squareimage {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
