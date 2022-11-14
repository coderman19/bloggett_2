import React from 'react'
import styles from './Content.module.css'
import { Text } from '../../../../../UI/Text'

export default function Content({title, author}) {
  return (
    <div className={styles.content}>  
        <Text 
          As='h2' 
          className={styles.title}>
          <Text 
            As='a'  
            size={18}
            tsize={24}
            color='orange'
            className={styles.linkPost} 
            href='#post'
          >
            {title}
          </Text>
        </Text>
          <Text 
            As='a' 
            color='orange' 
            size={12} 
            tsize={14}
            className={styles.linkAuthor} 
            href='#author' 
          >
          {author}
        </Text>
    </div>
  )
}
