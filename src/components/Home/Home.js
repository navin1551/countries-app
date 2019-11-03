import React, { useState, useEffect } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { Link } from "react-router-dom";
import { images } from "../../assets/images/images";
import "./Home.css";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="home-area">
      <div>
        <p className="home-title">Welcome to Countries!</p>
      </div>
      <div>
        <p className="home-info">View different countries and information</p>
      </div>
      <div id="home-link">
        <Link to="/search">Lets Start</Link>
      </div>
      <div>
        <Gallery index={index}>
          {images.map((image, i) => (
            <GalleryImage src={image} key={i} objectFit="contain" />
          ))}
        </Gallery>
      </div>
    </section>
  );
}
