import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Article, Content } from '../components'
import config from '../../config'
import TagsConfig from '../../config/tags'

const H1 = styled.h1`
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.grey.light};
    margin-left: 1rem;
  }
`

const Description = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.grey.default};
  margin-bottom: 1rem;
`

const Header = styled.header`
  margin-bottom: 2rem;
`

const Tag = ({ pageContext: { tag }, data: { allMdx } }) => {
  const { nodes, totalCount } = allMdx
  const subline = `${totalCount} 記事`

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`タグ: ${tag} | ${config.siteTitle}`} />
        <Content>
          <Header>
            <H1>
              #{TagsConfig[tag].label}
              <span>{subline}</span>
            </H1>
            {TagsConfig[tag].description ? <Description>{TagsConfig[tag].description}</Description> : ''}
          </Header>
          {nodes.map(post => (
            <Article
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              excerpt={post.excerpt}
              timeToRead={post.timeToRead}
              description={post.frontmatter.description}
              slug={post.fields.slug}
              category={post.frontmatter.category}
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
      filter: { frontmatter: { tags: { eq: $tag } }, fields: { sourceName: { ne: "page" } } }
    ) {
      totalCount
      nodes {
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
        fields {
          slug
        }
        excerpt(pruneLength: 130)
        timeToRead
      }
    }
  }
`
