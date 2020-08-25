import React from 'react'
import styled from 'styled-components'
import Amazon from './Amazon'
import Button from './Button'

import InternalLink from './InternalLink'

const NotesText = styled.div`
  font-size: 0.75rem;
  margin-top: 1.25rem;
`

function VocabularyFooter({ book }) {
  return (
    <>
      <Button label="全ての単語を見る→" url="/vocabulary/" />
      <p>
        M/Mロマンス小説について語り明かすチャットコミュニティでは、メンバー同士で原書の分からない表現を質問し合ったり、原書を読む際のポイントを共有したりしています。
        <br />
        原書への挑戦のモチベーションにもなりますので、ぜひ、気軽に参加してみてくださいね。
      </p>
      <InternalLink slug="/mm-romance/slack/" />
      今回、引用したのはこちらの作品。
      <Amazon book={book} />
      <h4>注釈：</h4>
      <NotesText>
        私はカナダのバンクーバーに住んでいますが、同じ英語でも国や地域によって使う単語や言い回しが違う可能性がありますので、ご了承ください。
        <br />
        また、スペルや文法ミス、おかしな翻訳があったらぜひ教えてもらえると助かります。
        私もみなさんと一緒に勉強しながら少しずつボキャブラリーを増やしていきたいと思います。
      </NotesText>
    </>
  )
}

export default VocabularyFooter
