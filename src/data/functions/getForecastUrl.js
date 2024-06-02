export function getForecastUrl(isMetric, cityKey) {
  let url;

  try {
    if (isMetric) {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=evfOeo7HTiSJxNySGtxtSOiQvtHlNXqi
            &metric=true`;
      return url;
    }
    url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=evfOeo7HTiSJxNySGtxtSOiQvtHlNXqi
        `;
    return url;
  } catch (e) {
    throw new Error("error fetching: ", e);
  }
}
