import React from 'react'
import "../index.css";
import Title from './title'
import Create from './create'
import List from './list'


export default function App() {

  return (
    <div id="todoapp" >
      <Title />
      <div className="content">
        <Create></Create>
        <List></List>
      </div>
    </div>
  )
}