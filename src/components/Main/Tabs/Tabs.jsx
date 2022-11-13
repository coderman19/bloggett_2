import React from 'react'
import styles from './Tabs.module.css'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { debounceRaf } from '../../../utils/debounce';

import {ReactComponent as ArrowIcon} from './img/arrow.svg'
import {ReactComponent as EyeIcon} from './img/eye.svg'
import {ReactComponent as PostIcon} from './img/post.svg'
import {ReactComponent as SaveIcon} from './img/save.svg'
import {ReactComponent as HomeIcon} from './img/home.svg'


const LIST = [
  {value: 'Главная', Icon: HomeIcon},
  {value: 'Просмотренные', Icon: EyeIcon},
  {value: 'Сохраненные', Icon: SaveIcon},
  {value: 'Мои посты', Icon: PostIcon},
].map(assignId);

export default function Tabs() {
   // состояние списка
   const [isDropDownOpen, setIsDropDownOpen] = useState(true);
   
  //  проверка состояния
  const [isDropDown, setIsDropDown] = useState(false);
  
  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropDown(true);
    } else {
      setIsDropDown(false); 
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={styles.container}>
        {/* если true показываем, скрываем */}
        {isDropDown && (
          <div className={styles.wrapperBtn}>
          <button 
            className={styles.btn} 
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
              add item
              <ArrowIcon />
          </button>
        </div>
        )}

     {(isDropDownOpen || !isDropDown) && (
      <ul 
        className={styles.list}
        //скрываем/открываем список
        onClick={() => setIsDropDownOpen(false)}
        >
        {LIST.map(({value, id, Icon}) => (
          <li 
            className={styles.item}
            key={id}>
            <button 
               className={styles.btn}
              // через console.log получаем значение нажатой кнопки
              onClick={() => {console.log(value)}}>
              {value}
              {/* проверяем есть ли элемент, если есть - отображаем */}
              {Icon && <Icon width='32'/>}
            </button>
          </li>
        ))}
      </ul>
     )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.array,
};
