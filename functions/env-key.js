const { ALGOLIA_ADMIN_API_KEY } = process.env

exports.handler = async (event, context) => ({
  statusCode: 200,
  body: ALGOLIA_ADMIN_API_KEY,
})
