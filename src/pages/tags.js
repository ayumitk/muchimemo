import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { Layout, Wrapper, Content, SEO } from '../components'
import TagsConfig from '../../config/tags'
import Bio from '../components/Bio'

const Tag = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout customSEO>
    <Wrapper>
      <SEO pageTitle="タグ一覧" pageDescription="" pageOgp="" page />
      <Content>
        <h1>タグ一覧</h1>
        {group.map(tag => (
          <p key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>#{TagsConfig[tag.fieldValue].label}</Link> ({tag.totalCount}
            )
          </p>
        ))}
        <Bio />
      </Content>
    </Wrapper>
  </Layout>
)

export default Tag

Tag.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const postQuery = graphql`
  query TagsPage {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
