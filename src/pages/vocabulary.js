import React, { useState } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, InputLabel, MenuItem, Card, FormControl, Select } from '@material-ui/core'
import { Layout, Wrapper, Content } from '../components'
import config from '../../config'
import TagsConfig from '../../config/tags'

const VocabularyList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.grey.dark};
  &:hover {
    color: ${props => props.theme.colors.grey.dark};
  }
  .featured-image {
    width: 100px;
    line-height: 0;
  }
  .article-text {
    flex: 1;
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 1.25;
    margin: 0 0.5rem;
  }
  .type,
  .book {
    font-weight: normal;
  }
  .type {
    color: ${props => props.theme.colors.grey.default};
    display: inline-block;
    padding: 2px 4px;
    font-size: 0.625rem;
    margin-bottom: 0.25rem;
    &.idiom {
      background: #f1dee4;
    }
    &.verb {
      background: #e2f2f6;
    }
    &.noun {
      background: #f6efe2;
    }
    &.adjective {
      background: #f0e7f4;
    }
    &.adverb {
      background: #e5ecd6;
    }
  }
  .book {
    text-align: right;
    margin-top: 0.25rem;
    color: ${props => props.theme.colors.grey.light};
    font-size: 0.687rem;
    & span:after {
      content: ', ';
    }
    & span:last-child:after {
      display: none;
    }
  }
`

const Title = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 1.125rem;
  }
`

const Hit = styled.p`
  margin: 1rem 0;
  font-size: 0.812rem;
  color: ${props => props.theme.colors.grey.light};
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0.5rem 0;
  }
`

const useStyles = makeStyles(() => ({
  formGroup: {
    display: `grid`,
    gridTemplateColumns: `repeat(3, 1fr)`,
    gridColumnGap: `5px`,
    gridRowGap: 0,
  },
  select: {
    fontSize: '0.75rem',
  },
  menuItem: {
    fontSize: '0.75rem',
  },
  inputLabel: {
    fontSize: '0.75rem',
  },
  card: {
    borderRadius: `2px`,
    // boxShadow: `0px 1px 3px 0px rgba(0,0,0,0.2)`,
    '&:hover': {
      // boxShadow: `0px 1px 3px 0px rgba(0,0,0,0.3)`,
    },
  },
}))

const Vocabulary = ({ data: { allMdx } }) => {
  const { nodes } = allMdx

  const classes = useStyles()

  const [book, setBook] = useState('all')
  const [order, setOrder] = useState('new')
  const [type, setType] = useState('all')

  const postBooks = []
  const posts = []
  nodes.filter(post => {
    if (book === 'all') {
      postBooks.push(post)
    } else {
      post.frontmatter.books.forEach(from => {
        if (from === book) {
          postBooks.push(post)
        }
      })
    }
  })
  postBooks.filter(post => {
    if (type === 'all') {
      posts.push(post)
    } else if (post.frontmatter.type === type) {
      posts.push(post)
    }
  })
  posts.sort(function(a, b) {
    if (order === 'new') {
      if (a.frontmatter.date > b.frontmatter.date) {
        return -1
      }
      return 1
    }
    if (order === 'DESC') {
      if (a.frontmatter.title < b.frontmatter.title) {
        return -1
      }
      return 1
    }
    if (order === 'ASC') {
      if (a.frontmatter.title > b.frontmatter.title) {
        return -1
      }
      return 1
    }
  })

  const orderHandleChange = event => {
    setOrder(event.target.value)
  }
  const bookHandleChange = event => {
    setBook(event.target.value)
  }
  const typeHandleChange = event => {
    setType(event.target.value)
  }

  return (
    <Layout>
      <Wrapper>
        <Helmet title={`M/Mロマンス小説のための単語帳 | ${config.siteTitle}`} />
        <Content>
          <Title>M/Mロマンス小説のための単語帳</Title>

          <div className={classes.formGroup}>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>並べ替え</InputLabel>
              <Select value={order} onChange={orderHandleChange} label="並べ替え" className={classes.select}>
                <MenuItem value="new" className={classes.menuItem}>
                  新着順
                </MenuItem>
                <MenuItem value="DESC" className={classes.menuItem}>
                  A → Z
                </MenuItem>
                <MenuItem value="ASC" className={classes.menuItem}>
                  Z → A
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>作品/シリーズ</InputLabel>
              <Select value={book} onChange={bookHandleChange} label="作品/シリーズ" className={classes.select}>
                <MenuItem value="all" className={classes.menuItem}>
                  全て
                </MenuItem>
                <MenuItem value="theArtOfMurder" className={classes.menuItem}>
                  殺しのアート
                </MenuItem>
                <MenuItem value="adrienEnglish" className={classes.menuItem}>
                  アドリアン・イングリッシュ
                </MenuItem>
                <MenuItem value="allsFair" className={classes.menuItem}>
                  フェア・ゲーム
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>種類</InputLabel>
              <Select value={type} onChange={typeHandleChange} label="種類" className={classes.select}>
                <MenuItem value="all" className={classes.menuItem}>
                  全て
                </MenuItem>
                <MenuItem value="noun" className={classes.menuItem}>
                  名詞
                </MenuItem>
                <MenuItem value="adjective" className={classes.menuItem}>
                  形容詞
                </MenuItem>
                <MenuItem value="verb" className={classes.menuItem}>
                  動詞
                </MenuItem>
                <MenuItem value="adverb" className={classes.menuItem}>
                  副詞
                </MenuItem>
                <MenuItem value="idiom" className={classes.menuItem}>
                  イディオム
                </MenuItem>
              </Select>
            </FormControl>
          </div>

          {posts.length === 0 ? <Hit>登録がありません</Hit> : <Hit>{posts.length} 件</Hit>}
          <VocabularyList>
            {posts &&
              posts.map(post => (
                <Card key={post.fields.slug} className={classes.card}>
                  <StyledLink to={post.fields.slug}>
                    <div className="featured-image">
                      <Img fluid={post.frontmatter.squareimage.childImageSharp.fluid} />
                    </div>
                    <div className="article-text">
                      <div className={`type ${post.frontmatter.type}`}>{TagsConfig[post.frontmatter.type].label}</div>
                      <div>{post.frontmatter.title}</div>
                      <div className="book">
                        {post.frontmatter.books.map(bookName => (
                          <span key={book}>{TagsConfig[bookName].label}</span>
                        ))}
                      </div>
                    </div>
                  </StyledLink>
                </Card>
              ))}
          </VocabularyList>
        </Content>
      </Wrapper>
    </Layout>
  )
}

export default Vocabulary

export const vocabularyQuery = graphql`
  query VocabularyPage {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "vocabulary" } }, fields: { sourceName: { ne: "page" } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          description
          category
          tags
          squareimage {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          toc
          books
          type
        }
        fields {
          slug
        }
        excerpt(pruneLength: 130)
        timeToRead
      }
    }
  }
`
