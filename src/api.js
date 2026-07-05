//api.js
import { dom } from './dom.js';
const { input } = dom;
export function requestApi() {
  const targetLocation = input.value.trim().toLowerCase() || 'london';
  const API_KEY = 'A7JSY3YUHWE7S454SNKKJRNLK';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${targetLocation}?key=${API_KEY}&unitGroup=us`;
  return fetch(url)
    .then((response) =>
      !response.ok
        ? Promise.reject(new Error(`http Error: ${response.status}`))
        : response.json()
    )
    .then((data) => {
      console.log(data);
      return data;
    });
}
