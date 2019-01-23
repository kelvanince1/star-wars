export default async function fetchAsync(person) {
  let response = await fetch(`https://swapi.co/api/people/`);
  let data = await response.json();
  console.log('DATA', data);
}
