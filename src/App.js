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

  showPopup = (e) => {
    e.preventDefault();
    this.setState({
      showPopup: true,
    });
  };
  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      message: this.state.message,
      role: this.state.role,
      telnumber: this.state.telnumber,
    };
    return (
      <div className="main">
        {this.state.showPopup && <Popup {...props} />}
        <Form change={this.changeHandler} submit={this.showPopup} />
        <View {...props} />
      </div>
    );
  }
}

export default App;
