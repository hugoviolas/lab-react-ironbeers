import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);
  useEffect(() => {
    async function getRandomBeer() {
      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setBeer(data);
      console.log("========", data);
    }
    getRandomBeer();
  }, []);
  if (!beer) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <div className="single-beer">
        <picture className="single-beer-picture">
          <img src={beer.image_url} alt={beer.name} />
        </picture>
        <div className="single-beer-infos">
          <div>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
          </div>
          <div>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
          </div>
        </div>
        <div className="single-beer-footer">
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
