export function getLocationUrl(location, isGeoApi) {
  let url;
  if (!isGeoApi) {
    url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl            &q=${location}`;
    return url;
  }
  url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl&q=${location.coordinates.lat}%2C${location.coordinates.lng}`;
  return url;
}
