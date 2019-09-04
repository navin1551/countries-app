import React from "react";
import "./Country.css";

export default class Country extends React.Component {
  render() {
    return (
      <li className="country-list-items">
        <p>{this.props.name}</p>
        <span>{this.props.capital}</span>
        <br />
        <img
          src={this.props.flag}
          alt="country flags"
          className="country-flags"
        />
        <button id="interested-button">I'm Interested</button>
      </li>
    );
  }
}
