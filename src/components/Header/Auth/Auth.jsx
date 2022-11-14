import React from 'react'
import styles from './Auth.module.css'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {ReactComponent as LoginIcon} from '../../../img/icons/login.svg'; 
import { urlAuth } from '../../../API/auth'
import { Text } from '../../../UI/Text';
import {URL_API} from '../../../API/const';


export default function Auth({token}) {
  const [auth, setAuth] = useState({});

   // запрос к серверу
   useEffect(() => {
    if(!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
    })
      .catch(err => {
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return (
    <div className={styles.container}>
    {auth.name ? (
      <button className={styles.btn}>
      <img 
        className={styles.img}
        src={auth.img} 
        title={auth.name} 
        alt={auth.name}
      />
      </button>
    ) : (
      <Text 
        As='a' 
        className={styles.authLink}
        href={urlAuth}
      >
      <LoginIcon 
        className={styles.svg}
      />
     </Text>
    )
    }
    </div>
  )
}

Auth.propTypes = {
  tokem: PropTypes.string,
};

