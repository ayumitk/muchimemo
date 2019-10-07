import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'
import { QuoteAltLeft } from 'styled-icons/boxicons-solid/QuoteAltLeft'

import { Layout, Wrapper, SEO } from '../components'
import TableOfContents from '../components/TableOfContents'
import CategoryConfig from '../../config/category'
import TagsConfig from '../../config/tags'
import Share from '../components/Share'
import config from '../../config'
import RelatedPosts from '../components/RelatedPosts'
import PopularPosts from '../components/PopularPosts'
import RecentPosts from '../components/RecentPosts'
import Bio from '../components/Bio'

const Content = styled.article`
  max-width: 680px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1.125rem;
  }
`

const PostContent = styled.div`
  hr {
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.grey.ultraLight};
    margin: 2rem 0;
  }
  p {
    font-size: 1rem;
    letter-spacing: -0.003em;
    line-height: 1.8;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 1.75rem 0 0 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.937rem;
    }
  }
  h2,
  h3,
  h4 {
    margin: 5rem 0 -0.75rem 0;
  }
  h2 {
    font-size: 1.375rem;
  }
  h3 {
    font-size: 1.125rem;
  }
  h4 {
    font-size: 1rem;
  }
  h2 + h3{
    margin-top:1.5rem;
  }
  strong {
    color: ${props => props.theme.colors.secondary};
  }
  em {
    font-size: 0.687rem;
    color: ${props => props.theme.colors.grey.light};
    display: block;
    line-height: 1.25;
    margin: 0.5rem 0 0 0;
  }
  ul {
    margin: 1.75rem 0;
    padding-left: 1.5rem;
    li {
      margin: 0.35rem 0;
    }
  }
  blockquote {
    background: rgba(0, 0, 0, 0.05);
    margin: 1.75rem 0 0 0;
    padding: 1rem;
    position: relative;
    &:before {
      display:none;
    }
    p {
      margin: 0;
      font-style: normal;
      /* font-size: ${props => props.theme.fontSize.small}; */
    }
  }
  .twitter-tweet{
    margin: 1.75rem 0 0 0 !important;
  }
  .gatsby-resp-image-wrapper {
    margin-bottom: 0.5rem;
    margin-left: 0 !important;
  }
`

const Tags = styled.div`
  margin: 0.25rem 0 0.5rem 0;
  span a {
    background: #e8f3ef;
    display: inline-block;
    margin-right: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    font-size: 0.687rem;
  }
`

const PostInfo = styled.div`
  display: flex;
  font-size: 0.687rem;
  padding: 0.75rem 0 0.25rem 0;
  a {
    display: inline-block;
    color: #fff;
    background: ${props => props.theme.colors.primary};
    padding: 0.25rem 0.75rem 0.15rem 0.75rem;
    font-weight: bold;
    line-height: 1;
  }
  p {
    margin-left: auto;
    color: ${props => props.theme.colors.grey.light};
  }
`

const Post = ({ pageContext: { slug }, data: { mdx: postNode } }) => {
  const post = postNode.frontmatter

  const { tableOfContents } = postNode

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
          <PostInfo>
            <Link to={`/category/${kebabCase(post.category)}`}>{CategoryConfig[post.category].label}</Link>
            <p>{post.date}</p>
          </PostInfo>
          <Title>{post.title}</Title>
          <Tags>
            {post.tags.map(tag => (
              <span key={tag}>
                <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag].label}</Link>
              </span>
            ))}
          </Tags>

          <div style={{ lineHeight: '0' }}>
            <Img fluid={featuredImgFluid} />
          </div>

          <TableOfContents toc={tableOfContents} />

          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>

          <Bio />

          <Share
            socialConfig={{
              twitterUsername: `${config.userTwitter}`,
              config: {
                url: `${config.siteUrl}${slug}`,
                title: post.title,
              },
            }}
            tags={[`${config.siteTitle}`]}
          />

          <DiscussionEmbed {...disqusConfig} />
        </Content>

        <h3>関連記事</h3>
        <RelatedPosts category={post.category} tags={post.tags} slug={slug} />

        <h3>人気記事</h3>
        <PopularPosts />

        <h3>最新記事</h3>
        <RecentPosts />
      </Wrapper>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        description
        category
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
