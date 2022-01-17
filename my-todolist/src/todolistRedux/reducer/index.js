import { createStore } from 'redux'
function reducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      state.push({
        id: Date.now(),
        content: action.content,
        isDone: false
      })
      return [...state]
      break;
    default:
      return [...state]
  }
}
let store = createStore(reducer)
export default store;