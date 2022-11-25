import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const NewBeer = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    console.log(body);
    async function createNewBeer(beer) {
      const { data } = await axios.post(
        `https://ih-beers-api2.herokuapp.com/beers/new`,
        beer
      );
      console.log("Created: ", data);
    }
    createNewBeer(body);
  };

  const {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  } = formData;

  return (
    <div>
      <Header />
      <h1>
        <form className="new-beer" onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              type="text"
              name="name"
              id="name"
              onChange={(event) => {
                setFormData({ ...formData, name: event.target.value });
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="tagline">Tagline</label>
            <input
              value={tagline}
              type="text"
              name="tagline"
              id="tagline"
              onChange={(event) => {
                setFormData({ ...formData, tagline: event.target.value });
              }}
            />
          </div>
          <div className="form-input description">
            <label htmlFor="description">Description</label>
            <input
              value={description}
              type="text"
              name="description"
              id="description"
              onChange={(event) => {
                setFormData({ ...formData, description: event.target.value });
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              value={first_brewed}
              type="text"
              name="first_brewed"
              id="first_brewed"
              onChange={(event) => {
                setFormData({ ...formData, first_brewed: event.target.value });
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="brewers_tips">Brewer Tips</label>
            <input
              value={brewers_tips}
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              onChange={(event) => {
                setFormData({ ...formData, brewers_tips: event.target.value });
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              value={attenuation_level}
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              onChange={(event) => {
                setFormData({
                  ...formData,
                  attenuation_level: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="contributed_by">Contributed By</label>
            <input
              value={contributed_by}
              type="text"
              name="contributed_by"
              id="contributed_by"
              onChange={(event) => {
                setFormData({
                  ...formData,
                  contributed_by: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-input">
            <button>Add New</button>
          </div>
        </form>
      </h1>
    </div>
  );
};

export default NewBeer;
