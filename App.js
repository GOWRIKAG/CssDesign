import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <center>
    <div className="div1">
      <header>
        <h1 className="head1">Counter app </h1>
      </header>
      <h2 className="head2">Current value : {count}</h2>
      <button className="b1" onClick={() => setCount(0)}>Reset Counter</button>
      <button className="b2" onClick={() => (count<10)?setCount(count + 1):setCount(10)}>+</button>
      <button className="b3" onClick={() => (count>0)?setCount(count -1 ):setCount(0)}>-</button>

    </div>
    </center>
  );
}
export default App;
