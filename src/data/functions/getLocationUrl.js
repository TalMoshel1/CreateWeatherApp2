export function getLocationUrl(location, isGeoApi) {
  let url;
  if (!isGeoApi) {
    url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk            &q=${location}`;
    return url;
  }
  url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk&q=${location.coordinates.lat}%2C${location.coordinates.lng}`;
  return url;
}
