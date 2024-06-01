export async function getCurrent(cityKey) {
  const response = await fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=lTbDE0BBPF1ukorr5HGcbN800gnekyRr`
  );

  return response.json();
}
