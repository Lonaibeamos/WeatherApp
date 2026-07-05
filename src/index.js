//index.js
import { requestApi } from './api.js';
import { dom } from './dom.js';
import './style.css';
import {
  clearUI,
  displayWeatherIcon,
  clearForecastCards,
  renderTemperature,
} from './utilityFunctions.js';
import { state } from './state.js';
import './event.js';
const {
  country,
  time,
  warning1,
  warning2,
  span1,
  span2,
  h2,
  temperature,
  humidity,
  wind,
  days,
  temps,
  winds,
  times,
  imgs,
} = dom;
export async function processJsonData() {
  clearUI();
  clearForecastCards();
  const response = await requestApi();
  if (!response || !response.days) {
    console.error('API failed or empty response');
    return;
  }
  country.textContent = response.address;

  time.textContent = new Date().toLocaleTimeString('en-US', {
    timeZone: response.timezone,
  });

  if (response.alerts && response.alerts.length > 0) {
    warning1.textContent = 'Warning:';

    warning2.textContent = response.alerts[0].headline;
  } else {
    warning1.textContent = '';

    warning2.textContent = '';
  }

  temperature.textContent = 'temp: ' + response.days[0].temp + ' F';

  humidity.textContent = 'humidity: ' + response.days[0].humidity + ' %';

  wind.textContent = 'wind: ' + response.days[0].windspeed + ' mph';

  state.apiTemperature = response.days[0].temp;

  renderTemperature();

  h2.textContent = response.days[0].conditions;

  displayWeatherIcon(response.days[0].icon);

  const forecastDays = response.days.slice(0, 7);

  for (let i = 0; i < forecastDays.length; i++) {
    let forecast = forecastDays[i];

    days[i].textContent = new Date(forecast.datetime).toLocaleDateString(
      'en-US',
      { weekday: 'long' }
    );

    temps[i].textContent = ` temp: ${forecast.temp}`;
    winds[i].textContent = ` Wind speed: ${forecast.windspeed}`;
    times[i].textContent = `${forecast.datetime}`;
    imgs[i].src = `assets/icons/${forecast.icon}.png`;
  }
}
processJsonData();
