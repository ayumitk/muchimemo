import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'
import CategoriesConfig from '../../config/categories'
import Subline from './Subline'
import TagsConfig from '../../config/tags'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`

const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`

const Initiale = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`

const Description = styled.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const FeaturedImage = styled.div`
  line-height: 0;
  width: 100px;
`

const Article = ({ title, date, slug, description, categories, tags, image }) => {
  const firstChar = title.charAt(0)

  return (
    <Post>
      <FeaturedImage>
        <Img fluid={image} />
      </FeaturedImage>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date}{' '}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ', '}
            <Link to={`/categories/${kebabCase(cat)}`}>{CategoriesConfig[cat]}</Link>
          </React.Fragment>
        ))}
      </Subline>
      <Description>{description}</Description>
      <div>
        {tags.map(tag => (
          <span key={tag}>
            <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag]}</Link>
          </span>
        ))}
      </div>
    </Post>
  )
}

export default Article

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
}
