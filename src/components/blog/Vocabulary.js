import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const VocabularyContainer = styled.dl`
  border: solid 1px ${props => props.theme.colors.grey.ultraLight};
  padding: 1rem;
  margin-top: 2rem;
  dt {
    font-weight: bold;
    color: ${props => props.theme.colors.secondary};
  }
  dd {
    margin: 0;
    font-size: 0.75rem;
  }
`

function Vocabulary({ en, ja }) {
  return (
    <>
      <VocabularyContainer className="vocabulary">
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
