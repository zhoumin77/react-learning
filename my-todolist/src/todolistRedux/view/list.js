import React from 'react'
import Li from './li';
import { connect } from 'react-redux';

function List(props) {
  const { state } = props
  return (
    <ul id="todo-list">
      {state.length > 0 && state.map((item) => {
        return <Li key={item.id} data={item}></Li>
      })
      }
    </ul>
  )
}

export default connect((state) => ({ state }))(List);