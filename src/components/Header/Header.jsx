import React from 'react'
import styles from './Header.module.css'
import Layout from '../Layout/Layout'

import Logo from './Logo/Logo'
import Heading from './Heading/Heading'
import Search from './Search/Search'
import Auth from './Auth/Auth'

export default function Header() {
  return (
    <header className={styles.header}>
      <Layout>
        <div className={styles.gridContainer}>
          <Logo />
          <Heading text='Главная'/>
          <Search />
          <Auth auth={false}/>
        </div>
      </Layout>
    </header>
  )
}
