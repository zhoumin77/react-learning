import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
function time(time = {
  id: []
}, action) {
//   state 默认值要给一个对象
  let id = time.id;
  switch (action.type) {
    case 'TIME__ADD': // 用功能作为前缀，避免重名
      // console.log({...time}, 1);
      id.push(Date.now())
      return {...time,id} // 这里一定要返回一个新的对象，否则会有不更新的问题，因为是浅比较
      // TODO 教程里面 switch 里面是没有 default 的，而是直接return了 time，写default的区别是？
    default:
      return time
  }
}

function num(num = {
  number: 0
}, action) {
  switch (action.type) {
  // let number = num.number; // 如果这样写的话，是新增了一个 number的变量和原来的 num 没有关系！

    case 'NUM_ADD': // 需要保证和其他reducer的action.type 不重名！！！
      num.number++;
      console.log(33, num);
      return { ...num }
    default:
      return { ...num }
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



const store = createStore(reducer,applyMiddleware(thunk))  // 允许 dispatch() 函数
export default store;