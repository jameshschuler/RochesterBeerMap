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
