import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTableOfContents = styled.div`
  padding: 1rem;
  margin: 2rem 0 3rem 0;
  /* border: 1px solid ${props => props.theme.colors.grey.ultraLight}; */
  background: rgba(0,0,0,0.05);
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* font-size: ${props => props.theme.fontSize.small}; */
    font-size: 0.937rem;
    padding: 0.5rem;
    margin: 0.5rem 0 2rem 0;
  }
  p {
    font-weight: bold;
    text-align: center;
  }
  ol {
    /* list-style: none; */
    margin: 0;
    padding-left: 1.5rem;
    /* padding: 0; */
    li {
      margin: 0.25rem 0;
      /* > ol {
        padding-left: 1rem;
        li a {
          color: ${props => props.theme.colors.grey.default};
          font-size: ${props => props.theme.fontSize.small};
        }
      } */
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
                {/* {first.items ? (
              <ol>
                {first.items.map(second => (
                  <li key={second.title}>
                    <a href={second.url}>{second.title}</a>
                  </li>
                ))}
              </ol>
            ) : (
              ''
            )} */}
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
