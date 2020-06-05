const twemoji = require('remark-twemoji')
const config = require('./config')
const queries = require('./src/utils/algolia')
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

const cfg = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    // google analytics
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: false,
        respectDNT: true,
        pageTransitionDelay: 250,
      },
    },

    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',

    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },

    // for blog post pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: `${__dirname}/content/blog`,
      },
    },

    // for static pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'page',
        path: `${__dirname}/src/pages`,
      },
    },

    // MDX
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          page: require.resolve('./src/templates/page.js'),
          post: require.resolve('./src/templates/post.js'),
          draft: require.resolve('./src/templates/post.js'),
          default: require.resolve('./src/templates/post.js'),
        },
        remarkPlugins: [twemoji],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-medium-zoom`,
          `gatsby-remark-copy-linked-files`,
          // TODO: Replace with "mdx-component-autolink-headers"
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              maintainCase: false,
            },
          },
        ],
        // TODO: Remove this workaround
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [`gatsby-remark-images`, `gatsby-remark-images-medium-zoom`, `gatsby-remark-autolink-headers`],
      },
    },

    // images
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Algolia
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },

    // SVG
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },

    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitleAlt,
        short_name: config.siteTitleManifest,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: config.favicon,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}

if (process.env.CONTEXT !== 'production') {
  cfg.plugins.push({
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `draft`,
      path: `${__dirname}/content/draft`,
    },
  })
}

module.exports = cfg
