export async function getCurrent(cityKey) {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=4eG4ZizaYAjzSMwQfZX7va8Gc5HwVpwk`
  );

  return response.json();
}
