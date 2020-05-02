import React, { Component } from "react";
import Hero from "../components/Hero";
class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      Phone: null,
      Email: "",
      Issue: "",
      ReturnDate: "",
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <Hero>
        <form onSubmit={this.handlesubmit}>
          <p>Enter your name:</p>
          <input type="text" name="username" onChange={this.myChangeHandler} />
          <p>Enter your Phone no:</p>
          <input type="text" name="Phone" onChange={this.myChangeHandler} />
          <p>Enter your Email:</p>
          <input type="text" name="Email" onChange={this.myChangeHandler} />
          <p>Enter your Issue: </p>
          <input type="text" name="Issue" onChange={this.myChangeHandler} />
          <p>Enter your ReturnDate: </p>
          <input
            type="Date"
            name="ReturnDate"
            onChange={this.myChangeHandler}
          />
          <br></br>
          <input type="submit" value="submit" className="Form-midd" />
        </form>
      </Hero>
    );
  }
}

export default MyForm;
