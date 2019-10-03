const { ALGOLIA_APP_ID } = process.env

exports.handler = async (event, context) => ({
  statusCode: 200,
  body: ALGOLIA_APP_ID,
})
