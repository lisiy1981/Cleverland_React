import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    };
  }
  btnInk = () => {
    this.setState((state) => ({
      counter: state.counter < 10 ? state.counter + 1 : state.counter,
    }));
  };
  btnDec = () => {
    this.setState((state) => ({
      counter: state.counter > -10 ? state.counter - 1 : state.counter,
    }));
  };
  btnRnd = () => {
    this.setState({
      counter: +(Math.random() * (10 - -10) + -10).toFixed(0),
    });
  };
  btnReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={this.btnInk}>INK</button>
          <button onClick={this.btnDec}>DEC</button>
          <button onClick={this.btnRnd}>RND</button>
          <button onClick={this.btnReset}>RESET</button>
        </div>
      </div>
    );
  }
}
export default App;
