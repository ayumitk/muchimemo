import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const affiliateId = process.env.GATSBY_AMAZON_AFFILIATE_ID

const AmazonLink = styled.div`
  /* border: 1px solid ${props => props.theme.colors.grey.ultraLight}; */
  border: 5px solid rgba(0,0,0,0.1);
  padding: 1rem;
  margin: 1.75rem 0 0 0;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0.5rem;
  }
  a {
    display: flex;
  }
  &:hover{
    border-color: ${props => props.theme.colors.primary};
  }
`

const AmazonImage = styled.div`
  margin-right: 10px;
  img {
    width: 100px;
  }
`

const AmazonInfo = styled.div`
  flex: 1;
`

const ProductName = styled.p`
  margin: 0 !important;
  line-height: 1.4 !important;
  font-weight: bold;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: ${props => props.theme.fontSize.small} !important;
  }
`

const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: #fff;
  border: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: ${props => props.theme.fontSize.small};
  margin-top: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const Author = styled.p`
  margin: 0 !important;
  font-size: ${props => props.theme.fontSize.small} !important;
  color: ${props => props.theme.colors.grey.default};
`

const Kindle = styled.p`
  margin: 0 !important;
  background: #ffa724;
  font-size: 0.562rem !important;
  padding: 0.25rem 0.5rem;
  display: inline-block;
  line-height: 1 !important;
  color: #000;
`

function Amazon({ asin, title, linkId, author, KindleUnlimited }) {
  return (
    <>
      <AmazonLink className="amazon-link">
        <a
          href={`https://www.amazon.co.jp/gp/product/${asin}/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=${asin}&linkCode=as2&tag=${affiliateId}&linkId=${linkId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AmazonImage>
            <img
              src={`//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=${asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=${affiliateId}`}
              alt={`${title} 画像`}
            />
          </AmazonImage>
          <AmazonInfo>
            <ProductName>{title}</ProductName>
            {author ? <Author>{`作者 : ${author}`}</Author> : ''}
            <Button type="button">Amazonで購入する</Button>
            {KindleUnlimited ? (
              <div>
                <Kindle>Kindle Unlimited 対象作品</Kindle>
              </div>
            ) : (
              ''
            )}
          </AmazonInfo>
        </a>
      </AmazonLink>
    </>
  )
}

export default Amazon

Amazon.propTypes = {
  asin: PropTypes.string,
  title: PropTypes.string,
  linkId: PropTypes.string,
  author: PropTypes.string,
  KindleUnlimited: PropTypes.bool,
}

Amazon.defaultProps = {
  asin: null,
  title: null,
  linkId: null,
  author: null,
  KindleUnlimited: false,
}
