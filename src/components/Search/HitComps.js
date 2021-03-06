import React, { Fragment } from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import { Calendar } from '@styled-icons/boxicons-solid/Calendar'
import { Tags } from '@styled-icons/fa-solid/Tags'

import CategoryConfig from '../../../config/category'
import TagsConfig from '../../../config/tags'

export const PostHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <div>
      <Calendar size="1em" />
      &nbsp;
      <Highlight attribute="date" hit={hit} tagName="mark" />
      &emsp;
      {CategoryConfig[hit.category].label}
      &emsp;
      <Tags size="1em" />
      &nbsp;
      {hit.tags.map((tag, index) => (
        <Fragment key={tag}>
          {index > 0 && `, `}
          {TagsConfig[tag].label}
        </Fragment>
      ))}
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)
