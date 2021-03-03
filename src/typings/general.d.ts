export interface IApiPokemon {
    abilities: null | {ability: { name: string }}[];
    height: number;
    weight: number;
    id: number;
    name: string;
    sprites: {
        back_default: string,
        back_female: string | null,
        back_shiny: string | null,
        back_shiny_female: string | null,
        front_default: string,
        front_female: string | null,
        front_shiny: string | null,
        front_shiny_female: string | null,
    };
    types: null | {slot: number, type: {name: string, url: string}}[];
}

export interface IPokemon {
    abilities: null | {ability: { name: string }}[];
    height: number;
    weight: number;
    id: number;
    name: string;
    sprites: null | IPokemonSprite;
    types: null | {slot: number, type: {name: string, url: string}}[];
}

export interface IPokemonSprite {
    [key: string]: string | null
}
