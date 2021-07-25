import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const incremet = () => {
    setCount(count + 1);
  };
  console.log(props.click);

  // props.click 이 존재하면 props.click  사용, 존재 하지 않는다면 Click
  const clickString = props.click || "Click";
  return (
    <div className="App">
      <button onClick={incremet}>
        {clickString}
        {count}
      </button>
    </div>
  );
};

export default Counter;
