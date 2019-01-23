export default async function fetchAsync () {
  let response = await fetch('https://swapi.co/api/people/1');
  let data = await response.json();
  console.log('DATA', data);
}
