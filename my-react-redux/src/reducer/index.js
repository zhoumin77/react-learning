import { createStore, combineReducers } from 'redux';
function time(time = {
  id: []
}, action) {
//   state 默认值要给一个对象
  let id = time.id;
  switch (action.type) {
    case 'TIME__ADD':
      // console.log({...time}, 1);
      id.push(Date.now())
      return {...time} // 这里一定要返回一个新的对象，否则会有不更新的问题，因为是浅比较
    default:
      return {...time} 
  }
}

function num(num = {
  number: 0
}, action) {
  // let number = num.number; // 如果这样写的话，是新增了一个 number的变量和原来的 num 没有关系！
  switch (action.type) {
    case 'NUM_ADD': // 需要保证和其他reducer的action.type 不重名！！！
      num.number++;
      return {...num}
    default:
      return {...num}
  }
}

// combineReducers 相当于
// function reducer(state={},action){
//   return {
//     time: time(state.list,action),
//     num: num(state.num,action)
//   }
// }
const reducer = combineReducers({
  time,
  num
})



const store = createStore(reducer)
export default store;