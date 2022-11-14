import React from 'react'
import styles from './Post.module.css'
import PropTypes from 'prop-types'


import PostImg from './PostImg/PostImg';
import Content from './Content/Content';
import Rating from './Rating/Rating';
import Del from './Del/Del';
import Date from './Date/Date';

export default function Post({postData}) {
  // деструктурируем обьект пришедший через пропс
  const {title, author, ups, date} = postData;
  // console.log('title, author, ups, date ', title, author, ups, date);
  return (
    <li className={styles.post}>
      <PostImg title={title}/>
      <Content title={title} author={author}/>
      <Rating ups={ups}/>
      <Del />
      <Date date={date}/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};