import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import TagsConfig from '../../config/tags'

const Tags = styled.ul`
  list-style: none;
  display: flex;
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
    }
  }
`

function Tag({ tag }) {
  return (
    <Tags>
      {tag.map(t => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(t.fieldValue)}`}>#{TagsConfig[t.fieldValue].label}</Link>
        </li>
      ))}
    </Tags>
  )
}

export default Tag

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
}
