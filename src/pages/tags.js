import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'

import { Layout, Wrapper, SectionTitle } from '../components'
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

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`

const Tag = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Wrapper>
      <Helmet title={`Tags | ${config.siteTitle}`} />
      <Content>
        <SectionTitle>Tags</SectionTitle>
        {group.map(tag => (
          <Title key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>{TagsConfig[tag.fieldValue]}</Link> ({tag.totalCount})
          </Title>
        ))}
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
