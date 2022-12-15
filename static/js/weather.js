'use strict';

const weatherData = document.querySelector('.zipcode-form');

weatherData.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const zipcode = document.querySelector('#zipcode').value;

  const queryString = new URLSearchParams({ zipcode: zipcode }).toString();
  const url = `/weather?${queryString}`;

  fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result[0]['city'])
      document.querySelector('.city').innerHTML = 
        `<h1>${result['0']['city']}</h1>`
      document.querySelector('.current').innerHTML = 
        `
        <div id="date"><h1>${result['0']['date']}</h1></div>
        <img id="icon" src='http://openweathermap.org/img/w/${result['0']['icon']}.png'></img>
        <div id="temp">
          <h1>${result['0']['temp']}&#8457;</h1> 
          <h3>${result['0']['weather']}</h3>
        </div>
        <div id="temp-details">
          <div id="temp-left"> 
            Low: <br>
            High: <br>
            Humidity:
          </div>
          <div id="temp-right">
            ${result['0']['temp_min']}&#8457;<br>
            ${result['0']['temp_max']}&#8457;<br>
            ${result['0']['humidity']}%
          </div>
          <div id="sun">
          ${result['0']['sunrise']} <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16"><path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>  
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-sunset-fill" viewBox="0 0 16 16"><path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/></svg>
          ${result['0']['sunset']}
          </div>
        `
        ;
    })
  console.log('fetched')
});