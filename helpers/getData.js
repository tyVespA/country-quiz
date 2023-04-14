import { randomIntFromInterval } from "./randomIntFromInterval";

export async function getData() {
  const dataString = await fetch("https://restcountries.com/v3.1/all");
  const dataJson = await dataString.json();
  console.log(dataJson);

  const randomCountryIndex = randomIntFromInterval(0, 250);

  const countryName = dataJson[randomCountryIndex]["name"]["common"];
  console.log(countryName);
  const countryCapital = dataJson[randomCountryIndex]["capital"][0];
  console.log(countryCapital);

  return { countryName, countryCapital };
}
