/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import { Link } from 'gatsby'
import { Layout, Wrapper, Content, SEO } from '../components'
import PopularPosts from '../components/PopularPosts'
import RecentPosts from '../components/RecentPosts'

const NotFound = () => (
  <Layout customSEO>
    <Wrapper>
      <SEO pageTitle="お探しのページが見つかりません" pageDescription="" pageOgp="" page />
      <Content>
        <h1>404 Page not found.</h1>
        <p>お探しのページは、移動または削除された可能性があります。</p>
        <Link to="/">トップページへ</Link>
        <PopularPosts />
        <RecentPosts />
      </Content>
    </Wrapper>
  </Layout>
)

export default NotFound
