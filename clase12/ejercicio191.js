/*Crear un documento con el nombre ej191.js
Utilizando fetch intenta obtener los datos de la API https://pokeapi.co/api/v2/pokemon.
Utiliza Promises para manejar el resultado de fetch.
Parsea el JSON y muestra en pantalla los nombres de los primeros 20 Pokemones.
Mostrar los nombres con la primer letra en mayúscula (repaso de charAt, toUpperCase, substring).
Manejar tanto el caso de éxito como el de error al hacer el pedido de Pokemones.
En caso de Error mostrar el error en pantalla (Para probar pueden desconectar internet 
por un segundo al ejecutarlo). */
function mayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.substring(1);
}

fetch ("https://pokeapi.co/api/v2/pokemon")
    .then(response => {
        return response.json()
    })
    .then(data => {
        const pokemones = data.results;
        pokemones.forEach(pokemon => {
            console.log(`Pokemon: ${mayuscula(pokemon.name)}`);
            
        });
    }) 
    .catch (error => {
        console.log("error", error);
        
    })

