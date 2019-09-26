import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { RightArrowAlt } from 'styled-icons/boxicons-regular/RightArrowAlt'
import { LeftArrowAlt } from 'styled-icons/boxicons-regular/LeftArrowAlt'

const Wrapper = styled.div`
  display: flex;
  margin: 2rem auto;
  padding: 2rem 0;
  border-top: 1px solid ${props => props.theme.colors.grey.ultraLight};
  border-bottom: 1px solid ${props => props.theme.colors.grey.ultraLight};
  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
  justify-items: center;
`

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>前の記事</span>
        <Link to={prev.fields.slug}>
          <LeftArrowAlt /> {prev.frontmatter.title}
        </Link>
      </Prev>
    )}

    {next && (
      <Next>
        <span>次の記事</span>
        <Link to={next.fields.slug}>
          {next.frontmatter.title} <RightArrowAlt />
        </Link>
      </Next>
    )}
  </Wrapper>
)

export default PrevNext

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
}

PrevNext.defaultProps = {
  next: null,
  prev: null,
}
