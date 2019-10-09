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
      ytResults: []
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

    /*const apiKey = "AIzaSyDxGVV8s4fkoLJxhx24C5MLHeKDgsekhKw";
    const channelId = "UCXgGY0wkgOzynnHvSEVmE3A";
    const results = 10;
    let ytURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${results}`;

    fetch(ytURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Something went wrong, please try again later");
        }
        return response.json();
      })
      .then(ytRes => {
        console.log(ytURL);
        const resultYT = ytRes.items.map(
          obj => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        this.setState({
          resultYT
        });
      })
      .catch(error => {
        console.log({ error });
      });*/
    Youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 3,
        key: "AIzaSyDxGVV8s4fkoLJxhx24C5MLHeKDgsekhKw",
        q: this.state.query
      }
    })
      .then(response => {
        console.log(response.data.items);
        this.setState({
          ytResults: response.data.items
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
        video={this.state.ytResults}
      />
    ));

    return (
      <section>
        <div>
          <p id="search-title">Where Do You Want To Go?</p>
        </div>
        <div id="my-itinerary-link">
          <Link to="/itinerary">My Itinerary</Link>
        </div>
        <div>
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
        <div>
          <ul>{countryResults}</ul>
        </div>
      </section>
    );
  }
}
