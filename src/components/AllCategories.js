import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import CategoryConfig from '../../config/category'
import {ChevronRight} from 'styled-icons/boxicons-regular/ChevronRight'

const Categories = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  li a {
    border: solid 1px #ccc;
    display: block;
    padding: 0.75rem 1rem;
    margin-top: -1px;
    font-size: ${props => props.theme.fontSize.small};
    line-height:1;
    text-align:left;
    svg{
      float:right;
    }
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query AllCategoriesQuery {
        allMdx {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <Categories>
        {data.allMdx.group.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/category/${kebabCase(category.fieldValue)}`}>
              {CategoryConfig[category.fieldValue]} <span>({category.totalCount})</span> <ChevronRight />
            </Link>
          </li>
        ))}
      </Categories>
    )}
  />
)
