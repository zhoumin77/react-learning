// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// });

import { createStore } from 'redux'

function reducer(state = {num:0}, action) {
  return state
}

const store = createStore(reducer)

export default store;