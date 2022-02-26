import React from "react";
import { useSelector, useDispatch } from "react-redux"

function ReduxHook() {
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  return (
    <div>
      {state.map((item) => item.id + '<br/>')}

      <button onClick={() => { dispatch({ type: 'ADD' }) }}>
        按钮
      </button>
    </div>
  )
}
export default ReduxHook;