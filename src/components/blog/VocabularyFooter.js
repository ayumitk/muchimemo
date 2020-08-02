import React from 'react'
import styled from 'styled-components'
import Amazon from './Amazon'
import Button from './Button'

const NotesText = styled.div`
  font-size: 0.75rem;
  margin-top: 1.25rem;
`

function VocabularyFooter({ book }) {
  return (
    <>
      <Button label="全ての単語を見る→" url="/vocabulary/" />
      引用したのはこちらの作品。
      <Amazon book={book} />
      <h4>注釈：</h4>
      <NotesText>
        私はカナダのバンクーバーに住んでいますが、同じ英語でも国や地域によって使う単語や言い回しが違う可能性がありますので、ご了承ください。
        <br />
        また、スペルや文法ミス、おかしな翻訳があったらぜひ教えてもらえると助かります。
        私もみなさんと一緒に勉強しながら少しずつボキャブラリーを増やしていきたいと思います😊
      </NotesText>
    </>
  )
}

export default VocabularyFooter
