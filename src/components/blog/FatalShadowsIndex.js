import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { RightArrowCircle } from '@styled-icons/boxicons-solid/RightArrowCircle'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'
import { ChevronUp } from '@styled-icons/boxicons-regular/ChevronUp'

const IndexContainer = styled.div`
  background: #f4f7f6;
  margin: 2rem 0;
  padding: 1rem;
  border: solid 1px #a8ccc7;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: 0.937rem;
    padding: 0.5rem;
  }
`

const IndexHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0 !important;
    font-size: 1rem !important;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 0.937rem !important;
    }
  }
  button {
    background: ${props => props.theme.colors.primary};
    border: 0;
    padding: 0.2rem 0 0.2rem 0.5rem;
    font-size: 0.75rem;
    width: 3.4rem;
    text-align: center;
    margin-left: 0.5rem;
    color: #fff;
    border-radius: 1rem;
    cursor: pointer;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      padding: 0.1rem 0 0.1rem 0.5rem;
      font-size: 0.687rem;
    }
  }
`

const IndexLinks = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  padding: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0;
  }
  a {
    display: block;
    margin: 0.5rem;
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      margin: 0.25rem;
    }
    &.active {
      color: ${props => props.theme.colors.grey.dark};
      &::after {
        content: ' ←今ここ';
        color: ${props => props.theme.colors.secondary};
        font-size: 0.75rem;
        font-weight: bold;
      }
    }
  }
`

class FatalShadowsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  componentDidMount() {
    const { open } = this.props
    if (open) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen,
      }))
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const { isOpen } = this.state
    return (
      <IndexContainer>
        <IndexHeader>
          <h2>このシリーズの記事</h2>
          <button type="button" onClick={this.toggle}>
            {isOpen ? (
              <>
                閉じる
                <ChevronUp />
              </>
            ) : (
              <>
                開く
                <ChevronDown />
              </>
            )}
          </button>
        </IndexHeader>
        <IndexLinks isOpen={isOpen}>
          <Link activeClassName="active" to="/english/fatal-shadows-1/">
            <RightArrowCircle /> チャプター 1 : 二人の出会い
          </Link>
          <Link activeClassName="active" to="/english/fatal-shadows-2/">
            <RightArrowCircle /> チャプター 2 : いきなりファーストネーム
          </Link>
        </IndexLinks>
      </IndexContainer>
    )
  }
}

export default FatalShadowsIndex

FatalShadowsIndex.propTypes = {
  open: PropTypes.bool,
}

FatalShadowsIndex.defaultProps = {
  open: false,
}
