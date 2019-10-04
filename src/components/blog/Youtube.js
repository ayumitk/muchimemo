import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  render() {
    const { id } = this.props
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    return <YouTube videoId={id} opts={opts} onReady={this._onReady} />
  }
}

export default Youtube

Youtube.propTypes = {
  id: PropTypes.string.isRequired,
}
