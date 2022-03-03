import { createStore, combineReducers } from 'redux';
function time(time = [], action) {
  // console.log('time',time);
  // console.log('action',action);
  switch (action.type) {
    case 'TIME__ADD':
      time.push({
        id: Date.now()
      })
      console.log(...time, 1);
      return [...time] // 这里一定要返回一个新的对象，否则会有不更新的问题，因为是浅比较
    default:
      return [...time]
  }
}

function num(num = {
  number: 0
}, action) {
  switch (action.type) {
    case 'NUM_ADD': // 需要保证和其他reducer的action.type 不重名！！！
      num.number++;
      console.log(33, num);
      return { ...num }
    default:
      return { ...num }
  }
}

const reducer = combineReducers({
  time,
  num
})



const store = createStore(reducer)
export default store;