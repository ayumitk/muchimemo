import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const affiliateId = process.env.GATSBY_AMAZON_AFFILIATE_ID

const AmazonLink = styled.div`
  border: 1px solid ${props => props.theme.colors.grey.ultraLight};
  padding: 1rem;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0.5rem;
  }
  a {
    display: flex;
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
  margin: 0;
  margin-bottom: 0.5rem !important;
  line-height: 1.4 !important;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    font-size: ${props => props.theme.fontSize.small} !important;
  }
`

const Button = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: #fff;
  border: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: ${props => props.theme.fontSize.small};
`

function Amazon({ asin, title, linkId }) {
  return (
    <>
      <AmazonLink>
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
            <Button>Amazonで購入する</Button>
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
}

Amazon.defaultProps = {
  asin: null,
  title: null,
  linkId: null,
}
