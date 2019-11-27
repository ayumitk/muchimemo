import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import series from '../../../config/series'

const TableContainer = styled.div`
  overflow: auto;
`

const Series = name => {
  const target = series.find(t => t.name === name.name)

  return (
    <TableContainer>
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>原書</th>
          <th>日本語翻訳版</th>
          <th>ジーナ</th>
        </tr>
        {target.content.map(s => (
          <tr key={s.id}>
            <td>{s.id}</td>
            <td>
              {s.en.url === '' ? (
                `${s.en.title}`
              ) : (
                <a href={s.en.url} target="_blank" rel="noopener noreferrer">
                  {s.en.title}
                </a>
              )}
            </td>
            <td>
              {s.ja.title === '' ? (
                ''
              ) : (
                <a href={s.ja.url} target="_blank" rel="noopener noreferrer">
                  {s.ja.title}
                </a>
              )}
            </td>
            <td>{s.review === '' ? '' : <Link to={`/mm-romance/${s.review}`}>感想</Link>}</td>
          </tr>
        ))}
      </table>
    </TableContainer>
  )
}

export default Series
