const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cde47fdf47mshf96f02b1c8ba651p1275cfjsn68c8196eb786',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

async function fetchWeather() {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Assuming the API returns JSON data
    console.log(result);
    // Handle the weather data here - update HTML, display information, etc.
  } catch (error) {
    console.error(error);
  }
}

// Call the function to fetch weather when the page loads
window.onload = () => {
  fetchWeather(); // Initiating the fetch process inside a function
};
