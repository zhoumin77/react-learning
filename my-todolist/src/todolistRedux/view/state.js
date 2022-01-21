import React from 'react'
import { connect } from 'react-redux'

function State(props) {
  console.log('props', props);
  const { state: data, dispatch } = props
  const unDoneLen = data.filter(item => !item.isDone).length
  const hasDoneLen = data.filter(item => item.isDone).length
  return (
    <div id="todo-stats">
      <span className="todo-count">
        <span className="number"></span>
        <span className="word">{unDoneLen}项待完成</span>
      </span>
      <span className="todo-clear" >
        <a onClick={() => {
          dispatch({
            type: 'CLEAR'
          })
        }}>Clear <span></span> {hasDoneLen}已完成事项</a>
      </span>
    </div >
  )
}

export default connect(state => ({ state }))(State)