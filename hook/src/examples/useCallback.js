import React, { useState, useCallback } from "react";

const Child = React.memo(({ click }) => {
  return (
    <div>
      {console.log("子组件 render")}
      <button onClick={click}>child按钮</button>
    </div>
  );
});

/**
 * React.memo 是一个高阶组件，当props变更才渲染组件。提高性能
 * 只是为了性能优化而存在，不要依赖他来阻止渲染，会产生bug
 */
// const MemoChild = React.memo(Child);  // 

function Index() {
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

  /**
   * useCallback
   * const memoizedCallback = useCallback(() => {doSomething(a, b)},[a, b]);
   * 注意： 第一个函数里面，要是一个执行函数或者要做的事情
   */

  // 只有val改变的时候，才会重新计算handleClick，不会生成多余的函数对象，handleClick不重新渲染，子组件就不会重新渲染
  const handleClick = useCallback(() => {
    console.log("click");  // 页面渲染的时候并没有执行，点击的时候才触发
  }, [val]);


  // 如果写成这样，当val和num改变，也就是父组件改变的时候，子组件就会重新渲染
  // const handleClick = () => {
  //   console.log("click");  // 页面渲染的时候并没有执行，点击的时候才触发
  // };

  return (
    <div>
      {console.log("父级组件 render")}
      <button onClick={onClick}>val</button>
      <button onClick={onClickNum}>num</button>
      <div>val:{val}</div>
      <div>num: {num}</div>

      <Child click={handleClick} />
    </div>
  );
}

export default Index