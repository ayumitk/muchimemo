const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // let slug

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent)

    if (parent.internal.type === 'File') {
      createNodeField({
        name: `sourceName`,
        node,
        value: parent.sourceInstanceName,
      })
    }

    // if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    // ) {
    //   slug = `/${_.kebabCase(node.frontmatter.slug)}`
    // } else if (
    //   Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
    //   Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    // ) {
    //   slug = `/${_.kebabCase(node.frontmatter.title)}`
    // }

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const categoryTemplate = require.resolve('./src/templates/category.js')
  const tagTemplate = require.resolve('./src/templates/tag.js')

  const result = await wrapper(
    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
              sourceName
            }
            tableOfContents
            frontmatter {
              title
              description
              category
              tags
            }
          }
        }
      }
    `)
  )

  const posts = result.data.allMdx.nodes

  posts.forEach((n, index) => {
    const next = index === 0 ? null : posts[index - 1]
    const prev = index === posts.length - 1 ? null : posts[index + 1]

    let templateName = 'post'
    if (n.fields.sourceName === 'page') {
      templateName = 'page'
    }

    createPage({
      path: n.fields.slug,
      component: require.resolve(`./src/templates/${templateName}.js`),
      context: {
        slug: n.fields.slug,
        prev,
        next,
      },
    })
  })

  const categorySet = new Set()

  _.each(posts, n => {
    if (_.get(n, 'frontmatter.category')) {
      categorySet.add(n.frontmatter.category)
      // n.frontmatter.category.forEach(cat => {
      //   categorySet.add(cat)
      // })
    }
  })

  const categories = Array.from(categorySet)

  categories.forEach(category => {
    createPage({
      path: `/category/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })

  const tagSet = new Set()

  _.each(posts, n => {
    if (_.get(n, 'frontmatter.tags')) {
      n.frontmatter.tags.forEach(tag => {
        tagSet.add(tag)
      })
    }
  })

  const tags = Array.from(tagSet)

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })
}
