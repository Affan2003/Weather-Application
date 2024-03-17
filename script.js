const apiKey = '642fe1588d077dc2010badf3b4b30ebd';

function refreshPage() 
{
    location.reload(); // Refresh the webpage when the header is clicked
}

function getWeather() 
{
  const city = document.getElementById('city').value;

  if (city.trim() === '') 
  {
    alert('Please enter a city name');
    return;
  }

  const xhr = new XMLHttpRequest();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  xhr.onreadystatechange = function() 
  {
    if (xhr.readyState === XMLHttpRequest.DONE) 
    {
      if (xhr.status === 200) 
      {
        const response = JSON.parse(xhr.responseText);
        displayWeather(response);
      } 
      else 
      {
        alert('Error fetching weather data');
      }
    }
  };

  xhr.open('GET', url, true);
  xhr.send();
}

function displayWeather(data) 
{
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2 style="text-align: center;">${data.name}, ${data.sys.country}</h2>
        <p style="margin-left: 20px;">&bull; Temperature: ${data.main.temp}°C</p>
        <p style="margin-left: 20px;">&bull; Description: ${data.weather[0].description}</p>
        <p style="margin-left: 20px;">&bull; Humidity: ${data.main.humidity}%</p>
        <p style="margin-left: 20px;">&bull; Wind Speed: ${data.wind.speed} m/s</p>
        <p style="margin-left: 20px;">&bull; Visibility: ${data.visibility} meters</p>
    `;
}