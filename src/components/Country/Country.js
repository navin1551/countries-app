import React from "react";

export default class Country extends React.Component {
  render() {
    return (
      <li>
        <p>{this.props.name}</p>
        <span>{this.props.capital}</span>
        <img src={this.props.flag} alt="country flags" />
      </li>
    );
  }
}
