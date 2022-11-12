import React from 'react'
import styles from './Content.module.css'

export default function Content({title, author}) {
  return (
    <div className={styles.content}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          <a className={styles.linkPost} href='#post'>
            {title}
          </a>
        </h2>
        <a className={styles.linkAuthor} href='#author' >
          {author}
        </a>
      </div>
    </div>
  )
}
