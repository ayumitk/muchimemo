import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'
import { Layout, Wrapper, SEO, Bio, Share, TableOfContents } from '../components'
import CategoryConfig from '../../config/category'
import TagsConfig from '../../config/tags'
import config from '../../config'
import RelatedPosts from '../components/RelatedPosts'
import PopularPosts from '../components/PopularPosts'
import RecentPosts from '../components/RecentPosts'
import Marshmallow from '../components/Marshmallow'
import theme from '../../config/theme'

const Content = styled.article`
  max-width: 680px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0;
  font-size: 1.625rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1.125rem;
  }
`

const marginLg = '2.5rem'

const PostContent = styled.div`
  hr {
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.grey.ultraLight};
    margin: ${marginLg} 0;
  }
  p {
    font-size: 1rem;
    line-height: 1.8;
    /* letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35; */
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.937rem;
    }
  }
  h2 {
    font-size: 1.625rem;
    margin: 8rem 0 -0.75rem 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.375rem;
      margin: 5rem 0 -0.5rem 0;
    }
  }
  h3 {
    font-size: 1.25rem;
    margin: 5rem 0 -1rem 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      margin-bottom: -0.5rem;
    }
  }
  h4 {
    font-size: 1rem;
    margin: ${marginLg} 0 -0.75rem 0;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      margin-bottom: -0.5rem;
    }
  }
  .vocabulary + .vocabulary {
    margin-top: 1rem;
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
  small {
    color: ${props => props.theme.colors.secondary};
    font-size: 0.75rem;
    display: block;
  }
  ul {
    padding-left: 1.5rem;
    li {
      margin: 0.35rem 0;
    }
  }
  table {
    th,
    td {
      border: 1px solid #ccc;
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25;
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 0.25rem;
      }
    }
    th {
      background: rgba(0, 0, 0, 0.05);
      font-weight: bold;
      white-space: nowrap;
    }
  }
  .twitter-tweet {
    margin: ${marginLg} 0 0 0 !important;
  }
  .gatsby-resp-image-wrapper {
    margin-bottom: 0.5rem;
    margin-left: 0 !important;
  }
  .translation {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.grey.light};
    margin-top: 1rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      line-height: 1.5;
      margin-top: 0.5rem;
    }
  }
  p,
  h2 + blockquote,
  h2 + h3,
  h3 + blockquote,
  .amazon-link + h3,
  small,
  ul,
  table {
    margin-top: ${marginLg};
    @media (max-width: ${theme.breakpoints.phone}) {
      margin-top: 2rem;
    }
  }
`

const Tags = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0.25rem 0;
  }
  div{
    padding: 0 0.25rem 0.25rem 0;
    a {
      display: block;
      border: solid 1px #ccc;
      padding: 0.25rem 0.75rem;
      border-radius: 0.25rem;
      color: ${props => props.theme.colors.grey.default};
      /* font-size: ${props => props.theme.fontSize.small}; */
      font-size: 0.75rem;
      background: rgba(0, 0, 0, 0.05);
      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        font-size: 0.687rem;
        padding: 0.25rem 0.5rem;
      }
    }
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
              <div key={tag}>
                <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag].label}</Link>
              </div>
            ))}
          </Tags>

          <div style={{ lineHeight: '0' }}>
            <Img fluid={featuredImgFluid} />
          </div>

          <TableOfContents toc={tableOfContents} />

          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>

          <Marshmallow />

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

          <RelatedPosts category={post.category} tags={post.tags} slug={slug} sm />

          <PopularPosts sm />

          <RecentPosts sm />
        </Content>
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
      excerpt(pruneLength: 130)
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
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
        cardimage {
          childImageSharp {
            fluid(maxWidth: 680) {
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
