export async function getCurrent(cityKey) {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=evfOeo7HTiSJxNySGtxtSOiQvtHlNXqi
`
  );

  return response.json();
}
