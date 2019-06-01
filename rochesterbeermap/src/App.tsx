import firebase from "firebase";
import "materialize-css/dist/css/materialize.min.css";
import React, { useEffect, useState } from "react";
import "./app.css";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import { firebaseConfig } from "./config";

export interface Brewery {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  website: string;
  zipcode: number;
  food: boolean;
  wine: boolean;
  liquor: boolean;
}

const App = () => {
  const [breweries, setBreweries] = useState<Array<Brewery>>([]);

  const getData = () => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();

    db.collection("breweries")
      .get()
      .then(querySnapshot => {
        let temp = new Array<any>();
        querySnapshot.forEach(doc => {
          temp.push({ id: doc.id, ...doc.data() });
        });

        setBreweries(temp);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar breweries={breweries} />
      <div id="main">
        {breweries && breweries.length > 0 && <Map breweries={breweries} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
