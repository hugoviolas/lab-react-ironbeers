import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="route">
        <picture>
          <img src={require("./../assets/beers.png")} alt="all beers" />
        </picture>
        <Link to="/beers">All Beers</Link>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            distinctio unde ducimus voluptatem rem officiis vel facere modi
            exercitationem dolorem atque rerum, quaerat non, molestias
            necessitatibus impedit, recusandae tenetur dolorum.
          </p>
        </div>
      </div>
      <div className="route">
        <picture>
          <img src={require("./../assets/random-beer.png")} alt="random beer" />
        </picture>
        <Link to="/random-beer">Random Beer</Link>
        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            distinctio unde ducimus voluptatem rem officiis vel facere modi
            exercitationem dolorem atque rerum, quaerat non, molestias
            necessitatibus impedit, recusandae tenetur dolorum.
          </p>
        </div>
      </div>
      <div className="route">
        <picture>
          <img src={require("./../assets/new-beer.png")} alt="new beer" />
        </picture>
        <Link to="/new-beer">New Beer</Link>
        <div className="description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            distinctio unde ducimus voluptatem rem officiis vel facere modi
            exercitationem dolorem atque rerum, quaerat non, molestias
            necessitatibus impedit, recusandae tenetur dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
