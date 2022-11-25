import React from "react";
import Header from "../components/Header";
import { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Beers = () => {
  const [beers, setBeers] = useState(null);

  //   useEffect with https://ih-beers-api2.herokuapp.com/beers/search?q={query}

  useEffect(() => {
    async function getAllBeers() {
      const { data } = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      console.log(data);
      setBeers(data);
    }
    getAllBeers();
  }, []);

  if (!beers) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Header />
      <form>
        <input type="text" placeholder="Find Beer" />
        <div>
          <button>I'm Thirsty !</button>
        </div>
      </form>

      {beers.map((beer) => {
        return (
          <Link key={beer._id} className="beer-link" to={`/beers/${beer._id}`}>
            <div className="beer">
              <picture className="beer-picture">
                <img src={beer.image_url} alt={beer.name} />
              </picture>
              <div className="beer-description">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>
                  <span>Created by: </span>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Beers;
