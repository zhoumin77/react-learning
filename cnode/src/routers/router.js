import React from 'react'
import Home from '../view/index/index'
import About from '../view/about'
import View404 from '../view/view404'
const router = [
  {
    title: '404',
    isNav:false,
    exact: false,
    path: '*',
    element: <View404 />
  },
  {
    title: 'home',
    isNav: true,
    exact: true,
    path: '/',
    element: <Home />,
    // render: (props) => {
    //   return (<Home {...props} />)
    // }
  },
  {
    title: 'about',
    isNav: true,
    exact: true,
    path: '/about',
    element: <About />,
  },
  
]

export default router;