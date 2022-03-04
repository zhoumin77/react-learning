// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// });

import { createStore } from 'redux'

function reducer(state = {}, action) {
  return state
}

const store = createStore(reducer)

export default store;