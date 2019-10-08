import React from 'react'
import PropTypes from 'prop-types'
import { TwitterTweetEmbed } from 'react-twitter-embed'

function Twitter({ id }) {
  return (
    <>
      <TwitterTweetEmbed tweetId={id} />
    </>
  )
}

export default Twitter

Twitter.propTypes = {
  id: PropTypes.string.isRequired,
}
