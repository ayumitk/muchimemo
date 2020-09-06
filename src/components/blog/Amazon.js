import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { globalHistory } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import AmazonConfig from '../../../config/amazon'

const affiliateId = process.env.GATSBY_AMAZON_AFFILIATE_ID

const AmazonLink = styled.div`
  /* border: 1px solid ${props => props.theme.colors.grey.ultraLight}; */
  border: 5px solid rgba(0,0,0,0.1);
  padding: 1rem;
  margin: 1.75rem 0 0 0;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0.5rem;
  }
  /* &:hover{
    border-color: ${props => props.theme.colors.primary};
  } */
  .btn{
    color:#FFF;
    margin-right:0.25rem;
    padding: 0 0.5rem;
    border-radius: 0.15rem;
    font-size: ${props => props.theme.fontSize.small};
    margin-top: 0.25rem;
    display: inline-block;
    line-height:38px;
    border:solid 1px rgba(0,0,0,0.15);
    .gatsby-image-wrapper{
      vertical-align: middle;
    }
  }
  .btn-amazon{
    .gatsby-image-wrapper{
      width:calc(550px * 0.115);
      height:calc(166px * 0.115);
    }
    &:hover{
      border-color:#FF9900;
    }
  }
  .btn-rakuten{
    .gatsby-image-wrapper{
      width:calc(323px * 0.19);
      height:calc(96px * 0.19);
    }
    &:hover{
      border-color:#BF0000;
    }
  }
  .btn-honto{
    .gatsby-image-wrapper{
      width:calc(300px * 0.175);
      height:calc(140px * 0.175);
    }
    &:hover{
      border-color:#0186CD;
    }
  }
`

const AmazonImage = styled.div`
  margin-right: 10px;
  img {
    width: 100px;
    border: solid 1px rgba(0, 0, 0, 0.15);
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

function Amazon({ asin, title, linkId, author, KindleUnlimited, audiobook, url, book }) {
  const data = useStaticQuery(graphql`
    query AmazonQuery {
      amazon: file(absolutePath: { regex: "/logo-amazon.png/" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rakuten: file(absolutePath: { regex: "/logo-rakuten.png/" }) {
        childImageSharp {
          fluid(maxWidth: 323) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      honto: file(absolutePath: { regex: "/logo-honto.png/" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const link = `https://www.amazon.co.jp/gp/product/${asin}/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=${asin}&linkCode=as2&tag=${affiliateId}&linkId=${linkId}&language=ja_JP`
  const eventTracker = () => {
    ReactGA.event({
      category: 'Amazon Button',
      action: globalHistory.location.pathname,
      label: `${asin} ${title}`,
    })
  }
  // console.log(AmazonConfig[book])
  if (book) {
    return (
      <>
        {AmazonConfig[book].jp.url && (
          <AmazonLink className="amazon-link">
            <AmazonImage>
              <img
                src={`//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=${AmazonConfig[book].jp.asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=${affiliateId}`}
                alt={`${AmazonConfig[book].jp.title} 画像`}
              />
            </AmazonImage>
            <AmazonInfo>
              <ProductName>{AmazonConfig[book].jp.title}</ProductName>
              {AmazonConfig[book].jp.author ? <Author>{`作者 : ${AmazonConfig[book].jp.author}`}</Author> : ''}
              <a href={AmazonConfig[book].jp.url} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
                <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
              </a>
              {AmazonConfig[book].jp.rakuten ? (
                <a
                  href={AmazonConfig[book].jp.rakuten}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-rakuten"
                >
                  <Image fixed={data.rakuten.childImageSharp.fluid} alt="楽天ブックスで購入する" />
                </a>
              ) : (
                ''
              )}
              {/* {AmazonConfig[book].jp.honto ? (
                <a
                  href={AmazonConfig[book].jp.honto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-honto"
                >
                  <Image fixed={data.honto.childImageSharp.fluid} alt="hontoで購入する" />
                </a>
              ) : (
                ''
              )} */}
              {AmazonConfig[book].jp.unlimited ? (
                <div>
                  <Kindle>Kindle Unlimited 対象作品</Kindle>
                </div>
              ) : (
                ''
              )}
            </AmazonInfo>
          </AmazonLink>
        )}
        <AmazonLink className="amazon-link">
          <AmazonImage>
            <img
              src={`//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=${AmazonConfig[book].en.asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=${affiliateId}`}
              alt={`${AmazonConfig[book].en.title} 画像`}
            />
          </AmazonImage>
          <AmazonInfo>
            <ProductName>{AmazonConfig[book].en.title}</ProductName>
            {AmazonConfig[book].en.author ? <Author>{`作者 : ${AmazonConfig[book].en.author}`}</Author> : ''}
            <a href={AmazonConfig[book].en.url} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
              <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
            </a>
            {AmazonConfig[book].en.rakuten ? (
              <a
                href={AmazonConfig[book].en.rakuten}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-rakuten"
              >
                <Image fixed={data.rakuten.childImageSharp.fluid} alt="楽天ブックスで購入する" />
              </a>
            ) : (
              ''
            )}
            {AmazonConfig[book].en.unlimited ? (
              <div>
                <Kindle>Kindle Unlimited 対象作品</Kindle>
              </div>
            ) : (
              ''
            )}
          </AmazonInfo>
        </AmazonLink>
      </>
    )
  }
  return (
    <>
      <AmazonLink className="amazon-link">
        <AmazonImage>
          <img
            src={`//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=${asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=${affiliateId}`}
            alt={`${title} 画像`}
          />
        </AmazonImage>
        <AmazonInfo>
          <ProductName>{title}</ProductName>
          {author ? <Author>{`作者 : ${author}`}</Author> : ''}
          <a href={url || link} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
            <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
          </a>
          {KindleUnlimited ? (
            <div>
              <Kindle>Kindle Unlimited 対象作品</Kindle>
            </div>
          ) : (
            ''
          )}
        </AmazonInfo>
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
  audiobook: PropTypes.bool,
  url: PropTypes.string,
}

Amazon.defaultProps = {
  asin: null,
  title: null,
  linkId: null,
  author: null,
  KindleUnlimited: false,
  audiobook: false,
  url: null,
}
