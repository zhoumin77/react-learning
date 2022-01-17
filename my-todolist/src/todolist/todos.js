import React, { PureComponent } from 'react'
import Li from './li'
export default class Todos extends PureComponent {

  render() {
    let { data, changeDone, remove,changeContent } = this.props
    return (
      <ul id="todo-list">
        {data.map((item) => {
          return (<Li item={item} key={item.id} changeDone={changeDone} remove={remove} onDoubleClick={this.onDoubleClick} changeContent={changeContent}></Li>)
        })
        }
      </ul>
    )
  }
}