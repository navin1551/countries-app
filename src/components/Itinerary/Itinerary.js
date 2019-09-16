import React from "react";
import { Link } from "react-router-dom";
import MyCountries from "../MyCountries/MyCountries";
import CountriesContext from "../../CountriesContext";

export default class Itinerary extends React.Component {
  static contextType = CountriesContext;

  render() {
    let myList = this.context.itinerary.map(country => (
      <MyCountries
        name={country.name}
        capital={country.capital}
        flag={country.flag}
        key={country.id}
      />
    ));
    console.log(myList);
    return (
      <div>
        <p>My Itinerary</p>
        <Link to="/search">Back to Search</Link>
        <ul>{myList}</ul>
      </div>
    );
  }
}
