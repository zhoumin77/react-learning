import React from 'react'
import { connect } from 'react-redux';



function Li(props) {
  console.log('props', props);
  const { data, dispatch } = props
  return (<li >
    <div className={'todo '}>
      <div className="display">
        <input type="checkbox" className="check" />
        <span className="todo-content">
          {data.content}
        </span>
        <span className="todo-destroy"></span>
      </div>
      <div className="edit">
        <input
          className="todo-input"
          type="text"
        />
      </div>

    </div>
  </li>)
}

export default connect((state) => ({ state }))(Li)