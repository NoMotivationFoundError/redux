import React, { Component } from "react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => console.log("hoge hoge")}></input>
    </React.Fragment>
  );
}

/*
class App extends Component {
  render() {
    return <div>Hello world!!!</div>;
  }
}
*/

export default App;
