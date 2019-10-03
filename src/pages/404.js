/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout, Wrapper } from '../components'
import CategoryConfig from '../../config/category'

import config from '../../config'

const NotFound = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Wrapper>
      <Helmet title={`お探しのページが見つかりません | ${config.siteTitle}`} />
      <div>
        <h1>404 Page not found.</h1>
        <p>お探しのページは、移動または削除された可能性があります。</p>
        <Link to="/">トップページへ</Link>
        <h3>カテゴリから探す</h3>
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

export default NotFound

NotFound.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query NotFoundPage {
    allMdx {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
