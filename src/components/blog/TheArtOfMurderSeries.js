import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TableContainer = styled.div`
  overflow: auto;
`

function TheArtOfMurderSeries() {
  return (
    <TableContainer>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>原書</th>
          <th>日本語翻訳版</th>
          <th>ジーナ</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <a href="https://amzn.to/30XRBAx" target="_blank" rel="noopener noreferrer">
            The Mermaid Murders
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2IDWJDJ" target="_blank" rel="noopener noreferrer">
            マーメイド・マーダーズ
            </a>
          </td>
          <td><Link to="/mm-romance/the-mermaid-murders/">感想</Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <a href="https://amzn.to/2IBmvZp" target="_blank" rel="noopener noreferrer">
            The Monet Murders
            </a>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>3</td>
          <td>
            <a href="https://amzn.to/33hGiow" target="_blank" rel="noopener noreferrer">
            The Magician Murders
            </a>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>4</td>
          <td>
            <a href="https://amzn.to/313zaKV" target="_blank" rel="noopener noreferrer">
            The Monuments Men Murders
            </a>
          </td>
          <td />
          <td />
        </tr>
      </table>
    </TableContainer>
  )
}

export default TheArtOfMurderSeries
