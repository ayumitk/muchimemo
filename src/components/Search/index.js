import React, { useState, useEffect, createRef } from 'react'
import { InstantSearch, Index, Hits, connectStateResults } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import styled from 'styled-components'
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2'

import { Root, HitsWrapper, PoweredBy } from './styles'
import Input from './Input'
import * as HitComps from './HitComps'

const SearchContainer = styled.div`
  position: absolute;
  z-index: 1001;
  background: ${props => props.theme.colors.grey.dark};
  top: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0.25rem 0.5rem 0.5rem;
  form {
    flex: 1;
  }
  input {
    background: #fff;
    height: 1rem;
    border-radius: 1rem;
    width: -webkit-fill-available;
    /* font-size: 0.875rem; */
    font-size: 14px;
    padding-left: 1.8rem;
  }
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-45%);
  }
`

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  border: 0;
  padding: 0.5rem;
  z-index: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`

const CloseIcon = styled.div`
  position: relative;
  width: 1.8rem;
  height: 1.8rem;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    background: #fff;
    height: 2px;
    width: 1rem;
    top: 0.85rem;
    left: 0.4rem;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const Results = connectStateResults(({ searchState: state, searchResults: res, children }) =>
  res && res.nbHits > 0 ? children : `"${state.query}" が含まれるブログ記事はありません`
)

const Stats = connectStateResults(({ searchResults: res }) => res && res.nbHits > 0 && `${res.nbHits} 記事`)

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`]
  const detectClickOutside = event => !ref.current.contains(event.target) && handler()
  useEffect(() => {
    for (const event of events) document.addEventListener(event, detectClickOutside)
    return () => {
      for (const event of events) document.removeEventListener(event, detectClickOutside)
    }
  })
}

export default function Search({ indices, hitsAsGrid }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const [focus, setFocus] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setFocus(false)
  }
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_ADMIN_API_KEY)
  useClickOutside(ref, () => {
    setFocus(false)
    setOpen(false)
  })
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
      root={{ Root, props: { ref } }}
    >
      <SearchButton type="button" onClick={handleOpen}>
        <SearchAlt2 />
      </SearchButton>
      <SearchContainer style={{ display: `${open ? 'flex' : 'none'}` }}>
        <Input onFocus={() => setFocus(true)} {...{ focus }} />
        <SearchAlt2 />
        <CloseIcon onClick={handleClose} />
      </SearchContainer>
      <HitsWrapper show={query.length > 0 && focus} asGrid={hitsAsGrid}>
        {indices.map(({ name, hitComp }) => (
          <Index key={name} indexName={name}>
            <header>
              <Stats />
            </header>
            <Results>
              <Hits hitComponent={HitComps[hitComp](() => setFocus(false))} />
            </Results>
          </Index>
        ))}
        <PoweredBy />
      </HitsWrapper>
    </InstantSearch>
  )
}
