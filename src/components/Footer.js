import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { MailOutline } from '@styled-icons/material/MailOutline'
import { Heart } from '@styled-icons/entypo/Heart'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'
import config from '../../config'
import Button from './Button'
import AllCategories from './AllCategories'
import AllTags from './AllTags'
import useBuildTime from '../hooks/useBuildTime'

const FooterContainer = styled.footer`
  padding: 1.5rem 0;
  background: rgba(0, 0, 0, 0.03);
  span {
    font-size: 0.75rem;
  }
`

const Copyright = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  svg {
    fill: ${props => props.theme.colors.secondary};
  }
`

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto 3rem auto;
  padding: 0 1rem;
  p {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

const Footer = () => {
  const buildTime = useBuildTime()

  const eventTracker = label => {
    ReactGA.event({
      category: 'Footer',
      action: globalHistory.location.pathname,
      label,
    })
  }

  return (
    <>
      <FooterContainer>
        <Container>
          <p>カテゴリ：</p>
          <AllCategories />
          <p>タグ：</p>
          <AllTags />
        </Container>
        <div style={{ textAlign: 'center' }}>
          <Link to="/contact/" onClick={eventTracker('お問い合わせ')}>
            <Button big>
              <MailOutline />
              お問い合わせ
            </Button>
          </Link>
        </div>
        <Copyright>
          &copy; {new Date().getFullYear()}
          {` `}
          <Link to="/" onClick={eventTracker(config.siteTitle)}>
            {config.siteTitle}
          </Link>{' '}
          Made with <Heart /> in Canada.
          <br />
          Last build: {buildTime}
        </Copyright>
      </FooterContainer>
    </>
  )
}

export default Footer
