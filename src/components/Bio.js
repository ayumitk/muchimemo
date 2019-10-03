import React from 'react'
import config from '../../config'

const Bio = () => (
  <div>
    <div>{config.author}</div>
    <div>{config.siteDescription}</div>
  </div>
)

export default Bio
