import { Pokemon } from "../models/pokemon.m"

export async function getPokemons(): Promise<Pokemon> { // Promesa que devuelve el modelo de Pokemon.n
    // Llamado a Api Rest
    // API FETCH La API Fetch proporciona una interfaz JavaScript par acceder y manipular partes del canal HTTP, tales como peticiones y respuestas
    const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json')

    const datos = await response.json()
    const pokemons = datos.results.map((pokemon:any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imggif: pokemon.sprites['animated'],
        imgnormal: pokemon.sprites['normal'],
        imglarge: pokemon.sprites['large'],
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        deffense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed
    }));

    return pokemons;
}