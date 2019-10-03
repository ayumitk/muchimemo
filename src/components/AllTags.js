import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import TagsConfig from '../../config/tags'

const Tags = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  li {
    padding: 0 0.25rem 0.25rem 0;
    a {
      display: block;
      border: solid 1px #ccc;
      padding: 0.35rem 0.75rem;
      border-radius: 0.25rem;
      color: ${props => props.theme.colors.grey.default};
      font-size: ${props => props.theme.fontSize.small};
      background: rgba(0, 0, 0, 0.05);
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query AllTagsQuery {
        allMdx {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <Tags>
        {data.allMdx.group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
              #{TagsConfig[tag.fieldValue]} <span>({tag.totalCount})</span>
            </Link>
          </li>
        ))}
      </Tags>
    )}
  />
)
