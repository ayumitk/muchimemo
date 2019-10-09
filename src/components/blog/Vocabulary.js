import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const VocabularyContainer = styled.dl`
  border: solid 1px #ccc;
  padding: 1rem;
  dt {
    font-weight: bold;
  }
  dd {
    margin: 0;
  }
`

function Vocabulary({ en, ja }) {
  return (
    <>
      <VocabularyContainer>
        <dt>{en}</dt>
        <dd>{ja}</dd>
      </VocabularyContainer>
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
