import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'
import CategoryConfig from '../../config/category'
import TagsConfig from '../../config/tags'

const Post = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin: ${props => (props.sm ? '0 0 1rem 0' : '1rem 0 3rem 0')};
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`

const FeaturedImage = styled.div`
  line-height: 0;
  width: ${props => (props.sm ? '100px' : '250px')};
  margin-right: ${props => (props.sm ? '20px' : '30px')};
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
  font-size: ${props => (props.sm ? '1rem' : '1.5rem')};
  margin: 0 0 0.5rem 0;
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
  margin-bottom: ${props => (props.sm ? '0.25rem' : '0.5rem')};
  font-size: ${props => (props.sm ? '0.75rem' : props.theme.fontSize.small)};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    display: none;
  }
`

const Tags = styled.div`
  font-size: ${props => (props.sm ? '0.75rem' : props.theme.fontSize.small)};
  span {
    padding-right: 0.5rem;
  }
`

const Subline = styled.p`
  font-size: ${props => (props.sm ? '0.75rem' : props.theme.fontSize.small)};
  margin-bottom: ${props => (props.sm ? '0.25rem' : '0.5rem')};
`

const Article = ({ title, date, slug, description, category, tags, image, sm }) => (
  <Post sm={sm}>
    <Link to={slug}>
      <FeaturedImage sm={sm}>
        <Img fluid={image} />
      </FeaturedImage>
    </Link>
    <PostInfo>
      <Title sm={sm}>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline sm={sm}>
        {date} <Link to={`/category/${kebabCase(category)}`}>{CategoryConfig[category]}</Link>
      </Subline>
      <Description sm={sm}>{description}</Description>
      <Tags sm={sm}>
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
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.object.isRequired,
}
