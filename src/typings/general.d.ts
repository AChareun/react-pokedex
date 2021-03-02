export interface IPokemon {
    abilities: null | {ability: { name: string }}[];
    height: number;
    weight: number;
    id: number;
    name: string;
    sprites: null | {
        back_default: string | null;
        back_female: string | null;
        back_shiny: string | null;
        back_shiny_female: string | null;
        front_default: string | null;
        front_female: string | null;
        front_shiny: string | null;
        front_shiny_female: string | null;
    };
    types: null | {slot: number, type: {name: string, url: string}}[];
}