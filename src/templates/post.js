import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Img from 'gatsby-image'
import { DiscussionEmbed } from 'disqus-react'

import { Layout, Wrapper, Subline, SEO, PrevNext, Article } from '../components'
import TableOfContents from '../components/TableOfContents'
import CategoriesConfig from '../../config/categories'
import TagsConfig from '../../config/tags'
import Share from '../components/Share'
import config from '../../config'

const Content = styled.article`
  grid-column: 2;
  max-width: 680px;
  border-radius: 1rem;
  margin: 0 auto;
  z-index: 9000;
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
  hr {
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.grey.ultraLight};
    margin: 2rem 0;
  }
  p + h2 {
    margin-top: 5rem;
  }
  p + h3,
  div + h4 {
    margin-top: 3.5rem;
  }
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  /* margin-top: 4rem; */
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

const Post = ({ pageContext: { slug, prev, next }, data: { mdx: postNode, allMdx } }) => {
  const post = postNode.frontmatter

  const { nodes } = allMdx

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
          <Title>{post.title}</Title>
          <Subline>
            {post.date} カテゴリ：{' '}
            {post.categories.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ', '}
                <Link to={`/categories/${kebabCase(cat)}`}>{CategoriesConfig[cat]}</Link>
              </React.Fragment>
            ))}
            <Tags>
              {post.tags.map(tag => (
                <span key={tag}>
                  <Link to={`/tags/${kebabCase(tag)}`}>#{TagsConfig[tag]}</Link>
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

          <h3>関連記事</h3>
          {nodes.map(n => {
            if (n.frontmatter.categories[0] === post.categories[0])
              return (
                <Article
                  key={n.fields.slug}
                  title={n.frontmatter.title}
                  date={n.frontmatter.date}
                  excerpt={n.excerpt}
                  timeToRead={n.timeToRead}
                  slug={n.fields.slug}
                  description={n.frontmatter.description}
                  categories={n.frontmatter.categories}
                  tags={n.frontmatter.tags}
                  image={n.frontmatter.squareimage.childImageSharp.fluid}
                />
              )
          })}

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
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
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
      tableOfContents
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { sourceName: { eq: "post" }, slug: { ne: $slug } }
        # frontmatter: { categories: { in: ["misc"] } }
      }
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          description
          categories
          tags
          squareimage {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  }
`
