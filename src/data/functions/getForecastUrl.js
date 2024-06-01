export function getForecastUrl(isMetric, cityKey) {
  let url;

  try {
    if (isMetric) {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk            &metric=true`;
      return url;
    }
    url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk        `;
    return url;
  } catch (e) {
    throw new Error("error fetching: ", e);
  }
}
