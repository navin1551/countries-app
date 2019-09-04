import React from "react";
import { Link } from "react-router-dom";
import Country from "../Country/Country";
import "./Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: []
    };
  }

  submitSearchHandle = e => {
    e.preventDefault();
    let search = this.state.query;
    let url = `https://restcountries.eu/rest/v2/name/${search}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return res.json();
      })
      .then(responseData => {
        console.log(responseData);
        this.setState({
          searchResults: responseData
        });
      })
      .catch(error => {
        console.log({ error });
      });
  };

  inputChangeHandle = query => {
    this.setState({
      query
    });
  };

  render() {
    let countryResults = this.state.searchResults.map(country => (
      <Country
        name={country.name}
        key={country.numericCode}
        capital={country.capital}
        flag={country.flag}
      />
    ));
    return (
      <section>
        <div>
          <p id="search-title">Where Are You From?</p>
        </div>
        <div id="my-itinerary-link">
          <Link to="/itinerary">My Itinerary</Link>
        </div>
        <div>
          <form onSubmit={this.submitSearchHandle} className="search-form">
            <label htmlFor="search-country-input">Search:</label>
            <input
              onChange={e => this.inputChangeHandle(e.target.value)}
              type="text"
              name="search-countries"
              id="search-input"
            />
            <br />
            <button id="search-button">Search</button>
          </form>
        </div>
        <div>
          <ul>{countryResults}</ul>
        </div>
      </section>
    );
  }
}
