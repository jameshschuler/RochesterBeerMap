import React, { useState } from "react";

const SuggestBreweryForm = ({ submitBrewery }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [website, setWebsite] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [food, setFood] = useState(false);
  const [wine, setWine] = useState(false);
  const [liquor, setLiquor] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (name === "") {
      setError("Please enter a brewery name.");
      window.scrollTo(0, 0);

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
      liquor,
      latitude,
      longitude
    });

    setName("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    setZipcode("");
    setWebsite("");
    setLatitude("");
    setLongitude("");
    setWine(false);
    setFood(false);
    setLiquor(false);
  };

  return (
    <div className="row">
      <form
        autoComplete="off"
        id="suggest-brewery-form"
        className="col s12"
        onSubmit={e => handleSubmit(e)}
      >
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="name"
              type="text"
              className="validate"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="name">Name</label>
            <span className="red-text lighten-1">{error}</span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="phone"
              type="text"
              className=""
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <label htmlFor="name">Phone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="address"
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
            <label htmlFor="name">Address</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="city"
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <label htmlFor="name">City</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="state"
              type="text"
              value={state}
              onChange={e => setState(e.target.value)}
            />
            <label htmlFor="name">State</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="zipcode"
              type="text"
              value={zipcode}
              onChange={e => setZipcode(e.target.value)}
            />
            <label htmlFor="name">Zipcode</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 m6 offset-m3 l6 offset-l3">
            <input
              autoComplete="off"
              id="website"
              type="text"
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
            <label htmlFor="name">Website</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="latitude"
                  type="text"
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
                />
                <label htmlFor="latitude">Latitude</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="longitude"
                  type="text"
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
                />
                <label htmlFor="longitude">Longitude</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="checkbox-container">
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    value={food}
                    onChange={e => setFood(e.target.value)}
                  />
                  <span>Food</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    value={wine}
                    onChange={e => setWine(e.target.value)}
                  />
                  <span>Wine</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    type="checkbox"
                    className="filled-in"
                    value={liquor}
                    onChange={e => setLiquor(e.target.value)}
                  />
                  <span>Liquor</span>
                </label>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 offset-m3" id="btn-container">
            <button className="btn" type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SuggestBreweryForm;
