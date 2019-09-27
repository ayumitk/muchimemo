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
  flex-wrap: wrap;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
`

const FeaturedImage = styled.div`
  line-height: 0;
  width: 250px;
  margin-right: 30px;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
    margin-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    width: 100px;
    margin-right: 10px;
  }
`

const PostInfo = styled.div`
  flex: 1;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1rem;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  position: relative;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1rem;
  }
  a {
    color: ${props => props.theme.colors.grey.dark};
    &:hover {
      color: ${props => props.theme.colors.primaryLight};
    }
  }
`

const Description = styled.p`
  grid-column: -1 / 1;
  margin: 0.5rem 0;
  font-size: ${props => props.theme.fontSize.small};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    display: none;
  }
`

const Tags = styled.div`
  font-size: ${props => props.theme.fontSize.small};
  span {
    padding-right: 0.5rem;
  }
`

const Article = ({ title, date, slug, description, categories, tags, image }) => (
  <Post>
    <Link to={slug}>
      <FeaturedImage>
        <Img fluid={image} />
      </FeaturedImage>
    </Link>
    <PostInfo>
      <Title>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline style={{ marginTop: `0.5rem` }}>
        {date}{' '}
        {categories.map((cat, i) => (
          <React.Fragment key={cat}>
            {!!i && ', '}
            <Link to={`/categories/${kebabCase(cat)}`}>{CategoriesConfig[cat]}</Link>
          </React.Fragment>
        ))}
      </Subline>
      <Description>{description}</Description>
      <Tags>
        {tags.map(tag => (
          <span key={tag}>
            <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag]}</Link>
          </span>
        ))}
      </Tags>
    </PostInfo>
  </Post>
)

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
