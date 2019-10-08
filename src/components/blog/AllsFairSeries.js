import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TableContainer = styled.div`
  overflow: auto;
`

function AllsFairSeries() {
  return (
    <TableContainer>
      <table>
        <tr>
          <th />
          <th>原書</th>
          <th>日本語翻訳版</th>
          <th>ジーナ</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <a href="https://amzn.to/2Iy6eEw" target="_blank" rel="noopener noreferrer">
              Fair Game
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2LUUjT8" target="_blank" rel="noopener noreferrer">
              フェア･ゲーム
            </a>
          </td>
          <td>
            <Link to="/mm-romance/fair-game">感想</Link>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <a href="https://amzn.to/2Vp1juz" target="_blank" rel="noopener noreferrer">
              Fair Play
            </a>
          </td>
          <td>
            <a href="https://amzn.to/33dMBJB" target="_blank" rel="noopener noreferrer">
              フェア･プレイ
            </a>
          </td>
          <td />
        </tr>
        <tr>
          <td>3</td>
          <td>
            <a href="https://amzn.to/2ooj0hO" target="_blank" rel="noopener noreferrer">
              Fair Chance
            </a>
          </td>
          <td />
          <td />
        </tr>
      </table>
    </TableContainer>
  )
}

export default AllsFairSeries
