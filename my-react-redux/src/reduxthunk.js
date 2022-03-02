import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

export default function ReduxThunk() {
  const dispatch = useDispatch()
  const state = useSelector(state=>{return state.num.number})
  // console.log(state);
  useEffect(() => {
    console.dir(dispatch);
    // 通过 redux thunk 可以在dispath里再传入 dispatch 和 getState方法，从而实现中间件的功能
    dispatch((dispatch,getState)=>{
      console.log(dispatch,11,getState);
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
    </div>
  )
}