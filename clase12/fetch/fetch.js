// URL con error (dice com en lugar de co)
const POKE_API_URL = "https://dragonball-api.com/api/characters";

async function getPokemon() {
    try {
        const response = await fetch(POKE_API_URL);
        const pokemon = await response.json();
        return pokemon;
    } catch (error) {
        console.log("ERROR");
        console.log(error);
    }
}
const personajes = getPokemon().then((personajes) => {
    console.log("personajes", personajes);
    
});

