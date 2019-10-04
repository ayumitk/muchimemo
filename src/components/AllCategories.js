import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight'
import CategoryConfig from '../../config/category'

const Categories = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  li a {
    border: solid ${props => (props.dark ? '0' : '1px')} ${props => props.theme.colors.grey.ultraLight};
    display: block;
    padding: 0.75rem ${props => (props.dark ? '0' : '1rem')};
    margin-top: -1px;
    font-size: ${props => props.theme.fontSize.small};
    line-height: 1;
    color: ${props => (props.dark ? '#CCC' : props.theme.colors.grey.default)};
    svg {
      float: right;
    }
  }
`

const AllCategories = ({ dark }) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )
  return (
    <Categories dark={dark}>
      {allMdx.group.map(category => (
        <li key={category.fieldValue}>
          <Link to={`/category/${kebabCase(category.fieldValue)}`}>
            {CategoryConfig[category.fieldValue].label} <span>({category.totalCount})</span> <ChevronRight />
          </Link>
        </li>
      ))}
      <li>
        <Link to="/category">
          全てのカテゴリ <ChevronRight />
        </Link>
      </li>
    </Categories>
  )
}

export default AllCategories
