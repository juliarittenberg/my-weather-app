function formateDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let dayIndex = date.getDay();
  let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"]

  return `${days[dayIndex]} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#conditions").innerHTML = Math.round(response.data.main.temp);
}

function search(event) {
  event.preventDefault();
  let apiKey = "343ac52bf9dde9bc1d6f3ef42ae65aa5";
  let city = document.querySelector("#city-input").value;
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);



let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formateDate(currentTime);
