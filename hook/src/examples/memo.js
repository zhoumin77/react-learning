import React, { useState } from "react";

const Child = () => {
  return (
    <div>
      {console.log("子组件 render")}
    </div>
  );
};

/**
 * React.memo 是一个高阶组件，当props变更才渲染组件。提高性能
 * 只是为了性能优化而存在，不要依赖他来阻止渲染，会产生bug
 */
const MemoChild = React.memo(Child);  // 

function Memo() {
  const [val, setVal] = useState(0);
  const [num, setNum] = useState(100);

  const onClick = (evt) => {
    let value = val;
    value++;
    setVal(value);
  };

  const onClickNum = () => {
    let value = num;
    value++;
    setNum(value);
  };


  return (
    <div>
      {console.log("父级组件 render")}
      <button onClick={onClick}>val</button>
      <button onClick={onClickNum}>num</button>
      <div>val:{val}</div>
      <div>num: {num}</div>
      {/* 父组件只要有更新，子组件一起更新 */}
      {/* <Child /> */}

      {/* 子组件不更新 */}
      <MemoChild />
    </div>
  );
}

export default Memo