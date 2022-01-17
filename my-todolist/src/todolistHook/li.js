import React, { useState, useEffect, useRef } from 'react'

function usePreData(data) {
  // useRef 刷新后，值不会丢失，如果只是用变量保存的话，函数重新执行，变量会重新赋值
  // 副作用是在页面更新后再执行的，还没执行到副作用的时候，值就是上次储存的了
  const preInput = useRef()
  // console.log('preInput1',preInput);
  useEffect(() => {
    console.log('preInput 更新了');
    preInput.current = data
  }, [data])
  console.log('preInput.current', preInput.current);
  return preInput.current
}


export default function Li(props) {
  let { data, setData } = props
  let [isEdit, setIsEdit] = useState(false)
  const input = useRef(null)
  const preData = usePreData(data) // 在li组件重新渲染之前获取的值，是上一次的值
  useEffect(() => {
    if (isEdit) {
      input.current.select()
    }
  }, [isEdit])

  console.log('li组件重新渲染了==》preData', preData);
  return (<li className={isEdit ? 'editing' : ''} key={data.id}>
    <div className={'todo ' + (data.isDone ? 'done' : '')}>
      <div className="display">
        <input type="checkbox" className="check"
          onChange={
            (e) => {
              setData({
                ...data,
                isDone: e.target.checked
              }, 'change')
            }
          }
        />
        <span className="todo-content" onDoubleClick={(e) => {
          setIsEdit(!isEdit)
        }}>
          {data.content}
        </span>
        <span className="todo-destroy" onClick={(e) => {
          setData({
            ...data,
          }, 'del')
        }}></span>
      </div>
      <div className="edit">
        <input
          ref={input}
          className="todo-input"
          type="text"
          value={data.content}
          onBlur={(e) => {
            setIsEdit(!isEdit)
            if (!e.target.value.trim()) {
              setData(preData, 'change')
            }
          }}
          onChange={(e) => {
            setData({
              ...data,
              content: e.target.value
            }, 'change')
          }
          }

        />
      </div>

    </div>
  </li>)
}
