import "./App.css";
import { Component } from "react";
import Card from "./Card.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">There are x animals</h1>
        <div className="card-container">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
