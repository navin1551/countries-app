import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Itinerary from "./components/Itinerary/Itinerary";
import CountriesContext from "./CountriesContext";
import Store from "./Store";

export default class App extends React.Component {
  state = {
    itinerary: Store.countries
  };

  addToItinerary = country => {
    let currentItinerary = [...this.state.itinerary];
    currentItinerary.push(country);
    this.setState({
      itinerary: currentItinerary
    });
  };

  render() {
    const contextValue = {
      itinerary: this.state.itinerary,
      addToItinerary: this.addToItinerary
    };

    return (
      <CountriesContext.Provider value={contextValue}>
        <div className="app">
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/itinerary" component={Itinerary} />
          </main>
        </div>
      </CountriesContext.Provider>
    );
  }
}
