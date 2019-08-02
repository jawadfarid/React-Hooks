import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1) 
  //useState returns an array
  //item is the first element. setItem is the modifier
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick = {incrementItem}>Increment</button>
      <button onClick = {decrementItem}>Decrement</button>
    </div>
  );
} 





class AppUgly extends React.Component {
  state = {
    item : 1
  }

  render() {
    const {item} = this.state;
    return (
      <div className = "App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick = {this.incrementItem}>Increment</button>
        <button onClick = {this.decrementItem}>Decrement</button>
      </div>
    );
  }

  incrementItem = () => {
    console.log("test")
    this.setState ({
      item : this.state.item + 1
    })  
  }

  decrementItem = () => {
    this.setState ({
      item : this.state.item - 1
    })
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
