
// select HTML elements in the document
const temp = document.querySelector('#temp');
const weatherDesc = document.querySelector('#weatherDesc');
const forecast = document.querySelector('#forecast');


const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=32.72&lon=-117.16&exclude=minutely&appid=035d9944159398699574a1990d3151c9&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function  displayResults(weatherData) {
    temp.innerHTML = `Current Temperature: <strong>${weatherData.current.temp.toFixed(0)}°F</strong>   Humidity: <strong>${weatherData.current.humidity}</strong>%`;
    const desc = weatherData.current.weather[0].description;
    weatherDesc.innerHTML = `Current Weather: <strong>${desc}</strong>`;
    forecast.innerHTML = `3 Day Forecast Temps <strong>${weatherData.daily[0].temp.day}</strong>, <strong>${weatherData.daily[1].temp.day}</strong>, <strong>${weatherData.daily[2].temp.day}</strong>`
  }
  apiFetch();




