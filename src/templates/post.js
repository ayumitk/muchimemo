import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'

import { Layout, Wrapper, Subline, SEO, PrevNext } from '../components'
import CategoriesConfig from '../../config/categories'
import TagsConfig from '../../config/tags'

const Content = styled.article`
  grid-column: 2;
  max-width: 680px;
  border-radius: 1rem;
  margin: 0 auto;
  z-index: 9000;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    /* padding: 3rem 3rem; */
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    /* padding: 2rem 1.5rem; */
  }
  p {
    font-size: 1rem;
    letter-spacing: -0.003em;
    line-height: 1.8;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 2rem 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem;
    }
  }
  hr {
    border: 0;
    border-bottom: solid 1px #ccc;
    margin: 2rem 0;
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  /* margin-top: 4rem; */
`

const Post = ({ pageContext: { slug, prev, next }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter

  const featuredImgFluid = post.featuredimage.childImageSharp.fluid

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title: post.title },
  }

  return (
    <Layout customSEO>
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} カテゴリ：{' '}
            {post.categories.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ', '}
                <Link to={`/categories/${kebabCase(cat)}`}>{CategoriesConfig[cat]}</Link>
              </React.Fragment>
            ))}
            <br />
            タグ{' '}
            {post.tags.map(tag => (
              <span key={tag}>
                <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag]}</Link>
              </span>
            ))}
          </Subline>

          <div style={{ lineHeight: '0' }}>
            <Img fluid={featuredImgFluid} />
          </div>

          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>

          <PrevNext prev={prev} next={next} />

          <DiscussionEmbed {...disqusConfig} />
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        categories
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`
