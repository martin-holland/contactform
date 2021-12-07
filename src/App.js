import "./App.css";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Notes from "./components/Notes"
import axios from "axios"

import React, { Component } from "react";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    telnumber: "",
    message: "",
    role: "",
    showpopup: false,
    data: [],
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

  componentDidMount() {
    axios.get("http://localhost:3010/notes").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      message: this.state.message,
      role: this.state.role,
      telnumber: this.state.telnumber,
    };
    return (
      <main>
        {this.state.showPopup && <Popup {...props} />}
        <div className="formarea">
        <Form change={this.changeHandler} submit={this.showPopup} />
        <View {...props} />
        </div>
        <div className="notesarea">
        {this.state.data.map((note) => (
          <Notes {...note} />
        ))}
        </div>
      </main>
    );
  }
}

export default App;
