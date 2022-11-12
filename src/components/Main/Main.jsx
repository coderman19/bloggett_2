import React from 'react'
import styles from './Main.module.css'
import Layout from '../Layout/Layout'
import Tabs from './Tabs/Tabs'
import List from './List/List'


export default function Main() {
  return (
    <main className={styles.main}>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  )
}
