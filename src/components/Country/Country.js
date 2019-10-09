import React from "react";
import "./Country.css";
import CountriesContext from "../../CountriesContext";

export default class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      capital: this.props.capital,
      flag: this.props.flag
    };
  }

  static contextType = CountriesContext;

  addToItinerary = e => {
    e.preventDefault();
    let id = this.context.itinerary.length + 1;
    let { name, capital, flag } = this.state;
    const newCountry = { id, name, capital, flag };
    this.context.addToItinerary(newCountry);
    console.log(this.context.itinerary);
  };

  render() {
    //const videoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    console.log(this.props.video.id);

    return (
      <div>
        <form onSubmit={this.addToItinerary}>
          <li className="country-list-items">
            <p>{this.props.name}</p>
            <span>{this.props.capital}</span>
            <br />
            <img
              src={this.props.flag}
              alt="country flags"
              className="country-flags"
            />
            <br />
            <button id="interested-button">I'm Interested</button>
          </li>
        </form>
      </div>
    );
  }
}
