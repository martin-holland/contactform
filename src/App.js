import "./App.css";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";

import React, { Component } from "react";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    telnumber: "",
    message: "",
    role: "",
    showpopup: false,
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  showPopup = (event) => {};
  render() {
    return (
      <div>
        <Form change={this.changeHandler} />
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          telnumber={this.state.telnumber}
          message={this.state.message}
          role={this.state.role}
        />
        <Popup
          showpopup={this.showPopup}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          telnumber={this.state.telnumber}
          message={this.state.message}
          role={this.state.message}
        />
      </div>
    );
  }
}

export default App;
