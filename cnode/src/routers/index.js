import React from 'react'
import Home from '../view/home'
import About from '../view/about'
const routerList = [
  {
    name: 'home',
    isNav: true,
    exact: true,
    path: '/',
    element: <Home />,
    // render: (props) => {
    //   return (<Home {...props} />)
    // }
  },
  {
    name: 'about',
    isNav: true,
    exact: true,
    path: '/about',
    element: <About />,
  }
]

export default routerList;