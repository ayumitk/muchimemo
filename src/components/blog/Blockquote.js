import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BlockquiteContainer = styled.blockquote`
  font-family: ${props => (props.book ? props.theme.fontFamily.serif : '')};
  font-style: normal;
  line-height: 1.6;
  font-size: 0.937rem;
  background: rgba(0, 0, 0, 0.05);
  margin: 1.75rem 0 0 0;
  padding: 1.5rem;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 1rem;
  }
  &:before {
    background: url('https://cdn.blog.st-hatena.com/css/theme/evergreen/images/quote.png?version=97326deÃ¢â‚¬Â¦&env=production')
      no-repeat;
    background-size: 34px;
    content: '';
    position: absolute;
    width: 34px;
    height: 34px;
    top: -8px;
    left: -8px;
    margin: 0;
    content: '';
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      background-size: 24px;
      top: -4px;
      left: -4px;
      width: 24px;
      height: 24px;
    }
  }
  & + .translation {
    margin-top: 1rem;
  }
`

const Source = styled.em``

function Blockquote({ book, children, srcName, srcURL }) {
  return (
    <>
      <BlockquiteContainer book={book}>
        {children}
        <Source>
          Source : <a href={srcURL}>{srcName}</a>
        </Source>
      </BlockquiteContainer>
    </>
  )
}

export default Blockquote

Blockquote.propTypes = {
  book: PropTypes.bool,
  srcName: PropTypes.string,
  srcURL: PropTypes.string,
  children: PropTypes.string.isRequired,
}

Blockquote.defaultProps = {
  book: false,
  srcName: null,
  srcURL: null,
}
