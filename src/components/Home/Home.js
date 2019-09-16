import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <section className="home-area">
        <div>
          <p className="home-title">Welcome to Countries!</p>
        </div>
        <div>
          <p className="home-info">
            View different countries and information and put together a travel
            itinerary
          </p>
        </div>
        <div id="home-link">
          <Link to="/search">Lets Start</Link>
        </div>
      </section>
    );
  }
}
