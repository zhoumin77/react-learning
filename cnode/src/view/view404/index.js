import React from 'react';
import { useSelector } from 'react-redux';

export default function View404(){
  const state = useSelector(state=>state)
  console.log('state',state);
  return (
    <div>
      404
    </div>
  )
}