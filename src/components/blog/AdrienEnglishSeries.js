import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TableContainer = styled.div`
  overflow: auto;
`

function AdrienEnglishSeries() {
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
            <a href="https://amzn.to/31Z2V0I" target="_blank" rel="noopener noreferrer">
              Fatal Shadows
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2Vt6k5C" target="_blank" rel="noopener noreferrer">
              天使の影
            </a>
          </td>
          <td>
            <Link to="/mm-romance/fatal-shadow">感想</Link>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <a href="https://amzn.to/2MlInJb" target="_blank" rel="noopener noreferrer">
              A Dangerous Thing
            </a>
          </td>
          <td>
            <a href="https://amzn.to/30VMssI" target="_blank" rel="noopener noreferrer">
              死者の囁き
            </a>
          </td>
          <td>
            <Link to="/mm-romance/a-dangerous-thing">感想</Link>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <a href="https://amzn.to/30RwhN1" target="_blank" rel="noopener noreferrer">
              The Hell You Say
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2ASNbAk" target="_blank" rel="noopener noreferrer">
              悪魔の聖餐
            </a>
          </td>
          <td />
        </tr>
        <tr>
          <td>4</td>
          <td>
            <a href="https://amzn.to/31XWsTC" target="_blank" rel="noopener noreferrer">
              Death of a Pirate King
            </a>
          </td>
          <td>
            <a href="https://amzn.to/30Z71Vv" target="_blank" rel="noopener noreferrer">
              海賊王の死
            </a>
          </td>
          <td />
        </tr>
        <tr>
          <td>5</td>
          <td>
            <a href="https://amzn.to/2pLVtHZ" target="_blank" rel="noopener noreferrer">
              The Dark Tide
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2nu0Qei" target="_blank" rel="noopener noreferrer">
              瞑き流れ
            </a>
          </td>
          <td />
        </tr>
        <tr>
          <td>6</td>
          <td>
            <a href="https://amzn.to/2pLZjkm" target="_blank" rel="noopener noreferrer">
              So This is Christmas
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2Itywjk" target="_blank" rel="noopener noreferrer">
              So This is Christmas
            </a>
          </td>
          <td />
        </tr>
      </table>
    </TableContainer>
  )
}

export default AdrienEnglishSeries
