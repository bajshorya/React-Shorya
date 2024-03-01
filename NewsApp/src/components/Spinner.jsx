import React, { Component } from "react";
import SpinnerImg from "./Spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={SpinnerImg} alt="loading" />
    </div>
  );
};

export default Spinner;
