import React, { useState, useEffect, createRef } from 'react'
import { InstantSearch, Index, Hits, connectStateResults } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import styled from 'styled-components'
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2'

import { Root, HitsWrapper, PoweredBy } from './styles'
import Input from './Input'
import * as HitComps from './HitComps'

const SearchContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  padding-left: 0;
  form {
    flex: 1;
  }
  input {
    background: #fff;
    height: 1rem;
    border-radius: 1rem;
    width: -webkit-fill-available;
    font-size: 16px;
    padding-left: 1.8rem;
    border: solid 1px #999;
    -webkit-appearance: none;
  }
  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-45%);
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
  const searchClient = algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_ADMIN_API_KEY)
  useClickOutside(ref, () => {
    setFocus(false)
  })
  return (
    <div style={{ flex: 1, maxWidth: '350px' }}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
        root={{ Root, props: { ref } }}
      >
        <SearchContainer>
          <Input onFocus={() => setFocus(true)} {...{ focus }} />
          <SearchAlt2 />
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
    </div>
  )
}
