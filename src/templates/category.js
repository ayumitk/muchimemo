import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import { Layout, Wrapper, Article } from '../components'
import config from '../../config'
import CategoryConfig from '../../config/category'
import TagsConfig from '../../config/tags'

const H1 = styled.h1`
  span {
    font-size: 1rem;
    color: ${props => props.theme.colors.grey.light};
    margin-left: 1rem;
  }
`

const Category = ({ pageContext: { category }, data: { allMdx } }) => {
  const { nodes, totalCount, group } = allMdx

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`カテゴリ: ${category} | ${config.siteTitle}`} />
        <div>
          <H1>
            {CategoryConfig[category].label}
            <span>{`${totalCount} 記事`}</span>
          </H1>
          {CategoryConfig[category].description ? <p>{CategoryConfig[category].description}</p> : ''}
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>{TagsConfig[tag.fieldValue].label}</Link>
              </li>
            ))}
          </ul>
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
        </div>
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
      filter: { frontmatter: { category: { eq: $category } }, fields: { sourceName: { eq: "post" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      nodes {
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
        fields {
          slug
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
