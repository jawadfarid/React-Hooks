import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    // console.log(event.target.value);
    setValue(event.target.value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr");
  const email = useInput("@");
  //useState returns an array
  //item is the first element. setItem is the modifier

  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
      <input
        placeholder="Email"
        value={email.value}
        onChange={email.onChange}
      />
    </div>
  );
};

class Ugly extends React.Component {
  state = {
    name: "",
    email: ""
  };
  render() {
    const { name, email } = this.state;

    return (
      <div className="App">
        <h1> Hello </h1>
        <input
          placeholder="Name"
          value={this.state.name}
          name="name"
          onChange={this.onChange}
        />
        <input
          placeholder="Email"
          value={this.state.email}
          name="email"
          onChange={this.onChange}
        />
      </div>
    );
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value
    });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
