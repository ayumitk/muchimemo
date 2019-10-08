/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Layout, Wrapper, Content } from '../components'
import PopularPosts from '../components/PopularPosts'
import RecentPosts from '../components/RecentPosts'
import config from '../../config'

const NotFound = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`お探しのページが見つかりません | ${config.siteTitle}`} />
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
