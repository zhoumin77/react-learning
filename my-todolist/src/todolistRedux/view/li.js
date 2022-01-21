import React from 'react'
import { connect } from 'react-redux';

function Li(props) {
  // console.log('props', props);
  const { data, dispatch } = props
  const { isDone, id, content } = data;
  let isEdit = false;
  return (<li className={isEdit?"editing":""}>
    <div className={'todo ' + (isDone ? "done" : "")}>
      <div className="display">
        <input type="checkbox" className="check" onChange={(e) => {
          dispatch({
            type: 'DONE',
            id: id,
            isDone: e.target.checked
          })
        }} />
        <span className="todo-content" onDoubleClick={(e) => {
          // 双击后改变状态，blur的时候移除编辑状态
          isEdit = !isEdit
        }}>
          {content}
        </span>
        <span className="todo-destroy" onClick={() => {
          dispatch({
            type: 'DELETE',
            id: id
          })
        }}></span>
      </div>
      <div className="edit">
        <input
          className="todo-input"
          type="text"
        />
      </div>

    </div>
  </li>)
}

export default connect((state) => ({ state }))(Li)