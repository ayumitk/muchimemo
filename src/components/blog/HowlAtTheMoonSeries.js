import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const TableContainer = styled.div`
  overflow: auto;
`

function howlAtTheMoonSeries() {
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
            <a href="https://amzn.to/337bozH" target="_blank" rel="noopener noreferrer">
            How to Howl at the Moon
            </a>
          </td>
          <td>
            <a href="https://amzn.to/31V79pn" target="_blank" rel="noopener noreferrer">
            月への吠えかた教えます
            </a>
          </td>
          <td>
            <Link to="/mm-romance/how-to-howl-at-the-moon">感想</Link>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <a href="https://amzn.to/2MUOfdO" target="_blank" rel="noopener noreferrer">
            How to Walk Like a Man
            </a>
          </td>
          <td>
            <a href="https://amzn.to/2Pt8PUw" target="_blank" rel="noopener noreferrer">
            ヒトの世界の歩きかた
            </a>
          </td>
          <td>
            <Link to="/mm-romance/how-to-walk-like-a-man">感想</Link>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <a href="https://amzn.to/322rARq" target="_blank" rel="noopener noreferrer">
            How to Wish Upon a Star
            </a>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>4</td>
          <td>
            <a href="https://amzn.to/2JxRFRH" target="_blank" rel="noopener noreferrer">
            How to Save a Life
            </a>
          </td>
          <td />
          <td />
        </tr>
        <tr>
          <td>5</td>
          <td>
            <a href="https://amzn.to/2ovLjLo" target="_blank" rel="noopener noreferrer">
            How To Run With The Wolves
            </a>
          </td>
          <td />
          <td />
        </tr>
      </table>
    </TableContainer>
  )
}

export default howlAtTheMoonSeries
