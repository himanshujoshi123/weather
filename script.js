const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cde47fdf47mshf96f02b1c8ba651p1275cfjsn68c8196eb786",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("delhi");
// Define an array of cities
const otherPlaces = ["Shanghai", "Boston", "Lucknow", "Kolkata"];

// Function to fetch weather data for multiple cities
const getWeatherForMultipleCities = () => {
  otherPlaces.forEach((city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // Update the respective HTML elements with the weather data for each city
        const row = document.createElement("tr");
        row.innerHTML = `
          <th scope="row" class="text-start">${city}</th>
          <td>${response.cloud_pct}</td>
          <td>${response.feels_like}</td>
          <td>${response.humidity}</td>
          <td>${response.max_temp}</td>
          <td>${response.min_temp}</td>
          <td>${response.sunrise}</td>
          <td>${response.sunset}</td>
          <td>${response.temp}</td>
          <td>${response.wind_degrees}</td>
          <td>${response.wind_speed}</td>
        `;
        document.querySelector("tbody").appendChild(row);
      })
      .catch((err) => console.error(err));
  });
};

// Call the function to fetch weather data for the other places
getWeatherForMultipleCities();

