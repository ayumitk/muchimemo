import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'
import CategoryConfig from '../../config/category'
import TagsConfig from '../../config/tags'

const Post = styled.article`
  position: relative;
  margin: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0  0 2rem 0;
  }
  .featured-image {
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
  }
  .post-info {
    flex: 1;
  }
  .category {
    line-height: 1;
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
    a {
      display: block;
      background: ${props => props.theme.colors.primary};
      color: #fff;
      line-height: 1;
      font-size: 0.625rem;
      padding: 0.15rem 0.5rem;
    }
    .date {
      font-size: 0.75rem;
      margin-left: auto;
      color: ${props => props.theme.colors.grey.light};
    }
  }
  .title {
    font-size: 1.25rem;
    margin: 0 0 0.25rem 0;
    position: relative;
    font-weight: bold;
    line-height:1.4;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.875rem;
      line-height:1.25;
    }
    a {
      color: ${props => props.theme.colors.grey.dark};
      &:hover {
        color: ${props => props.theme.colors.primaryLight};
      }
    }
  }
  .description {
    margin-bottom: 0.25rem;
    font-size: 0.812rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      display: none;
    }
  }
  .tags {
    font-size:0.812rem;
    /* font-size: ${props => (props.sm ? '0.75rem' : props.theme.fontSize.small)}; */
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.687rem;
    }
    span {
      padding-right: 0.5rem;
    }
  }

  ${props => articleLayout(props)}
`

const articleLayout = props => {
  if (props.grid) {
    return `
      margin: 0 !important;
      .title{
        font-size:0.75rem;
        line-height:1.4;
        font-weight: normal;
        margin:0.5rem 0 0.75rem 0;
        @media (max-width: ${props.theme.breakpoints.phone}) {
          font-size:0.687rem;
          line-height:1.25;
          margin:0.25rem 0;
        }
        a{
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color:#FFF;
          padding:0 0.75rem;
          @media (max-width: ${props.theme.breakpoints.phone}) {
            padding:0 0.5rem;
          }
        }
      }
      .featured-image{
        width:100%;
      }
      .post-info{
        position:absolute;
        bottom:0;
        background:rgba(30,30,30,0.8);
      }
      .category .date{
        display:none;
      }
      .tags, .description{
        display:none;
      }
    `
  }
  if (props.sm) {
    return `
    display: flex;
    .featured-image{
      width:150px;
      @media (max-width: ${props.theme.breakpoints.phone}) {
        width:100px;
      }
    }
    .title{
      font-size: 1rem;
      @media (max-width: ${props.theme.breakpoints.phone}) {
        font-size: 0.875rem;
      }
    }
    .tags, .description{
      font-size: 0.75rem;
    }
    `
  }
  if (props.InternalLink) {
    return `
    border:solid 1px #CCC;
    display: flex;
    align-items:center;
    .featured-image{
      width:150px;
      margin-right:0;
      @media (max-width: ${props.theme.breakpoints.phone}) {
        width:100px;
      }
    }
    .title{
      font-size: 1rem;
      @media (max-width: ${props.theme.breakpoints.phone}) {
        font-size: 0.875rem;
        line-height: 1.25;
      }
    }
    .tags, .description{
      font-size: 0.75rem;
      @media (max-width: ${props.theme.breakpoints.phone}) {
        font-size: 0.687rem;
      }
    }
    .category .date,
    .description{
      margin-top:0;
    }
    .post-info{
      padding:0.5rem 1rem;
    }
    `
  }
  return `
    display: flex;
  `
}

const Article = ({ title, date, slug, description, category, tags, image, sm, grid, InternalLink, excerpt }) => (
  <Post sm={sm} grid={grid} InternalLink={InternalLink}>
    <Link to={slug}>
      <div className="featured-image" sm={sm}>
        <Img fluid={image} />
      </div>
    </Link>
    <div className="post-info">
      <div className="category">
        <Link to={`/category/${kebabCase(category)}`}>{CategoryConfig[category].label}</Link>
        <p className="date">{date}</p>
      </div>
      <p className="title">
        <Link to={slug}>{title}</Link>
      </p>
      <p className="description">{`${(description === '') ? excerpt : description}`}</p>
      <div className="tags">
        {tags.map(tag => (
          <span key={tag}>
            <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag].label}</Link>
          </span>
        ))}
      </div>
    </div>
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
  sm: PropTypes.bool,
  grid: PropTypes.bool,
  InternalLink: PropTypes.bool,
  excerpt: PropTypes.string.isRequired,
}

Article.defaultProps = {
  sm: false,
  grid: false,
  InternalLink: false,
}
