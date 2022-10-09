import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function ReduxThunk() {
  const dispatch = useDispatch()
  const state = useSelector(state => { return state.num.number })
  const userInfo = useSelector(state => {
    console.log(state);
    return state.userInfo.name
  })
  useEffect(() => {
    // console.dir(dispatch);
    // 通过 redux thunk 可以在dispath里再传入 dispatch 和 getState方法，从而实现中间件的功能
    dispatch((dispatch, getState) => {
      // console.log(dispatch,11,getState);
      setTimeout(() => {
        dispatch({
          type: 'NUM_ADD'
        })
      }, 2000);
    })
  }, [])
  return (
    <div>
      state.num.number:{state}
      <br />
      用户名： {userInfo}
      <div>
        <button onClick={() => {
          return dispatch({ type: 'USERINFO_ADD', name: 'zm' })
        }}>登录</button>
        <button onClick={() => {
          return dispatch({ type: 'USERINFO_REMOVE' })
        }}>退出</button>
      </div>
    </div>
  )
}