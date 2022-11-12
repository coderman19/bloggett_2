import React from 'react'
import styles from './Logo.module.css'
import logo from '../../../img/icons/logo.svg'

export default function Logo() {
  return (
    <a className={styles.link} href='/'>
      <img className={styles.logo} 
        src={logo} 
        alt="Bloggett" 
        width={32}
        />
    </a>
  )
}
