//utilityFunctions.js
import { dom } from './dom.js';
import { state } from './state.js';
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
  icon,
} = dom;

function clearUI() {
  country.textContent = '';

  time.textContent = '';

  warning1.textContent = '';

  warning2.textContent = '';

  span1.textContent = '';
  span2.textContent = '';

  h2.textContent = '';

  temperature.textContent = '';

  humidity.textContent = '';

  wind.textContent = '';
}

function getCelcius(F) {
  return (5 / 9) * (F - 32);
}

function renderTemperature() {
  if (state.isFahrenheit) {
    span1.textContent = state.apiTemperature;

    span2.textContent = 'F';
  } else {
    span1.textContent = getCelcius(state.apiTemperature).toFixed(1);

    span2.textContent = 'C';
  }
}

async function displayWeatherIcon(TodaysDescription) {
  icon.src = `assets/icons/${TodaysDescription}.png`;
}

// Add this function before the export
function clearForecastCards() {
  const { days, temps, winds, times, imgs } = dom;
  days.forEach((el) => (el.textContent = ''));
  temps.forEach((el) => (el.textContent = ''));
  winds.forEach((el) => (el.textContent = ''));
  times.forEach((el) => (el.textContent = ''));
  imgs.forEach((el) => (el.src = ''));
}

export {
  clearUI,
  clearForecastCards,
  getCelcius,
  displayWeatherIcon,
  renderTemperature,
};
