import React, { useState } from "react";
import Input from "./Input";

const SuggestBreweryForm = ({ submitBrewery }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [website, setWebsite] = useState("");
  const [food, setFood] = useState(false);
  const [wine, setWine] = useState(false);
  const [liquor, setLiquor] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (name === "") {
      setError("Please enter a brewery name.");
      return;
    } else {
      setError("");
    }

    submitBrewery({
      name,
      phone,
      address,
      city,
      state,
      zipcode,
      website,
      food,
      wine,
      liquor
    });
  };

  return (
    <form id="suggest-brewery-form" onSubmit={e => handleSubmit(e)}>
      {error && <p className="has-text-danger">{error}</p>}
      <Input
        value={name}
        onChange={setName}
        className="input"
        type={"text"}
        name={"name"}
        placeholder={"Name"}
      />
      <Input
        value={phone}
        onChange={setPhone}
        className="input"
        type={"tel"}
        name={"phone"}
        placeholder={"Phone"}
      />
      <Input
        value={address}
        onChange={setAddress}
        className="input"
        type={"text"}
        name={"address"}
        placeholder={"Address"}
      />
      <Input
        value={city}
        onChange={setCity}
        className="input"
        type={"text"}
        name={"city"}
        placeholder={"City"}
      />
      <Input
        value={state}
        onChange={setState}
        className="input"
        type={"text"}
        name={"state"}
        placeholder={"State"}
      />
      <Input
        value={zipcode}
        onChange={setZipcode}
        className="input"
        type={"text"}
        name={"zipcode"}
        placeholder={"Zipcode"}
      />
      <Input
        value={website}
        onChange={setWebsite}
        className="input"
        type={"text"}
        name={"website"}
        placeholder={"Website"}
      />
      <div className="checkbox-container">
        <label className="checkbox is-size-6">
          <input
            type="checkbox"
            value={food}
            onClick={e => setFood(e.target.checked)}
          />
          Food
        </label>
        <label className="checkbox is-size-6">
          <input
            type="checkbox"
            value={wine}
            onClick={e => setWine(e.target.checked)}
          />
          Wine
        </label>
        <label className="checkbox is-size-6">
          <input
            type="checkbox"
            value={liquor}
            onClick={e => setLiquor(e.target.checked)}
          />
          Liquor
        </label>
      </div>
      <button
        className="button is-pulled-right is-info is-outlined mt-1"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default SuggestBreweryForm;
