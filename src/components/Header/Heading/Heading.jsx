import React from 'react'
import styles from './Heading.module.css'

export default function Heading({text}) {
  return (
    <div className={styles.heading}>
      <h1>
        {text}
      </h1>
    </div>
  )
}
