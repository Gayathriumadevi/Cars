import React, { Component } from "react";
import loading from "../images/gif/loading-arrow.gif";
import "../App.css";
class Loading extends Component {
  state = {};
  render() {
    return <img src={loading}></img>;
  }
}

export default Loading;
