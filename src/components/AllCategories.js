import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import styled from 'styled-components'
import { ChevronRight } from '@styled-icons/boxicons-regular/ChevronRight'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'
import CategoryConfig from '../../config/category'

const Categories = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  li a {
    /* border: solid ${props => (props.dark ? '0' : '1px')} ${props => props.theme.colors.grey.ultraLight}; */
    border: solid ${props => (props.dark ? '0' : '1px')} #bdbdbd;
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

  const eventTracker = label => {
    ReactGA.event({
      category: 'Category',
      action: globalHistory.location.pathname,
      label,
    })
  }

  return (
    <Categories dark={dark}>
      {allMdx.group.map(category => (
        <li key={category.fieldValue}>
          <Link
            to={`/category/${kebabCase(category.fieldValue)}`}
            onClick={eventTracker(CategoryConfig[category.fieldValue].label)}
          >
            {CategoryConfig[category.fieldValue].label} <span>({category.totalCount})</span> <ChevronRight />
          </Link>
        </li>
      ))}
      <li>
        <Link to="/category" onClick={eventTracker('全てのカテゴリ')}>
          全てのカテゴリ <ChevronRight />
        </Link>
      </li>
    </Categories>
  )
}

export default AllCategories

AllCategories.propTypes = {
  dark: PropTypes.bool,
}

AllCategories.defaultProps = {
  dark: false,
}
