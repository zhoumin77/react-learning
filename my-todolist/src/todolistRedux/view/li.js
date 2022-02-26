import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux';

function Li(props) {
  // console.log('props', props);
  const { data, dispatch } = props
  const { isDone, id, content } = data;
  const [isEdit, setIsEdit] = useState(false)
  const [inputVal, setInputVal] = useState(content)
  const inputEl = useRef()
  useEffect(() => {
    if (isEdit) {
      inputEl.current.focus()
    }
  }, [isEdit])
  return (<li className={isEdit ? "editing" : ""}>
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
          console.log(e);
          // 双击后改变状态，blur的时候移除编辑状态
          setIsEdit(!isEdit)
          setInputVal(e.target.innerHTML)
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
          ref={inputEl}
          value={inputVal}
          onChange={(e) => { setInputVal(e.target.value) }}
          onBlur={() => {
            setIsEdit(false)
            if (!inputVal.trim()) {
              // 恢复之前的内容
              setInputVal(content)
            } else {
              dispatch({
                type: 'CHANGE',
                id: id,
                content: inputVal
              })
            }
          }}
        />
      </div>

    </div>
  </li>)
}

export default connect((state) => ({ state }))(Li)