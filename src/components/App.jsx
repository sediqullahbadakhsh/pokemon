import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      type: "hello world",
    };
  }
  render() {
    return (
      <div className="container app-container">
        <div>
          <h4>our small pokemon app</h4>
          <form>
            <label>choose your pokemon type</label>
            <select>
              <option value="1">normal</option>
              <option value="2">fighting</option>
              <option value="3">flying</option>
            </select>
            <button className="btn btn-success">search for type</button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
