import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Article, Content, Tag } from '../components'
import config from '../../config'
import CategoryConfig from '../../config/category'

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

const Category = ({ pageContext: { category }, data: { allMdx } }) => {
  const { nodes, totalCount, group } = allMdx

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`カテゴリ: ${category} | ${config.siteTitle}`} />
        <Content>
          <Header>
            <H1>
              {CategoryConfig[category].label}
              <span>{`${totalCount} 記事`}</span>
            </H1>
            {CategoryConfig[category].description ? (
              <Description>{CategoryConfig[category].description}</Description>
            ) : (
              ''
            )}
            <Tag tag={group} />
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
              categoryList
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Category

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } }, fields: { sourceName: { ne: "page" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
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
