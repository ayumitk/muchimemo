import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { PictureAsPdf } from '@styled-icons/material/PictureAsPdf'

const Button = styled.div`
  text-align: center;
  margin: 1.5rem 0 3rem 0;
  a {
    display: inline-block;
    background: ${props => props.theme.colors.primary};
    /* font-size: 1.125rem; */
    color: #fff;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: -0.25rem;
      margin-right: 0.15rem;
    }
    div {
      font-size: 0.75rem;
      display: inline;
    }
    &:hover {
      opacity: 0.8;
      color: #fff;
    }
  }
`

const PdfDownload = ({ pdf, label }) => {
  const data = useStaticQuery(graphql`
    query PdfQuery {
      theuntamedchart12: allFile(filter: { name: { eq: "the_untamed_chart_1_2" } }) {
        edges {
          node {
            prettySize
            publicURL
          }
        }
      }
      theuntamedchart37: allFile(filter: { name: { eq: "the_untamed_chart_3_7" } }) {
        edges {
          node {
            prettySize
            publicURL
          }
        }
      }
    }
  `)

  if (pdf === 'the_untamed_chart_1_2') {
    return (
      <>
        <Button>
          <a
            href={data.theuntamedchart12.edges[0].node.publicURL}
            download={data.theuntamedchart12.edges[0].node.publicURL}
          >
            <PictureAsPdf />
            {label}
            <div>({data.theuntamedchart12.edges[0].node.prettySize})</div>
          </a>
        </Button>
      </>
    )
  }

  return (
    <>
      <Button>
        <a
          href={data.theuntamedchart37.edges[0].node.publicURL}
          download={data.theuntamedchart37.edges[0].node.publicURL}
        >
          <PictureAsPdf />
          {label}
          <div>({data.theuntamedchart37.edges[0].node.prettySize})</div>
        </a>
      </Button>
    </>
  )
}

export default PdfDownload
