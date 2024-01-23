import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  .btn-primevideo{
    .gatsby-image-wrapper{
      width:calc(260px * 0.3);
      height:calc(80px * 0.3);
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
  .btn-renta{
    .gatsby-image-wrapper{
      width:calc(160px * 0.375);
      height:calc(48px * 0.375);
    }
    &:hover{
      border-color:#90C31F;
    }
    .gatsby-image-wrapper{
      vertical-align: text-top;
    }
  }
  .btn-cmoa{
    .gatsby-image-wrapper{
      width:calc(104px * 0.45);
      height:calc(46px * 0.45);
    }
    &:hover{
      border-color:#E95108;
    }
    .gatsby-image-wrapper{
      vertical-align: text-top;
    }
  }
  .btn-ebookjapan{
    .gatsby-image-wrapper{
      width:calc(275px * 0.275);
      height:calc(74px * 0.275);
    }
    &:hover{
      border-color:#F8485E;
    }
    .gatsby-image-wrapper{
      vertical-align: text-top;
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

const Narrator = styled.p`
  margin: 0 0 0.25rem 0 !important;
  font-size: ${props => props.theme.fontSize.small} !important;
  color: ${props => props.theme.colors.grey.default};
  line-height: 1.4 !important;
`

function Amazon({ asin, title, author, audiobook, url, book, rakuten, renta, cmoa, ebookjapan, honto, primeVideo }) {
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
      renta: file(absolutePath: { regex: "/logo-renta.png/" }) {
        childImageSharp {
          fluid(maxWidth: 160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cmoa: file(absolutePath: { regex: "/logo-cmoa.png/" }) {
        childImageSharp {
          fluid(maxWidth: 104) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ebookjapan: file(absolutePath: { regex: "/logo-ebookjapan.png/" }) {
        childImageSharp {
          fluid(maxWidth: 275) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      primevideo: file(absolutePath: { regex: "/logo-primevideo.png/" }) {
        childImageSharp {
          fluid(maxWidth: 260) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (audiobook) {
    return (
      <>
        {AmazonConfig[book].audiobook.url && (
          <AmazonLink className="amazon-link">
            <AmazonImage>
              <img
                src={`https://images-fe.ssl-images-amazon.com/images/P/${asin}.LZZZZZZZ`}
                alt={`${AmazonConfig[book].en.title} 画像`}
              />
            </AmazonImage>
            <AmazonInfo>
              <ProductName>{AmazonConfig[book].en.title}</ProductName>
              {AmazonConfig[book].en.author && (
                <>
                  <Author>{`作者 : ${AmazonConfig[book].en.author}`}</Author>
                  <Narrator>{`ナレーター : ${AmazonConfig[book].audiobook.narrator}`}</Narrator>
                </>
              )}
              <a
                href={AmazonConfig[book].audiobook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amazon"
              >
                <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
              </a>
            </AmazonInfo>
          </AmazonLink>
        )}
      </>
    )
  }
  if (book) {
    return (
      <>
        {AmazonConfig[book].jp.url && (
          <AmazonLink className="amazon-link">
            <AmazonImage>
              <img
                src={`https://images-fe.ssl-images-amazon.com/images/P/${asin}.LZZZZZZZ`}
                alt={`${AmazonConfig[book].jp.title} 画像`}
              />
            </AmazonImage>
            <AmazonInfo>
              <ProductName>{AmazonConfig[book].jp.title}</ProductName>
              {AmazonConfig[book].jp.author && <Author>{`作者 : ${AmazonConfig[book].jp.author}`}</Author>}
              <a href={AmazonConfig[book].jp.url} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
                <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
              </a>
              {AmazonConfig[book].jp.rakuten && (
                <a
                  href={AmazonConfig[book].jp.rakuten}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-rakuten"
                >
                  <Image fixed={data.rakuten.childImageSharp.fluid} alt="楽天ブックスで購入する" />
                </a>
              )}
              {AmazonConfig[book].jp.renta && (
                <a
                  href={AmazonConfig[book].jp.renta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-renta"
                >
                  <Image fixed={data.renta.childImageSharp.fluid} alt="Renta!で購入する" />
                </a>
              )}
              {AmazonConfig[book].jp.cmoa && (
                <a href={AmazonConfig[book].jp.cmoa} target="_blank" rel="noopener noreferrer" className="btn btn-cmoa">
                  <Image fixed={data.cmoa.childImageSharp.fluid} alt="コミックシーモアで購入する" />
                </a>
              )}
              {AmazonConfig[book].jp.ebookjapan && (
                <a
                  href={AmazonConfig[book].jp.ebookjapan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ebookjapan"
                >
                  <Image fixed={data.ebookjapan.childImageSharp.fluid} alt="ebookjapanで購入する" />
                </a>
              )}
              {AmazonConfig[book].jp.honto && (
                <a
                  href={AmazonConfig[book].jp.honto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-honto"
                >
                  <Image fixed={data.honto.childImageSharp.fluid} alt="hontoで購入する" />
                </a>
              )}
            </AmazonInfo>
          </AmazonLink>
        )}
        {AmazonConfig[book].en.url && (
          <AmazonLink className="amazon-link">
            <AmazonImage>
              <img
                src={`https://images-fe.ssl-images-amazon.com/images/P/${asin}.LZZZZZZZ`}
                alt={`${AmazonConfig[book].en.title} 画像`}
              />
            </AmazonImage>
            <AmazonInfo>
              <ProductName>{AmazonConfig[book].en.title}</ProductName>
              {AmazonConfig[book].en.author && <Author>{`作者 : ${AmazonConfig[book].en.author}`}</Author>}
              <a href={AmazonConfig[book].en.url} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
                <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
              </a>
              {AmazonConfig[book].en.rakuten && (
                <a
                  href={AmazonConfig[book].en.rakuten}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-rakuten"
                >
                  <Image fixed={data.rakuten.childImageSharp.fluid} alt="楽天ブックスで購入する" />
                </a>
              )}
            </AmazonInfo>
          </AmazonLink>
        )}
      </>
    )
  }
  return (
    <>
      <AmazonLink className="amazon-link">
        <AmazonImage>
          <img
            src={`https://images-fe.ssl-images-amazon.com/images/P/${asin}.LZZZZZZZ`}
            alt={`${title} 画像`}
          />
        </AmazonImage>
        <AmazonInfo>
          <ProductName>{title}</ProductName>
          {author && <Author>{`作者 : ${author}`}</Author>}

          {primeVideo ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primevideo">
              <Image fixed={data.primevideo.childImageSharp.fluid} alt="Amazonプライムビデオで視聴する" />
            </a>
          ) : (
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-amazon">
              <Image fixed={data.amazon.childImageSharp.fluid} alt="Amazonで購入する" />
            </a>
          )}

          {rakuten && (
            <a href={rakuten} target="_blank" rel="noopener noreferrer" className="btn btn-rakuten">
              <Image fixed={data.rakuten.childImageSharp.fluid} alt="楽天ブックスで購入する" />
            </a>
          )}
          {renta && (
            <a href={renta} target="_blank" rel="noopener noreferrer" className="btn btn-renta">
              <Image fixed={data.renta.childImageSharp.fluid} alt="Renta!で購入する" />
            </a>
          )}
          {cmoa && (
            <a href={cmoa} target="_blank" rel="noopener noreferrer" className="btn btn-cmoa">
              <Image fixed={data.cmoa.childImageSharp.fluid} alt="コミックシーモアで購入する" />
            </a>
          )}
          {ebookjapan && (
            <a href={ebookjapan} target="_blank" rel="noopener noreferrer" className="btn btn-ebookjapan">
              <Image fixed={data.ebookjapan.childImageSharp.fluid} alt="ebookjapanで購入する" />
            </a>
          )}
          {honto && (
            <a href={honto} target="_blank" rel="noopener noreferrer" className="btn btn-honto">
              <Image fixed={data.honto.childImageSharp.fluid} alt="hontoで購入する" />
            </a>
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
  author: PropTypes.string,
  audiobook: PropTypes.bool,
  url: PropTypes.string,
  book: PropTypes.string,
  rakuten: PropTypes.string,
  renta: PropTypes.string,
  cmoa: PropTypes.string,
  ebookjapan: PropTypes.string,
  honto: PropTypes.string,
  primeVideo: PropTypes.bool,
}

Amazon.defaultProps = {
  asin: null,
  title: null,
  author: null,
  audiobook: false,
  url: null,
  book: null,
  rakuten: null,
  renta: null,
  cmoa: null,
  ebookjapan: null,
  honto: null,
  primeVideo: false,
}
