import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0;
  a {
    display: inline-block;
    background: ${props => props.theme.colors.secondary};
    font-size: 1.125rem;
    color: #fff;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      color: #fff;
    }
  }
`

function Button({ label, url }) {
  return (
    <>
      <ButtonContainer>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </ButtonContainer>
    </>
  )
}

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
