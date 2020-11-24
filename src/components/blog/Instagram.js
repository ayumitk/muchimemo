import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import PropTypes from 'prop-types'

function Instagram({ id }) {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <InstagramEmbed
        url={`https://instagr.am/p/${id}/`}
        clientAccessToken={`${process.env.GATSBY_INSTAGRAM_CLIENT_ACCESS_TOKEN}`}
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  )
}

export default Instagram

Instagram.propTypes = {
  id: PropTypes.string.isRequired,
}
