import React, { useState, useMemo } from 'react';
export default function Login(props) {
  console.log('props', props);
  let { user, setUser, history } = props
  let [name, setName] = useState('')
  // useMemo(() => {
  //   console.log('useMemo');
  //   if (user) {
  //     console.log();
  //     history.push('/')
  //   }
  // }, [])
  return (
    <div>
      <hr />
      用户名：<input type="text" value={name} onChange={(e) => {
        setName(e.target.value)
      }} />
      <hr />
      <button onClick={() => {
        setUser(name)
        setName('')
        alert('登录成功')
        setTimeout(() => {
          history.goBack()
        },1000)
      }}>登录</button>
    </div>
  )
}