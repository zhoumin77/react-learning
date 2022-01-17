import React, { useState } from 'react';

export default function Joinus(props) {
  console.log('props', props)
  let { user } = props
  return (
    <div>
      加入我们
      {user}
    </div>
  )
}