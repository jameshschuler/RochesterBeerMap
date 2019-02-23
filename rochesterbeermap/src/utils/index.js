export const sortDays = unordered => {
  let sorter = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  };

  let temp = [];
  Object.keys(unordered).forEach(key => {
    let value = unordered[key];
    let index = sorter[key.toLowerCase()];
    temp[index] = {
      key,
      value
    };
  });

  let orderedData = {};
  temp.forEach(obj => {
    orderedData[obj.key] = obj.value;
  });

  return orderedData;
};

export const getCurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[new Date().getDay()];
};

export const generateDirectionsLink = (userPosition, markerPosition) => {
  let directionsLink = `https://www.google.com/maps/dir/?api=1`;
  if (userPosition.lat !== null && userPosition.lng !== null) {
    directionsLink += `&origin=${userPosition.lat},${userPosition.lng}`;
  }
  directionsLink += `&destination=${markerPosition._lat},${
    markerPosition._long
  }`;

  return directionsLink;
};

export const getDirectionsDistance = (
  google,
  distanceMatrixService,
  userPosition,
  location,
  travelMode
) => {
  if (userPosition.lat === null || userPosition.lng === null) {
    return;
  }

  const origin = new google.maps.LatLng(userPosition.lat, userPosition.lng);
  const destination = new google.maps.LatLng(location._lat, location._long);

  const callback = (response, status) => {
    if (response) {
      const { rows } = response;

      const data = {
        distance: rows[0].elements[0].distance,
        duration: rows[0].elements[0].duration
      };
    }
  };

  distanceMatrixService.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    },
    callback
  );
};
