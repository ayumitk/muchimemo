import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'
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
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        font-size: 0.687rem;
        padding: 0.25rem 0.5rem;
      }
      span {
        font-size: 0.687rem;
      }
    }
  }
`

const AllTags = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  const eventTracker = label => {
    ReactGA.event({
      category: 'Tag',
      action: globalHistory.location.pathname,
      label,
    })
  }

  return (
    <Tags>
      {allMdx.group.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} onClick={eventTracker(TagsConfig[tag.fieldValue].label)}>
            #{TagsConfig[tag.fieldValue].label} <span>({tag.totalCount})</span>
          </Link>
        </li>
      ))}
      <li>
        <Link to="/tags/" onClick={eventTracker('全てのタグ')}>
          全てのタグ
        </Link>
      </li>
    </Tags>
  )
}

export default AllTags
