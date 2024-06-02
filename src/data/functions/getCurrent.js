export async function getCurrent(cityKey) {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=eX0BvLwq6EEeVFtvBg7usc23ydzRticl`
  );

  return response.json();
}
