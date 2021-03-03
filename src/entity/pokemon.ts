import {IApiPokemon, IPokemon, IPokemonSprite} from "../typings/general";

export class Pokemon implements IPokemon {
    abilities: { ability: { name: string } }[] | null;
    height: number;
    id: number;
    name: string;
    sprites: IPokemonSprite | null;
    types: { slot: number; type: { name: string; url: string } }[] | null;
    weight: number;

    constructor(data: IPokemon) {
        this.abilities = data.abilities;
        this.height = data.height;
        this.id = data.id;
        this.name = data.name;
        this.weight = data.weight;
        this.types = data.types;
        this.sprites = data.sprites;
    }
}