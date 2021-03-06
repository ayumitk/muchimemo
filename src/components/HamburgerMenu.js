import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt'
import { MailOutline } from '@styled-icons/material/MailOutline'
import { Info } from '@styled-icons/icomoon/Info'
import { Key } from '@styled-icons/entypo/Key'
import { HeartCircle } from '@styled-icons/boxicons-solid/HeartCircle'
import AllCategories from './AllCategories'

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '30px',
    height: '20px',
    margin: '0.9rem 0.5rem',
  },
  bmBurgerBars: {
    background: 'rgba(0,0,0,0.7)',
    height: '16%',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '30px',
    width: '30px',
  },
  bmCross: {
    background: '#DDD',
    height: '20px',
    width: '2px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    transitionDuration: '0.2s',
  },
  bmMenu: {
    background: 'rgba(0, 0, 0, 0.9)',
    padding: '2.5em 1.5em 0',
    fontSize: '1rem',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#DDD',
  },
  bmItem: {
    padding: '0.75rem 0',
    display: 'block',
    color: '#CCC',
    lineHeight: '1',
    fontSize: '0.812rem',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const HamburgerMenu = () => (
  <Menu styles={styles}>
    <Link to="/">
      <HomeAlt /> ホーム
    </Link>
    <Link to="/about/">
      <Info /> このサイトについて
    </Link>
    <Link to="/support/">
      <HeartCircle /> サポート
    </Link>
    <Link to="/contact/">
      <MailOutline /> お問い合わせ
    </Link>
    <p style={{ fontWeight: 'bold', margin: '1.5rem 0 0.5rem 0' }}>カテゴリ</p>
    <AllCategories dark />
    <Link to="/privacy/">
      <Key /> プライバシーポリシー
    </Link>
  </Menu>
)

export default HamburgerMenu
