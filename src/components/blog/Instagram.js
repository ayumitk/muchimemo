import React from 'react'
import InstagramEmbed from 'react-instagram-embed'
import PropTypes from 'prop-types'

function Instagram({ id }) {
  return (
    <div style={{marginTop:'2.5rem'}}>
      <InstagramEmbed
        url={`https://www.instagram.com/p/${id}/`}
        maxWidth={320}
        hideCaption
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
