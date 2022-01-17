import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import Home from '../view/index'
import Joinus from '../view/joinus'
import Page404 from '../view/404'
import Login from '../view/login'
import Class from '../view/class'
const router = [
  {
    isNav: true,
    title: '首页',
    path: '/',
    exact: true,
    render: (props) => {
      return <Home props={props} />
    }
  },
  {
    isNav: true,
    title: '加入我们',
    path: '/joinus',
    exact: true,
    render: (props) => {
      return <Joinus {...props} />
    }
  },
  {
    isNav: true,
    title: '班级',
    path: '/class/:classPage', // 动态路由 classPage会传参到 props.match.params
    to: '/class/1',
    exact: true,
    isDynamic: true,
    render: (props) => {
      console.log(props);
      return <Class {...props} />
    }
  },
  {
    isNav: true,
    title: '登录',
    path: '/login',
    exact: true,
    render: (props) => {
      console.log(props);
      if (props.user) return <Redirect to='/' />
      return <Login {...props} />
    }
  },
  {
    isNav: false,
    title: '',
    path: '',
    exact: true,
    render: (props) => {
      return <Page404 {...props} />
    }
  }
]

export default router;