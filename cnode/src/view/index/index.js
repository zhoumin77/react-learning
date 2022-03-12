import React from 'react';
import { useSelector } from 'react-redux';
import style from './index.module.scss';
export default function Home() {
  const state = useSelector(state => state)
  console.log('state', state);
  return (
    <div className={style.home}>
      HOME
    </div>

  )
}


