export function getLocationUrl(location, isGeoApi) {
  let url;
  if (!isGeoApi) {
    url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ            &q=${location}`;
    return url;
  }
  url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=AdG6XnaXrK4SjNKQ4HoRhvgaGVDbsGpJ&q=${location.coordinates.lat}%2C${location.coordinates.lng}`;
  return url;
}
