//eventListeners.js
import { dom } from './dom.js';
import { processJsonData } from './index.js';
import { state } from './state.js';
import { renderTemperature } from './utilityFunctions.js';
const { btn, searchBtn } = dom;
const searchForm = dom.searchBtn.form; // the <form> wrapping the search input

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  processJsonData();
});

btn.addEventListener('click', (e) => {
  e.preventDefault();

  state.isFahrenheit = !state.isFahrenheit;

  renderTemperature();
});
