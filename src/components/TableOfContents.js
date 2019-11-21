import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableOfContents = styled.div`
  padding: 1rem;
  margin: 2rem 0 3rem 0;
  background: rgba(0, 0, 0, 0.05);
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.937rem;
    padding: 0.75rem;
    margin: 0.5rem 0 2rem 0;
  }
  p {
    font-weight: bold;
    text-align: center;
  }
  ol {
    margin: 0;
    padding-left: 1.5rem;
    li {
      margin: 0.25rem 0;
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        margin: 0.15rem 0;
      }
    }
  }
`

function TableOfContents({ toc }) {
  return (
    <>
      {toc.items ? (
        <StyledTableOfContents>
          <p>この記事の目次</p>
          <ol>
            {toc.items.map(first => (
              <li key={first.title}>
                <a href={first.url}>{first.title}</a>
              </li>
            ))}
          </ol>
        </StyledTableOfContents>
      ) : (
        ''
      )}
    </>
  )
}

export default TableOfContents

TableOfContents.propTypes = {
  toc: PropTypes.object,
}

TableOfContents.defaultProps = {
  toc: null,
}
