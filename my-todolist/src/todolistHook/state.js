import React from 'react'
// class State extends PureComponent {

//   render() {
//     let { data, removeDone } = this.props
//     let doneData = data.filter(item => {
//       return item.isDone
//     })
//     let unDoneData = data.filter(item => {
//       return !item.isDone
//     })
//     return (

//     )
//   }
// }

function State(props) {
  // console.log('props', props);
  let { data } = props
  let unDoneData = data.filter(item => !data.idDone)
  let doneData = data.filter(item => data.idDone)
  return (
    <div id="todo-stats">
      <span className="todo-count">
        <span className="number">{unDoneData.length}</span>
        <span className="word">项待完成</span>
      </span>
      {doneData.length > 0 && (<span className="todo-clear" >
        <a href="#"
          onClick={() => { }}
        >
          Clear <span>{doneData.length}</span> 已完成事项</a>
      </span>)}
    </div >
  )
}
export default State;
