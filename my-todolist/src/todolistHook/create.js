import React from 'react'
export default function Create(props) {
  let { setData } = props
  return (
    <div id="create-todo">
      <input type="text" id="new-todo" placeholder="What needs to be done?"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (!e.target.value.trim()) {
              alert('请输入内容')
              return
            }
            setData({
              id: Date.now(),
              content: e.target.value,
              isDone: false
            }, 'create')
            e.target.value = ''
          }
        }}
      />
    </div>
  )
}