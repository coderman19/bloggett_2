import React from 'react'
import styles from './List.module.css'
import Post from './Post/Post'

export default function List() {
  const postData = {
    thumbnail: '',
    title: 'Title',
    author: 'Nickname',
    ups: 24,
    date:  '2022-12-24T09:40:00.000Z',
  };
  return (
    <ul className={styles.list}>
      <Post postData={postData}/>
    </ul>
  )
}
