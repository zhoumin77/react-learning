import React from 'react'
import Li from './li'
export default function List(props) {
  let { data, setData } = props
  return (
    <ul id="todo-list">
      {data.length > 0 && data.map((item) => {
        return <Li key={item.id} data={item} setData={setData}></Li>
      })
      }
    </ul>
  )
}