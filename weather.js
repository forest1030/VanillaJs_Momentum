const weahterContainer = document.querySelector(".weatherContainer")
const weather = weahterContainer.querySelector('.js-weahter');
const API_KEY = "936bdf9eadd5bd0f3b0e441edc4dde03";
const COORDS = "coords";

function getWeather(lat, lon) {
    
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
      return response.json();
        
    })
    .then(function(json) {
        
      const temperature = json.main.temp;
      const place = json.name;

      weather.innerText = `${temperature}@  ${place}`;
    })
  };
  
  // Store geo data in local storage
  function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
  };
  
  function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude
    };
  
    // Save geo data in LS
    saveCoords(coordsObj);
  
    getWeather(latitude, longitude);
  };
  
  function handleGeoError() {
    console.log('Cannot access geo locaiton');
  };
  
  function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  };
  
  function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null) {
      askForCoords();
    } else {
      // getWeather
      const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
  }
  
  function init() {
    loadCoords();
  };
  
  init();