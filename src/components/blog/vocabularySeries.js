import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: rgba(0, 0, 0, 0.05);
  margin: 2.5rem 0 0 0;
  padding: 1.75rem;
  h4 {
    margin-top: 0 !important;
  }
  ul {
    margin-bottom: -0.75rem;
  }
  ul li a.current {
    color: ${props => props.theme.colors.grey.default} !important;
    pointer-events: none;
    &::after {
      content: '←今ココ';
      color: ${props => props.theme.colors.secondary};
    }
  }
`

function VocabularySeriesMoan({ current }) {
  return (
    <>
      <Container>
        <h4>その他の「喘ぐ」単語：</h4>
        <ul>
          <li>
            <a href="/vocabulary/moan/" className={current === 'moan' && 'current'}>
              moan（喘ぐ、うめき声を出す）
            </a>
          </li>
          <li>
            <a href="/vocabulary/whimper/" className={current === 'whimper' && 'current'}>
              whimper（喘ぐ、クンクン鳴く、すすり泣く）
            </a>
          </li>
          <li>
            <a href="/vocabulary/wail/" className={current === 'wail' && 'current'}>
              wail（喘ぐ、泣き叫ぶ）
            </a>
          </li>
          <li>
            <a href="/vocabulary/groan/" className={current === 'groan' && 'current'}>
              groan（喘ぐ、うめき声、不満の声を上げる）
            </a>
          </li>
          <li>
            <a href="/vocabulary/sob/" className={current === 'sob' && 'current'}>
              sob（泣きじゃくる）
            </a>
          </li>
          <li>gasp</li>
          <li>whine</li>
        </ul>
        <p>他にも見つけたら随時追加しまーす</p>
      </Container>
    </>
  )
}

function VocabularySeriesThink({ current }) {
  return (
    <>
      <Container>
        <h4>その他の「思う」単語：</h4>
        <ul>
          <li>
            <a href="/vocabulary/reckon/" className={current === 'reckon' && 'current'}>
              reckon（思う）
            </a>
          </li>
          <li>guess</li>
          <li>suppose</li>
          <li>expect</li>
          <li>assume</li>
          <li>believe</li>
        </ul>
        <p>他にも見つけたら随時追加しまーす</p>
      </Container>
    </>
  )
}

function VocabularySeriesAnal({ current }) {
  return (
    <>
      <Container>
        <h4>その他のアナルを指す単語：</h4>
        <ul>
          <li>
            <a href="/vocabulary/pucker/" className={current === 'pucker' && 'current'}>
              pucker（しわ、ひだ）
            </a>
          </li>
          <li>
            <a href="/vocabulary/clench/" className={current === 'clench' && 'current'}>
              clench（ギュッと締め付ける）
            </a>
          </li>
          <li>knot</li>
        </ul>
        <p>他にも見つけたら随時追加しまーす</p>
      </Container>
    </>
  )
}

export { VocabularySeriesMoan, VocabularySeriesThink, VocabularySeriesAnal }
