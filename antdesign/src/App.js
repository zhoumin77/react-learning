import { Button } from 'antd';
// import './App.css'; // 使用了按需加载后，这个css就不用引入了。会根据 引入的 button 自动引入需要的样式
function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button1</Button>
    </div>
  );
}

export default App;
