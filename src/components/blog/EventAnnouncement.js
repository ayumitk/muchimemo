import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { OpenBook } from '@styled-icons/entypo/OpenBook'

const Container = styled.div`
  border: solid 2px #8dcac3;
  background: #e9f1f0;
  padding: 1.5rem;
  margin-top: 2.5rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 1rem;
  }
  h3,
  p {
    margin: 0 !important;
    line-height: 1.5 !important;
  }
  h3 {
    font-size: 1.125rem !important;
    margin-bottom: 0.25rem !important;
    svg {
      height: 1.25rem;
      width: 1.25rem;
      margin-right: 0.25rem;
      color: ${props => props.theme.colors.primary};
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1rem !important;
    }
  }
`

function EventAnnouncement({ title, bookName, bookUrl, date, capacity, tool }) {
  return (
    <>
      <Container>
        <h3>
          <OpenBook />
          {title}
        </h3>
        <p>
          課題図書：『
          <a href={bookUrl} target="_blank" rel="noopener noreferrer">
            {bookName}
          </a>
          』<br />
          日程：{date}
          <br />
          ツール：{tool}
        </p>
      </Container>
    </>
  )
}

export default EventAnnouncement

EventAnnouncement.propTypes = {
  title: PropTypes.string.isRequired,
  bookName: PropTypes.string.isRequired,
  bookUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  tool: PropTypes.string.isRequired,
}
