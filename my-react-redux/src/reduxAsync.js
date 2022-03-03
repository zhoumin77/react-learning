import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
export default function ReduxAsync() {
  const state = useSelector((state) => {
    return state.num.number
  })

  let dispatch = useDispatch()
  let prevDispath = dispatch;
  dispatch = (action) => {
    // 第一种情况，直接去修改 reducer
    if ((typeof action) == 'object') {
      prevDispath(action);
    } else {
      // 第二种情况，经过一些副作用后，再去修改
      action(dispatch)
    }
  }


  useEffect(() => {
    // dispatch({
    //   type: 'NUM_ADD'
    // })
    dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({ type: "NUM_ADD" })
      }, 2000);
    })
  },[])


  return (
    <div>
      {state ? (
        <div>
          {/* 对象的值，不能直接作为react的子元素，需要加div包住 */}
          {state}
        </div>
      ) : ""}
      <button onClick={() => {
        dispatch({
          type: 'NUM_ADD'
        })
      }}>
        async 记录时间
      </button>
    </div>
  )
}