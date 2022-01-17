import React, { PureComponent } from 'react';
import Title from './title'
import Create from './create';
import Todos from './todos';
import State from './state';
import "./index.css";

class App extends PureComponent {
    state = {
        data: []
    }

    changeDone = (id, e) => {
        // console.log('change', e);
        let { data } = this.state
        data.forEach((item) => {
            if (item.id === id) {
                item.isDone = e.target.checked
            }
        })
        // console.log(1,data);
        this.setState({
            data: [...data] // 因为PureComponent是浅比较，但是这样map出来和直接赋值有什么区别呢？ map 和 扩展运算符返回的都是新的数组
        })
    }

    createData(val) {
        let id = Date.now()
        let list = {
            id,
            content: val,
            // checked: false,
            isDone: false,
        }
        let { data } = this.state

        data.unshift(list)

        this.setState({
            data: [...data]
        })
    }

    remove(id) {
        // console.log(id);
        let { data } = this.state
        data = data.filter((item) => {
            return item.id !== id
        })
        this.setState({
            data
        })
    }

    removeDone = () => {
        // console.log(11);
        let { data } = this.state
        data = data.filter(item => !item.isDone)
        this.setState({
            data: data
        })
    }

    changeContent = (id,e) => {
        let data = this.state.data;
        data.forEach((item)=>{ 
            if(item.id === id) item.content = e.target.value
        })
        this.setState({ 
            data: [...data]
        })
    }

    render() {
        let { data } = this.state
        console.log('renderdata', data);
        return (
            <div id="todoapp">
                <Title />
                <div className="content">
                    <Create createData={this.createData.bind(this)} ></Create>
                    <Todos data={data} changeDone={this.changeDone.bind(this)} remove={this.remove.bind(this)} onDoubleClick={this.onDoubleClick} changeContent={this.changeContent}></Todos>
                    <State data={data} removeDone={this.removeDone}></State>
                </div>
            </div>
        )
    }
}
export default App;