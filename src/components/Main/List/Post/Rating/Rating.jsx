import React from 'react'
import styles from './Rating.module.css'

export default function Rating({ups}) {
  return (
    <div className={styles.rating}>  
        <button className={styles.up} aria-label='Повысить рейтинг'/>
        <p className={styles.ups}>{ups}</p>
        <button className={styles.down} aria-label='Понизить рейтинг'/>
    </div>
  )
}
