import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function Vocabulary({ en, ja }) {
  return (
    <>
      <div>Vocabulary.js</div>
    </>
  )
}

export default Vocabulary

Vocabulary.propTypes = {
  en: PropTypes.string,
  ja: PropTypes.string,
}

Vocabulary.defaultProps = {
  en: null,
  ja: null,
}
