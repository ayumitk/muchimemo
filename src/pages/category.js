import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import { Layout, Wrapper } from '../components'
import config from '../../config'
import CategoryConfig from '../../config/category'

const Category = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Wrapper>
      <Helmet title={`カテゴリ一覧 | ${config.siteTitle}`} />
      <div>
        <h1>カテゴリ一覧</h1>
        {group.map(category => (
          <p key={category.fieldValue}>
            <Link to={`/category/${kebabCase(category.fieldValue)}`}>{CategoryConfig[category.fieldValue].label}</Link>{' '}
            ({category.totalCount})
          </p>
        ))}
      </div>
    </Wrapper>
  </Layout>
)

export default Category

Category.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
