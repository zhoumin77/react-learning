import React, { useState,useEffect } from 'react'
import "./index.css";
import Title from './title'
import Create from './create'
import List from './list'
function useCreateData(init) {
  let [data, setData] = useState(init)
  return [data, (paramData, method) => {
    console.log('paramData', paramData);
    if (method === 'create') {
      data.unshift(paramData)
    }

    // 修改
    if (method === 'change') {
      data.forEach((item, index, arr) => {
        if (item.id === paramData.id) {
          arr[index] = paramData
        }
      })
    }

    if (method === 'del') {
      data = data.filter((item, index, arr) => {
        return item.id !== paramData.id
      })
    }

    console.log('setdata', data);
    setData([...data])
  }]
}


export default function App() {

  let [data, setData] = useCreateData([{
    id: 1,
    content: '添加todolist',
    isDone: false
  }])

  useEffect(() => {
    // 如果data改变了，就处理

  },[data])
  console.log('App重新渲染了', data)

  return (
    <div id="todoapp" >
      <Title></Title>
      <div className="content">
        <Create setData={setData}></Create>
        <List data={data} setData={setData}></List>
      </div>
    </div>
  )
}