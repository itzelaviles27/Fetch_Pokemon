// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
                // Crear una tarjeta para el Pokémon
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.innerHTML = `
                    <h2>${pokemon.name}</h2>
                    <p>ID: ${pokemon.id}</p>
                    <p>Peso: ${pokemon.weight}</p>
                `;
        
                // Mostrar la tarjeta en la pantalla
                const pokemonCard = document.getElementById('pokemon-card');
                pokemonCard.innerHTML = '';
                pokemonCard.appendChild(cardElement);
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
})


//Pokemon anterior

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        let currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId - 1);

        if (currentPokeId !== newId) {
            currentPokeId = newId;
            localStorage.setItem('currentPokeId', currentPokeId);
        }

        const pokemon = await fetchPokemon(currentPokeId);
        console.log(pokemon.name);

        // Crear una tarjeta para el Pokémon
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h2>${pokemon.name}</h2>
            <p>ID: ${pokemon.id}</p>
            <p>Peso: ${pokemon.weight}</p>
        `;

        // Mostrar la tarjeta en la pantalla
        const pokemonCard = document.getElementById('pokemon-card');
        pokemonCard.innerHTML = '';
        pokemonCard.appendChild(cardElement);
    })


    // SIGUIENTE pokemon
document.getElementById('next-btn')
    .addEventListener('click', async () => {
        let currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;

        currentPokeId = newId;
        localStorage.setItem('currentPokeId', currentPokeId);

        const pokemon = await fetchPokemon(currentPokeId);
        console.log(pokemon.name);

        // Crear una tarjeta para el Pokémon
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h2>${pokemon.name}</h2>           
            <p>ID: ${pokemon.id}</p>
            <p>Peso: ${pokemon.weight}</p>`;

        // Mostrar la tarjeta en la pantalla
        const pokemonCard = document.getElementById('pokemon-card');
        pokemonCard.innerHTML = '';
        pokemonCard.appendChild(cardElement);
    })

// POST 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))



/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
