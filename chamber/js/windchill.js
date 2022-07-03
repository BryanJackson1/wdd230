var t = "init";
var s = "init";
var wc = "init";
// select HTML elements in the document
const temp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const wind = document.querySelector('#speed');
const chill = document.querySelector('#chill');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Mount Vernon,WA,US&appid=035d9944159398699574a1990d3151c9&units=imperial';

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
    temp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    wind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;

    t = parseFloat(weatherData.main.temp);
    s = parseFloat(weatherData.wind.speed);
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    

    if ((s > 3) && (t < 50)) {
        wc = 35.740 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
        chill.textContent = wc.toFixed(1);
    } else {
        chill.textContent = "NA";
    }
  }
  apiFetch();




