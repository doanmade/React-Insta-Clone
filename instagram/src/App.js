import React, { Component } from "react";
import "./App.css";
import authenticate from "./Components/Login/authenticate";
import LoginPage from "./Components/Login/LoginPage";
import PostData from "./Components/PostContainer/PostData";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentAuthenticate />
      </div>
    );
  }
}

const ComponentAuthenticate = authenticate(PostData)(LoginPage);

export default App;
