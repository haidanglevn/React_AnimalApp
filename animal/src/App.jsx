import "./App.css";
import { Component } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Animals from "./components/Animals";
import Birds from "./components/Birds";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Outlet />
      </div>
    );
  }
}

export default App;
