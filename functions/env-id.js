const { GATSBY_ALGOLIA_APP_ID } = process.env

exports.handler = async (event, context) => ({
  statusCode: 200,
  body: GATSBY_ALGOLIA_APP_ID,
})
