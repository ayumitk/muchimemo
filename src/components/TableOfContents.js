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
      list-style: none;
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        margin: 0.15rem 0;
      }
    }
  }
`

function TableOfContents({ tableOfContents, tocSub }) {
  if (tableOfContents.items) {
    return (
      <StyledTableOfContents>
        <p>この記事の目次</p>
        <ol>
          {tableOfContents.items.map(first => (
            <li key={first.title}>
              <a href={first.url}>{first.title}</a>
              {first.items && tocSub === true ? (
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
}

export default TableOfContents

TableOfContents.propTypes = {
  tableOfContents: PropTypes.object,
  tocSub: PropTypes.bool,
}

TableOfContents.defaultProps = {
  tableOfContents: null,
  tocSub: false,
}
