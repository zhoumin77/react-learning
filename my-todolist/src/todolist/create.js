import React, { PureComponent } from "react";
export default class Create extends PureComponent {
  handleKeyDown(e){
    // console.log('this1',this);// Create
    if(e.keyCode===13){
      let {createData} = this.props;
      let value = e.target.value
      if(value.trim()){
        createData(e.target.value)
        e.target.value=''
      }else{
        alert("请输入内容")
      }
    }
  }
  render() {
    return (
      <div id="create-todo">
        <input type="text" id="new-todo" placeholder="What needs to be done?" onKeyDown={this.handleKeyDown.bind(this)} />
      </div>
    )
  }
}