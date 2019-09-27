import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableOfContents = styled.div`
  padding: 1.5rem;
  margin: 2rem 0 4rem 0;
  border: 1px solid ${props => props.theme.colors.grey.ultraLight};
  p {
    font-weight: bold;
    margin: 0 !important;
  }
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0.25rem 0;
      > ol {
        padding-left: 1rem;
        li a {
          color: ${props => props.theme.colors.grey.default};
          font-size: ${props => props.theme.fontSize.small};
        }
      }
    }
  }
`

function TableOfContents({ toc }) {
  return (
    <StyledTableOfContents>
      <p>目次</p>
      <ol>
        {toc.items.map(first => (
          <li key={first.title}>
            <a href={first.url}>{first.title}</a>
            {first.items ? (
              <ol>
                {first.items.map(second => (
                  <li key={second.title}>
                    <a href={second.url}>{second.title}</a>
                  </li>
                ))}
              </ol>
            ) : (
              ''
            )}
          </li>
        ))}
      </ol>
    </StyledTableOfContents>
  )
}

export default TableOfContents
