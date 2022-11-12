import React from 'react'
import styles from './Tabs.module.css'

export default function Tabs() {

  return (
    <ul className={styles.list}>
      <li><a href='/'>Главная</a></li>
      <li><a href='/'>Просмотренные</a></li>
      <li><a href='/'>Сохраненные</a></li>
      <li><a href='/'>Мои посты</a></li>
    </ul>
  )
}
