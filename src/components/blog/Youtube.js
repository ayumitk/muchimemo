import React from 'react'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const YoutubeContainer = styled.div`
  line-height: 0;
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin: 1.75rem 0 0 0;
  iframe {
    position: absolute;
    top: 0;
    right: 0;
    width: 100% !important;
    height: 100% !important;
  }
`

class Youtube extends React.Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  render() {
    const { id } = this.props
    const opts = {
      width: '288',
      height: '162',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    }

    return (
      <YoutubeContainer>
        <YouTube videoId={id} opts={opts} onReady={this._onReady} />
      </YoutubeContainer>
    )
  }
}

export default Youtube

Youtube.propTypes = {
  id: PropTypes.string.isRequired,
}
