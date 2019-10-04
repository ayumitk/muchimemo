import React from 'react'
import styled, { css } from 'styled-components'
import { Search } from 'styled-icons/fa-solid/Search'
import { Algolia } from 'styled-icons/fa-brands/Algolia'

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`

export const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`

const focus = css`
  background: white;
  cursor: text;
  width: 5em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

const collapse = css`
  width: 0;
  cursor: pointer;
  + ${SearchIcon} {
    color: white;
  }
  ${props => props.focus && focus}
  margin-left: ${props => (props.focus ? `-1.6em` : `-1em`)};
  padding-left: ${props => (props.focus ? `1.6em` : `1em`)};
  ::placeholder {
  }
`

const expand = css`
  width: 6em;
  margin-left: -1.6em;
  padding-left: 1.6em;
  + ${SearchIcon} {
    margin: 0.3em;
  }
`

export const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: auto;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: 3rem;
  width: 80vw;
  max-width: 30rem;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.9);
  padding: 0.7rem 1rem 0.4rem;
  background: white;
  font-size: 0.75rem;
  ul {
    border-bottom: 1px solid ${props => props.theme.colors.grey.ultraLight};
  }
  li {
    padding: 0.7rem 0;
    border-top: 1px solid ${props => props.theme.colors.grey.ultraLight};
    line-height: 1.6;
  }
  * {
    margin-top: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }
  header {
    margin-bottom: 0.5rem;
  }
  h4 {
    margin-bottom: 0.3em;
    font-size: 1rem;
  }
`

export const PoweredBy = () => (
  <span css="font-size: 0.625rem; text-align: end; padding: 0;">
    Powered by{` `}
    <a href="https://algolia.com">
      <Algolia size="1em" /> Algolia
    </a>
  </span>
)
