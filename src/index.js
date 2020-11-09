function formateDate(timestamp) {
  let date = new Date(timestamp);

  let dayIndex = date.getDay();
  let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[dayIndex];
  let monthIndex = date.getMonth();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[monthIndex];
  let todayDate = date.getDate();
  return `${day}, ${month} ${todayDate},</br>${formatHours(timestamp)}`;
  }
  
  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${hours}:${minutes}`;
  }

function displayTemperature(response) {
  console.log(response.data);
    let currentTemperature = document.querySelector("#current-temp");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind-speed");
    let humidityElement = document.querySelector("#humidity");
    let iconElement = document.querySelector("#icon");

    currentTemperature.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = response.data.wind.speed;
    humidityElement.innerHTML = response.data.main.humidity;
    iconElement.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    iconElement.setAttribute("alt", response.data.weather[0].description);
  }

function search(city) {
  let apiKey = "343ac52bf9dde9bc1d6f3ef42ae65aa5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit (event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
  console.log(cityInputElement.value);
}
   

let dateElement = document.querySelector("#today-date");
let currentTime = new Date();
dateElement.innerHTML = formateDate(currentTime);



let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("New York");
