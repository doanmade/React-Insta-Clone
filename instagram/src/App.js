import React, { Component } from "react";
import "./App.css";
import Container from "./Components/PostContainer/Container.js";
import SearchBar from "./Components/SearchBar/SearchBar.js";
// import ComContainer from './Components/CommentSection/ComContainer.js';
import dummyData from "./Components/StarterData/dummy-data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }
  componentWillMount() {
    this.setState();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchBar />
        </div>
        <hr />
        <div>
          <Container postData={this.state.postData} />
        </div>
        <div className="class sample">test</div>

        {/* <div><ComContainer /></div> */}
      </div>
    );
  }
}

export default App;
