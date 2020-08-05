import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlockquoteContainer = styled.blockquote`
  font-family: ${props => (props.book ? props.theme.fontFamily.serif : '')};
  font-style: normal;
  line-height: ${props => (props.book ? '1.6' : '1.8')};
  font-size: 0.937rem;
  background: rgba(0, 0, 0, 0.05);
  margin: 1.75rem 0 0 0;
  padding: 1.75rem;
  position: relative;
  color: ${props => props.theme.colors.grey.default};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.6;
  }
  &:before {
    background: url('https://cdn.blog.st-hatena.com/css/theme/evergreen/images/quote.png?version=97326deÃ¢â‚¬Â¦&env=production')
      no-repeat;
    background-size: 40px;
    content: '';
    position: absolute;
    width: 40px;
    height: 404px;
    top: -10px;
    left: -10px;
    margin: 0;
    content: '';
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      background-size: 26px;
      top: -4px;
      left: -4px;
      width: 26px;
      height: 26px;
    }
  }
  & + .translation {
    margin-top: 1rem;
  }
`

const Source = styled.em``

function Blockquote({ book, children, srcName, srcURL, chapter }) {
  return (
    <>
      <BlockquoteContainer book={book}>
        {children}
        {srcName && (
          <Source>
            Source :{' '}
            <a href={srcURL} target="_blank" rel="noopener noreferrer">
              {srcName}
            </a>
            {chapter && `, Chapter ${chapter}`}
          </Source>
        )}
      </BlockquoteContainer>
    </>
  )
}

export default Blockquote

Blockquote.propTypes = {
  book: PropTypes.bool,
  srcName: PropTypes.string,
  srcURL: PropTypes.string,
  chapter: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Blockquote.defaultProps = {
  book: false,
  srcName: null,
  srcURL: null,
  chapter: null,
}
