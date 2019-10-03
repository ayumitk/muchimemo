const { GREETING } = process.env

exports.handler = async (event, context) => ({
  statusCode: 200,
  body: GREETING,
})
