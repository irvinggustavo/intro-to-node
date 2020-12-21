const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/type").then((res) => {
  let pokemonTypes = res.data.results.map((pokemon) => pokemon.name);
  console.log(pokemonTypes);
});

if (process.argv[2]) {
  axios.get("https://pokeapi.co/api/v2/type").then((res) => {
    let pokemonTypes = res.data.results.map((pokemon) => pokemon.name);
    let pokeIndex = pokemonTypes.indexOf(process.argv[2]);
    let id = pokeIndex + 1;
    axios.get("https://pokeapi.co/api/v2/type/" + id).then((res) => {
      res.data.pokemon.forEach((item) => {
        console.log(`Pokemon name: ${item.pokemon.name}`);
        console.log(`Pokemon url: ${item.pokemon.url}`);
      });
    });
  });
} else {
  console.log(
    "input a type to see a list of pokemons names and URL's example node index.js 'type' "
  );
}
