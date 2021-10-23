import React, { Component } from "react";
import "./App.css";
import Profile from "./component/checkpoint";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  render() {
    return (
      <div className="App">
        <button className="togglebtn" onClick={this.toggleVisibility}>
          {this.state.isVisible
            ? "hide profile information"
            : " show profile information"}
        </button>
        {this.state.isVisible && <Profile/>}
      </div>
    );
  }
}
export default App;
