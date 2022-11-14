import React from 'react'
import styles from './Heading.module.css'
import { Text } from '../../../UI/Text'

export default function Heading({text}) {
  return (
    <Text 
      As='h1' 
      size={22}
      tsize={26}
      color='white'
      center
      className={styles.heading}
    >
      {text}
    </Text>
  )
}
