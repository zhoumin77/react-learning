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

    case "DONE":
      state.forEach((item) => {
        if (item.id === action.id) item.isDone = action.isDone
      })
      return [...state]

    case "DELETE":
      return state.filter((item) => {
        return item.id !== action.id
      })

    case "CLEAR":
      return state.filter(item=>!item.isDone)

    default:
      return [...state]
  }
}
let store = createStore(reducer)
export default store;