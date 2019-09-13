import * as firebase from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "../config/firebase.config";
import { Brewery } from "../types/Brewery";
import LocalStorageService from "./localStorageService";

export const getBreweryData = async () => {
  let savedBreweries = LocalStorageService.loadData("breweryData") as Brewery[];
  if (savedBreweries && savedBreweries.length > 0) {
    return savedBreweries;
  }

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

  LocalStorageService.saveData("breweryData", breweries);

  return breweries;
};
