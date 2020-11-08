//表示にのみ責任を持つコンポーネントpresentation.jsxを作成
import React from "react";

const Counter = ({ count , increment , decrement }) => {
  console.log(count , increment , decrement);
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>increment(1)}>+</button>
      <button onClick={()=>decrement(1)}>-</button>
    </div>
  )
}
export default Counter;