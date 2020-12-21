const axios = require('axios');
const fs = require('fs');

axios.get('https://pokeapi.co/api/v2/type/13 ')
.then(res => {
   let pokeDataJSON = JSON.stringify(res.data);
    fs.writeFile('electric-pokemon.json', pokeDataJSON,  e => {
        console.log(e)
    })
}).catch (error => {
    console.log(error)
});


axios.get('https://pokeapi.co/api/v2/type')
.then(res => {
    let pokemonTypes = res.data.results.map(pokemon => pokemon.name);
    console.log(pokemonTypes)
});

console.log(process.argv);
let type = process.argv[2];



