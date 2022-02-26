import { createStore } from 'redux';
function reducer(state = [], action) {
  // console.log('state',state);
  // console.log('action',action);
  switch (action.type) {
    case 'ADD':
      state.push({
        id: Date.now()
      })
    break
    default:
      return [...state]
  }
  return state
}

const store = createStore(reducer)
export default store;