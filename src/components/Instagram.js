import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

function Instagram({ id }) {
  return (
    <div>
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
