import React from "react";
import { useSelector, useDispatch } from "react-redux"

function ReduxHook() {
  const state = useSelector(
    state => {
      console.log('state1', state);
      return state // 注意 这里是进行渐层比较的，如果写成 time.id 的话，就不会识别到更新，因为reducer里面返回的是一个新的time
    }
  )
  const timeId = state.time.id
  const num = state.num.number
  console.log('state2', state);
  const dispatch = useDispatch();
  return (
    <div>
      time:
      {timeId.map((item) => item + '<br/>')}
      <hr />


      num: {num}
      <hr />

      <button onClick={() => { dispatch({ type: 'TIME__ADD' }) }}>
        hook按钮
      </button>

      <button onClick={() => { dispatch({ type: 'NUM_ADD' }) }}>
        hook num 按钮
      </button>
    </div>
  )
}
export default ReduxHook;