import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  PocketShareButton,
  EmailShareButton,
} from 'react-share';

import { FacebookF } from 'styled-icons/fa-brands/FacebookF';
import { Twitter } from 'styled-icons/fa-brands/Twitter';
import { Line } from 'styled-icons/fa-brands/Line';
import { GetPocket } from 'styled-icons/fa-brands/GetPocket';
import { MailOutline } from 'styled-icons/material/MailOutline';

const ShareButtons = styled.div`
  display:flex;
  margin: 2rem 0;
  .share-button{
    color: #FFF;
    width: calc(100% / 5);
    text-align: center;
    padding: 0.25rem 0;
    cursor: pointer;
    transition: all 0.2s ease-out;
    &:hover{
      opacity: 0.8;
    }
    svg{
      vertical-align: middle;
    }
    span{
      font-size: 0.687rem;
      display:block;
      @media (max-width: 565.98px) {
        display:none;
      }
    }
    &.facebook{
      background: #3b5998;
    }
    &.twitter{
      background: #1da1f2;
    }
    &.line{
      background: #00c300;
      svg{
        width: 1.3rem;
        height:1.3rem;
      }
    }
    &.pocket{
      background: #ef4056;
    }
    &.email{
      background: #9c9c9c;
    }
  }
`;

const Share = ({ socialConfig, tags }) => (
  <ShareButtons>
    <FacebookShareButton url={socialConfig.config.url} className="share-button facebook">
      <FacebookF />
      <span>Facebook</span>
    </FacebookShareButton>
    <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterUsername.split('@').join('')} hashtags={tags} className="share-button twitter">
      <Twitter />
      <span>Twitter</span>
    </TwitterShareButton>
    <LineShareButton url={socialConfig.config.url} title={socialConfig.config.title} className="share-button line">
      <Line />
      <span>Line</span>
    </LineShareButton>
    <PocketShareButton url={socialConfig.config.url} title={socialConfig.config.title} className="share-button pocket">
      <GetPocket />
      <span>Pocket</span>
    </PocketShareButton>
    <EmailShareButton url={socialConfig.config.url} title={socialConfig.config.title} className="share-button email">
      <MailOutline />
      <span>EMail</span>
    </EmailShareButton>
  </ShareButtons>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterUsername: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Share.defaultProps = {
  tags: [],
};

export default Share;
