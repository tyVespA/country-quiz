export async function getData() {
  const dataString = await fetch("https://restcountries.com/v3.1/all");
  console.log(dataString);
  const dataJson = await dataString.json();
  console.log(dataJson);
}
