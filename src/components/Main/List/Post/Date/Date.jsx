import React from 'react'
import styles from './Date.module.css'
import formatDate from '../../../../../utils/formatDate.js';

export default function Date({date}) {
  return (
    <div className={styles.date}>
      <time className={styles.date} dateTime={date}>{formatDate(date)}</time>
    </div>
  )
}
