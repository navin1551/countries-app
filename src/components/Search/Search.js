import React from "react";
import { Link } from "react-router-dom";
import Country from "../Country/Country";
import Youtube from "../YouTube/YouTube";
import "./Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: [],
      ytResults: [],
      selectedVideo: null
    };
  }

  submitSearchHandle = e => {
    e.preventDefault();
    let search = this.state.query;
    let url = `https://restcountries.eu/rest/v2/name/${search}`;

    Promise.all([
      fetch(url),
      Youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 3,
          key: "AIzaSyDxGVV8s4fkoLJxhx24C5MLHeKDgsekhKw",
          q: this.state.query
        }
      })
    ])

      .then(responses => {
        const countriesRes = responses[0];
        const ytResponse = responses[1];
        if (!countriesRes) {
          throw new Error("Something went wrong, please try again later");
        }
        countriesRes.json().then(responseData => {
          console.log(ytResponse);
          console.log(responseData);
          this.setState({
            searchResults: responseData,
            ytResults: ytResponse.data.items,
            selectedVideo: ytResponse.data.items[0]
          });
        });
      })

      .catch(error => {
        console.log({ error });
      });
  };

  inputChangeHandle = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    let countryResults = this.state.searchResults.map(country => (
      <Country
        name={country.name}
        key={country.numericCode}
        capital={country.capital}
        flag={country.flag}
        video={this.state.selectedVideo}
      />
    ));

    return (
      <section className="search-page">
        <div className="white">
          <div className="white">
            <p id="search-title">Where Do You Want To Explore?</p>
          </div>
          {/*<div id="my-itinerary-link">
          <Link to="/itinerary">My Itinerary</Link>
    </div>*/}
          <div className="white">
            <form onSubmit={this.submitSearchHandle} className="search-form">
              <label htmlFor="search-country-input">Search Countries:</label>
              <br />
              <input
                onChange={this.inputChangeHandle}
                type="text"
                name="search-countries"
                id="search-input"
              />
              <button id="search-button">Search</button>
            </form>
          </div>
        </div>
        <div>
          <ul>{countryResults}</ul>
        </div>
      </section>
    );
  }
}
