import React from 'react'
import styles from './List.module.css'
import Post from './Post/Post'

export default function List() {
  const postsData = [
    {
      id: 123,
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 2,
      date:  '2021-09-30T15:50:00.000Z',
    },
    {
      id: 769,
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 8,
      date:  '2022-11-06T13:20:00.000Z',
    },
    {
      id: 208,
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 20,
      date:  '2020-02-17T14:35:00.000Z',
    },
    {
      id: 999,
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 90,
      date:  '2021-08-03T10:10:00.000Z',
    },
    {
      id: 53,
      thumbnail: '',
      title: 'Title5',
      author: 'Nickname5',
      ups: 41,
      date:  '2022-02-10T09:30:00.000Z',
    },
  ];
  return (
    <ul className={styles.list}>
    {postsData.map((item) => (
      <Post key={item.id} postData={item} />
    ))}
    </ul>
  );
};
