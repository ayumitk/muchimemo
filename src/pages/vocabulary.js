import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, InputLabel, MenuItem, Card, FormControl, Select } from '@material-ui/core'
import { Layout, Wrapper, Content, SEO } from '../components'
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
  /* box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12); */
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
    &.idiom,
    &.phrasalVerb {
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
    &.slang,
    &.conjunction {
      background: #f2f2f2;
    }
  }
  .book {
    text-align: right;
    margin-top: 0.25rem;
    color: ${props => props.theme.colors.grey.light};
    font-size: 0.687rem;
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
    // transition: `all 0.15s ease-out`,
    // boxShadow: `none`,
    '&:hover': {
      // top: `-5px`,
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
    } else if (post.frontmatter.books === book) {
      postBooks.push(post)
    }
  })
  postBooks.filter(post => {
    if (type === 'all') {
      posts.push(post)
    } else if (post.frontmatter.type === type) {
      posts.push(post)
    }
  })
  posts.sort((a, b) => {
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
  console.log(posts)

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
    <Layout customSEO>
      <Wrapper>
        <SEO
          pageTitle="M/Mロマンス小説の単語帳"
          pageDescription="例文はほぼ濡れ場。M/Mロマンス小説（海外BL）原書でよく見かける単語•イディオム•スラング集を作成中です。日常生活であまり役に立たない言葉の数々を集めて行きます。"
          pageOgp="/img/vocabulary.jpg"
          page
        />
        <Content>
          <Title>M/Mロマンス小説の単語帳</Title>

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
                  アドリアン•イングリッシュ
                </MenuItem>
                <MenuItem value="allsFair" className={classes.menuItem}>
                  All's Fair
                </MenuItem>
                <MenuItem value="thinkOfEngland" className={classes.menuItem}>
                  イングランドを想え
                </MenuItem>
                <MenuItem value="drugChase" className={classes.menuItem}>
                  ドラッグ•チェイス
                </MenuItem>
                <MenuItem value="howlAtTheMoon" className={classes.menuItem}>
                  月吠えシリーズ
                </MenuItem>
                <MenuItem value="speechless" className={classes.menuItem}>
                  Speechless
                </MenuItem>
                <MenuItem value="hellOrHighWater" className={classes.menuItem}>
                  ヘル･オア･ハイウォーター
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
                  名詞（noun）
                </MenuItem>
                <MenuItem value="adjective" className={classes.menuItem}>
                  形容詞(adjective)
                </MenuItem>
                <MenuItem value="verb" className={classes.menuItem}>
                  動詞（verb）
                </MenuItem>
                <MenuItem value="adverb" className={classes.menuItem}>
                  副詞（adverb）
                </MenuItem>
                <MenuItem value="conjunction" className={classes.menuItem}>
                  接続詞（conjunction）
                </MenuItem>
                <MenuItem value="idiom" className={classes.menuItem}>
                  イディオム（idiom）
                </MenuItem>
                <MenuItem value="phrasalVerb" className={classes.menuItem}>
                  句動詞（phrasal verb）
                </MenuItem>
                <MenuItem value="slang" className={classes.menuItem}>
                  スラング（slang）
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
                      <div className="book">{TagsConfig[post.frontmatter.books].label}</div>
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
