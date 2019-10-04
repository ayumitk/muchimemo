import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'

import { Layout, Wrapper, Subline, SEO, PrevNext } from '../components'
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
  margin-bottom: 1rem;
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
    margin: 0 0 2rem 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.937rem;
    }
  }
  p + h2 {
    margin-top: 5rem;
  }
  p + h3,
  div + h4 {
    margin-top: 3.5rem;
  }
`

const Tags = styled.div`
  margin: 0.5rem 0 1rem 0;
  span a {
    background: #e8f3ef;
    display: inline-block;
    margin-right: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
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
          <Link to={`/category/${kebabCase(post.category)}`}>{CategoryConfig[post.category].label}</Link>
          <Title>{post.title}</Title>
          <Subline>
            {post.date}
            <Tags>
              {post.tags.map(tag => (
                <span key={tag}>
                  <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag].label}</Link>
                </span>
              ))}
            </Tags>
          </Subline>

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
