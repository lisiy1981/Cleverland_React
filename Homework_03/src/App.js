import { useState } from "react";
import "./App.css";

const App = (props) => {
  const [counter, setCounter] = useState(props.counter);

  const btnInk = () => {
    setCounter(counter < 10 ? counter + 1 : counter);
  };
  const btnDec = () => {
    setCounter(counter > -10 ? counter - 1 : counter);
  };
  const btnRnd = () => {
    setCounter(+(Math.random() * (10 - -10) + -10).toFixed(0));
  };
  const btnReset = () => {
    setCounter(0);
  };

  return (
    <div className="app">
      <div className="counter">{counter}</div>
      <div className="controls">
        <button onClick={btnInk}>INK</button>
        <button onClick={btnDec}>DEC</button>
        <button onClick={btnRnd}>RND</button>
        <button onClick={btnReset}>RESET</button>
      </div>
    </div>
  );
};
export default App;
