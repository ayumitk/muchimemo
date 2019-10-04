const { GATSBY_ALGOLIA_ADMIN_API_KEY } = process.env

exports.handler = async (event, context) => ({
  statusCode: 200,
  body: GATSBY_ALGOLIA_ADMIN_API_KEY,
})
