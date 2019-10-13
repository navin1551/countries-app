import React from "react";
import { Link } from "react-router-dom";
import SlideShow from "../SlideShow/SlideShow";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";
import "./Home.css";

const s = {
  container: "screenW screenH dGray col",
  header: "flex1 fCenter fSize2",
  main: "flex8 white",
  footer: "flex1 fCenter"
};

const slides = [slide1, slide2, slide3, slide4, slide5];

export default class Home extends React.Component {
  render() {
    return (
      <section className="home-area">
        <div>
          <p className="home-title">Welcome to Countries!</p>
        </div>
        <div>
          <p className="home-info">View different countries and information</p>
        </div>
        <div className={s.main}>
          <SlideShow slides={slides} />
        </div>
        <div id="home-link">
          <Link to="/search">Lets Start</Link>
        </div>
      </section>
    );
  }
}
