import * as firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./config";
import { Brewery } from "./types/Brewery";

export const getBreweryData = async () => {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  let breweries = new Array<Brewery>();
  await db
    .collection("breweries")
    .orderBy("breweryName", "asc")

    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        breweries.push({
          id: doc.id,
          ...doc.data()
        } as Brewery);
      });
    });

  return breweries;
};
