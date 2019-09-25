import React from 'react'
import styled from 'styled-components'

const affiliateId = 'ayutak04-22'

const Div = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  a {
    display: flex;
    p {
      margin: 0;
      line-height: 1.4;
      font-size: 0.9rem;
    }
    img {
      width: 100px;
    }
  }
`

const Button = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: #fff;
  border: 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`

function Amazon({ asin, title, linkId }) {
  return (
    <>
      <Div>
        <a
          href={`https://www.amazon.co.jp/gp/product/B079YY3DKK/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=${asin}&linkCode=as2&tag=${affiliateId}&linkId=${linkId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <img
              src={`//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=${asin}&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=${affiliateId}`}
              alt={`${title} 画像`}
            />
          </div>
          <div>
            <p>{title}</p>
            <Button>Amazonで購入する</Button>
          </div>
        </a>
      </Div>
    </>
  )
}

export default Amazon
