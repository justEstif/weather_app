const key = "Hs4vkFweZFSPtAZ5p4k2ThUAbYwghAfv";

// request to location api to get information about a city
// part of the information will contain a key code of that city
// we use the key code to get the weather of that city

// get current conditions
const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};
