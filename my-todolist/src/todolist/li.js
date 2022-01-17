import React, { createRef, PureComponent } from 'react';
export default class Li extends PureComponent {
  state = {
    isEdit: false,
    ref: createRef(),
    val: ''
  }

  static getDerivedStateFromProps(props, state) {
    // 挂载时执行 
    // console.log('props', props);
    // console.log('state', state);
    console.log('getDerivedStateFromProps');
    if (!state.isEdit) {
      // 暂存了初始值给val
      state.val = props.item.content
    }
    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevState, prevProps);
    // 取到的 props 和 prevProps 已经是更新之后的数据了
    let { isEdit, ref } = this.state
    if (isEdit && prevState.isEdit !== isEdit) {
      ref.current.select()
    }
  }

  changeContent = (id, e) => {
    console.log(e.target.value);
  }

  onDoubleClick = () => {
    this.setState({ isEdit: true })
  }

  render() {
    let { item, changeDone, remove, changeContent } = this.props;
    let { isEdit, ref, val } = this.state;
    return (
      <li className={isEdit ? 'editing' : ''}
      >
        <div className={'todo ' + (item.isDone ? 'done' : '')}>
          <div className="display">
            <input type="checkbox" className="check" onChange={changeDone.bind(this, item.id)} />
            <span className="todo-content" onDoubleClick={() => { this.onDoubleClick() }}>{item.content}</span>
            <span
              className="todo-destroy"
              onClick={() => {
                remove(item.id)
              }}
            ></span>
          </div>
          <div className="edit">
            <input
              className="todo-input"
              ref={ref}
              type="text"
              value={val}
              onChange={(e) => { this.setState({ val: e.target.value }) }}
              onBlur={
                (e) => {
                  this.setState({ isEdit: false })
                  if (val.trim()) {
                    changeContent(item.id, e)
                  }
                }
              } />
          </div>
        </div>
      </li>
    )
  }
}