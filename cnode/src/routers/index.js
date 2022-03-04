import React from 'react'
import Home from '../view/home'

const routerList = [
  {
    name: 'home',
    isNav: true,
    exact: true,
    path: '/',
    element: <Home />,
    render: (props) => {
      return (<Home {...props} />)
    }
  }
]

export default routerList;