import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://sportshub.cbsistatic.com/i/r/2024/02/20/2a164257-5fdb-4a4d-b35d-ddd2910b9a03/thumbnail/1200x675/9ef23fe138bb16c9508da6f74f841a5c/cousins-g.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/newsdetail" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
