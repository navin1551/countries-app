import React from "react";
import "./MyCountries.css";

export default class MyCountries extends React.Component {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
        <p>{this.props.capital}</p>
        <img
          src={this.props.flag}
          alt="itinerary flags"
          className="my-country-flags"
        />
      </li>
    );
  }
}
