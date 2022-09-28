import React, { useState, useMemo } from "react";

const Child = React.memo(() => {
  return (
    <div>
      {console.log("子组件 render")}
    </div>
  );
});


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
   * useMemo 格式 const memoizedValue = useMemo(()=>{return value},[arr1])  
   * 注意要 return 返回值, 在 arr1 更新的时候，才会重新计算 
   * 
   * 结合 React.memo 使用，就可以实现子组件根据父级组件的部分值的改变而改变
   */
  const value2 = useMemo(() => {
    return val;
  }, [val])


  return (
    <div>
      {console.log("父级组件 render")}
      <button onClick={onClick}>val</button>
      <button onClick={onClickNum}>num</button>
      <div>val:{val}</div>
      <div>num: {num}</div>

      <Child value2={value2} />
    </div>
  );
}

export default Index