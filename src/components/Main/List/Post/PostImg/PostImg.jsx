import React from 'react'
import styles from './PostImg.module.css'
import notphoto from '../../../image/imgPost/notphoto.jpg';

export default function PostImg(title) {
  
  return (
    <div className={styles.img}>
      <img src={notphoto} alt={title} />
    </div>
  )
}
