import React from "react";
import { useSelector, useDispatch } from "react-redux"

function ReduxHook() {
  const state = useSelector(
    state => {
      console.log('state1', state);
      return state
    }
  )
  console.log('state2', state);
  const dispatch = useDispatch();
  return (
    <div>
      {state.time.map((item) => item.id + '<br/>')}
      <hr />

      <button onClick={() => { dispatch({ type: 'TIME__ADD' }) }}>
        按钮
      </button>
    </div>
  )
}
export default ReduxHook;