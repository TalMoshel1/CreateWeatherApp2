export function getLocationUrl(location, isGeoApi) {
  let url;
  if (!isGeoApi) {
    url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=lTbDE0BBPF1ukorr5HGcbN800gnekyRr            &q=${location}`;
    return url;
  }
  url = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=lTbDE0BBPF1ukorr5HGcbN800gnekyRr&q=${location.coordinates.lat}%2C${location.coordinates.lng}`;
  return url;
}
