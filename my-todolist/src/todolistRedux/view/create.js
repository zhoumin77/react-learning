import React from 'react'
import { connect } from 'react-redux';

export default connect((state) => ({ state }))(function Create(props) {
  // console.log('props', props);
  let { dispatch } = props
  return (
    <div id="create-todo">
      <input type="text" id="new-todo" placeholder="What needs to be done?"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            if (!e.target.value.trim()) {
              alert('请输入内容')
              return
            }
            dispatch({
              type: 'ADD',
              content: e.target.value,
            })
            e.target.value = ''
          }
        }}
      />
    </div>
  )
})