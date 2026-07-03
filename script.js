function requestApi() {
  const START_DATE = 0;
  const END_DATE = 0;
  const targetLocation = "london";
  const API_KEY = "A7JSY3YUHWE7S454SNKKJRNLK";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${targetLocation}/?key=${API_KEY}`;
  return fetch(url)
    .then((response) =>
      !response.ok
        ? Promise.reject(new Error(`http Error: ${response.status}`))
        : response.json(),
    )
    .then(console.log);
}

processedData = async () => {
  const response = await requestApi();
  const TotalAvgHumidity = response.currentConditions.humidity;
  const TotalAvgTemperature = response.currentConditions.temp;
  const TotalAvgWindSpeed = response.currentConditions.windspeed;
  const TotalAvgDescription = response.currentConditions.description;

  const latitude = response.latitude;
  const longitude = response.longitude;

  const address = response.resolvedAddress;
  const timezone = response.timezone;

  const TodaysMaxTemp = response.days[0].tempmax;
  const TodaysMinTemp = response.days[0].tempmin;
  const TodaysAvgTemp = response.days[0].temp;
  const TodaysWindspeed = response.days[0].windspeed;
  const TodaysDescription = response.days[0].icon;

  const TomorrowMaxTemp = response.days[1].tempmax;
  const TomorrowMinTemp = response.days[1].tempmin;
  const TomorrowAvgTemp = response.days[1].temp;
  const TomorrowWindspeed = response.days[1].windspeed;
  const TomorrowDescription = response.days[1].icon;
};

async function displayWeatherIcon(TodaysDescription) {
  try {
    // Dynamic Import: Webpack reads this and fetches the exact PNG you need on the fly
    const imageModule = await import(`./assets/icons/${TodaysDescription}.png`);

    // imageModule.default gives you the final bundled URL of the image
    const iconUrl = imageModule.default;

    // Now you can inject it into an HTML <img> tag
    document.getElementById("weather-icon").src = iconUrl;
  } catch (err) {
    console.error("Could not load the icon image", err);
  }
}
requestApi();
