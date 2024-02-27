import React, { Component } from "react";
import SpinnerImg from "./Spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={SpinnerImg} alt="loading" />
      </div>
    );
  }
}

export default Spinner;
