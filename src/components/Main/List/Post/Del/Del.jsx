import React from 'react'
import styles from './Del.module.css'
import del from '../../../image/imgPost/delete.svg'

export default function Del() {
  return (
    <div className={styles.del}>
      <button className={styles.delBtn}>
        <img className={styles.delete} src={del} alt="удалить"/>
      </button>
    </div>
  )
}
