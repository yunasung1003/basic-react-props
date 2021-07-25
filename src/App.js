import "./styles.css";
import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";

export default function App() {
  const [buttonName, setButtonName] = useState("클릭!");

  const clickButton = () => {
    //클릭!에서 click! 으로 변경
    setButtonName("click!");
  };
  return (
    <div className="App">
      <div>Hello!</div>
      <Counter click="click1" />
      {/* <Counter click="buttonName" />  buttonName 이 변수라서 buttonName, setButtonName 의 buttonName 이 알아차리지 못함  */}
      <Counter click={buttonName} />
      <Counter />

      <button onClick={clickButton}>Click</button>
    </div>
  );
}
